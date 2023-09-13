
export const GET_ALL_JOB_ADVERTISEMENTS = "GET_ALL_JOB_ADVERTISEMENTS"
export const FILTER_JOB_ADVERTISEMENT_BY_COMPANY_NAME = "FILTER_JOB_ADVERTISEMENT_BY_COMPANY_NAME"
export const SET_JOB_ADVERTISEMENT_LIST = "SET_JOB_ADVERTISEMENT_LIST"

export function getAllJobAdvertisements() {

    return{
        type:GET_ALL_JOB_ADVERTISEMENTS
    }
    
}

export function setJobAdvertisementList(jobAdvertisements) {

    return{
        type: SET_JOB_ADVERTISEMENT_LIST,
        payload:jobAdvertisements
    }
    
}

export function filterJobAdvertisementByCompanyName(filterJobAdvertisements) {

    return{
        type:FILTER_JOB_ADVERTISEMENT_BY_COMPANY_NAME,
        payload: filterJobAdvertisements
    }
    
}