import { useAccordionButton } from "react-bootstrap";
import { useCurrentToggleStore } from "../../../utils/store";

interface SectionProps {
    sectionName: string;
    children: React.ReactNode | React.ReactNode[];
}

export default function SidebarSection(props: SectionProps) {
    return (
        <div 
            className="border-bottom"
        >
            <div className="p-2">
                <p className="mb-0 ms-2 text-text-gray-2 fw-bold fs-6">{props.sectionName}</p>
            </div>
            <div className="p-2">
                {props.children}
            </div>
        </div>
    )
}

export function CollapseSidebarSection(props: SectionProps) {
    const { currentToggle, setCurrentToggle, expandBig, expandSmall } = useCurrentToggleStore();
    const disabled = useAccordionButton("-2");


    return (
        <div 
            className="border-bottom"
            onMouseEnter={(e) => {
                expandBig();
            }}

            onMouseLeave={(e) => {
                disabled(e);
                expandSmall();
            }}
        
        >
            <div className="p-2">
                <p className="mb-0 ms-2 text-text-gray-2 fw-bold fs-6">{props.sectionName}</p>
            </div>
            <div className="p-2">
                {props.children}
            </div>
        </div>
    )
}