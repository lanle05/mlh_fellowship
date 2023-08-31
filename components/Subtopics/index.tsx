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
//   src: string;
  title: string;
//   teacher: string;
  onTopicsOpen: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export default function Subtopic(props: itemProps) {
  return (
    <Card className="py-2 rounded-4 shadow-sm border-start border-bottom border-5 " style={{ width: "151px", height: '164px', color: '#3F4254', backgroundColor: '#FFF6E5', fontSize: '14px' }}>
      <button onClick={(e)=>props.onTopicsOpen(e)} className="mb-3 btn mx-auto text-center">
       { props.title}
      </button>

      <div className="mb-3 d-flex justify-content-center">
        <div> <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1583 6.95825L10.992 5.79159L9.82498 6.95825M11.1667 6.08325C11.1667 8.98275 8.81617 11.3333 5.91667 11.3333C3.01718 11.3333 0.666672 8.98275 0.666672 6.08325C0.666672 3.18376 3.01718 0.833252 5.91667 0.833252C7.84279 0.833252 9.52664 1.8705 10.4401 3.41689M5.91667 3.16659V6.08325L7.66667 7.24992" stroke="#FFD433" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
        <div className="ms-1">8 hours</div>
      </div>
      <div className="d-flex justify-content-center">
        <div><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8529 7.3V3.88C10.8529 2.87191 10.8529 2.36786 10.6414 1.98282C10.4553 1.64413 10.1583 1.36876 9.79304 1.19619C9.3778 1 8.83422 1 7.74706 1H3.60588C2.51872 1 1.97514 1 1.5599 1.19619C1.19464 1.36876 0.897683 1.64413 0.711576 1.98282C0.5 2.36786 0.5 2.87191 0.5 3.88V10.12C0.5 11.1281 0.5 11.6321 0.711576 12.0172C0.897683 12.3559 1.19464 12.6312 1.5599 12.8038C1.97514 13 2.51872 13 3.60588 13H5.67647M6.97059 6.4H3.08824M4.38235 8.8H3.08824M8.26471 4H3.08824M7.29412 11.2L8.58824 12.4L11.5 9.7" stroke="#E64445" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
        <div className="ms-2">10 Tasks</div>
      </div>
    </Card>
  );
}
