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
import OnboardingServices from "../../../services/onboarding_services/onboarding.services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const mapState = (state: any) => ({
  user: state.user.userInfo,
});
function ProfileInfo(initialValues:any) {
  // const {user} = useSelector(mapState);
   const [formData, setFormData] = useState<any>({
    first_name: initialValues.initialValues.user.first_name,
    last_name: initialValues.initialValues.user.last_name,
    middle_name: initialValues.initialValues.user.middle_name,
    address: initialValues.initialValues.address,
    gender:initialValues.initialValues.user.gender,
    email: initialValues.initialValues.user.email,
    
  });
  //   const dispatch:Dispatch<any> = useDispatch();
  const route = useRouter();
  const clickHandler = () => {
    //route.push("/dashboard/ProfileInfo");
  };
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // dispatch(createUserAction({email,password,category:userType,route}));
    let data = {};
    data = 
      formData
    ;
    try {
      const response = await OnboardingServices.UpdateTeacher(Number(localStorage.getItem('teacherId')) , data as any);
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
        Enter the required information below to register. You can change it
        anytime you want.
      </p>
      <Form className="pt-4">
        <Form.Group className="mb-3 mx-4" controlId="formBasicText">
          <Form.Label className="fw-bold" style={{ color: "#404D61" }}>
            Full name
          </Form.Label>
          <div className="d-flex gap-3">
            <FloatingLabel
              controlId="floatingInput"
              label="First Name"
              className="fw-semibold fl2"
            >
              <Form.Control
                type="text"
                className="w-100 fl"
                name="first_name"
                value={formData.first_name}
                placeholder="First Name"
                required
                onChange={HandleChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Middle Name"
              className="fl2 fw-semibold "
            >
              <Form.Control
                type="text"
                className="w-100 fl"
                name="middle_name"
                value={formData.middle_name}
                placeholder="Middle Name"
                required
                onChange={HandleChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Last Name"
              className="fw-semibold fl2"
            >
              <Form.Control
                type="text"
                className="w-100 fl"
                name="last_name"
                value={formData.last_name}
                placeholder="First Name"
                required
                onChange={HandleChange}
              />
            </FloatingLabel>
          </div>
        </Form.Group>
        <Form.Group className="mb-3 mx-4" controlId="formBasicText">
          <Form.Label className="fw-bold" style={{ color: "#404D61" }}>
            Contact Information
          </Form.Label>
          <div className="d-flex gap-3">
            <FloatingLabel
              controlId="floatingInput"
              label="Email Address"
              className="fw-semibold fl2"
            >
              <Form.Control
                type="email"
                className="w-100 fl"
                name="email"
                value={formData.email}
                placeholder="Email Address"
                required
                onChange={HandleChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Phone Number"
              className="fw-semibold w-100 fl2"
            >
              <Form.Control
                type="tel"
                className=" fl"
                name="Phone Number"
                value={formData.phone}
                placeholder="Phone Number"
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
            Address
          </Form.Label>
          <div className="d-flex gap-2">
            <Form.Select
              id="disabledSelect"
              className=""
              value={formData.country}
              name="country"
              onChange={HandleChange}
            >
              <option value="Nigeria">Nigeria</option>
            </Form.Select>
            <Form.Select
              id="disabledSelect"
              value={formData.state}
              name="state"
              className=""
              onChange={HandleChange}
            >
              <option value="">State</option>
            </Form.Select>
            <Form.Control
              type="number"
              className="fl"
              name="postalCode"
              value={formData.postalCode}
              placeholder="001101"
              required
              onChange={HandleChange}
            />
          </div>
          <Form.Control
            type="text"
            placeholder="Address"
            required
            className="mt-2"
            value={formData.address}
            name="address"
            onChange={HandleChange}
          />
        </Form.Group>
        <div className=" mb-3 mx-4 mt-4">
        <Row>
          <Col xs={4}>
            <h6 className="fw-bold gothic-medium">Profile photo</h6>
            <div className="">
              <Image
                src="../images/profile/esther1.svg"
                alt="freddie"
                className=" rounded-5"
                style={{ marginBottom: "47px" }}
              />
            </div>
          </Col>
          <Col xs={8}>
            <Form.Group
              className="mb-3 "
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Tell us about Yourself</Form.Label>
              <Form.Control placeholder="Write a little description about you." className=" w-100" as="textarea" rows={4}  />
            </Form.Group>
          </Col>
        </Row></div>
      </Form>
      <div className="d-flex justify-content-end">
      <button
          onClick={handleSubmit}
          className="btn ms-auto px-3 rounded-pill pointer"
          style={{ border: "3px solid #4862A4", color: "#4862A4" }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default ProfileInfo;
