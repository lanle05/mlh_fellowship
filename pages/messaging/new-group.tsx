import PageTitle from "../../../mlh_fellowship/components/common/page_title";
import { Card, Image, Form, FormCheck, Button } from "react-bootstrap";
import Select, { StylesConfig } from "react-select";
import chroma from "chroma-js";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function newGroup() {
  return (
    <>
      <PageTitle title="New Group" />
      <div className="d-flex gap-3">
        <BsArrowLeftCircle size={40} />
        <h4
          className="gothic-header"
          style={{ color: "#7D8089", fontWeight: "600" }}
        >
          New Group
        </h4>
      </div>
      <div className="mt-3 d-flex align-items-center justify-content-center p-3 w-100">
        <Card className="rounded-4 p-3 border-0" style={{ width: "450px" }}>
          <Form className="mb-4 mt-2 ">
            <div className="d-flex align-items-center justify-content-center">
              <h4
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                Group Picture
              </h4>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <Image src="/images/group/Userpic & Status.svg" />
            </div>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold mont">Group Name</Form.Label>
              <Form.Control
                style={{ fontSize: "14px" }}
                type="text"
                className="bg-light1"
                placeholder="Enter your Group Name"
                autoComplete="off"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold mont">
                Subjects of Interest
              </Form.Label>
              <Form.Control
                style={{ fontSize: "14px" }}
                type="email"
                className="bg-light1"
                placeholder="Profit & Loss"
                autoComplete="off"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label label="Confirm Password" className="fw-semibold mont">
                Minimum Rank
              </Form.Label>
              <Select
                placeholder="Who can attempt?"
                isMulti
                menuPlacement="top"
                className="basic-multi-select mb-3 rounded-3"
                classNamePrefix="select"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold mont">
                Friends Invited
              </Form.Label>
              <Form.Control
                style={{ fontSize: "14px" }}
                type="email"
                className="bg-light1"
                placeholder="John Doe"
                autoComplete="off"
                required
              />
            </Form.Group>
            <div className="d-flex align-items-end justify-content-end">
              <Button
                className="rounded-pill btn border-0"
                style={{
                  backgroundColor: "#718ACA",
                  borderBottom: "3px solid var(--primary-dark-2, #475780)",
                  borderRight: "2px solid var(--primary-dark-2, #475780)",
                }}
              >
                Save
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
}
