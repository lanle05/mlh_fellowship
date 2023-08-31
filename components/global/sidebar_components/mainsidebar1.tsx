import Image from "next/image";
import { useAccordionButton } from "react-bootstrap";
import logo from "../../../public/images/logo/logo.svg";
import avatar from "../../../public/images/logout-image.svg";
import mainpic from "../../../public/images/mainpic.svg";
import { useRouter } from "next/router";
import CookieManager from "../../../utils/cookieManager";
import { useCurrentToggleStore, useSidebarStore } from "../../../utils/store";
import { useEffect, useRef, useState } from "react";
interface MainProps {
  children: React.ReactNode | React.ReactNode[];
  logoOnly?: boolean;
}

export default function MainSidebar(props: MainProps) {
  const router = useRouter();
  const { showSub, hideSub } = useSidebarStore();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const { expandedCollapse } = useCurrentToggleStore();
  const { currentToggle, setCurrentToggle, expandBig, expandSmall } =
    useCurrentToggleStore();
  const disabled = useAccordionButton("-2");


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
          className="sidebar1 rounded-3 position-fixed vh-100"
          style={{ zIndex: 1 }}
        >
          <div
            className=" d-flex border-bottom border-dark mb-3 justify-content-start p-3 position-relative mt-2 "
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
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.41517 9.51577L0.3045 5.51578L0.29114 5.50278L0.283946 5.49678L0.27778 5.48978L0.270587 5.48177L0.265448 5.47577L0.257227 5.46677L0.249006 5.45678L0.233591 5.43577L0.222286 5.42177L0.21201 5.40777L0.201733 5.39278V5.38678L0.192484 5.37778V5.37078V5.36277L0.18118 5.35378V5.34777L0.16782 5.33577C0.0881586 5.19031 0.0598914 5.02338 0.0873777 4.86073C0.114864 4.69809 0.196577 4.54876 0.319915 4.43577L4.41517 0.455775C4.5606 0.319222 4.75533 0.243714 4.95742 0.245515C5.15951 0.247316 5.35279 0.326281 5.49562 0.465403C5.63846 0.604526 5.71943 0.792673 5.72109 0.989322C5.72275 1.18597 5.64497 1.37539 5.5045 1.51678L2.71027 4.23577H15.2365C15.4409 4.23577 15.637 4.31479 15.7815 4.45544C15.9261 4.5961 16.0073 4.78686 16.0073 4.98577C16.0073 5.18469 15.9261 5.37545 15.7815 5.51611C15.637 5.65676 15.4409 5.73577 15.2365 5.73577H2.71027L5.5045 8.45578C5.58023 8.52444 5.64096 8.60724 5.68309 8.69924C5.72521 8.79124 5.74787 8.89055 5.74969 8.99125C5.75152 9.09196 5.73248 9.19198 5.69372 9.28537C5.65495 9.37876 5.59725 9.46359 5.52407 9.53481C5.45088 9.60603 5.36369 9.66218 5.26772 9.6999C5.17175 9.73762 5.06895 9.75614 4.96546 9.75437C4.86198 9.75259 4.75991 9.73055 4.66537 9.68956C4.57082 9.64856 4.48573 9.58946 4.41517 9.51577Z"
                    fill="#7D8089"
                  />
                </svg>
              </button>
            </span>
          </div>
          <div
            className="overflow-scroll hideScrollbar"
            style={{ height: "60%" }}
          >
            {props.children}
          </div>

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
                stroke="#718ACA"
                stroke-opacity="0.42"
                stroke-linecap="round"
              />
            </svg>

            <div className="d-flex gap-2 mt-3">
              <div>
                <Image
                alt="avatar"
                  src={avatar}
                  width={50}
                  height={50}
                  className="rounded"
                />
              </div>
              <div>
                <div
                  style={{ color: "#7D8089", maxWidth: "40%" }}
                  className="gothic-medium"
                >
                 {firstName + " " + lastName}
                </div>
                <div style={{ color: "#5995FE", fontSize: "12px" }}>
                  Teacher
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
                    fill="#718ACA"
                  />
                </svg>
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
