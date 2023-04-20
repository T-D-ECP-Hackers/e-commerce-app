import React from "react";
import {NavigateFunction} from "react-router-dom";
import {goToHomePage} from "./navigation";

export function login(user: string, setContext: React.Dispatch<React.SetStateAction<string | null>>) {
    setContext(user);
    localStorage.setItem('user', user);
}

export function logout(setContext: React.Dispatch<React.SetStateAction<string | null>>, navigate: NavigateFunction) {
    setContext(null);
    localStorage.removeItem('user');
    goToHomePage(navigate);
}

export function getUser(setContext: React.Dispatch<React.SetStateAction<string | null>>) {
    let user = localStorage.getItem('user');
    setContext(user);
    return user
}