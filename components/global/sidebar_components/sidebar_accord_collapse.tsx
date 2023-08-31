import { Accordion } from "react-bootstrap";
import { ItemProps } from "../../../utils/store";
import SidebarAccordLink from "./sidebar_accord_drop_link";

interface CollapseProps{
    eventKey:string;
    routes_paths: ItemProps[]
}

export default function SidebarCollaspeWrap(props:CollapseProps){
    return(
        <Accordion.Collapse  eventKey={props.eventKey}>
            <div className="bg-light-purple-5 p-2 text-center rounded-bottom d-flex justify-content-start flex-column">
                {props.routes_paths.map((path,index) =>(
                    <SidebarAccordLink key={index} linkName={path.itemName} linkPath={path.itemPath} />
                ))}
            </div>
        </Accordion.Collapse>
    )
}