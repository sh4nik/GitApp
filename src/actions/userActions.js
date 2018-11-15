export const GET_USER = 'my-awesome-app/repos/USER';
export const GET_USER_SUCCESS = 'my-awesome-app/repos/USER_SUCCESS';
export const GET_USER_FAIL = 'my-awesome-app/repos/USER_FAIL';

export function getUser(user) {
    return {
        type: GET_USER,
        payload: {
            request: {
                url: `/users/${user}`
            }
        }
    };
}
