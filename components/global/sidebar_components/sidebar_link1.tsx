import { useRouter } from "next/router";
import { useCurrentToggleStore } from "../../../utils/store";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

interface LinkProps {
  path: string;
  icon: JSX.Element | string;
  icon2: JSX.Element | string;
  activeName: string;
  linkName: string;
}
export default function SidebarLink(props: LinkProps) {
  const router = useRouter();
  const { currentToggle, setCurrentToggle } = useCurrentToggleStore();
  const decoratedOnClick = useAccordionButton("-1");

  return (
    <button
      onClick={(e) => {
        router.push(props.path);
        decoratedOnClick(e);
        setCurrentToggle(props.activeName);
        console.log(router.pathname.split("/")[2]);
      }}
      className={
        currentToggle === props.activeName
          ? "bg-light-purple d-flex justify-content-start align-items-center p-2 active-sidelink1 mb-2 btn w-100"
          : "d-flex justify-content-start align-items-center  sidebarLink1 mb-2 p-2 btn w-100"
      }
    >
      <div className="ms-2 ">
        {currentToggle === props.activeName ? props.icon : props.icon2}
      </div>
      <div className="ms-2 ">
        <p className="mb-0 text-decoration-none  " style={{ fontSize: "14px" }}>
          {props.linkName}
        </p>
      </div>
    </button>
  );
}
