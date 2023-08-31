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
  topic: string;
//   title: string;
//   teacher: string;
//   onIconClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export default function Subtopic(props:itemProps) {
  return (
    <>
    <div className="mb-3">
      <div style={{fontSize: '20px'}} className="fw-bold">{props.topic}</div>
    </div>
    {/* <div className="border-bottom border-2 border-danger mb-5" style={{width:'280px'}}></div> */}
    </> 
  );
}
