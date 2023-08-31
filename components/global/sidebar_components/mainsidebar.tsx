import Image from "next/image";
import { useAccordionButton } from "react-bootstrap";
import logo from "../../../public/images/logo/logoWhite.svg";
import mainpic from "../../../public/images/logout-avatar.svg";
import CookieManager from "../../../utils/cookieManager";
import { useCurrentToggleStore, useSidebarStore } from "../../../utils/store";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
interface MainProps {
  children: React.ReactNode | React.ReactNode[];
  logoOnly?: boolean;
}

export default function MainSidebar(props: MainProps) {
  const router = useRouter();
  const { showSub, hideSub } = useSidebarStore();
  const { expandedCollapse } = useCurrentToggleStore();
  const { currentToggle, setCurrentToggle, expandBig, expandSmall } =
    useCurrentToggleStore();
  const disabled = useAccordionButton("-2");
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [displayName, setDisplayName] = useState<string>();

  useEffect(() => {
    const myfirstName = localStorage.getItem("firstName");
    if (myfirstName !== null && myfirstName !== undefined) {
      setFirstName(myfirstName);
    }

    const mylastName = localStorage.getItem("lastName");
    if (mylastName !== null && mylastName !== undefined) {
      setLastName(mylastName);
    }
  }, []);

  return (
    <>
      {props.logoOnly === undefined || props.logoOnly === false ? (
        <div
          className="sidebar rounded-3 position-fixed vh-100"
          style={{ zIndex: 1 }}
        >
          <div
            className=" d-flex mb-3 justify-content-start p-3 position-relative mt-2 "
            // style={{ height: "60px" }}
          >
            <Image className="" width={154} height={38} src={logo} alt="logo" />
            <span
              className="position-absolute top-50 start-100 translate-middle translate-middle"
              style={{ zIndex: 3 }}
            >
              <button
                onClick={() => showSub()}
                className="btn text-center"
                style={{ width: 30, height: 30 }}
              >
                <svg
                  className="text-white"
                  style={{ verticalAlign: `-0.125rem` }}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.1875 6.20538L12.4375 6.20538"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.72498 10.7238L1.18748 6.20579L5.72498 1.68704"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </span>
          </div>
          <svg
            width="209"
            height="1"
            viewBox="0 0 209 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="0.5"
              x2="208.5"
              y2="0.499982"
              stroke="white"
              stroke-opacity="0.15"
              stroke-linecap="round"
            />
          </svg>

          <div
            className="overflow-scroll hideScrollbar"
            style={{ height: "60%" }}
          >
            {props.children}
          </div>
          <div>
            <div>
              <svg
                width="209"
                height="1"
                viewBox="0 0 209 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="0.5"
                  x2="208.5"
                  y2="0.499982"
                  stroke="white"
                  stroke-opacity="0.15"
                  stroke-linecap="round"
                />
              </svg>

              <div className="d-flex gap-2 mt-3">
                <div>
                  <Image
                  alt="main"
                    className="rounded bg-yellow"
                    src={mainpic}
                    width={50}
                    height={50}
                  />
                </div>
                <div
                  style={{ color: "white", width: "60%" }}
                  className="gothic-medium"
                >
                  <div style={{ maxWidth: "60%" }}>
                    {firstName + " " + lastName}
                  </div>
                  <div style={{ color: "#E3E7F4", fontSize: "12px" }}>
                    Student
                  </div>
                </div>

                <div onClick={()=>{ 
                  CookieManager.setCookie("jwt", '');
                  router.push("/login")}}>
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9712 15.171C16.98 15.5339 16.9172 15.8949 16.7864 16.2335C16.6556 16.5721 16.4593 16.8816 16.2089 17.1443C15.9584 17.407 15.6586 17.6178 15.3267 17.7646C14.9947 17.9115 14.6371 17.9914 14.2742 18H5.31523C5.12223 17.9881 4.94177 17.9004 4.81324 17.756C4.68472 17.6115 4.61856 17.4221 4.62923 17.229C4.61856 17.0359 4.68472 16.8465 4.81324 16.702C4.94177 16.5576 5.12223 16.4699 5.31523 16.458H14.2742C14.6206 16.4625 14.9546 16.3297 15.2031 16.0884C15.4516 15.8472 15.5944 15.5173 15.6002 15.171L15.6002 2.829C15.5942 2.48287 15.4513 2.15323 15.2027 1.91222C14.9542 1.67121 14.6204 1.53845 14.2742 1.543H5.31523C5.12648 1.52042 4.95256 1.42944 4.82638 1.28726C4.7002 1.14509 4.63051 0.961592 4.63051 0.7715C4.63051 0.581408 4.7002 0.397911 4.82638 0.255737C4.95256 0.113564 5.12648 0.0225773 5.31523 0H14.2742C14.6374 0.0081768 14.9953 0.0878716 15.3276 0.234524C15.6599 0.381176 15.96 0.591909 16.2108 0.854666C16.4616 1.11742 16.6581 1.42705 16.7891 1.76583C16.9201 2.1046 16.983 2.46589 16.9742 2.829L16.9712 15.171ZM10.3372 9.823H2.63723L5.43723 12.623C5.50867 12.695 5.56522 12.7804 5.60365 12.8743C5.64209 12.9682 5.66166 13.0687 5.66124 13.1702C5.66082 13.2716 5.64043 13.372 5.60122 13.4656C5.56201 13.5591 5.50476 13.6441 5.43273 13.7155C5.28726 13.8598 5.09043 13.9404 4.88554 13.9395C4.68066 13.9387 4.4845 13.8565 4.34023 13.711L0.226227 9.6C0.154506 9.52831 0.0976125 9.44319 0.0587957 9.34951C0.019979 9.25582 0 9.15541 0 9.054C0 8.95259 0.019979 8.85218 0.0587957 8.75849C0.0976125 8.66481 0.154506 8.57969 0.226227 8.508L4.34023 4.392C4.41126 4.31765 4.49644 4.25823 4.59075 4.21725C4.68506 4.17627 4.78662 4.15454 4.88944 4.15335C4.99227 4.15215 5.0943 4.17151 5.18954 4.21029C5.28478 4.24906 5.37131 4.30648 5.44406 4.37916C5.51681 4.45184 5.5743 4.53832 5.61316 4.63352C5.65203 4.72873 5.67148 4.83074 5.67038 4.93357C5.66928 5.0364 5.64764 5.13796 5.60675 5.23232C5.56585 5.32667 5.50652 5.4119 5.43223 5.483L2.63223 8.283H10.3322C10.5882 8.283 10.7952 8.629 10.7952 9.054C10.7952 9.479 10.5932 9.823 10.3372 9.823Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={
            !expandedCollapse
              ? "bg-white shadow collapsedSidebar position-fixed vh-100"
              : "bg-white shadow collapsedSidebarExpand position-fixed vh-100"
          }
          style={{ zIndex: 1 }}
        >
          <div
            className="d-flex justify-content-start p-3 border-bottom border-1 position-relative"
            style={{ height: "76px" }}
          >
            {expandedCollapse ? (
              <>
                <Image
                  width={40}
                  height={40}
                  src={logo}
                  alt="logo"
                  style={{ whiteSpace: "nowrap" }}
                />
                <p
                  className="text-black fw-bold ms-2 mb-0 fs-4"
                  style={{ whiteSpace: "nowrap" }}
                >
                  PenStack
                </p>
              </>
            ) : (
              <Image width={40} height={40} src={logo} alt="logo" />
            )}
            <span
              className="position-absolute top-50 start-100 translate-middle translate-middle"
              style={{ zIndex: 3 }}
            >
              <button
                onClick={() => hideSub()}
                className="p-1 rounded-circle bg-light-purple border-0 shadow"
                style={{ width: 30, height: 30 }}
              >
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1Z"
                    fill="#C3CAD9"
                  />
                </svg>
              </button>
            </span>
          </div>
          <div
            className="overflow-scroll hideScrollbar"
            style={{ height: "80%" }}
          >
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
