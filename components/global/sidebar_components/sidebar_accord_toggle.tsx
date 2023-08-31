
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { useRouter } from "next/router";
import { useSidebarStore } from "../../../utils/store";
import { useCurrentToggleStore } from "../../../utils/store";
import { useState } from 'react';


interface ToggleProps {
    children?: JSX.Element;
    eventKey: string;
    buttonName: string;
    className?: string;
    icon?: JSX.Element | string;
}

export default function SidebarAccordToggle(props: ToggleProps) {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);
    const  {currentToggle,setCurrentToggle} = useCurrentToggleStore()
    const decoratedOnClick = useAccordionButton(props.eventKey)


    return (
        // <button
        //     type="button"
        //     onClick={decoratedOnClick}
        // >
        //     {children}
        // </button>

        <button
            onClick={(e) => {
                decoratedOnClick(e);
                setCurrentToggle(props.buttonName)
                setIsActive(!isActive);
            }
            } className={currentToggle === props.buttonName ?
                "greenn rounded-1 d-flex justify-content-start sidebar-link align-items-center p-2 btn w-100" :
                "d-flex justify-content-start align-items-center sidebarLink mb-2 p-2 btn w-100"}>
            <div className="ms-2">
                {props.icon}
            </div>
            <div className="ms-2 ">
                <p className="mb-0 text-decoration-none ">{props.buttonName}</p>
            </div>
        </button>
    );
}