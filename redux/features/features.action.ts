import { featureTypes } from "./features.types"

export interface sidebarActionProps {
    type: string,
    payload:boolean
}


export const setSidebarAction = (payload:boolean):sidebarActionProps =>  {
    return {
        type: featureTypes.SET_ACTIVE_SIDEBAR,
        payload
    }
}

export const setUserSideMenuAction = (payload:boolean):sidebarActionProps =>  {
    return {
        type: featureTypes.SET_ACTIVE_USER_SIDEMENU,
        payload
    }
}

export const setScreenSizeAction = (payload:number) => {
    return {
        type: featureTypes.SET_SCREEN_SIZE,
        payload
    }
}

export const toggleEditModalAction = (payload:boolean) => async(dispatch:any) => {
    dispatch({
        type: featureTypes.OPEN_EDIT_MODAL,
        payload
    })
}   