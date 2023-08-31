import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Image } from "react-bootstrap";
import { useEffect, useState } from "react";

type UserType = {
  first_name: string;
  last_name: string;
  id: number;
};
interface ModalProps {
  show: boolean;
  onHide: () => void;
  handlechange: (e: any) => void;
  friendsdata: UserType[];
  children: any;
}

function GroupInviteModal(props: ModalProps) {
  // const [friend, setFriend] = useState<any[]>([]);
  const [state, setState] = useState<boolean>(false);

  console.log(state);
  console.log(props.friendsdata);
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="my-modal"
      className="p-3"
    >
      <Modal.Header closeButton>
        <Modal.Title
          className="text-decoration-underline "
          id="contained-modal-title-vcenter"
          style={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "700",
          }}
        >
          Friends
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <p>search word</p>

          <input
            className="rounded-2 w-100 mb-4"
            placeholder="Search.."
            onChange={props.handlechange}
          />
          {/* <button
            onClick={() => {
              // setFriend(props.friendsdata);
              // console.log("clicked");
              // console.log(friend.length);

              setState((prev) => {
                return !prev;
              });
            }}
          >
            Search
          </button>
          {state && <div>I am happy</div>} */}

          {props.children}
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default GroupInviteModal;
