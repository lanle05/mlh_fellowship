import { Row, Col, Image, Card } from "react-bootstrap";

interface TextMessageProps {
  message: string;
  time: string;
  side: string;
  margin: string;
  bg: string;
}

export default function GroupText(props: TextMessageProps) {
  return (
    <div className={`d-flex gap-2 fade-in justify-content-${props.side} m${props.margin}-3 `}>
      <div className="" style={{ maxWidth: "65%" }}>
        <div className=" p-3 rounded " style={{ cursor: "pointer", backgroundColor: props.bg }}>
            <div>
                @rehema
            </div>
          {props.message}
        </div>
        <em
          className={`d-flex justify-content-${props.side}`}
          style={{ color: "#787D83", fontSize: "10px" }}
        >
          {props.time}
        </em>
      </div>
      <div className="d-flex align-items-end">
        <Image alt="chatpic" src="/images/chatpic.svg"></Image>
      </div>
    </div>
  );
}