import { useRouter } from "next/router";
import { useCurrentToggleStore } from "../../../../utils/store";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';


interface LinkProps {
    path: string;
    icon: JSX.Element | string;
    activeName: string
    buttonName: string
}




export default function CollpasedButtonLink(props: LinkProps) {
    const router = useRouter()
    const { currentToggle, setCurrentToggle, expandedCollapse } = useCurrentToggleStore()
    const decoratedOnClick = useAccordionButton("-1");
    const disabled = useAccordionButton("hidded");

    return (
        <div
            className=""

        >
            <button onClick={(e) => {
                router.push(props.path);
                decoratedOnClick(e)
                setCurrentToggle(props.activeName)
            }} className={currentToggle === props.activeName ?
                "sidebar-link rounded-1 d-flex justify-content-start align-items-center p-2 greenn  mb-2 btn w-100" :
                "d-flex justify-content-start align-items-center sidebarLink mb-2 p-2 btn w-100"}>
                <div className="ms-2">
                    {props.icon}
                </div>
                {expandedCollapse ? <div className="ms-2 " style={{transition: "ease-in-out 0.1s"}}>
                    <p className="mb-0 text-decoration-none ">{props.buttonName}</p>
                </div> : null}
            </button>
        </div>

    );
}