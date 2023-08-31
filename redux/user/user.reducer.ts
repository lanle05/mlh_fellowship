import CookieManager from "../../utils/cookieManager";
import JWTDecoder from "../../utils/jwtDecoder";
import { userTypes } from "./user.types";

export interface StateProp {
    userInfo:any,
    accessToken:any,
    errorMessage:string,
    success:boolean
}


const initialState:StateProp = {
    userInfo : {
        activation_code: "",
        activation_status: "",
        address: "",
        allow_sms: "",
        avater: "",
        background: "",
        category: "",
        city: "",
        country: "",
        created_date:'',
        description: "",
        dob:"" ,
        dribble: "",
        email: "freddyman@gmail.com",
        exp: "",
        facebook:"",
        first_name: "",
        gender: "",
        last_name: "",
        local_gov_id: "",
        middle_name: "",
        phone: "",
        referral_code: "",
        rss: "",
        school_id: "",
        school_name: "",
        shortdescription: "",
        spotify: "",
        state_id: "",
        teacher_status: "",
        town: "",
        twitter: "",
        user_discipline_id: "",
        user_id: "",
        user_sch_level_id: ""
    },
    accessToken:CookieManager.getCookie("Jwttoken")? CookieManager.getCookie("Jwttoken"): "",
    errorMessage:'',
    success:false
}

// const cookieGetter = CookieManager.getCookie("Jwttoken");
//accessToken:localStorage.getItem("Jwttoken") ? localStorage.getItem("Jwttoken") :"",
// if(cookieGetter) {
//     initialState = 
// }

export const userReducer = (state=initialState, action:any) => {
    switch(action.type) {
        case userTypes.FETCH_USER_ERROR:
            return {
                ...state,
                success:false,
                errorMessage: action.payload
            }
        case userTypes.SET_USER_SUCCESS:
            return {
                ...state,
                success:action.payload,
                errorMessage:''
            }
        case userTypes.SET_USER_DATA:
            return {
                ...state,
                userInfo: action.payload,
                success: true,
                errorMessage:''
            }
        case userTypes.SET_ACCESS_TOKEN:
            CookieManager.setCookie("Jwttoken", action.payload.accessToken, 4);
            return {
                ...state,
                userInfo: action.payload.userInfo,
                accessToken:action.payload.accessToken,
                success:true,
            }
        default: 
        return state;
    }
    
}

