

export const fetchSignup = (email, password, userImage) => {
  return fetch(`${process.env.API_URL}/api/v1/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ email, password, userImage })
  })
    .then(res => res.json());
};

export const fetchLogin = (email, password) => {
  return fetch(`${process.env.API_URL}/api/v1/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json());
};
