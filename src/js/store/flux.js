import { Redirect } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			home: [],
			details: [],
			baseURL: "https://www.swapi.tech/api/",
			newURL: "https://3000-crimson-beetle-z9whtpmv.ws-us03.gitpod.io",
			favorites: [],
			login: false,
			username: "test",
			register: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				//fetch("https://www.swapi.tech/api/")
				//.then()
				//.then(data => setStore({ foo: data.bar }));

				fetch("https://www.swapi.tech/api/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log("respuesta", resp.json());
						return resp.json();
					})
					.then(data => {
						setStore({ home: Object.entries(data.result) });
						//console.log(store.home);
					})

					.catch(err => {
						console.log("error", err);
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getAllData: value => {
				const store = getStore();
				fetch(`${store.newURL}/${value}`, {
					method: "GET",

					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log("respuesta", resp.json());
						return resp.json();
					})
					.then(data => {
						setStore({ [value]: data });
						//console.log(store.home);
						//console.log(data);
					})

					.catch(err => {
						console.log("error", err);
					});
			},
			getAllDetails: (value, id) => {
				const store = getStore();
				fetch(`${store.baseURL}${value}/${id}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log("respuesta", resp.json());
						return resp.json();
					})
					.then(data => {
						setStore({ details: data.results || data.result });
						//	console.log("dataresult ", Object.keys(details));
					})

					.catch(err => {
						console.log("error", err);
					});
			},

			addFavorite: name => {
				const store = getStore();
				// store.favorites.includes(name)
				// 	? setStore({ favorites: store.favorites })
				// 	: setStore({ favorites: store.favorites.concat(name) });
				// console.log("Entre a agregar a Favoritos", store);

				let token = localStorage.getItem("token");
				let data = { username: store.username, value: name };
				fetch(`${store.newURL}/favorites/`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer	${token}`
					},
					body: JSON.stringify(data)
				}).then(resp => {
					//console.log("respuesta", resp.json());
					fetch(`${store.newURL}/favorites/`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer	${token}`
						}
					})
						.then(resp => {
							//console.log("respuesta", resp.json());
							return resp.json();
						})
						.then(data => {
							setStore({ favorites: data });
							console.log("dataresult", store);
						})

						.catch(err => {
							console.log("error", err);
						});
					return resp.json();
				});
			},

			deleteFavorites: index => {
				const store = getStore();
				console.log(store, "Mi store papa");
				const deleteId = store.favorites[index].id;
				let token = localStorage.getItem("token");
				store.favorites.splice(index, 1);
				setStore({ favorites: store.favorites });
				fetch(`${store.newURL}/favorites/${deleteId}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer	${token}`
					}
				}).then(resp => {
					//console.log("respuesta", resp.json());
					return resp.json();
				});
			},

			getToken: () => {
				let store = getStore();
				let token = localStorage.getItem("token");

				if (token && token.length > 0) {
					setStore({ login: true });
				} else {
					setStore({ login: false });
				}
			},
			deleteToken: () => {
				let store = getStore();
				setStore({ login: false });
				localStorage.removeItem("token");
				window.location.reload();
			},
			getFavorites: () => {
				console.log("entre a los favorites");
				const store = getStore();
				let token = localStorage.getItem("token");
				fetch(`${store.newURL}/favorites/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer	${token}`
					}
				})
					.then(resp => {
						//console.log("respuesta", resp.json());
						return resp.json();
					})
					.then(data => {
						setStore({ favorites: data });
						console.log("dataresult", store);
					})

					.catch(err => {
						console.log("error", err);
					});
			},
			loginValidation: (user, password) => {
				const store = getStore();

				fetch(`${store.newURL}/login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: user,
						password: password
					})
				})
					.then(resp => {
						//console.log("respuesta", resp.json());
						return resp.json();
					})
					.then(data => {
						//setStore({ token: data.results || data.result });

						localStorage.setItem("token", data.access_token);
						setStore({ username: user });
						console.log(user);
						window.location.reload();
					})

					.catch(err => {
						console.log("error", err);
					});
			},
			registerValidation: (firstname, lastname, email, username, password) => {
				const store = getStore();

				fetch(`${store.newURL}/register`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						firstname: firstname,
						lastname: lastname,
						email: email,
						username: username,
						password: password
					})
				})
					.then(resp => {
						//console.log("respuesta", resp.json());
						return resp.json();
					})
					.then(data => {
						//setStore({ token: data.results || data.result });

						setStore({ register: true });
					})

					.catch(err => {
						console.log("error", err);
					});
			}
		}
	};
};

export default getState;
