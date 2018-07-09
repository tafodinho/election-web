import { Component } from 'react';
import { connect } from 'react-redux';
import Store from "../../store";

const store = Store.getState().LoginReducer;

export const isAdmin = () => {
        console.log("AUTH", store);
        return store.isAuthenticated
}

export const getUserId = () => {
        return store.user.id
}
