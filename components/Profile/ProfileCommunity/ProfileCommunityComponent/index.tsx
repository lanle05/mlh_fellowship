import React from "react";
import SearchBar from "../../../SearchBar/searchBar";
import router, { useRouter } from "next/router";
import {
  Col,
  Row,
  Container,
  Image,
  Card,
  ProgressBar,
  Form,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import Friends from "./Friends";
import ConnectFriends from "./ConnectFriends";
import Request from "./Request";
import OnboardingServices from "../../../../services/onboarding_services/onboarding.services";
import AllTestServices from "../../../../services/test_services/all_tests";
function ProfileCommunity(props:any) {
  const [tabId, setTabId] = useState(0);
  const [display, setDisplay] = useState<any>();
  const [display1, setDisplay1] = useState<any>();
  const [communityTab, setCommunityTab] = useState<any>(2);
  const [status, setStatus] = useState<any>();
  // const dispatch:Dispatch<any> = useDispatch();
  

  const handleFollow = async (
    e: React.MouseEvent<HTMLImageElement, MouseEvent> | React.MouseEvent<HTMLButtonElement>,
    serId: number
  ) => {
    e.preventDefault();
    if(serId){


       let data = {
        my_id: Number(localStorage.getItem("userId")),
        user_id: Number(serId)
      
    };
    try {
      const response = await AllTestServices.Follow(data as any);
      // console.log(response.data.response)
      setStatus('followed')
    
    } catch (e) {
      console.log(e);
    }
    }
   
  };
  const handleUnfollow = async (
    e: React.MouseEvent<HTMLImageElement, MouseEvent> | React.MouseEvent<HTMLButtonElement>,
    serId: number
  ) => {
    e.preventDefault();
    if(serId){


       let data = {
        my_id: Number(localStorage.getItem("userId")),
        user_id: Number(serId)
      
    };
    try {
      const response = await AllTestServices.Unfollow(data as any);
      // console.log(response.data.response)
      setStatus('un-followed')
    } catch (e) {
      console.log(e);
    }
    }
   
  };
  const FetchFollowers = async (user_id: number) => {
    try {
      const response = await OnboardingServices.GetFollowers(user_id);
      if (response && response.status === 200) {
        setDisplay(response.response);
      }
    } catch (e: any) {
      console.log(e);
      // toast.error(e)
      // setIsLoading(false);
    }
  };
  const FetchFollows = async (user_id: number) => {
    try {
      const response = await OnboardingServices.GetFollows(user_id);
      if (response && response.status === 200) {
        setDisplay1(response.response);
      }
    } catch (e: any) {
      console.log(e);
      // toast.error(e)
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    const userId = props.myuser;
    if (userId !== undefined && userId !== null) {
      FetchFollowers(Number(userId));
      FetchFollows(Number(userId));
    }
  }, [props.myuser, status]);
  return (
    <div className="" style={{ minHeight: "50vh" }}>
      {/* selected friend , follower, following , recieved */}

      <div>
        <div className="d-flex friends-header justify-content-between mb-3">
        <div
            // style={{color:'#878997', fontWeight:'600'}}
            className="d-flex cursor-pointer select-friends mb-3"
          >
            {/* <div onClick={() => handleCommunityTab(0)}>People you may know</div> */}
            <div
              className="me-3 btn fw-bold "
              onClick={() => setCommunityTab(1)}
              style={{color: communityTab === 1 ? "#496ABE":"#7D8089", 
              backgroundColor:communityTab === 1 ? "#E4EBFF":"white"
      }}
            >
              Following
            </div>
            <div
              className="me-3  btn fw-bold"
              onClick={() => setCommunityTab(2)}
              style={{color: communityTab === 2 ? "#496ABE":"#7D8089", 
                    backgroundColor:communityTab === 2 ? "#E4EBFF":"white"
            }}
            >
              Followers
            </div>
          </div>
          <div className=" mb-3">
            <SearchBar inputClassName="border rounded-pill shadow-sm " />
            {/* <CiSearch size={20} color={'#2C2F48'} /> */}
          </div>
        </div>

        {communityTab === 1 &&
        <div className="bg-light1 p-4 rounded">
          <Row className="mb-4">
            {display1 !== undefined
              ? display1.map((follower: any, index: number) => (
                  <Col className="mb-3" key={index} xs={4}>
                    <Friends 
                    unfollowClick={(e:any)=>handleUnfollow(e,follower.user_id)}
                    followClick={(e:any)=>handleFollow(e,follower.user_id)}
                    onNameClick={() => {
                                router.push({
                                  pathname:
                                    "/student/otherprofile/student-profile",
                                  query: {
                                    id: follower.id,
                                  },
                                });
                              }} stat={'unfollow'} name={follower.first_name +" "+ follower.last_name} category={follower.category} follow_status={follower.follow_status}/>
                  </Col>
                ))
              : "Follows not found"}
          </Row>
          
        </div>}
        {communityTab === 2 &&
        <div className="bg-light1 p-4 rounded">
          <Row className="mb-4">
            {display !== undefined
              ? display.map((follower: any, index: number) => (
                  <Col className="mb-3" key={index} xs={4}>
                    <Friends 
                    unfollowClick={(e:any)=>handleUnfollow(e,follower.user_id)}
                    followClick={(e:any)=>handleFollow(e,follower.user_id)}
                    
                    onNameClick={() => {
                                router.push({
                                  pathname:
                                    "/student/otherprofile/student-profile",
                                  query: {
                                    id: follower.id,
                                  },
                                });
                              }} stat={follower.follow_status !=='friends'? 'follow':'unfollow'} name={follower.first_name +" "+ follower.last_name} category={follower.category} follow_status={follower.follow_status}/>
                  </Col>
                ))
              : "Followers not found"}
          </Row>
          
        </div>}
      </div>
    </div>
  );
}

export default ProfileCommunity;
