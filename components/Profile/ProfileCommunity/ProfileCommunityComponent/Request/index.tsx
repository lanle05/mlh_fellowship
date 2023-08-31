import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { my_face } from "../../../../../constant/images";
// import { fetchFriendsRequestAction, setFriendRequestUpdateAction } from '../../../../redux/community/community.actions';

const mapState = (state: any) => ({
  friendsRequest: state.community.friendsRequest,
});

function Request() {
  const { friendsRequest } = useSelector(mapState);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    // dispatch(fetchFriendsRequestAction());
    console.log(friendsRequest);
  }, [friendsRequest]);

  const handleFriendRequest = (data: any) => {
    // dispatch(setFriendRequestUpdateAction(data))
  };
  return (
    <div>
      {friendsRequest.map((data: any, index: number) => {
        return (
          <div
            key={`request${index}`}
            className="request-friends-container d-flex  w-full justify-content-between align-items-center"
          >
            <div className="d-flex">
              <div>
                <Image width={"40px"} height={"40px"} src={my_face} alt="" />
              </div>
              <div className="friend-request-info">
                <div className="friend-request-name">
                  {data.first_name} {data.last_name}
                </div>
                <div>{data.category}</div>
              </div>
            </div>
            <div className="request-btn">
              <div
                className="ignore"
                onClick={() =>
                  handleFriendRequest({
                    cr_user_id: data.cr_user_id,
                    friend_id: data.friend_id,
                    action_user_id: data.action_user_id,
                    status: 0,
                  })
                }
              >
                Ignore
              </div>
              <div
                className="accept"
                onClick={() =>
                  handleFriendRequest({
                    cr_user_id: data.cr_user_id,
                    friend_id: data.friend_id,
                    action_user_id: data.action_user_id,
                    status: 2,
                  })
                }
              >
                Accept
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Request;
