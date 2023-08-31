import { clangroupTypes } from "./clangroup.types";

export const initialState = {
  groupInfo: [],
  clanGroupTabId:0,
  allgroups:[],
  message:"",
  error: false
}

export const clanGroupReducer = (state=initialState,action:any) => {
  switch (action.type) {
    case clangroupTypes.CREATE_NEW_GROUP:
      return {
        ...state,
        error:false,
        message:action.payload
      }
    case clangroupTypes.FETCH_ALL_GROUPS:
      return {
        ...state,
        allgroups:action.payload,
      }
    case clangroupTypes.FETCH_GROUP_BY_ID:
      return {
        ...state,
        groupInfo:action.payload
      }
    case clangroupTypes.NEW_GROUP_ERROR:
      return {
        ...state,
        error: true,
        message:action.payload
      }
    case clangroupTypes.CHANGE_CLAN_TAB_ID:
      return {
        ...state,
        clanGroupTabId:action.payload
      }
    default:
      return state;
  }
}


