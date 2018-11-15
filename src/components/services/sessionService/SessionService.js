export default class SessionService {
  getItem(key) {
    return JSON.parse(sessionStorage.getItem(key))
  };

  setItem(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}