import {Row, Col, Image, Card } from "react-bootstrap";

interface ChatProps{
    name: string;
    textMessage: string;
    time: string;
    chatsClassname: string;
    textColor: string;
    onChatsClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}

export default function Chat(props: ChatProps) {
   
    return (
        <div className="mt-3 chathover" style={{cursor: 'pointer'}}>
            <Row className={props.chatsClassname} onClick={props.onChatsClick}>
                <Col xs={2}>
                    <Image alt="user" style={{borderRadius: '50%'}} className="border-dark-gray-1 border mt-3" src='../images/Userpic3.svg'></Image>
                </Col>
                <Col xs={9} className='ms-3 '>
                    <div className={`${props.textColor} fw-semibold`} style={{fontSize: '14px'}}>{props.name}</div>
                    <div className={props.textColor} style={{color: '#8A92A6', fontSize: '14px'}}>{props.textMessage}</div>
                    <div className={props.textColor}><em style={{ fontSize: '12px'}}>{props.time}</em></div>
                </Col>
            </Row>
        </div>
    )
}