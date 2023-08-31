import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  ProgressBar,
  Row,
  Image,
} from "react-bootstrap";
// import Image from 'next/image'
interface itemProps {
  src: string;
  title: string;
  teacher: string;
  onClassOpen: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export default function Subject(props: itemProps) {
  return (
    <Card className="px-1 py-3 rounded-4 shadow-sm" style={{ width: "281px" }}>
      <Image alt="pimg" width={'249px'} height='120px' src={props.src}></Image>
      <div
        className="fw-bold ms-3 mb-3"
        style={{ fontSize: "20px", lineHeight: "24px" }}
      >
        {props.title}
      </div>
      <div>
        <div className="d-flex ms-3 mb-3">
          <Image alt="subject" src={"../images/subject-avatar.svg"}></Image>

          <div
            className="ms-2"
            style={{ fontSize: "14px", lineHeight: "17px", color: "#3E4259" }}
          >
            {props.teacher}
          </div>
        </div>
        <div
          style={{ width: "231px" }}
          className=" border-bottom border-danger border-2 mx-auto mb-3"
        ></div>
        <div className="d-flex justify-content-center mb-3">
          <div style={{ fontSize: "11px" }} className="">
            <svg
              className=" mb-1"
              width="11"
              height="12"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1029 7.44502V4.02502C11.1029 3.01693 11.1029 2.51288 10.8914 2.12784C10.7053 1.78914 10.4083 1.51378 10.043 1.34121C9.6278 1.14502 9.08422 1.14502 7.99706 1.14502H3.85588C2.76872 1.14502 2.22514 1.14502 1.8099 1.34121C1.44464 1.51378 1.14768 1.78914 0.961576 2.12784C0.75 2.51288 0.75 3.01693 0.75 4.02502V10.265C0.75 11.2731 0.75 11.7772 0.961576 12.1622C1.14768 12.5009 1.44464 12.7763 1.8099 12.9488C2.22514 13.145 2.76872 13.145 3.85588 13.145H5.92647M7.22059 6.54502H3.33824M4.63235 8.94502H3.33824M8.51471 4.14502H3.33824M7.54412 11.345L8.83824 12.545L11.75 9.84502"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            10 lessons
          </div>
          <div style={{ fontSize: "11px" }} className=" ms-2">
            <svg
              className="me-1 mb-1"
              width="11"
              height="12"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.25 8.8832C11.0993 9.30983 11.8274 9.99449 12.3589 10.8506C12.4642 11.0202 12.5168 11.1049 12.535 11.2223C12.572 11.4609 12.4088 11.7542 12.1867 11.8486C12.0773 11.895 11.9543 11.895 11.7084 11.895M9.08336 6.37216C9.9477 5.94262 10.5417 5.05069 10.5417 4.02002C10.5417 2.98935 9.9477 2.09742 9.08336 1.66788M7.91669 4.02002C7.91669 5.46977 6.74144 6.64502 5.29169 6.64502C3.84195 6.64502 2.66669 5.46977 2.66669 4.02002C2.66669 2.57027 3.84195 1.39502 5.29169 1.39502C6.74144 1.39502 7.91669 2.57027 7.91669 4.02002ZM1.24291 10.6924C2.17292 9.29601 3.64049 8.39502 5.29169 8.39502C6.94289 8.39502 8.41046 9.29601 9.34048 10.6924C9.54421 10.9983 9.64608 11.1512 9.63436 11.3466C9.62523 11.4988 9.5255 11.685 9.40394 11.7769C9.24781 11.895 9.03309 11.895 8.60365 11.895H1.97973C1.55029 11.895 1.33557 11.895 1.17945 11.7769C1.05789 11.685 0.958162 11.4988 0.94903 11.3466C0.937302 11.1512 1.03917 10.9983 1.24291 10.6924Z"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            24 students
          </div>
          <div style={{ fontSize: "11px" }} className=" ms-2">
            <svg
              className="mb-1 me-1"
              width="11"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9083 7.10327L11.7419 5.9366L10.5749 7.10327M11.9166 6.22827C11.9166 9.12777 9.56612 11.4783 6.66663 11.4783C3.76713 11.4783 1.41663 9.12777 1.41663 6.22827C1.41663 3.32878 3.76713 0.978271 6.66663 0.978271C8.59274 0.978271 10.2766 2.01552 11.1901 3.56191M6.66663 3.3116V6.22827L8.41663 7.39494"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            8 hours
          </div>
          <div style={{ fontSize: "11px" }} className="ms-2">
            <svg
              className="me-1 mb-1"
              width="11"
              height="12"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.24603 2.64091C6.07974 1.27742 4.13487 0.910644 2.67359 2.15919C1.21231 3.40774 1.00658 5.49526 2.15414 6.97192C3.10825 8.19967 5.99572 10.7891 6.94208 11.6272C7.04796 11.7209 7.1009 11.7678 7.16265 11.7862C7.21654 11.8023 7.27551 11.8023 7.32941 11.7862C7.39116 11.7678 7.4441 11.7209 7.54997 11.6272C8.49633 10.7891 11.3838 8.19967 12.3379 6.97192C13.4855 5.49526 13.3049 3.39461 11.8185 2.15919C10.3321 0.923778 8.41231 1.27742 7.24603 2.64091Z"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            4.2
          </div>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <span
            style={{ color: "#7D8089", fontSize: "12px", lineHeight: "9px" }}
            className="me-2"
          >
            <span style={{color: '#5995FE'}}>4</span>/10
          </span>
          <ProgressBar
            className="shadow-sm"
            now={40}
            variant="success"
            style={{ height: "9px", fontSize: "13px", width: "163px", backgroundColor: '#523F62' }}
          />
          <span className="ms-2"
            style={{ color: "#7D8089", fontSize: "12px", lineHeight: "9px", }}
          >
            40%
          </span>
        </div>
        <button onClick={(e)=>props.onClassOpen(e)} style={{border: '1px solid #5995FE', backgroundColor: '#292929', fontSize: '14px', width: '108px', margin: '0 auto'}} className='d-block btn rounded-pill center text-white mb-3'>
            Start Class
        </button>
      </div>
    </Card>
  );
}
