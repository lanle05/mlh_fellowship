import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { my_face } from "../../../../../constant/images";
// import { fetchMyFriendsAction } from '../../../../../redux/community/community.actions';
import { BsChatDotsFill } from "react-icons/bs";
// import { setLoaderAction } from '../../../../redux/features/features.action';
import LoadingSpinner from "../../../../Loader";

const mapState = (state: any) => ({
  allMyFriends: state.community.allMyFriends,
  loader: state.features.loader,
});
function Friends(props: any) {
  // const {allMyFriends,loader} = useSelector(mapState);
  const [display, setDisplay] = useState();
  // const dispatch:Dispatch<any> = useDispatch();
  const handleDisplay = (e: any) => {
    setDisplay(e.target.value);
  };

  // useEffect(() => {
  //   dispatch(setLoaderAction(true));
  //   dispatch(fetchMyFriendsAction());
  // },[allMyFriends]);
  return (
    <div className="bg-white rounded-3 shadow-sm px-2  py-3">
      {/* FRIEND CARDS */}

      <div style={{ height: "100px" }} className=" ">
        <div className="">
          <div className="d-flex gap-3">
            <div>
              <Image width={"67px"} height={"67px"} src={my_face} alt="" />
            </div>
            <div>
              <div onClick={props.onNameClick} className="pointer fw-bold mb-2">{props.name}</div>
              <div className=" fw-semibold mb-2 d-flex gap-1 align-items-center">
                <svg
                  width="34"
                  height="16"
                  viewBox="0 0 34 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5046 11.8029V7.05044C10.5046 7.05044 6.38614 6.10021 1 4.19922C2.90099 8.95143 8.28676 8.95143 8.28676 8.95143C8.28676 8.95143 6.38614 9.90219 2.90099 9.58536C5.11908 12.4363 10.5046 11.8029 10.5046 11.8029Z"
                    fill="#FFF8D5"
                    stroke="#8E7928"
                    stroke-width="0.633663"
                  />
                  <path
                    d="M23.4954 11.8029V7.05044C23.4954 7.05044 27.6139 6.10021 33 4.19922C31.099 8.95143 25.7132 8.95143 25.7132 8.95143C25.7132 8.95143 27.6139 9.90219 31.099 9.58536C28.8809 12.4363 23.4954 11.8029 23.4954 11.8029Z"
                    fill="#FFF8D5"
                    stroke="#8E7928"
                    stroke-width="0.633663"
                  />
                  <path
                    d="M16.6834 1.76841C16.9775 1.59862 17.3398 1.59862 17.6339 1.76841L22.3181 4.47285C22.6122 4.64264 22.7934 4.95642 22.7934 5.296V10.7049C22.7934 11.0445 22.6122 11.3583 22.3181 11.528L17.6339 14.2325C17.3398 14.4023 16.9775 14.4023 16.6834 14.2325L11.9992 11.528C11.7051 11.3583 11.5239 11.0445 11.5239 10.7049V5.296C11.5239 4.95642 11.7051 4.64264 11.9992 4.47285L16.6834 1.76841Z"
                    fill="#759BFE"
                    stroke="#284389"
                    stroke-width="1.90099"
                  />
                </svg>
                {props.category}
              </div>
              <div></div>
              <div style={{ color: "#B5B5C3" }} className="fw-semibold mb-3">
                {props.follow_status}
              </div>
            </div>
            <div className="d-flex align-items-start ms-4">
              {props.stat === 'unfollow'?
              <svg
              onClick={props.unfollowClick}
              className="pointer"
                width="19"
                height="4"
                viewBox="0 0 19 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33334 3.33269C0.95556 3.33269 0.638672 3.20469 0.382672 2.94869C0.126672 2.69269 -0.000884275 2.37624 4.6136e-06 1.99935C4.6136e-06 1.62158 0.128005 1.30469 0.384005 1.04869C0.640005 0.792686 0.956449 0.665131 1.33334 0.66602H17.3333C17.7111 0.66602 18.028 0.79402 18.284 1.05002C18.54 1.30602 18.6676 1.62246 18.6667 1.99935C18.6667 2.37713 18.5387 2.69402 18.2827 2.95002C18.0267 3.20602 17.7102 3.33358 17.3333 3.33269H1.33334Z"
                  fill="#933D2A"
                />
              </svg>:
              <svg
              onClick={props.followClick}
              className="pointer"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99935 19.3132C9.62158 19.3132 9.30469 19.1852 9.04869 18.9292C8.79269 18.6732 8.66513 18.3567 8.66602 17.9798V11.3132H1.99935C1.62158 11.3132 1.30469 11.1852 1.04869 10.9292C0.792687 10.6732 0.665131 10.3567 0.66602 9.97982C0.66602 9.60205 0.79402 9.28516 1.05002 9.02916C1.30602 8.77316 1.62246 8.6456 1.99935 8.64649H8.66602V1.97982C8.66602 1.60204 8.79402 1.28516 9.05002 1.02916C9.30602 0.773156 9.62247 0.6456 9.99935 0.646489C10.3771 0.646489 10.694 0.774489 10.95 1.03049C11.206 1.28649 11.3336 1.60293 11.3327 1.97982V8.64649H17.9994C18.3771 8.64649 18.694 8.77449 18.95 9.03049C19.206 9.28649 19.3336 9.60293 19.3327 9.97982C19.3327 10.3576 19.2047 10.6745 18.9487 10.9305C18.6927 11.1865 18.3762 11.314 17.9994 11.3132H11.3327V17.9798C11.3327 18.3576 11.2047 18.6745 10.9487 18.9305C10.6927 19.1865 10.3762 19.314 9.99935 19.3132Z"
                  fill="#6C3D93"
                />
              </svg>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friends;
