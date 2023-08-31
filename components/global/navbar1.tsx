import {
  Dropdown,
  Overlay,
  OverlayTrigger,
  Popover,
  Stack,
  NavDropdown,
  Spinner,
  // Header,
  // Item,
  Tooltip,
  Col,
  Row,
  Offcanvas,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import Image from "next/image";
import {
  coin_icon,
  shield_icon,
  notification_icon,
  logo,
  youngpeople2,
} from "../../constant/images";
import Logout from "../../public/images/icons/user_svg/arr011.svg";
import { useRouter } from "next/router";
import CookieManager from "../../utils/cookieManager";
import { useEffect, useRef, useState } from "react";
import JWTDecoder from "../../utils/jwtDecoder";
import useAuth from "../../utils/customHooks";
import { BarChart, Bar } from "recharts";
import SelectQuestionServices from "../../services/test_services/select_question";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const nots: { id: number; title: string; body: string; interval: string }[] = [
  {
    id: 0,
    title: "New User Creation success",
    body: "Congratulations! You have successfully created a new user account for [New User]",
    interval: "1 hour ago",
  },
  {
    id: 1,
    title: "New User Creation success",
    body: "Congratulations! You have successfully created a new user account for [New User]",
    interval: "1 hour ago",
  },
  {
    id: 2,
    title: "New User Creation success",
    body: "Congratulations! You have successfully created a new user account for [New User]",
    interval: "1 hour ago",
  },
];
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 910,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 1510,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2810,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 710,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default function Navbar() {
  const router = useRouter();
  const logOut = () => {
    CookieManager.deleteCookie("jwt");
    router.push("/login");
  };
  const [displayName, setDisplayName] = useState<string>();
  const [canvasNav, setCanvasNav] = useState<number>(3);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState<string>();
  const [categories, setCategories] = useState<any[]>();
  const [categories1, setCategories1] = useState<any[]>();
  const [catName, setCatName] = useState<string>();
  const [catDet, setCatDet] = useState<any>();
  // const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState<string>();
  const [middleName, setMiddleName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [clickedNot, setClickedNot] = useState<string>("bg-light");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputBlur = () => {
    setTimeout(() => {
       if (show) {
      setShow(false);
    }
    }, 500);
   
  };

  const target = useRef(null);

  const user = useAuth();

  

  useEffect(() => {const SearchCategory = async (term: string) => {
    // setIsLoading(true);
    if (searchValue !== undefined && searchValue !== null) {
      try {
        const response = await SelectQuestionServices.SearchUser(term);
        if ((response && response.status === 201) || response.status === 200) {
          setCategories(response.data.response.teachers);
          setCategories1(response.data.response.students);
          console.log(response.data.response);
        } else {
          toast.error("An error has occurred please try again later");
          return;
          // setIsLoading(false);
        }
      } catch (e: any) {
        // console.log(e);
        toast.error(e);
        // setIsLoading(false);
      }
    }
  };
    if (searchValue !== undefined) {
      SearchCategory(searchValue);
    }
  }, [searchValue]);

  useEffect(() => {
    if (user !== null) {
      setDisplayName(user.displayName as string);
    }
    const myfirstName = localStorage.getItem("firstName");
    if (myfirstName !== null && myfirstName !== undefined) {
      setFirstName(myfirstName);
    }

    const mylastName = localStorage.getItem("lastName");
    if (mylastName !== null && mylastName !== undefined) {
      setLastName(mylastName);
    }
  }, [user]);
  return (
    <>
      <ToastContainer />
      <div className="navbar bg-light1 w-100 p-2 ">
        <div className="  mt-4 d-flex justify-content-between w-100 px-2">
          <div>
            <h2 className=" gothic-header text-capitalize">
              {router.pathname !== "/teacher/dashboard"
                ? router.pathname !== "/teacher/userprofile"
                ? router.pathname !== "/teacher/otherprofile"
                  ? null
                  : router.pathname.split("/")[2]
                : null: null}
            </h2>
          </div>
          <div className=" inputHighlight ">
            <div className="d-flex  position-relative p-2">
              <div className="ms-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="border-0 shadow-none bg-light1"
                style={{ outline: 0, width: "100px" }}
                placeholder="Search..."
                ref={target}
                onClick={(e:any)=>{ e.target.value !== "" && setShow(true);
              }}
                onBlur={handleInputBlur}
                onChange={(e: any) => {
                  setSearchValue(e.target.value);
                  const inputValue = e.target.value;

                  if (inputValue) {
                    setShow(true);
                  } else {
                    setShow(false);
                  }
                }}
              />
              <Overlay target={target.current} show={show} placement="bottom">
                {(props) => (
                  <Popover className="border-0 my-popover" {...props}>
                    <div
                      className="bg-white shadow hideScrollbar pt-3 px-2"
                      style={{
                        width: "270px",
                        borderRadius: "10px",
                        overflowY: "scroll",
                        maxHeight: "450px",
                      }}
                    >
                       <div>
                        {categories1 !== undefined ?
                          categories1.map((item) => (
                            <div
                              onClick={() => {
                                router.push({
                                  pathname:
                                    "/teacher/otherprofile/student-profile",
                                  query: {
                                    id: item.id,
                                  },
                                });
                              }}
                              className="d-flex justify-content-between mb-3 terms mont"
                              key={item.id}
                            >
                              <div className=" d-flex align-item-center gap-2">
                                <Image
                                alt="user"
                                  src={"/images/Userpic.svg"}
                                  width={20}
                                  height={20}
                                  className=""
                                />
                                {item.user.first_name + " " + item.user.last_name}
                              </div>
                              <div className="d-flex align-item-center gap-1 ">
                                <svg
                                  className="d-flex mt-1 "
                                  width="10"
                                  height="10"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.91732 3.50065C9.91732 5.11148 8.61148 6.41732 7.00065 6.41732C5.38982 6.41732 4.08398 5.11148 4.08398 3.50065C4.08398 1.88982 5.38982 0.583984 7.00065 0.583984C8.61148 0.583984 9.91732 1.88982 9.91732 3.50065Z"
                                    fill="#5E6278"
                                  />
                                  <path
                                    opacity="0.25"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10.9772 8.23869C10.6176 7.82179 9.99998 7.84327 9.51705 8.1076C8.76973 8.51665 7.91202 8.7492 7 8.7492C6.08798 8.7492 5.23027 8.51665 4.48295 8.1076C4.00001 7.84327 3.38241 7.82179 3.02284 8.23869C2.22963 9.15835 1.75 10.3561 1.75 11.6659V12.2492C1.75 12.8935 2.27233 13.4159 2.91667 13.4159H11.0833C11.7277 13.4159 12.25 12.8935 12.25 12.2492V11.6659C12.25 10.3561 11.7704 9.15835 10.9772 8.23869Z"
                                    fill="#5E6278"
                                  />
                                </svg>
                                <span style={{ fontStyle: "5px" }}>
                                  Student
                                </span>
                              </div>
                            </div>
                          )): <div className="d-flex pb-3 justify-content-center"><Spinner size="sm" animation="border" /></div>}
                      </div>
                      <div>
                        {categories !== undefined &&
                          categories.map((item) => (
                            <div
                              onClick={() => {
                                router.push({
                                  pathname:
                                    "/teacher/otherprofile/teacher-profile",
                                  query: {
                                    id: item.id,
                                  },
                                });
                              }}
                              className="d-flex justify-content-between mb-3 terms mont"
                              key={item.id}
                            >
                              <div className=" d-flex align-item-center gap-2">
                                <Image
                                alt="user"
                                  src={"/images/Userpic1.svg"}
                                  width={20}
                                  height={20}
                                  className=""
                                />
                                {item.user.first_name + " " + item.user.last_name}
                              </div>
                              <div className="d-flex align-item-center gap-1 ">
                                <svg
                                  className="d-flex mt-1 "
                                  width="10"
                                  height="10"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.91732 3.50065C9.91732 5.11148 8.61148 6.41732 7.00065 6.41732C5.38982 6.41732 4.08398 5.11148 4.08398 3.50065C4.08398 1.88982 5.38982 0.583984 7.00065 0.583984C8.61148 0.583984 9.91732 1.88982 9.91732 3.50065Z"
                                    fill="#5E6278"
                                  />
                                  <path
                                    opacity="0.25"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10.9772 8.23869C10.6176 7.82179 9.99998 7.84327 9.51705 8.1076C8.76973 8.51665 7.91202 8.7492 7 8.7492C6.08798 8.7492 5.23027 8.51665 4.48295 8.1076C4.00001 7.84327 3.38241 7.82179 3.02284 8.23869C2.22963 9.15835 1.75 10.3561 1.75 11.6659V12.2492C1.75 12.8935 2.27233 13.4159 2.91667 13.4159H11.0833C11.7277 13.4159 12.25 12.8935 12.25 12.2492V11.6659C12.25 10.3561 11.7704 9.15835 10.9772 8.23869Z"
                                    fill="#5E6278"
                                  />
                                </svg>
                                <span style={{ fontStyle: "5px" }}>
                                  Teacher
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </Popover>
                )}
              </Overlay>
            </div>{" "}
          </div>
          <div className="d-flex ">

          <div className="shield-data position-relative">
              {/* badge */}
              <div className="d-flex justify-content-center align-items-center shield-badge">
                2
              </div>
              <div className="shield-icon d-flex justify-content-center align-items-center">
                <svg
                  width="22"
                  height="27"
                  viewBox="0 0 22 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5146 25.9132C-0.713329 22.8939 1.58245 3.20774 16.682 2C26.9485 4.05315 13.5395 27.604 3.5146 25.9132Z"
                    stroke="#496ABE"
                    stroke-width="2"
                  />
                  <path
                    d="M3.63477 23.2564C4.5907 22.862 5.79199 21.8493 5.30766 20.7916C4.72189 19.5124 4.81574 17.824 5.78563 17.7106C7.62088 17.4961 8.53395 16.8479 7.93649 14.6296C7.33903 12.4113 9.01192 12.0416 10.0874 12.0416C11.1628 12.0416 12.2109 11.5413 11.4862 9.72971C10.9643 8.42514 11.9282 6.76204 13.5526 7.35855C14.7476 7.79733 16.0364 6.21082 16.0763 5.01953"
                    stroke="#496ABE"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="notification-data position-relative">
              <div className="d-flex justify-content-center align-items-center notification-badge">
                3
              </div>
              <div className="notification-icon d-flex justify-content-center align-items-center">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.51534 14.0008L3.69534 12.8188C4.07334 12.4408 4.28134 11.9388 4.28134 11.4048V6.72781C4.28134 5.37081 4.87134 4.07381 5.90134 3.17181C6.93934 2.26181 8.26134 1.86181 9.63834 2.04281C11.9653 2.35181 13.7203 4.45581 13.7203 6.93781V11.4048C13.7203 11.9388 13.9283 12.4408 14.3053 12.8178L15.4863 14.0008H2.51534ZM11.0003 16.3418C11.0003 17.2408 10.0843 18.0008 9.00034 18.0008C7.91634 18.0008 7.00034 17.2408 7.00034 16.3418V16.0008H11.0003V16.3418ZM17.5213 13.2088L15.7203 11.4048V6.93781C15.7203 3.45681 13.2183 0.49981 9.90034 0.0608098C7.97834 -0.19519 6.03834 0.39181 4.58334 1.66781C3.11934 2.94981 2.28134 4.79381 2.28134 6.72781L2.28034 11.4048L0.479335 13.2088C0.0103353 13.6788 -0.128665 14.3778 0.125335 14.9908C0.380335 15.6048 0.973335 16.0008 1.63734 16.0008H5.00034V16.3418C5.00034 18.3598 6.79434 20.0008 9.00034 20.0008C11.2063 20.0008 13.0003 18.3598 13.0003 16.3418V16.0008H16.3633C17.0273 16.0008 17.6193 15.6048 17.8733 14.9918C18.1283 14.3778 17.9903 13.6778 17.5213 13.2088Z"
                    fill="#496ABE"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
