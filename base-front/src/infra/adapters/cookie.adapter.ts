import Cookies from 'universal-cookie';
import CookieAdapterInterface from "@sandbox/services/abstractions/cookie.adapter.interface";

const cookies = new Cookies(null, { path: '/' });

export default function cookieAdapter(): CookieAdapterInterface {
  return {
    get(name) {
      return cookies.get(name);
    },
    remove(name) {
      cookies.remove(name);
    },
    set(name, value) {
      cookies.set(name, JSON.stringify(value));
    },
  };
}