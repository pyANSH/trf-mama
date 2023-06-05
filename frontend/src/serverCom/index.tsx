import { apiPath } from '../config/remoteConfig';
import axios from 'axios';
let jwt: any;

export const initAPI = ({ token }: any) => {
  if (token) {
    jwt = token;
  }
};

export const commonAPI = async ({
  isNoAuth,
  path,
  method,
  params,
  query,
  body,
  cancelToken,
  signal,
  isServer,
}: any) => {
  try {
    const options: any = {
      method,
      cancelToken,
      signal,
      headers: {
        'content-type': 'application/json',
        'X-API-KEY': '1234567890123456',
      },
      url: `${apiPath}${path}`,
      params: { ...query },
      data: body,
    };

    console.log(options);

    if (jwt) {
      options.headers.token = jwt;
    }

    const data = await axios(options);
    if (!isServer) {
      console.log({ options, path, data });
    }
    return data;
  } catch (error: any) {
    console.log('commonApi error', error.response?.data?.message);
    console.log({
      error,
      data: { isNoAuth, path, method, params, query, body, apiPath },
    });

    throw error;
  }
};
