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
import Select, { StylesConfig } from "react-select";
import chroma from "chroma-js";
import { Dispatch } from "redux";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { updateBioData } from "../../../redux/user/user.action";

const mapState = (state: any) => ({
  user: state.user.userInfo,
});
interface theOptions {
  value: string;
  label: string;
  color: string;
  backgroundColor: string;
}
const colourOptions: theOptions[] = [
  {
    value: "paul",
    label: "Biology",
    color: "#07A287",
    backgroundColor: "rgba(7, 162, 135, 0.08)",
  },
  {
    value: "ashley",
    label: "Architecture",
    color: "#5552D9",
    backgroundColor: "rgba(85, 82, 217, 0.08)",
  },
  {
    value: "john1",
    label: "Physics",
    color: "#FCA549",
    backgroundColor: "rgba(252, 165, 73, 0.08)",
  },
  {
    value: "john2",
    label: "English",
    color: "#FCA549",
    backgroundColor: "rgba(252, 165, 73, 0.08)",
  },
  {
    value: "john3",
    label: "French",
    color: "#FCA549",
    backgroundColor: "rgba(252, 165, 73, 0.08)",
  },
];

const colourStyles: StylesConfig<theOptions, true> = {
  control: (styles) => ({ ...styles, backgroundColor: "#f3f5f9" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};
function Document() {
  // const {user} = useSelector(mapState);
  const [FormData, setFormData] = useState({
    FirstName: "Esther",
    LastName: "Olabode",
    MiddleName: "Ayomide",
    phone: "+2348089954674",
    employer: "",
    experience: "",
    school: "",
    state: "",
    class: "",
    department: "",
    institution1: "",
    institution2: "",
    postalCode: "",
    street: "",
    email: "username@domain.com",
    FirstNameSkills: "",
    School: "",
    Department: "",
    ParentFirstName: "",
    ParentLastName: "",
    ParentEmail: "",
    Contact: "",
    MainInterest: "Science",
    Gender: "",
  });
  //   useEffect(() => {
  //     setFormData({
  //         ...FormData,
  //         FirstName: user.first_name,
  //         LastName:user.last_name,
  //         email:user.email
  //     })
  //   },[user]);
  //   const dispatch:Dispatch<any> = useDispatch();
  const route = useRouter();
  const clickHandler = () => {
    //route.push("/dashboard/ProfileInfo");
  };
  const HandleSubmit = async (e: any) => {
    // try {
    //     dispatch(updateBioData({
    //         first_name: FormData.FirstName,
    //         last_name: FormData.LastName,
    //     }));
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const HandleChange = (e: any) => {
    const { type, value, name } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "number" ? Number(value) : value,
      };
    });
  };

  return (
    <div className="mont ">
      <Row>
        <Col xs={6}>
          <p
            className="fw-light mx-4 mb-2"
            style={{
              // fontWeight: "100",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#757D8A",
            }}
          >
            Upload Your documents here.
          </p>
          <Form className="pt-4">
            <Form.Group className="mb-4 mx-4" controlId="formBasicText">
              <div className="d-flex gap-3 mb-3">
                <FloatingLabel
                  controlId="floatingInput"
                  label="ID Card Type"
                  className="fw-semibold fl2"
                >
                  <Form.Select aria-label="Default select example">
                    <option>ID Card Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="ID Number"
                  className="fw-semibold w-100 fl2"
                >
                  <Form.Select aria-label="Default select example">
                    <option>ID Number</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
                <Card className="w-100 rounded-3 px-3 pt-2 pb-3 mb-3">
                  <div
                    className=""
                    style={{ fontSize: "10px", color: "#5A6474" }}
                  >
                    Upload ID Card
                  </div>
                  <label htmlFor="file">
                    <div className="d-flex gap-2 mt-2"></div>
                    <input
                      className="text-secondary"
                      type="file"
                      id="file"
                      name="filename"
                      multiple
                      accept="image/png, image/jpeg, image/jpg"
                    />
                  </label>
                </Card>
                <Card className="w-100 rounded-3 px-3 pt-2 pb-3 mb-3">
                  <div
                    className=""
                    style={{ fontSize: "10px", color: "#5A6474" }}
                  >
                    Resume
                  </div>
                  <label htmlFor="file">
                    <div className="d-flex gap-2 mt-2"></div>
                    <input
                      className="text-secondary"
                      type="file"
                      id="file"
                      name="filename"
                      multiple
                      accept="image/png, image/jpeg, image/jpg"
                    />
                  </label>
                </Card>
                <Card className="w-100 rounded-3 px-3 pt-2 pb-3 mb-3">
                  <div
                    className=""
                    style={{ fontSize: "10px", color: "#5A6474" }}
                  >
                   SSCE Certificate
                  </div>
                  <label htmlFor="file">
                    <div className="d-flex gap-2 mt-2"></div>
                    <input
                      className="text-secondary"
                      type="file"
                      id="file"
                      name="filename"
                      multiple
                      accept="image/png, image/jpeg, image/jpg"
                    />
                  </label>
                </Card>
                <Card className="w-100 rounded-3 px-3 pt-2 pb-3 mb-3">
                  <div
                    className=""
                    style={{ fontSize: "10px", color: "#5A6474" }}
                  >
                    NCE/OND Certificate
                  </div>
                  <label htmlFor="file">
                    <div className="d-flex gap-2 mt-2"></div>
                    <input
                      className="text-secondary"
                      type="file"
                      id="file"
                      name="filename"
                      multiple
                      accept="image/png, image/jpeg, image/jpg"
                    />
                  </label>
                </Card>
                <Card className="w-100 rounded-3 px-3 pt-2 pb-3 mb-3">
                  <div
                    className=""
                    style={{ fontSize: "10px", color: "#5A6474" }}
                  >
                    B.SC/ B.Tech Certificate
                  </div>
                  <label htmlFor="file">
                    <div className="d-flex gap-2 mt-2"></div>
                    <input
                      className="text-secondary"
                      type="file"
                      id="file"
                      name="filename"
                      multiple
                      accept="image/png, image/jpeg, image/jpg"
                    />
                  </label>
                </Card>
                <Card className="w-100 rounded-3 px-3 pt-2 pb-3 mb-3">
                  <div
                    className=""
                    style={{ fontSize: "10px", color: "#5A6474" }}
                  >
                    M.SC Certificate
                  </div>
                  <label htmlFor="file">
                    <div className="d-flex gap-2 mt-2"></div>
                    <input
                      className="text-secondary"
                      type="file"
                      id="file"
                      name="filename"
                      multiple
                      accept="image/png, image/jpeg, image/jpg"
                    />
                  </label>
                </Card>
            </Form.Group>
          </Form>
        </Col>
        <Col xs={6}>
          <Form.Group className="mb-3 ">
            <Form.Label
              className="fw-bold"
              style={{ color: "#404D61" }}
              htmlFor="disabledSelect"
            >
              Academic Information
              
            </Form.Label>
          <div>
            <h4 style={{ marginBottom: "16px" }} className='h5 mt-4 fw-bold'>
              My Documents
            </h4>
            <div className=" w-100">
              <div
                className="d-flex  shadow align-items-center mb-3 gap-2  rounded-2 w-100"
                style={{ padding: "8px 11px", border:' 1px solid #4E73F8' }}
              >
                <div>
                  <Image src="../images/profile/icon.png" alt="" />
                </div>
                <div>
                  <h6
                    style={{
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#5A647A",
                    }}
                  >
                    About myself.pdf
                  </h6>
                  <p
                    style={{
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#757D8A",
                    }}
                  >
                    12.3MB
                  </p>
                </div>
              </div>
              <div
                className="d-flex align-items-center gap-2 shadow rounded-2 w-100"
                style={{ padding: "8px 11px", border:' 1px solid #4E73F8' }}
              >
                <div>
                  <Image src="../images/profile/icon.png" alt="" />
                </div>
                <div>
                  <h6 
                    style={{
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#5A647A",
                    }}
                  >
                    About myself.pdf
                  </h6>
                  <p
                    style={{
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#757D8A",
                    }}
                  >
                    12.3MB
                  </p>
                </div>
              </div>
            </div>
          </div>
          </Form.Group>
        </Col>
      </Row>
      <div className="d-flex justify-content-end">
      <button
          // onClick={() => router.push("")}
          className="btn ms-auto px-3 rounded-pill"
          style={{ border: "3px solid #4862A4", color: "#4862A4" }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Document;
