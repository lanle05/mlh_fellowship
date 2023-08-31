import axios, { HeadersDefaults, AxiosInstance } from 'axios'
import CookieManager from '../../utils/cookieManager';

const instance = axios.create({
 
  baseURL: 'https://api.flymatesolution.com/',
 
});

export function getJWT() {
  if (typeof window !== 'undefined') {
    let token = CookieManager.getCookie('jwt')
    if (token?.charAt(0) === '"' && token?.charAt(token?.length - 1) === '"') {
      token = token?.substring(1, token?.length - 2);
    }
    // token?.replace(/^"(.*)"$/, '$1');
    // console.log(token?.split('"'))
    return 'Bearer ' + token;
  }
  return '';
}


class HTTPClient {
  static async get(endpoint: string) {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Content-Type': 'application/json',
      'Authorization': getJWT(),
    };

    const response = await instance.get(endpoint, { headers });
    return response;
  }

  static async post(endpoint: string, data: any) {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Content-Type': 'application/json',
      'Authorization': getJWT(),
    };

    const response = await instance.post(endpoint, data, { headers });
    return response;
  }

  static async delete(endpoint: string) {
    const response = await instance.delete(endpoint);
    return response;
  }

  static async put(endpoint: string, data: any) {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Content-Type': 'application/json',
      'Authorization': getJWT(),
    };

    const response = await instance.put(endpoint, data, { headers });
    return response;
  }

  static async patch(endpoint: string) {
    const response = await instance.patch(endpoint);
    return response;
  }
}
export default HTTPClient;