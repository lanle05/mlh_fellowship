import authFetch from "../../pages/api/custom"
import { createnewgroup, getallgroups, getgroupbyid } from "../../utils/url"
import { clangroupTypes } from "./clangroup.types";
import { toast } from "react-toastify";
import CookieManager from "../../utils/cookieManager";

export const createNewGroupAction = (payload:any) => async(dispatch:any,getState:any) => {
  const id = getState().user.userInfo.user_id;      
    try {
      await authFetch.post(
        createnewgroup,
        JSON.stringify({
          client_group: {
            ...payload,
            user_id:id
          }
        })
      ); 

      dispatch({
        type:clangroupTypes.CREATE_NEW_GROUP,
        payload: 'created group successfully'
      });
      
      toast.success("created group successfully");
    } catch(err) {
      dispatch({
        type:clangroupTypes.NEW_GROUP_ERROR,
        payload: 'Error in creating new group'
      });
    toast.error('Error in creating new group')
    }
}

export const getAllGroupAction = () => async(dispatch:any,getState:any) => {
 
  try {
    let id = getState().user.userInfo.user_id; 
    console.log(id);   
    const {data} = await authFetch.get(
      `${getallgroups}/${id}`
    );
    

    if(data.response.length > 0) {
      dispatch({
        type:clangroupTypes.FETCH_ALL_GROUPS,
        payload:data.response
      });
    }else {
      dispatch({
        type:clangroupTypes.FETCH_ALL_GROUPS_ERROR,
        payload: 'no data found'
      });
    }
  } catch(err) {
    dispatch({
      type:clangroupTypes.FETCH_ALL_GROUPS_ERROR,
      payload:'Error in fetching data',
    });
  }
}


export const changeClanTabId = (payload:any) => async(dispatch:any,getState:any) => {
  dispatch({
    type:clangroupTypes.CHANGE_CLAN_TAB_ID,
    payload
  })
}

export const getGroupByIdAction = () => async(dispatch:any,getState:any) => {
    const groupId = CookieManager.getCookie("groupId");
  try {
    const {data} = await authFetch.get(`${getgroupbyid}/${groupId}`);
    if(data.response.length > 0) {
      dispatch({
        type:clangroupTypes.FETCH_GROUP_BY_ID,
        payload:data.response
      });
    } else {
      dispatch({
        type:clangroupTypes.FETCH_ALL_GROUPS_ERROR,
        payload: 'no data found'
      });
      toast.error('No data found');
    }
  } catch(err) {
      dispatch({
        type:clangroupTypes.FETCH_ALL_GROUPS_ERROR,
        payload:"ERROR in fetching data"
      });
      toast.error("ERROR in fetching data");
  }
}