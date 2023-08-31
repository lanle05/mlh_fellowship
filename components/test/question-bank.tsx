import React, { useState } from "react";
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
  label: string;
  questions_limit: number;
  questions_available: number; 
  questionNumber: number; 
  onForward:(e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onBackwards: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onQuestionNumberChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
  // icon:any;
//   teacher: string;
//   onTopicsOpen: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export default function FriendsInvited(props: itemProps) {


  return (
    <Card className="mont p-3 border-0 mb-3" style={{backgroundColor:'rgba(7, 162, 135, 0.08)'}}>
        <Row>
            <Col xs={6}>
                <div style={{fontSize:'14px', color:'#07A287'}} className='mb-1' >{props.label}</div>
                <div style={{fontSize:'12px', color:'#2B788B'}} className='mb-1'>Questions Limit: {props.questions_limit}</div>
                <div style={{fontSize:'12px', color:'#2B788B'}}> Questions Available: {props.questions_available}</div>
            </Col>
            <Col className="my-auto" >
            <div style={{maxWidth:'121px'}} className="d-flex border rounded-pill bg-white">
<button
                onClick={props.onBackwards}
                className="btn"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 9.5V11.5H15V9.5H5ZM10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM10 18.5C5.59 18.5 2 14.91 2 10.5C2 6.09 5.59 2.5 10 2.5C14.41 2.5 18 6.09 18 10.5C18 14.91 14.41 18.5 10 18.5Z"
                    fill="#CDCDCD"
                  />
                </svg>
              </button>
              <input className="mt-2  rounded-2 border-0 mb-1" style={{width: '25px'}} value={isNaN(props.questionNumber)? ' ': props.questionNumber } onChange={props.onQuestionNumberChange}></input>
              <button
                onClick={props.onForward}
                className="btn"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 15.5H11V11.5H15V9.5H11V5.5H9V9.5H5V11.5H9V15.5ZM10 20.5C8.61667 20.5 7.31667 20.2373 6.1 19.712C4.88333 19.1867 3.825 18.4743 2.925 17.575C2.025 16.675 1.31267 15.6167 0.788 14.4C0.263333 13.1833 0.000666667 11.8833 0 10.5C0 9.11667 0.262667 7.81667 0.788 6.6C1.31333 5.38333 2.02567 4.325 2.925 3.425C3.825 2.525 4.88333 1.81267 6.1 1.288C7.31667 0.763333 8.61667 0.500667 10 0.5C11.3833 0.5 12.6833 0.762667 13.9 1.288C15.1167 1.81333 16.175 2.52567 17.075 3.425C17.975 4.325 18.6877 5.38333 19.213 6.6C19.7383 7.81667 20.0007 9.11667 20 10.5C20 11.8833 19.7373 13.1833 19.212 14.4C18.6867 15.6167 17.9743 16.675 17.075 17.575C16.175 18.475 15.1167 19.1877 13.9 19.713C12.6833 20.2383 11.3833 20.5007 10 20.5ZM10 18.5C12.2333 18.5 14.125 17.725 15.675 16.175C17.225 14.625 18 12.7333 18 10.5C18 8.26667 17.225 6.375 15.675 4.825C14.125 3.275 12.2333 2.5 10 2.5C7.76667 2.5 5.875 3.275 4.325 4.825C2.775 6.375 2 8.26667 2 10.5C2 12.7333 2.775 14.625 4.325 16.175C5.875 17.725 7.76667 18.5 10 18.5Z"
                    fill="#3E4259"
                  />
                </svg>
              </button>
            </div>
            
              </Col>
            <Col className="my-auto"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.707 13.293C15.098 13.684 15.098 14.316 14.707 14.707C14.512 14.902 14.256 15 14 15C13.744 15 13.488 14.902 13.293 14.707L12 13.414L10.707 14.707C10.512 14.902 10.256 15 10 15C9.744 15 9.488 14.902 9.293 14.707C8.902 14.316 8.902 13.684 9.293 13.293L10.586 12L9.293 10.707C8.902 10.316 8.902 9.684 9.293 9.293C9.684 8.902 10.316 8.902 10.707 9.293L12 10.586L13.293 9.293C13.684 8.902 14.316 8.902 14.707 9.293C15.098 9.684 15.098 10.316 14.707 10.707L13.414 12L14.707 13.293ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z" fill="#07A287"/>
</svg>
</Col>
        </Row>
    </Card>
  );
}
