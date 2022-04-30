import { makeAutoObservable, runInAction } from "mobx";
import AuthViewModel from "../Models/AuthViewModel";
import { useAuth0 } from "@auth0/auth0-react";
import { authentication } from './AuthenticationStore';

class Auth {
  auth : AuthViewModel = new AuthViewModel("", "", "", "");
  constructor() {
    makeAutoObservable(this);
  }

  get Auth() {
    return this.auth;
  }

  getJWT() {
    return this.Auth.rawJWT;
  }

  getRole() {
    return this.Auth.role;
  }

  getPin() {
    return this.Auth.pin;
  }

  isLoggedIn() {
    if (this.Auth.email === "") {
      return false;
    } else {
      return true;
    }
  }

  setAuth(token: AuthViewModel) {
    runInAction(() => {
      this.auth = token;
    });
  }
}

export const authToken = new Auth();
