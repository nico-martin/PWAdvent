let auth: string = '';

export type RequestResponse = any;

export const setAuth = (token: string) => {
  auth = token;
};

const doFetch = (
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  headers: HeadersInit = {},
  body: string = ''
): Promise<RequestResponse> =>
  new Promise((resolve, reject) => {
    if (auth !== '' && !('Authorization' in headers)) {
      headers = {
        ...headers,
        Authorization: `Bearer ${auth}`,
      };
    }
    let success = true;
    fetch(url, {
      method,
      headers,
      ...(method !== 'GET' ? { body } : {}),
    })
      .then(res => {
        success = res.status < 300;
        return res.json();
      })
      .then(data => (success ? resolve(data) : reject(data)))
      .catch(e => reject(e));
  });

export const request = {
  get: (url: string) => doFetch(url),
  post: (url: string, data: Object = {}) =>
    doFetch(
      url,
      'POST',
      {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      JSON.stringify(data)
    ),
  put: (url: string, data: Object = {}) =>
    doFetch(
      url,
      'PUT',
      {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      JSON.stringify(data)
    ),
  delete: (url: string, data: Object = {}) =>
    doFetch(
      url,
      'DELETE',
      {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      JSON.stringify(data)
    ),
};
