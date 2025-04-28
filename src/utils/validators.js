import { isValidUsername } from "6pp";

export const usernameValidator = (username) => {
    if (!isValidUsername(username)) 
    return {isValid: false, errorMessage: "Username is valid"};
    else
    return {isValid: true, errorMessage: ""};
};