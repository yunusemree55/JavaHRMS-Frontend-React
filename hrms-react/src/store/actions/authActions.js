

export const LOGIN_TO_PAGE = "LOGIN_TO_PAGE";
export const LOGOUT_FROM_PAGE = "LOGOUT_FROM_PAGE";
export const IS_EMPLOYER = "IS_EMPLOYER"
export const UPDATE_ACTIVE_USER_PHOTO= "UPDATE_ACTIVE_USER_PHOTO"
export const UPDATE_ACTIVE_USER_CV = "UPDATE_ACTIVE_USER_CV"

export function loginToPage(user) {

    return {
        type:LOGIN_TO_PAGE,
        payload:user
    }
    
}

export function logoutFromPage(){

    return{
        type: LOGOUT_FROM_PAGE
    }
    
}

export function isEmployer(bool) {
    
    return{
        type: IS_EMPLOYER,
        payload:bool
    }
    
}

export function updateActiveUserPhoto(updatedPhoto) {

    return{
        type:UPDATE_ACTIVE_USER_PHOTO,
        payload:updatedPhoto
    }
    
}

export function updateActiveUserCv(cv) {

    return{
        type: UPDATE_ACTIVE_USER_CV,
        payload:cv
    }
    
}