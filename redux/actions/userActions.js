import axios from "axios";
import {AsyncStorage} from 'react-native';

import {userConstants} from '../constants';

import store from '../store';
import { ENDPOINT, ONESIGNAL_APP_ID } from 'react-native-dotenv';
import authHead from "../helpers/authHead";
import Snackbar from 'react-native-snackbar';

export const userActions = {
    login,
    logout,
    getPets,
    getPetsPhotos,
    getOwner,
    loginSocial,
    setDevices
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        axios.post(ENDPOINT+'/user/token', {username,password})
        .then((result)=>{
            dispatch(success(result.data));
        }).catch(err=>{
            console.log(err);
            Snackbar.show({
                text: 'Login Error:' +err,
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
              });
            dispatch(failure(err));
        });

    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) {
        //iosAPNConfig(user._id,user.token)
         return { type: userConstants.LOGIN_SUCCESS, user } 
        }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function loginSocial(user) {
    return dispatch => {
        dispatch({ type: userConstants.SOCIAL_LOGIN_SUCCESS, user });
    };
}

function logout() {
    return dispatch => {
        AsyncStorage.removeItem('user')
        dispatch({ type: userConstants.LOGOUT  });
    };
}


const getAsyncStorage = () => {
    return (dispatch) => {
    AsyncStorage.getItem('user')
      .then((result) => {
          if(result){
            dispatch(initialize(JSON.parse(result),true,[]))
          } else {
            dispatch(initialize(undefined,false,[]))
          }
        });
    };
    function initialize(user,loggedIn, pets) { return { type: userConstants.setInit, user, loggedIn, pets } }
  };

function getPets(data) {
    const {user,owner} = data
    const id = owner? owner._id:user._id 

    return (dispatch,getState) => {
        if (user) {
            dispatch(userrequest());
        } else {
            dispatch(ownerrequest());
        }
        axios.get(ENDPOINT+'/pet/ownedby/'+id, 
        authHead(getState))
        .then((result)=>{
            if (user) {
                dispatch(usersuccess(result.data));
            } else {
                dispatch(ownersuccess(result.data));
            }
        }).catch(err=>{
            if (user) {
                dispatch(userfailure(err));
            } else {
                dispatch(ownerfailure(err));
            }
        });
    };
    function userrequest() { return { type: userConstants.USER_PETS_REQUEST } }
    function usersuccess(pets) { return { type: userConstants.USER_PETS_SUCCESS, pets } }
    function userfailure(error) { return { type: userConstants.USER_PETS_FAILURE, error } }

    function ownerrequest() { return { type: userConstants.OWNER_PETS_REQUEST } }
    function ownersuccess(pets) { return { type: userConstants.OWNER_PETS_SUCCESS, pets } }
    function ownerfailure(error) { return { type: userConstants.OWNERPETS_FAILURE, error } }
}


store.dispatch(getAsyncStorage());
