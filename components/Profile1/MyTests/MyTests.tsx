import PageTitle from "../../../components/common/page_title";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Card, Row, Col, Spinner } from "react-bootstrap";
import QuestionBank from "../../../components/test/question-bank";
import AllTestService from "../../../services/test_services/all_tests";
import Select, { StylesConfig } from "react-select";
import chroma from "chroma-js";
import Test from "../../../components/test/test-card1";
import ActiveTest from "../../../components/test/active-tests";
import TestHistory from "../../../components/test/test-history";
import moment from "moment";
import SelectQuestionServices from "../../../services/test_services/select_question";

import { AddTestProfileModel, TestProfileModel } from "../../../models/test_models";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
export default function SelectQuestions(props:any) {
  const router = useRouter();
  const [firstName, setFirstName] = useState<string>();
  const [middleName, setMiddleName] = useState<string>();
  const [lastName, setLastName] = useState<string>();

  useEffect(() => {
    const myfirstName = localStorage.getItem("firstName1");
    if (myfirstName !== null && myfirstName !== undefined) {
      setFirstName(myfirstName);
    }

    const mylastName = localStorage.getItem("lastName1");
    if (mylastName !== null && mylastName !== undefined) {
      setLastName(mylastName);
    }
    const userID = localStorage.getItem("userId");
  }, []);
  return (
    <div >
      <ToastContainer />
      <div
        // style={{color:'#878997', fontWeight:'600'}}

        className="d-flex cursor-pointer select-friends mb-3 mont"
      >
        {/* <div onClick={() => handleCommunityTab(0)}>People you may know</div> */}
        <div
          style={{ fontSize: "12px" }}
          className="me-2 btn fw-bold text-accent bg-light"
        >
          7 days ago
        </div>
        <div
          style={{ fontSize: "12px" }}
          className="me-2 btn fw-bold text-secondary"
        >
          1 month ago
        </div>
        <div
          style={{ fontSize: "12px" }}
          className="me-2  btn fw-bold text-secondary"
        >
          3 months ago
        </div>
        <div
          style={{ fontSize: "12px" }}
          className="me-2 btn fw-bold text-secondary"
        >
          6 months ago
        </div>
        <div
          style={{ fontSize: "12px" }}
          className="me-2  btn fw-bold text-secondary"
        >
          1 year ago
        </div>
      </div>
     

      <div>
        <Row>
          {props.testList !== undefined ? (
            props.testList.map((item:any, index:any) => (
              <Test
                onEditClick={() =>
                  router.push({
                    pathname: "/",
                    query: {
                      testId: item.test_id,
                    },
                  })
                }
                testType={item.test_type}
               test_price={item.test_price}
                completionClass={
                    "bgsucc text-white rounded-2 px-2"
                }
                questions={
                  item.questions + " Questions" 
                }
                testCardClass={` testCard border-0
                }  rounded-5 p-0 `}
                key={item.test_id}
                testUser={firstName + " " + lastName}
                testName={item.test_name}
                bg={'#E19D43'}
                src={'/images/teacherimage.svg'}
                // startDate={moment.utc(item.start_date).format('MM/DD/YYYY')} endDate={moment.utc(item.end_date).format('MM/DD/YYYY')}
              />
            ))
          ) 
        
          : (null
          )}
        </Row>
      </div>
    </div>
  );
}
