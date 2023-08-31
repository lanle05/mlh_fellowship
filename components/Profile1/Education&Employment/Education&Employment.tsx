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
function Education() {
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
      <p
        className="fw-light mx-4 mb-2"
        style={{
          // fontWeight: "100",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#757D8A",
        }}
      >
        Enter the required information below to register.
      </p>
      <Form className="pt-4">
        <Form.Group className="mb-4 mx-4" controlId="formBasicText">
          <Form.Label className="fw-bold" style={{ color: "#404D61" }}>
            Employment Information
          </Form.Label>
          <div className="d-flex gap-3 mb-3">
            <FloatingLabel
              controlId="floatingInput"
              label="Years of Experience"
              className="fw-semibold fl2"
            >
              <Form.Control
                type="number"
                className="w-100 fl"
                name="FirstName"
                value={FormData.FirstName}
                placeholder="First Name"
                required
                onChange={HandleChange}
              />
            </FloatingLabel>
            <Form.Group className="fl2 " style={{ marginTop: "-18px" }}>
              <Form.Label
                style={{ fontSize: "10px" }}
                label="Friends Invited"
                className=" mont"
              >
                Area of Specialization
              </Form.Label>
              <Select
                styles={colourStyles}
                defaultValue={[colourOptions[0], colourOptions[3]]}
                isMulti
                name="colors"
                options={colourOptions}
                className="basic-multi-select fl"
                classNamePrefix="select "
              />
            </Form.Group>
          </div>
          <div className="d-flex gap-3 mb-3">
            <FloatingLabel
              controlId="floatingInput"
              label="Current Employer"
              className="fw-semibold fl2"
            >
              <Form.Control
                type="text"
                className="w-100 fl"
                name="Current Employer"
                value={FormData.employer}
                placeholder="Current Employer"
                required
                onChange={HandleChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Previous Employer"
              className="fw-semibold w-100 fl2"
            >
              <Form.Control
                type="tel"
                className=" fl"
                name="Previous Employer"
                value={FormData.experience}
                placeholder="Phone Number"
                required
                onChange={HandleChange}
              />
            </FloatingLabel>
          </div>
          <div className="d-flex gap-3 mb-3">
            <FloatingLabel
              controlId="floatingInput"
              label="Your School"
              className="fw-semibold fl2"
            >
              <Form.Select aria-label="Default select example">
                <option>Your School</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Class"
              className="fw-semibold w-100 fl2"
            >
              <Form.Select aria-label="Default select example">
                <option>Your Class</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>
          </div>
          <div className="d-flex gap-3 mb-3">
            <FloatingLabel
              controlId="floatingInput"
              label="Department"
              className="fw-semibold fl2"
            >
              <Form.Control
                type="email"
                className="w-100 fl"
                name="FirstName"
                value={FormData.department}
                placeholder="Department"
                required
                onChange={HandleChange}
              />
            </FloatingLabel>
          </div>
        </Form.Group>
        <Form.Group className="mb-3 mx-4">
          <Form.Label
            className="fw-bold"
            style={{ color: "#404D61" }}
            htmlFor="disabledSelect"
          >
            Academic Information
          </Form.Label>
          <div className="d-flex gap-3 mb-3">
            <FloatingLabel
              controlId="floatingInput"
              label="First Institution Attended"
              className="fw-semibold fl2"
            >
              <Form.Control
                type="text"
                className="w-100 fl"
                name="First Institution Attended"
                value={FormData.institution1}
                placeholder="First Institution Attended"
                required
                onChange={HandleChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Start Date"
              className="fw-semibold w-100 fl2"
            >
              <Form.Control
                type="date"
                className=" fl"
                name=""
                value={FormData.phone}
                placeholder="Start Date"
                required
                onChange={HandleChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="End Date"
              className="fw-semibold w-100 fl2"
            >
              <Form.Control
                type="date"
                className=" fl"
                name=""
                value={FormData.phone}
                placeholder="End Date"
                required
                onChange={HandleChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Qualification Obtained"
              className="fw-semibold w-100 fl2"
            >
              <Form.Control
                type="tel"
                className=" fl"
                name="Qualification Obtained"
                value={FormData.phone}
                placeholder="Qualification Obtained"
                required
                onChange={HandleChange}
              />
            </FloatingLabel>
          </div>
          <div className="d-flex gap-3 mb-3">
            <FloatingLabel
              controlId="floatingInput"
              label="Second Institution Attended"
              className="fw-semibold fl2"
            >
              <Form.Control
                type="text"
                className="w-100 fl"
                name="Second Institution Attended"
                value={FormData.institution2}
                placeholder="Second Institution Attended"
                required
                onChange={HandleChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Start Date"
              className="fw-semibold w-100 fl2"
            >
              <Form.Control
                type="date"
                className=" fl"
                name="Start Date"
                value={FormData.phone}
                placeholder="Phone Number"
                required
                onChange={HandleChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="End Date"
              className="fw-semibold w-100 fl2"
            >
              <Form.Control
                type="date"
                className=" fl"
                name="End Date"
                value={FormData.phone}
                placeholder="End Date"
                required
                onChange={HandleChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Qualification Obtained"
              className="fw-semibold w-100 fl2"
            >
              <Form.Control
                type="tel"
                className=" fl"
                name="Qualification Obtained"
                value={FormData.phone}
                placeholder="Qualification Obtained"
                required
                onChange={HandleChange}
              />
            </FloatingLabel>
          </div>
        </Form.Group>
      </Form>
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

export default Education;
