import userActions from '../constants/user';

/**
 * Adds two numbers together.
 * @param {array} data The first number.
 * @return {any} dispatch The sum of the two numbers.
 */
export function loginAccount(data) {
    return {
        type: userActions.LOGIN_USER,
        data: data,}
   
}