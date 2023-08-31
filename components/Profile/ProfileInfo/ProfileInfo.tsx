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
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { Dispatch } from "redux";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { updateBioData } from "../../../redux/user/user.action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OnboardingServices from "../../../services/onboarding_services/onboarding.services";

function ProfileInfo({initialValues}: any) {
  const [formData, setFormData] = useState<any>({
    first_name: initialValues.user.first_name,
    last_name: initialValues.user.last_name,
    gender: initialValues.user.gender,
    email: initialValues.user.email,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // dispatch(createUserAction({email,password,category:userType,route}));
    let data = {};
    data = 
      formData
    ;
    try {
      const response = await OnboardingServices.UpdateStudent(Number(localStorage.getItem('teacherId')) , data as any);
      if (response && response.status === 200) {
        toast.success('Profile updated')
      } else {
        // toast.error('An error has occurred please try again later')

        return;
        // setIsLoading(false);
      }
      console.log(response);
    } catch (e: any) {
      console.log(e);
      // toast.error(e)
      // setIsLoading(false);
    }
  };


  const HandleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    < >
    <ToastContainer />
      <Row style={{ fontFamily: "Dm Sans", fontWeight: "bold" }}>
        <Col className="px-5" lg={6} style={{ borderRight: "1px solid #EFF2F5" }}>
          <h4
            className="pb-2 fw-bold"
            style={{ fontSize: "20px" }}
          >
            User Information
          </h4>
          <p
            className="fw-light mb-2"
            style={{
              // fontWeight: "100",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#757D8A",
            }}
          >
            Enter the required information below to register. You can change it
            anytime you want.
          </p>
          <Form className="pt-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold" style={{color: '#404D61'}} >
                Email address
              </Form.Label>
              <Form.Control
                name="email"
                type="email"
                className="bg-light"
                value={formData.email}
                placeholder="username@domain.com"
                required
                onChange={HandleChange}
            
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label className="fw-bold" style={{color: '#404D61'}}>Full name</Form.Label>
              <div className="d-flex gap-2">
                <Form.Control
                  type="text"
                  className="bg-light"
                  name="first_name"
                  value={formData.first_name}
                  placeholder="First Name"
                  required
                  onChange={HandleChange}
                />
                <Form.Control
                  type="text"
                  name="last_name" className="bg-light"
                  value={formData.last_name}
                  placeholder="Last Name"
                  required
                  onChange={HandleChange}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold" style={{color: '#404D61'}} htmlFor="disabledSelect">
                Address
              </Form.Label>
              <div className="d-flex gap-2">
                <Form.Select
                  id="disabledSelect" className="bg-light"
                  value={formData.country}
                  name="country"
                  onChange={HandleChange}
                >
                  <option value="Nigeria">Nigeria</option>
                </Form.Select>
                <Form.Select
                  id="disabledSelect"
                  value={formData.state}
                  name="state" className="bg-light"
                  onChange={HandleChange}
                >
                  <option value="">State</option>
                </Form.Select>
                <Form.Control
                  type="number" className="bg-light"
                  name="postalCode"
                  value={formData.postalCode}
                  placeholder="001101"
                  required
                  onChange={HandleChange}
                />
              </div>
              <Form.Control
                type="text"
                placeholder="Street"
                required
                className="mt-2 bg-light"
                value={formData.street}
                name="street"
                onChange={HandleChange}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicText">
              <Form.Label className="fw-bold" style={{color: '#404D61'}} >
                Choose your skills
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Skills"
                name="Skills"
                value={formData.FirstNameSkills}
                required className="bg-light"
                onChange={HandleChange}
              />
            </Form.Group>
            <Form.Group className="mb-4 " controlId="formBasicText">
              <Form.Label  className="h5 fw-bold">
                Academic Information
              </Form.Label>
              <p className="mb-3">
                <small
                  style={{
                    // fontWeight: "100",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#757D8A",
                  }}
                  className="fw-light"
                >
                  Enter the required information below to save your academic
                  information
                </small>
              </p>
              <div className="d-flex gap-2 mb-3">
                <Form.Select
                  id="disabledSelect"
                  value={formData.School}
                  name="School" className="bg-light"
                  onChange={HandleChange}
                >
                  <option value="">Your School</option>
                </Form.Select>

                <Form.Select
                  id="disabledSelect"
                  name="class" className="bg-light"
                  value={formData.class}
                  onChange={HandleChange}
                >
                  <option value="">Class</option>
                </Form.Select>
              </div>
              <Form.Select
                id="disabledSelect"
                name="Department" className="bg-light"
                value={formData.Department}
                onChange={HandleChange}
              >
                <option value="">Department</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicText">
              <Form.Label className="h5 fw-bold" >
                Parent/Guardian
              </Form.Label>
              <p className="mb-3">
                <small
                  className="fw-lighter"
                  style={{
                    // fontWeight: "100",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#757D8A",
                  }}
                >
                  Enter the required information below to save your
                  parent&apos;s / guardian information
                </small>
              </p>
              <div className="d-flex gap-2 mb-2">
                <Form.Control
                  type="text" className="bg-light"
                  placeholder="First Name"
                  name="ParentFirstName"
                  value={formData.ParentFirstName}
                  required
                  onChange={HandleChange}
                />
                <Form.Control
                  type="text" className="bg-light"
                  placeholder="Last Name"
                  name="ParentLastName"
                  value={formData.ParentLastName}
                  required
                  onChange={HandleChange}
                />
              </div>
              <Form.Control
                type="email"
                placeholder="username@domain.com"
                required className="bg-light"
                name="ParentEmail"
                value={formData.ParentEmail}
                onChange={HandleChange}
              />
              <Form.Control
                type="number"
                placeholder="Contact"
                required
                className="mt-2 bg-light"
                name="Contact" 
                value={formData.Contact}
                onChange={HandleChange}
              />
            </Form.Group>
          </Form>
          <div>
            <h4 style={{ marginBottom: "16px" }} className='h5 fw-bold'>
              My Documents
            </h4>
            <div className="d-flex gap-2">
              <div
                className="d-flex align-items-center gap-2 border border-2 rounded-2 w-100"
                style={{ padding: "8px 11px" }}
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
                className="d-flex align-items-center gap-2 border border-2 rounded-2 w-100"
                style={{ padding: "8px 11px" }}
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
        </Col>
        <Col className=' py-3 px-5 rounded-3'  lg={6}>
          <h6
            style={{
              // color: "#404D61",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "24px",
              // color: "#404D61",
              marginBottom: "30px",
            }}
            className='fw-bold'
          >
            Profile photo
          </h6>
          <div className="d-flex justify-content-center">
            <Image
              src="../images/profile/small-freddie.png"
              alt="freddie"
              className="bg-yellow rounded-5"
              style={{ marginBottom: "47px" }}
            />
          </div>
          <Form>
            <Form.Group className="mb-3 edu-select">
              <Form.Label style={{ color: "#404D61" }}>
                Choose your main interest
              </Form.Label>
              <Form.Select
                name="MainInterest"
                value={formData.MainInterest}
                className="shadow-2 bg-light"
                onChange={HandleChange}
              >
                <option value="Science">Science</option>
                <option value="Education" className="mb-2">
                  Education
                </option>
                <option value="YeahScience">Yeeeah, science</option>
                <option value="Arts">Arts</option>
                <option value="Politics"> Politics</option>
                <option value="Sports">Sports</option>
                <option value="Games">Games</option>
                <option value="Animals">Animals</option>
                <option value="Health">Health</option>
                <option value="Business">Business</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label
                htmlFor="disabledTextInput"
                style={{ color: "#404D61" }}
              >
                Select your gender
              </Form.Label>
            </Form.Group>
            <div className="d-flex gap-3">
              <Form.Check
                type="radio"
                label="Male"
                id="default radio"
                name="gender"
                value="Male"
                checked={formData.gender ==="male"}
                onChange={HandleChange}
              />
              <Form.Check
                type="radio"
                label="Female"
                id="default radio"
                name="gender"
                value="Female"
                checked={formData.gender === "memale"}
                onChange={HandleChange}
              />
            </div>
          </Form>
        </Col>
      </Row>
      <div className="d-flex justify-content-end">
        <button
          className=" border border-2 rounded-5 mt-4"
          style={{ padding: "4px 72.5px" }}
          onClick={handleSubmit}
        >
          
          Save Changes
        </button>
      </div>
    </>
  );
}

export default ProfileInfo;
