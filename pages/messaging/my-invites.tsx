import PageTitle from "../../../mlh_fellowship/components/common/page_title";
import { Card, Image, ProgressBar } from "react-bootstrap";
import SearchBar from "../../../mlh_fellowship/components/SearchBar/searchBar";

export default function myInvites() {
  return (
    <>
      <PageTitle title="My Invites" />
      <Card
        className=" px-1 border-0 mb-3 bg-light1 mont fade-in"
        style={{ height: "100%" }}
      >
        <div className="d-flex gap-3 mb-3 justify-content-between ">
          <div className="d-flex gap-3">
            <div style={{ color: "#7D8089" }} className="py-2 px-3">
              Messages
            </div>
            <div className="py-2 px-3 text-bluee bg-bluee rounded-2 btn-border2">
              Groups
            </div>
          </div>
          <div>
            <Image src="/images/group/Button.svg" />
          </div>
        </div>
      </Card>
      <Card
        className="rounded-3 bg-light1 border-0 m-0"
        style={{ height: "100%" }}
      >
        <div
          style={{ fontSize: "12px", color: "#496ABE" }}
          className="me-2 d-flex p-3 justify-content-between btn fw-bold bg-white rounded mb-3"
        >
          <div className="d-flex gap-3">
            <p
              className="p-3 align-content-center"
              style={{ color: "#7D8089" }}
            >
              My Groups(5){" "}
            </p>
            <p
              className="p-3 align-content-center"
              style={{ backgroundColor: "#E4EBFF", borderRadius: "10px" }}
            >
              My Invites(70)
            </p>
          </div>
          <div>
            <SearchBar inputClassName="mb-3 bg-white rounded-pill shadow-sm" />
          </div>
        </div>
        <Card style={{ backgroundColor: "#F7F8FA" }} className="border-0">
          <div className="d-flex justify-content-evenly p-2 border-0">
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
        </Card>
      </Card>
    </>
  );
}
