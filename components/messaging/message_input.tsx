import React, { ChangeEventHandler, FormEvent, useRef } from "react";
import { Row, Col, Image, Form, InputGroup, Button } from "react-bootstrap";

interface inputProps {
  onButtonClick: (e: any) => void;
  onInputChange: (e: any) => void;
  formValue: any;
}

export default function MessageInput(props: inputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onButtonClick(e);
  };

  return (
    <div className="mt-3 ms-2 p-1 border-bottom border rounded-3">
      <Row>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Form.Control
              value={props.formValue}
              className=" border-0"
              placeholder="Write Message"
              aria-label="Recipient's username with two button addons"
              onChange={props.onInputChange}
            />

          {/* <Form type="file" /> */}
          {/* <input type="file" title=" " /> */}
          <Button onClick={props.onButtonClick} variant="">
            <svg
              width="15"
              height="21"
              viewBox="0 0 15 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.17559 10.5082C2.17559 10.3491 2.11237 10.1965 1.99985 10.0839C1.88733 9.97142 1.73472 9.9082 1.57559 9.9082C1.41646 9.9082 1.26384 9.97142 1.15132 10.0839C1.0388 10.1965 0.975586 10.3491 0.975586 10.5082C0.975354 12.1549 1.59072 13.7422 2.70085 14.9585C3.81098 16.1748 5.33568 16.9321 6.97559 17.0818V19.5082C6.97559 19.6673 7.0388 19.8199 7.15132 19.9325C7.26384 20.045 7.41646 20.1082 7.57559 20.1082C7.73472 20.1082 7.88733 20.045 7.99985 19.9325C8.11237 19.8199 8.17559 19.6673 8.17559 19.5082V17.0818C9.81549 16.9321 11.3402 16.1748 12.4503 14.9585C13.5605 13.7422 14.1758 12.1549 14.1756 10.5082C14.1756 10.3491 14.1124 10.1965 13.9998 10.0839C13.8873 9.97142 13.7347 9.9082 13.5756 9.9082C13.4165 9.9082 13.2638 9.97142 13.1513 10.0839C13.0388 10.1965 12.9756 10.3491 12.9756 10.5082C12.9756 11.2173 12.8359 11.9195 12.5645 12.5747C12.2932 13.2299 11.8954 13.8251 11.394 14.3266C10.8925 14.828 10.2972 15.2258 9.64208 15.4972C8.98692 15.7685 8.28472 15.9082 7.57559 15.9082C6.86645 15.9082 6.16425 15.7685 5.5091 15.4972C4.85394 15.2258 4.25865 14.828 3.75721 14.3266C3.25577 13.8251 2.85801 13.2299 2.58664 12.5747C2.31526 11.9195 2.17559 11.2173 2.17559 10.5082ZM11.1756 10.5082C11.1756 11.463 10.7963 12.3787 10.1212 13.0538C9.44604 13.7289 8.53036 14.1082 7.57559 14.1082C6.62081 14.1082 5.70513 13.7289 5.03 13.0538C4.35487 12.3787 3.97559 11.463 3.97559 10.5082V4.5082C3.97559 3.55342 4.35487 2.63775 5.03 1.96262C5.70513 1.28749 6.62081 0.908203 7.57559 0.908203C8.53036 0.908203 9.44604 1.28749 10.1212 1.96262C10.7963 2.63775 11.1756 3.55342 11.1756 4.5082V10.5082Z"
                fill="#B5B5C3"
              />
            </svg>
          </Button>
          <Button onClick={props.onButtonClick} variant="">
            <Image alt="send" src="../images/sendd.svg"></Image>
          </Button>
        </InputGroup>
        </Form>
      </Row>
    </div>
  );
}
