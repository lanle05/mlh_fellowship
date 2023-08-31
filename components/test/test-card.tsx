import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Tooltip,
  OverlayTrigger,
  ProgressBar,
  Row,
  Image,
} from "react-bootstrap";
import { AddTestProfileModel } from "../../models/test_models";
// import Image from 'next/image'
interface itemProps {
  //   src: string;
  // label: string;
  onCardClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onEditClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  deleteClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  testName: string;
  due: string;
  src: string;
  bg: string;
  testUser: string;
  testType: string;
  testCardClass: string;
  dueClass: string;
  dueClass2: string;
  completionClass: string;
  questions: string;
  checkedit: any;

  //   teacher: string;
  //   onTopicsOpen: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export default function TestCard(props: itemProps) {
  return (
    <Col xl={3} className="p-2">
      <Card className={props.testCardClass} style={{ fontSize: "12px" }}>
        <Card.Img
          variant="top"
          style={{ backgroundColor: props.bg }}
          className="cardimg "
          src={props.src}
        />
        <Card.Body className="">
          <div className="p-3">
            <div className="d-flex justify-content-between ">
              <button
                style={{
                  fontSize: "10px",
                  background:
                    "linear-gradient(95.6deg, #FF567F -0.55%, #FF834E 114.37%)",
                }}
                className="mb-3 border-0 text-white rounded-2"
              >
                {props.testType}
              </button>
              <div className="">
                <Dropdown>
                  <Dropdown.Toggle
                    className="bg-white border-0"
                    id="dropdown-basic"
                  >
                    <svg
                      width="17"
                      height="4"
                      viewBox="0 0 17 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.9407 3.86744C14.6954 3.86751 14.4525 3.81928 14.2258 3.72549C13.9992 3.6317 13.7933 3.49418 13.6198 3.32079C13.4463 3.14741 13.3086 2.94155 13.2147 2.71497C13.1207 2.48838 13.0723 2.24552 13.0723 2.00024C13.0722 1.75495 13.1204 1.51206 13.2142 1.28541C13.308 1.05877 13.4455 0.852823 13.6189 0.679326C13.7923 0.505829 13.9982 0.368183 14.2247 0.274244C14.4513 0.180305 14.6942 0.131915 14.9395 0.131836C15.4348 0.131677 15.91 0.32831 16.2604 0.678478C16.6108 1.02865 16.8077 1.50366 16.8079 1.99904C16.808 2.49441 16.6114 2.96955 16.2612 3.31995C15.9111 3.67034 15.436 3.86728 14.9407 3.86744Z"
                        fill="#7D8089"
                      />
                      <path
                        d="M8.53029 3.86721C9.56151 3.86721 10.3975 3.03124 10.3975 2.00001C10.3975 0.968786 9.56151 0.132812 8.53029 0.132812C7.49906 0.132812 6.66309 0.968786 6.66309 2.00001C6.66309 3.03124 7.49906 3.86721 8.53029 3.86721Z"
                        fill="#7D8089"
                      />
                      <path
                        d="M2.11915 3.86721C3.15038 3.86721 3.98635 3.03124 3.98635 2.00001C3.98635 0.968786 3.15038 0.132812 2.11915 0.132812C1.08793 0.132812 0.251953 0.968786 0.251953 2.00001C0.251953 3.03124 1.08793 3.86721 2.11915 3.86721Z"
                        fill="#7D8089"
                      />
                    </svg>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      className={props.checkedit ? "d-none" : ""}
                      onClick={(e) => props.onEditClick(e)}
                    >
                      Continue Editing
                    </Dropdown.Item>
                    <Dropdown.Item onClick={(e) => props.deleteClick(e)}>
                      Delete Test Profile
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div
              className="gothic-medium mb-1"
              onClick={(e) => props.onCardClick(e)}
            >
              {props.testName}
            </div>
            <div
              style={{ color: "#B5B5C3", fontSize: "10px" }}
              className={props.dueClass}
            >
              Due <span className={props.dueClass2}>{props.due}</span>
            </div>
            <div className="d-flex">
              <div>
                <Image alt="owner" src="../images/owner.svg" />
              </div>
              <div style={{ fontSize: "12px" }} className="ms-2 mb-2">
                {props.testUser}
              </div>
            </div>
            <div style={{ fontSize: "10px" }} className="d-flex mb-2">
              <div className={props.completionClass}> {props.questions}</div>
            </div>
          </div>
        </Card.Body>

        {/* <div className="" style={{ color: "#7D8089" }}>
          <svg
            className="me-2"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.25 0.823242C4.25 0.698922 4.20061 0.579694 4.11271 0.491786C4.0248 0.403878 3.90557 0.354492 3.78125 0.354492C3.65693 0.354492 3.5377 0.403878 3.44979 0.491786C3.36189 0.579694 3.3125 0.698922 3.3125 0.823242V1.29199H2.375C1.87772 1.29199 1.40081 1.48954 1.04917 1.84117C0.697544 2.1928 0.5 2.66971 0.5 3.16699L0.5 4.10449H15.5V3.16699C15.5 2.66971 15.3025 2.1928 14.9508 1.84117C14.5992 1.48954 14.1223 1.29199 13.625 1.29199H12.6875V0.823242C12.6875 0.698922 12.6381 0.579694 12.5502 0.491786C12.4623 0.403878 12.3431 0.354492 12.2188 0.354492C12.0944 0.354492 11.9752 0.403878 11.8873 0.491786C11.7994 0.579694 11.75 0.698922 11.75 0.823242V1.29199H4.25V0.823242ZM15.5 13.4795V5.04199H0.5V13.4795C0.5 13.9768 0.697544 14.4537 1.04917 14.8053C1.40081 15.1569 1.87772 15.3545 2.375 15.3545H13.625C14.1223 15.3545 14.5992 15.1569 14.9508 14.8053C15.3025 14.4537 15.5 13.9768 15.5 13.4795ZM9.40625 6.91699H10.3438C10.4681 6.91699 10.5873 6.96638 10.6752 7.05429C10.7631 7.14219 10.8125 7.26142 10.8125 7.38574V8.32324C10.8125 8.44756 10.7631 8.56679 10.6752 8.6547C10.5873 8.74261 10.4681 8.79199 10.3438 8.79199H9.40625C9.28193 8.79199 9.1627 8.74261 9.07479 8.6547C8.98689 8.56679 8.9375 8.44756 8.9375 8.32324V7.38574C8.9375 7.26142 8.98689 7.14219 9.07479 7.05429C9.1627 6.96638 9.28193 6.91699 9.40625 6.91699ZM12.2188 6.91699H13.1562C13.2806 6.91699 13.3998 6.96638 13.4877 7.05429C13.5756 7.14219 13.625 7.26142 13.625 7.38574V8.32324C13.625 8.44756 13.5756 8.56679 13.4877 8.6547C13.3998 8.74261 13.2806 8.79199 13.1562 8.79199H12.2188C12.0944 8.79199 11.9752 8.74261 11.8873 8.6547C11.7994 8.56679 11.75 8.44756 11.75 8.32324V7.38574C11.75 7.26142 11.7994 7.14219 11.8873 7.05429C11.9752 6.96638 12.0944 6.91699 12.2188 6.91699ZM2.375 10.1982C2.375 10.0739 2.42439 9.95469 2.51229 9.86679C2.6002 9.77888 2.71943 9.72949 2.84375 9.72949H3.78125C3.90557 9.72949 4.0248 9.77888 4.11271 9.86679C4.20061 9.95469 4.25 10.0739 4.25 10.1982V11.1357C4.25 11.2601 4.20061 11.3793 4.11271 11.4672C4.0248 11.5551 3.90557 11.6045 3.78125 11.6045H2.84375C2.71943 11.6045 2.6002 11.5551 2.51229 11.4672C2.42439 11.3793 2.375 11.2601 2.375 11.1357V10.1982ZM5.65625 9.72949H6.59375C6.71807 9.72949 6.8373 9.77888 6.92521 9.86679C7.01311 9.95469 7.0625 10.0739 7.0625 10.1982V11.1357C7.0625 11.2601 7.01311 11.3793 6.92521 11.4672C6.8373 11.5551 6.71807 11.6045 6.59375 11.6045H5.65625C5.53193 11.6045 5.4127 11.5551 5.32479 11.4672C5.23689 11.3793 5.1875 11.2601 5.1875 11.1357V10.1982C5.1875 10.0739 5.23689 9.95469 5.32479 9.86679C5.4127 9.77888 5.53193 9.72949 5.65625 9.72949Z"
              fill="#D3D2D2"
            />
          </svg>
          {props.startDate} - {props.endDate}
        </div> */}
        <div className="mb-1" style={{ color: "#7D8089" }}>
          {/* <svg
            className="me-1"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5 7.85449C15.5 9.84362 14.7098 11.7513 13.3033 13.1578C11.8968 14.5643 9.98912 15.3545 8 15.3545C6.01088 15.3545 4.10322 14.5643 2.6967 13.1578C1.29018 11.7513 0.5 9.84362 0.5 7.85449C0.5 5.86537 1.29018 3.95771 2.6967 2.55119C4.10322 1.14467 6.01088 0.354492 8 0.354492C9.98912 0.354492 11.8968 1.14467 13.3033 2.55119C14.7098 3.95771 15.5 5.86537 15.5 7.85449ZM8 3.63574C8 3.51142 7.95061 3.39219 7.86271 3.30429C7.7748 3.21638 7.65557 3.16699 7.53125 3.16699C7.40693 3.16699 7.2877 3.21638 7.19979 3.30429C7.11189 3.39219 7.0625 3.51142 7.0625 3.63574V8.79199C7.06253 8.87462 7.08439 8.95577 7.12588 9.02722C7.16737 9.09867 7.22701 9.15789 7.29875 9.19887L10.58 11.0739C10.6877 11.1321 10.8139 11.1458 10.9315 11.1122C11.0492 11.0786 11.1491 11.0003 11.2099 10.8941C11.2706 10.7878 11.2873 10.662 11.2565 10.5435C11.2257 10.4251 11.1498 10.3233 11.045 10.2601L8 8.52012V3.63574Z"
              fill="#D3D2D2"
            />
          </svg> */}
          {/* {props.startTime} - {props.endTime} */}
        </div>
        {/* <div className="mb-1">Friends Invited</div>
        <div className="mb-2">
          <Image src="/images/invited.svg" /> +3
        </div> */}
      </Card>{" "}
    </Col>
  );
}
