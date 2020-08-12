
// const NONBODY_METHODS = ['GET', 'DELETE'];

// const request = (path, method, body) => {
//   return fetch(`${process.env.API_URL}${path}`, {
//     method, 
//     headers: NONBODY_METHODS.includes(method) ? {} : { 'Content-Type': 'application/json' },
//     credentials: 'include',
//     body: NONBODY_METHODS.includes(method) ? null : JSON.stringify(body)
//   })
//     .then(res => Promise.all([res.ok, res.json()]))
//     .then(([ok, json]) => {
//       if(!ok) throw json;
//       return json;
//     });
// };

// export const post = (email, password, userImage) => {
//   return fetch(`${process.env.API_URL}/api/v1/auth/signup`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     credentials: 'include',
//     body: JSON.stringify({ email, password, userImage })
//   })
//     .then(res => res.json());
// };

// export const post = (path, body) => {
//   return fetch(`${process.env.API_URL}${path}`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     credentials: 'include',
//     body:  JSON.stringify(body)
//   });
// };
// export const get = path => request(path, 'GET');
// export const patch = (path, body) => request(path, 'PATCH', body);
// export const del = path => request(path, 'DELETE');
