import {
  FILTER_JOB_ADVERTISEMENT_BY_COMPANY_NAME,
  GET_ALL_JOB_ADVERTISEMENTS,
  SET_JOB_ADVERTISEMENT_LIST,
} from "../actions/jobAdvertisementActions";

const initialState = {
  jobAdvertisementList: [],
};

export default function jobAdvertisementReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_ALL_JOB_ADVERTISEMENTS:
      return {
        ...state,
      };

    case SET_JOB_ADVERTISEMENT_LIST:
      return {
        ...state,
        jobAdvertisementList: payload,
      };

    case FILTER_JOB_ADVERTISEMENT_BY_COMPANY_NAME:
      return {
        ...state,
        jobAdvertisementList: payload,
      };

    default:
      return state;
  }
}
