import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { useState } from "react";

export default function MyVerticallyCenteredModal(props: any) {
  const [questionNumber, setQuestionNumber] = useState<number>(100);
  const [questionYear, setQuestionYear] = useState<number>(2017);
  return (
    <Modal
      {...props}
      size=""
      
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-0" closeButton>
        <Modal.Title>{/* {props.title} */}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-3">
        <div className="mb-4" >
          <div
            className="fw-bold mb-3"
            style={{ color: "#333238", fontSize: "14px", lineHeight: "16px" }}
          >
            Choose Exam Type
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div style={{fontSize: '14px'}} className="d-flex">
              <div className="text-accent border rounded-2 px-2">UTME</div>
              <div className="ms-3 color-light"> WAEC</div>
              <div className="ms-3 color-light">NECO</div>
            </div>
            <div>
              <div>
                <Form.Check
                  // type="switch"
                  className="color-light"
                  id="custom-switch"
                  label="Random"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div
            className="fw-bold mb-3"
            style={{ color: "#333238", fontSize: "14px", lineHeight: "16px" }}
          >
            Choose Number of Questions
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div style={{ width: "" }} className="d-flex rounded-pill border">
              <button
                onClick={() => {
                  setQuestionNumber(questionNumber - 1);
                }}
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
              <input className="mt-2 ms-4 border-0" style={{width: '50px'}} value={isNaN(questionNumber)? ' ': questionNumber } onChange={(e)=>  setQuestionNumber(parseInt(e.target.value,10))}></input>
              <button
                onClick={() => {
                    
                  setQuestionNumber(questionNumber + 1);
                }}
                className="btn ms-4"
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
            <div>
              <div>
                <Form.Check
                  // type="switch"
                  className="color-light"
                  id="custom-switch"
                  label="Random"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div
            className="fw-bold mb-3"
            style={{ color: "#333238", fontSize: "14px", lineHeight: "16px" }}
          >
            Choose Exam Year
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div style={{ width: "" }} className="d-flex rounded-pill border">
              <button
                onClick={() => {
                  setQuestionYear(questionYear - 1);
                }}
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
              <input className="mt-2 ms-4 border-0" style={{width: '50px'}} value={isNaN(questionYear)? ' ': questionYear } onChange={(e)=>setQuestionYear(parseInt(e.target.value,10))}></input>
              <button
                onClick={() => {
                  setQuestionYear(questionYear + 1);
                }}
                className="btn ms-4"
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
            <div>
              <div>
                <Form.Check
                  // type="switch"
                  className="color-light"
                  id="custom-switch"
                  label="Random"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button className="rounded-pill border-success border border-2 d-block mx-auto px-4">
          Start
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
