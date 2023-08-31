 import React, { useState, useEffect , useRef} from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
  Image,
} from "react-bootstrap";
import SearchBar from "../../../mlh_fellowship/components/SearchBar/searchBar";
import Chat from "../../../mlh_fellowship/components/messaging/chat";
import ChatHeader from "../../../mlh_fellowship/components/messaging/chat_header";
import MessageInput from "../../../mlh_fellowship/components/messaging/message_input";
import TextMessage from "../../../mlh_fellowship/components/messaging/text_message";
import { useRouter } from "next/router";
import { set } from "react-hook-form";
import AllTestService from "../../../mlh_fellowship/services/test_services/all_tests";
import { limits } from "chroma-js";
import AllTestServices from "../../../mlh_fellowship/services/test_services/all_tests";
import Skeleton from "../../../mlh_fellowship/components/Loader/skeleton";

interface MessageProps {
  message: string;
  time: string;
}

interface Messagess {
  recipient: string;
  timeSent: Date;
  message: string;
}

export default function SmtpSettings() {

  const [openChat, setOpenChat] = useState(false);
  const [activeChat, setActiveChat] = useState(false);
  const [chatName, setChatName] = useState<string>();
  const [chatEmail, setChatEmail] = useState<any>();
  const [chat, setChat] = useState<any>();
  const [studentId, setStudentId] = useState<number>();
  const [receiverId, setReceiverId] = useState<number>();
  const [term, setTerm] = useState<string>();
  const [textTime, setTextTime] = useState<any>();
  const [chatArray, setChatArray] = useState<any[]>();
  //   const [message, setMessage] = useState<string>();
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [clicked, setClicked] = useState<boolean>(true);
  const router = useRouter();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [chatsClicked, setChatsClicked] = useState(false); // Track if onChatsClick is triggered
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(false);
  const scrollToBottom = () => {
    if(messagesEndRef.current){
          messagesEndRef.current.scrollIntoView({ behavior: 'smooth' }); 
    }
  }
  const handleSubmit = async (term: string) => {
    if (studentId !== undefined && receiverId !== undefined) {
      let data = {
        myStudent_id: studentId,
        student_id: receiverId,
        message: term,
      };
      try {
        const response = await AllTestServices.SendMessage(data as any);
        if ((response && response.status === 201) || response.status === 200) {
      
        }    scrollToBottom()
        console.log(response);
      } catch (e: any) {
        // console.log(e);
        // setIsLoading(false);
      }
    }
    if (studentId !== undefined && router.query.student_id !== undefined) {
      setReceiverId(Number(router.query.student_id))
      let data = {
        myStudent_id: studentId,
        student_id: Number(router.query.student_id),
        message: term,
      };
      try {
        const response = await AllTestServices.SendMessage(data as any);
        if ((response && response.status === 201) || response.status === 200) {
          handleChats(response.data.response.id, 100);
        }    scrollToBottom()
        console.log(response);
      } catch (e: any) {
        // console.log(e);
        // setIsLoading(false);
      }
      router.push({
        pathname: router.pathname,
        query: {},
      });
    }
  };
  

  const handleChats = async (studentID: number, limit: number): Promise<void> => {
    try {
      const response = await AllTestService.GetChats(studentID, limit);
      if ((response && response.status === 201) || response.status === 200) {
        const newChatArray = [...response.data.response.messages.reverse()];
        if (!shouldScrollToBottom && chatArray !== undefined && newChatArray.length !== chatArray.length) {
          setShouldScrollToBottom(true);
        }
        if (!shouldScrollToBottom && chatArray === undefined) {
          setShouldScrollToBottom(true);
        }
        setChatArray(newChatArray);
      }
    } catch (e: any) {
      console.log(e);
    }
  };
  

  const handleChatsClick = (cha: any) => {
    setActiveChat(true);
    setOpenChat(true);
    setChatName(cha.receiver.user.first_name + ' ' + cha.receiver.user.last_name);
    setChatEmail(cha.id);
    setReceiverId(cha.receiver.id);
    router.push({
      pathname: router.pathname,
      query: {},
    });
    handleChats(cha.id, 100);
    setShouldScrollToBottom(true);
  };
  

  const fetchChatList = async (student_id: number) => {
    try {
      const response = await AllTestService.GetMyChats(student_id);
      // console.log(response.data.response)
      setChat(response.data.response.reverse());
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (shouldScrollToBottom) {
      scrollToBottom();
      setShouldScrollToBottom(false);
    }
  }, [shouldScrollToBottom]);
  
  useEffect(() => {
    const studentIdd = Number(localStorage.getItem("studentId"));
    setStudentId(Number(studentIdd));

    if (studentIdd !== undefined && studentIdd !== null ) {
      fetchChatList(studentIdd);

      // Define the interval time in milliseconds
      const intervalTime = 2000; // 5 seconds

      // Call the functions initially
      // Set up the interval to call the functions repeatedly
      const interval = setInterval(() => {
        handleChats(chatEmail, 100);
        fetchChatList(studentIdd);
      }, intervalTime);

      // Clear the interval when the component is unmounted or when necessary
      return () => {
        clearInterval(interval);
      };
    }
    
  }, [chatEmail]);
  
  useEffect(() => {
    if (router.query) {
      setOpenChat(true);
      const name = Array.isArray(router.query.name)
        ? router.query.name[0]
        : router.query.name;
        if(chat && name){ console.log(name)
          const foundName = chat.find((nam:any)=>nam.receiver.first_name == name.split(' ')[0])
          if (foundName !== undefined){
            handleChats(foundName.id, 100);
          }
        }
        setActiveChat(true);
      setChatName(name);
    } else {  
      
      setOpenChat(false);
    }
  }, []);

  return (
    <Container>
      <Card
        className=" px-1 border-0 mb-3 bg-light1 mont fade-in"
        style={{ height: "100%" }}
      >
        <div className="d-flex gap-3 mb-3 ">
          <div className="text-bluee bg-bluee rounded-2 py-2 px-3 btn-border2">
            Messages
          </div>
          <div className="py-2 px-3 ">Groups</div>
        </div>
        <Card
          className="rounded-3 bg-light1 border-0 m-0"
          style={{ height: "100%" }}
        >
          <Row style={{ height: "100%" }}>
            <Col
              xs={openChat && chatName ? 4 : 12}
              style={{ overflowY: "scroll", maxHeight: "400px" }}
              className="hideScrollbar "
            >
              <SearchBar inputClassName="w-100 mb-3 bg-white rounded-pill shadow-sm" />
              <div
                style={{ fontSize: "12px", color: "#496ABE" }}
                className="me-2  btn fw-bold bg-white rounded mb-3"
              >
                Unread (4)
              </div>
              <div className=" bg-white py-3 rounded-2 ">
                {chat !== undefined
                  ? chat.map((cha: any, index: number) => {
                      return (
                        <Chat
                          key={index}
                          name={
                            cha.receiver.user.first_name +
                            " " +
                            cha.receiver.user.last_name
                          }
                          textMessage={cha.messages.message}
                          time={new Date(
                            cha.messages.createdAt
                          ).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                          onChatsClick={() => handleChatsClick(cha)}
                          chatsClassname={`${
                            activeChat && cha.id == chatEmail
                              ? "bg-blue1 text-white shadow-sm rounded-3 shadow-sm"
                              : null
                          } p-2`}
                          textColor={`${
                            activeChat && cha.id == chatEmail
                              ? " text-white  "
                              : "text-secondary"
                          }`}
                        />
                      );
                    })
                  : "No chats found"}
              </div>
            </Col>
            {openChat && chatName ? (
              <Col xs={8} style={{ height: "360px" }}>
                <ChatHeader name={chatName} />
                <Card className="bg-white pt-3 h-100 border-white shadow-sm fade-in ">
                  <div
                    className="hideScrollbar"
                    style={{ overflowY: "scroll", maxHeight: "280px" }}
                  >
                    {chatArray &&
                      chatArray.map((message: any, index: number) => {
                        return (
                          <div key={index} className="mb-3 ">
                            <TextMessage
                              message={message.message}
                              time={new Date(
                                message.createdAt
                              ).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                              side={
                                message.sender.id === studentId
                                  ? "end"
                                  : "start"
                              }
                              margin={
                                message.sender.id !== studentId ? "s" : "e"
                              }
                              bg={
                                message.sender.id !== studentId
                                  ? "#E4EBFF"
                                  : "#F7F8FA"
                              }
                            />
                          </div>
                        );
                      })}
                      <div ref={messagesEndRef}></div>
                  </div>
                  <div
                    className="w-100 p-2"
                    style={{
                      position: "absolute",
                      bottom: "0",
                      zIndex: "1000",
                    }}
                  >
                    <MessageInput
                      onInputChange={(e) => setTerm(e.target.value)}
                      onButtonClick={() => {
                        if (term !== "" && term !== undefined) {
                          handleSubmit(term);
                          setTerm("");
                          
                        }
                        //   term !== " " && term !== undefined
                        //     ? setMessages([...messages, { message:term, }])
                        //     : null;
                        //   setTerm(" ");
                      }}
                      formValue={term}
                    />
                  </div>
                </Card>
              </Col>
            ) : null}
          </Row>
        </Card>
      </Card>
    </Container>
  );
}
