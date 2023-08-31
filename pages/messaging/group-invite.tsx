import PageTitle from "../../../mlh_fellowship/components/common/page_title"
import { Card, Image } from "react-bootstrap";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function GroupInvite() {
  return (
    <>
      <PageTitle title="Group Invite" />
      <div className="d-flex gap-3">
        <BsArrowLeftCircle size={40} />
        <h4
          className="gothic-header"
          style={{ color: "#7D8089", fontWeight: "600" }}
        >
          My Invites
        </h4>
      </div>
      <div className="d-flex justify-content-center">
        <Card className="p-3 border-0" style={{ width: "600px" }}>
          <div className="d-flex">
            <div>
              <Image src="/images/group/Userpic & Status.svg" />
            </div>
            <div>
              <h5 className="mb-3">Chemistry Group</h5>
              <div className="d-flex gap-4 mb-3">
                <p
                  className="rounded-2 p-1 align-content-center"
                  style={{
                    backgroundColor: "#E4EBFF",
                    fontSize: "10px",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    color: "#504EC9",
                  }}
                >
                  Profit & Loss
                </p>
                <p
                  className="rounded-2 p-1 align-content-center"
                  style={{
                    backgroundColor: "#E4EBFF",
                    fontSize: "10px",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    color: "#504EC9",
                  }}
                >
                  Profit & Loss
                </p>
                <p
                  className="rounded-2 p-1 align-content-center"
                  style={{
                    backgroundColor: "#E4EBFF",
                    fontSize: "10px",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    color: "#504EC9",
                  }}
                >
                  Profit & Loss
                </p>
              </div>
              <div className="d-flex justify-content-between gap-4">
                <div className="border-dash rounded-2 p-2">
                  <p>80</p>
                  <p>Members</p>
                </div>
                <div className="border-dash rounded-2 p-2">
                  <p>400</p>
                  <p>Tests</p>
                </div>
                <div className="border-dash rounded-2 p-2">
                  <Image src="/images/group/bird.svg" />
                  <p>Star Student</p>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-center ">
            <p className="gap-3">
              You were invited by {"   "}
              <span
                className="rounded-2 p-1 align-content-center"
                style={{
                  backgroundColor: "#E4EBFF",
                  fontSize: "10px",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  color: "#504EC9",
                }}
              >
                Ashley Ola
              </span>
              {"   "}
              <span
                className="rounded-2 p-1 align-content-center"
                style={{
                  backgroundColor: "#00D45F",
                  fontSize: "10px",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  color: "#FFFFFF",
                }}
              >
                Admin
              </span>
              {"   "}on Tuesday 5th March 2023
            </p>
          </div>
          <div className="d-flex justify-content-center mt-3 mb-3 gap-4">
            <Image src="/images/group/accept-invite.svg" />
            <Image src="/images/group/decline-invite.svg" />
          </div>
        </Card>
      </div>
      <div className="d-flex justify-content-between mt-5 mb-3">
        <p
          style={{
            fontSize: "18px",
            fontFamily: "Montserrat",
            fontWeight: "600",
            color: "#121212",
          }}
        >
          More Invites
        </p>
        <p
          style={{
            fontSize: "14px",
            fontFamily: "Montserrat",
            fontWeight: "400",
            color: "#504EC9",
          }}
        >
          View all
        </p>
      </div>
      <div className="d-flex justify-content-between">
        <Card className="p-4 border-0">
          <div className="d-flex mb-2 gap-3">
            <Image src="/images/group/Grop Pic.svg" />
            <div>
              <p
                style={{
                  fontSize: "18px",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  color: "#121212",
                }}
              >
                Star Boys Group
              </p>
              <div className="d-flex gap-3">
                <p
                  className="rounded-2 p-1 align-content-center"
                  style={{
                    backgroundColor: "#E4EBFF",
                    fontSize: "10px",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    color: "#504EC9",
                  }}
                >
                  Profit &Loss
                </p>
                <p
                  className="rounded-2 p-1 align-content-center"
                  style={{
                    backgroundColor: "#E4EBFF",
                    fontSize: "10px",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    color: "#504EC9",
                  }}
                >
                  Profit &Loss
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="border-dash rounded-2 p-2">
              <p>80</p>
              <p>Members</p>
            </div>
            <div className="border-dash rounded-2 p-2">
              <p>400</p>
              <p>Tests</p>
            </div>
            <div className="border-dash rounded-2 p-2">
              <Image src="/images/group/bird.svg" />
              <p>Star Student</p>
            </div>
          </div>
        </Card>
        <Card className="p-4 border-0">
          <div className="d-flex mb-2 gap-3">
            <Image src="/images/group/Grop Pic.svg" />
            <div>
              <p
                style={{
                  fontSize: "18px",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  color: "#121212",
                }}
              >
                Star Boys Group
              </p>
              <div className="d-flex gap-3">
                <p
                  className="rounded-2 p-1 align-content-center"
                  style={{
                    backgroundColor: "#E4EBFF",
                    fontSize: "10px",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    color: "#504EC9",
                  }}
                >
                  Profit &Loss
                </p>
                <p
                  className="rounded-2 p-1 align-content-center"
                  style={{
                    backgroundColor: "#E4EBFF",
                    fontSize: "10px",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    color: "#504EC9",
                  }}
                >
                  Profit &Loss
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="border-dash rounded-2 p-2">
              <p>80</p>
              <p>Members</p>
            </div>
            <div className="border-dash rounded-2 p-2">
              <p>400</p>
              <p>Tests</p>
            </div>
            <div className="border-dash rounded-2 p-2">
              <Image src="/images/group/bird.svg" />
              <p>Star Student</p>
            </div>
          </div>
        </Card>
        <Card className="p-4 border-0">
          <div className="d-flex mb-2 gap-3">
            <Image src="/images/group/Grop Pic.svg" />
            <div>
              <p
                style={{
                  fontSize: "18px",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  color: "#121212",
                }}
              >
                Star Boys Group
              </p>
              <div className="d-flex gap-3">
                <p
                  className="rounded-2 p-1 align-content-center"
                  style={{
                    backgroundColor: "#E4EBFF",
                    fontSize: "10px",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    color: "#504EC9",
                  }}
                >
                  Profit &Loss
                </p>
                <p
                  className="rounded-2 p-1 align-content-center"
                  style={{
                    backgroundColor: "#E4EBFF",
                    fontSize: "10px",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    color: "#504EC9",
                  }}
                >
                  Profit &Loss
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="border-dash rounded-2 p-2">
              <p>80</p>
              <p>Members</p>
            </div>
            <div className="border-dash rounded-2 p-2">
              <p>400</p>
              <p>Tests</p>
            </div>
            <div className="border-dash rounded-2 p-2">
              <Image src="/images/group/bird.svg" />
              <p>Star Student</p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
