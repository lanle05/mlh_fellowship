import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  Col,
  Row,
  Container,
  Image,
  Card,
  ProgressBar,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { Dispatch } from "redux";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { updateBioData } from "../../../redux/user/user.action";

const mapState = (state: any) => ({
  user: state.user.userInfo,
});
function Experience() {
  // const {user} = useSelector(mapState);
  return (
    <div className="mont ">
      <Row className="p-3 text-secondary">
        <Col>
        <div className="mb-3 gothic-medium text-secondary">Employment information</div>
          <Card style={{backgroundColor:'#F7F8FA'}} className="border-bottom-9px p-3 shadow-sm">
            <div className="mb-3 gothic-medium" style={{color:'#07A287'}}>Computer Studies Teacher</div>
            <div className="mb-3">Christ The Reedeemer Secondary School, Gbagada</div>
            <div className="mb-3">2005 - Till Date</div>
          </Card>
        </Col>
        <Col>
        <div className="mb-3 gothic-medium text-secondary">Academic information</div>
        <Card style={{backgroundColor:'#F7F8FA'}} className="border-bottom-9px p-3 mb-3 shadow-sm">
            <div className="mb-3 gothic-medium" style={{color:'#07A287'}}>M.sc Computer Engineering</div>
            <div className="mb-3">Bells university of Technology, Ota</div>
            <div className="mb-3">2003 - 2005</div>
          </Card>
          <Card style={{backgroundColor:'#F7F8FA'}} className="border-bottom-9px p-3 shadow-sm">
            <div className="mb-3 gothic-medium" style={{color:'#07A287'}}>B.sc Computer Engineering</div>
            <div className="mb-3">Bells university of Technology, Ota</div>
            <div className="mb-3">1999 - 2003</div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Experience;
