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
  label: string;
  icon:any;
//   teacher: string;
//   onTopicsOpen: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export default function FriendsInvited(props: itemProps) {
  return (
    <div className="d-flex">
        <Image alt="image" src={`/images/${props.icon}.svg`} />
        <div>{props.label}</div>
    </div>
  );
}
