import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Card, Row, Col, Spinner, Stack, Table, Badge } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function CategoryCard(props:any) {
  const router = useRouter();
 
  return (
    <Col xl={2} className="p-3 mb-3" >
        <Card className={`${props.cardClassname} rounded-4 shadow-sm pointer`} onClick={props.onCatClick}>
            <Card.Img className="rounded-0"  src={`/images/${props.img}.svg`}/>
            <Card.Body>
                <div  style={{ fontSize: "18px", color: props.textColor, backgroundColor:props.bg , borderRadius:'0px 0px 15px 15px' }} className="text-center  p-1 fw-bold">{props.name}</div>
            </Card.Body>
        </Card>
        </Col>
        )
}
