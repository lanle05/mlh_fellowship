import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
// import { Dispatch } from 'redux';
import { my_face } from "../../../../../constant/images";
// import { handleConnectUserAction, handlePeopleYouKnowAction } from '../../../../redux/community/community.actions';
// import { setLoaderAction } from '../../../../redux/features/features.action';
import LoadingSpinner from "../../../../Loader";

const mapState = (state: any) => ({
  peopleyouknow: state.community.peopleYouKnow,
  loader: state.features.loader,
});
function ConnectFriends() {
  const [peopleyouknow, loader] = useState();
  // const dispatch:Dispatch<any> = useDispatch();

  // useEffect(() => {
  //     dispatch(setLoaderAction(true));
  //     dispatch(handlePeopleYouKnowAction());
  // },[]);

  // const handleConnectToUser = (id:number) => {
  //     dispatch(handleConnectUserAction({friend_id:id}))
  // }
  return (
    <div className="connect-friends-container">
      <div className="connect-friends-header d-flex justify-content-between">
        <div>Find your friends</div>
        <div className="d-flex">
          <div className="search-people">
            <input placeholder="Search ...." />
            <CiSearch size={20} color={"#2C2F48"} />
          </div>
        </div>
      </div>
      {/* FRIEND CARDS */}
      {/* { */}
      loader ?
      <div className="d-flex w-100 h-100 justify-content-center align-items-center">
        <LoadingSpinner />
      </div>
      :
      <div className="community-cards-container container text-center">
        <div className="community-cards row">
          {/* { */}
          {/* // peopleyouknow.length > 0 ?  */}
          {/* // peopleyouknow.map((people:any,index:number) => { */}
          {/* // return ( */}
          <div className="community-card col-lg-3">
            <div>
              <Image width={"67px"} height={"67px"} src={my_face} alt="" />
            </div>
            <div className="people-name">
              {/* {people.first_name}{people.last_name} */}
            </div>
            <div className="d-flex justify-content-center people-cards">
              <div className="people-card">
                <h5>80</h5>
                <p>Challenges</p>
              </div>
              <div className="people-card">
                <h5>400</h5>
                <p>Following</p>
              </div>
              <div className="people-card">
                <h5>236</h5>
                <p>Followers</p>
              </div>
            </div>
            <div className="d-flex align-items-center community-btn justify-content-center">
              <div className="view-user-btn">view</div>
              <div
                className="connect-btn"
                //  onClick={() => handleConnectToUser(people.user_id)}
              >
                + connect
              </div>
            </div>
          </div>
          {/* // ) */}
          {/* // }) */}
          {/* : null */}
          {/* // }         */}
        </div>
      </div>
      {/* // } */}
    </div>
  );
}

export default ConnectFriends;
