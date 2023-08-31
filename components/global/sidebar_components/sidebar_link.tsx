import { useRouter } from "next/router";
import { useCurrentToggleStore } from "../../../utils/store";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';


interface LinkProps {
    path: string;
    icon: JSX.Element | string;
    icon2: JSX.Element | string;
    activeName: string
    linkName: string;
}
export default function SidebarLink(props: LinkProps) {
    const router = useRouter()
    const  {currentToggle,setCurrentToggle} = useCurrentToggleStore()
    const decoratedOnClick = useAccordionButton("-1");

    return (
        <button onClick={(e) => {
            router.push(props.path);
            decoratedOnClick(e)
            setCurrentToggle(props.activeName)
        }} className={currentToggle === props.activeName ?
            "bg-light-purple d-flex justify-content-start align-items-center p-2 active-sidelink mb-2 btn w-100" :
            "d-flex justify-content-start align-items-center  sidebarLink mb-2 p-2 btn w-100"}>
            <div className="ms-2 ">
            {currentToggle === props.activeName ?props.icon2: props.icon}
            </div>
            <div className="ms-2 ">
                <p className="mb-0 text-decoration-none  " style={{fontSize: '16px'}}>{props.linkName}</p>
            </div>
        </button>
    );
}