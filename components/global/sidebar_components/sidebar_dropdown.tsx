import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ItemProps, useSidebarStore } from "../../../utils/store";

interface LinkProps {
    icon: JSX.Element | string;
    dropdownName: string;
    urlSectionName: string;
    subItems: ItemProps[];
    path: string;
}

export default function SidebarDropdown(props: LinkProps){
    const  {setActiveSidear,showSub,setSubItems,activeSidebar,toggleSub} = useSidebarStore()
    return(
        <button 
            onClick={() => {
                if(props.urlSectionName === activeSidebar){
                    toggleSub();
                }else{
                    showSub();
                }
                setSubItems(props.subItems);
                setActiveSidear(props.urlSectionName);
            }} 
            className={props.urlSectionName === activeSidebar?
            "greenn rounded-1 d-flex justify-content-start align-items-center p-2 sidebar-link mb-2 btn w-100" :
            "d-flex justify-content-start align-items-center sidebarLink mb-2 p-2 btn w-100"}>
            <div className="ms-2">
                {props.icon}
            </div>
            <div className="ms-2 ">
                <p className="mb-0 text-decoration-none ">{props.dropdownName}</p>
            </div>
            {
                props.urlSectionName === activeSidebar ?
                    <div className="ms-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white bi bi-caret-right" viewBox="0 0 16 16">
                            <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                        </svg>
                    </div> : null
            }

        </button>
    )
}