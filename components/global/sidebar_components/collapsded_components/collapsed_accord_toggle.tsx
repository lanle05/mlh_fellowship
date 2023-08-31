
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { useRouter } from "next/router";
import { useCurrentToggleStore } from "../../../../utils/store";
import { ItemProps } from "../../../../utils/store";
import WrappedCollapsedSidebar from './wrapped_collapsed_accord';

interface ToggleProps {
    routes: ItemProps[];
    children?: JSX.Element;
    eventKey: string;
    buttonName: string;
    className?: string;
    icon?: JSX.Element | string;
}

export default function CollapsedAccordToggle(props: ToggleProps) {
    const router = useRouter();
    const { currentToggle, setCurrentToggle, expandedCollapse, expandBig, expandSmall } = useCurrentToggleStore()
    const decoratedOnClick = useAccordionButton(props.eventKey)
    const disabled = useAccordionButton("hidded");


    return (
        <div
            className="mb-2"

           >
                <button

                    onClick={(e) => {
                        decoratedOnClick(e);
                        setCurrentToggle(props.buttonName)
                    }
                    } 
                    className={currentToggle === props.buttonName ?
                        "rounded-1 d-flex justify-content-start align-items-center p-2 greenn sidebar-link btn w-100" :
                        "d-flex justify-content-start align-items-center sidebarLink mb-2 p-2 btn w-100"}>
                    <div className="ms-2">
                        {props.icon}
                    </div>
                    {expandedCollapse ? <div className="ms-2 " style={{whiteSpace: "nowrap"}}>
                        <p className="mb-0 text-decoration-none ">{props.buttonName}</p>
                    </div> : null}
                </button>
                <WrappedCollapsedSidebar eventKey={props.eventKey} routes_paths={props.routes} />
        </div>

    );
}