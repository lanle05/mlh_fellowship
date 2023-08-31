import authFetch from "../../pages/api/custom"
import JWTDecoder from "../../utils/jwtDecoder";
import { createtheuser, loginUser, updateprofiledata } from "../../utils/url"
import { featureTypes } from "../features/features.types";
import { userTypes } from "./user.types";

export const createUserAction =  (payload:any) => async(dispatch:any) => {
    try {
        const {data} = await authFetch.post(
            createtheuser,
            JSON.stringify({email:payload.email, password:payload.password,category:payload.category})
        );

        if(!data.response) {
            console.log(data)
            dispatch({
                type:userTypes.FETCH_USER_ERROR,
                payload: data.message
            })
        }else{
            payload.route.push("/sign-in");
            console.log(data);
        }
            
    } catch (err) {
        dispatch({
            type:userTypes.FETCH_USER_ERROR,
            payload: 'error: try registering again'
        })
    }
}

export const setAccessTokenAction = (payload:any) => async(dispatch:any) => {
    try {
        const {data} = await authFetch.post(
            loginUser
            ,JSON.stringify({ EMAIL_ADDRESS: payload.EMAIL_ADDRESS, password:payload.password}));
        if(!data.response) {
            console.log(data);
            dispatch({
                type:userTypes.FETCH_USER_ERROR,
                payload: data.message
            });
            
        }else{
            console.log(data.response.Jwttoken);
            const cookieDecoder = JWTDecoder.decode(data.response.Jwttoken as string);
            const getUserCat = cookieDecoder.user.category;
            payload.router.push(`/${getUserCat}/dashboard`);
            dispatch({
                type:userTypes.SET_ACCESS_TOKEN,
                payload: {
                    userInfo: cookieDecoder.user,
                    accessToken: data.response.Jwttoken
                }
            });
            
        }
    }catch(err) {
        dispatch({
            type:userTypes.FETCH_USER_ERROR,
            payload: 'error: try to login again'
        })
    }      
}


export const setUserDataAction = (payload:any) => async(dispatch:any) => {
    console.dir(payload);
    const cookieDecoder = JWTDecoder.decode(payload as string);
    console.log(cookieDecoder.user);
    dispatch({
        type:userTypes.SET_USER_DATA,
        payload:cookieDecoder.user
    });   
}

export const updateBioData = (payload:any) => async(dispatch:any,getState:any) => {
    const id = getState().user.userInfo.user_id;
    try{
        const response = await authFetch.put(
            `${updateprofiledata}/${id}`,
            JSON.stringify(payload)         
        );
        dispatch({
            type: featureTypes.OPEN_EDIT_MODAL,
            payload:true
        })
    }catch(err) {
        dispatch({
            type:userTypes.FETCH_USER_ERROR,
            payload: 'ERROR: try again'
        })
    }
}

