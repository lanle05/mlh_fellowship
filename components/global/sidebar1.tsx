import { Accordion } from "react-bootstrap";
import { ItemProps } from "../../utils/store";
import MainSidebar from "./sidebar_components/mainsidebar1";
import SidebarCollaspeWrap from "./sidebar_components/sidebar_accord_collapse";
import SidebarAccordToggle from "./sidebar_components/sidebar_accord_toggle";
import SidebarLink from "./sidebar_components/sidebar_link1";
import SidebarSection from "./sidebar_components/sidebar_section";
import SearchBar from "../SearchBar/searchBar";

export default function Sidebar() {
  return (
    <MainSidebar>
      <Accordion>
        <SidebarLink
          path={"/teacher/dashboard"}
          icon2={
            <svg
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.63994 17.8359C2.85687 17.9428 3.09528 17.9989 3.33711 18C3.55118 17.9984 3.76242 17.951 3.95663 17.8609C4.15085 17.7709 4.32355 17.6403 4.46311 17.478L10.8201 10.322C10.9836 10.1379 11.1004 9.9171 11.1606 9.67834C11.2208 9.43958 11.2227 9.18984 11.1662 8.95019C11.1096 8.71054 10.9962 8.48802 10.8355 8.30141C10.6749 8.1148 10.4717 7.96958 10.2431 7.878L8.05011 7L9.37511 1.929C9.43822 1.70573 9.44821 1.4708 9.40428 1.24298C9.36035 1.01517 9.26372 0.800791 9.12211 0.617C8.97405 0.426001 8.78448 0.271192 8.56774 0.164296C8.351 0.0573987 8.11278 0.00121553 7.87111 0C7.65705 0.00162202 7.44581 0.0490446 7.25159 0.139081C7.05738 0.229117 6.88468 0.359682 6.74511 0.522L0.387114 7.674C0.223634 7.85814 0.106852 8.0789 0.0466241 8.31766C-0.0136035 8.55642 -0.0155086 8.80616 0.0410696 9.04581C0.0976478 9.28546 0.211049 9.50798 0.371701 9.69459C0.532353 9.8812 0.735541 10.0264 0.964114 10.118L3.15711 11L1.83211 16.071C1.76893 16.2943 1.7589 16.5292 1.80283 16.757C1.84677 16.9849 1.94344 17.1992 2.08511 17.383C2.23328 17.5741 2.42302 17.729 2.63994 17.8359Z"
                fill="#7D8089"
              />
            </svg>
          }
          icon={
            <svg
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.63994 17.8359C2.85686 17.9428 3.09528 17.9989 3.33711 18C3.55118 17.9984 3.76242 17.951 3.95663 17.8609C4.15085 17.7709 4.32355 17.6403 4.46311 17.478L10.8201 10.322C10.9836 10.1379 11.1004 9.9171 11.1606 9.67834C11.2208 9.43958 11.2227 9.18984 11.1662 8.95019C11.1096 8.71054 10.9962 8.48802 10.8355 8.30141C10.6749 8.1148 10.4717 7.96958 10.2431 7.878L8.05011 7L9.37511 1.929C9.43822 1.70573 9.44821 1.4708 9.40428 1.24298C9.36035 1.01517 9.26372 0.800791 9.12211 0.617C8.97405 0.426001 8.78448 0.271192 8.56774 0.164296C8.351 0.0573987 8.11278 0.00121553 7.87111 0C7.65705 0.00162202 7.44581 0.0490446 7.25159 0.139081C7.05738 0.229117 6.88468 0.359682 6.74511 0.522L0.387114 7.674C0.223634 7.85814 0.106852 8.0789 0.0466239 8.31766C-0.0136037 8.55642 -0.0155088 8.80616 0.0410695 9.04581C0.0976477 9.28546 0.211049 9.50798 0.371701 9.69459C0.532353 9.8812 0.73554 10.0264 0.964114 10.118L3.15711 11L1.83211 16.071C1.76893 16.2943 1.7589 16.5292 1.80283 16.757C1.84677 16.9849 1.94344 17.1992 2.08511 17.383C2.23328 17.5741 2.42302 17.729 2.63994 17.8359Z"
                fill="white"
              />
            </svg>
          }
          linkName="Dashboard"
          activeName={"dashboard"}
        />
        <SidebarLink
          path={"/teacher/userprofile/"}
          icon={
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00038 10.75C5.62282 10.75 3.50847 11.898 2.16237 13.6795C1.87265 14.0629 1.7278 14.2546 1.73253 14.5137C1.7362 14.7139 1.8619 14.9664 2.0194 15.09C2.22327 15.25 2.50578 15.25 3.0708 15.25H12.93C13.495 15.25 13.7775 15.25 13.9814 15.09C14.1389 14.9664 14.2646 14.7139 14.2682 14.5137C14.273 14.2546 14.1281 14.0629 13.8384 13.6795C12.4923 11.898 10.3779 10.75 8.00038 10.75Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00038 8.5C9.86434 8.5 11.3754 6.98896 11.3754 5.125C11.3754 3.26104 9.86434 1.75 8.00038 1.75C6.13642 1.75 4.62538 3.26104 4.62538 5.125C4.62538 6.98896 6.13642 8.5 8.00038 8.5Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          icon2={
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00038 10.75C5.62282 10.75 3.50847 11.898 2.16237 13.6795C1.87265 14.0629 1.7278 14.2546 1.73253 14.5137C1.7362 14.7139 1.8619 14.9664 2.0194 15.09C2.22327 15.25 2.50578 15.25 3.0708 15.25H12.93C13.495 15.25 13.7775 15.25 13.9814 15.09C14.1389 14.9664 14.2646 14.7139 14.2682 14.5137C14.273 14.2546 14.1281 14.0629 13.8384 13.6795C12.4923 11.898 10.3779 10.75 8.00038 10.75Z"
                stroke="#7D8089"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00038 8.5C9.86434 8.5 11.3754 6.98896 11.3754 5.125C11.3754 3.26104 9.86434 1.75 8.00038 1.75C6.13642 1.75 4.62538 3.26104 4.62538 5.125C4.62538 6.98896 6.13642 8.5 8.00038 8.5Z"
                stroke="#7D8089"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          linkName="Profile"
          activeName={"Profile"}
        />

        <SidebarLink
          path={"/teacher/lms/"}
          icon2={  <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4.25C12 3.55252 12 3.20378 11.9233 2.91766C11.7153 2.1412 11.1088 1.53472 10.3323 1.32667C10.0462 1.25 9.69748 1.25 9 1.25C8.30252 1.25 7.95378 1.25 7.66766 1.32667C6.8912 1.53472 6.28472 2.1412 6.07667 2.91766C6 3.20378 6 3.55252 6 4.25M3.9 14.75H14.1C14.9401 14.75 15.3601 14.75 15.681 14.5865C15.9632 14.4427 16.1927 14.2132 16.3365 13.931C16.5 13.6101 16.5 13.1901 16.5 12.35V6.65C16.5 5.80992 16.5 5.38988 16.3365 5.06901C16.1927 4.78677 15.9632 4.5573 15.681 4.41349C15.3601 4.25 14.9401 4.25 14.1 4.25H3.9C3.05992 4.25 2.63988 4.25 2.31901 4.41349C2.03677 4.5573 1.8073 4.78677 1.66349 5.06901C1.5 5.38988 1.5 5.80992 1.5 6.65V12.35C1.5 13.1901 1.5 13.6101 1.66349 13.931C1.8073 14.2132 2.03677 14.4427 2.31901 14.5865C2.63988 14.75 3.05992 14.75 3.9 14.75Z"
              stroke="#7D8089"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          }
          icon={ <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4.25C12 3.55252 12 3.20378 11.9233 2.91766C11.7153 2.1412 11.1088 1.53472 10.3323 1.32667C10.0462 1.25 9.69748 1.25 9 1.25C8.30252 1.25 7.95378 1.25 7.66766 1.32667C6.8912 1.53472 6.28472 2.1412 6.07667 2.91766C6 3.20378 6 3.55252 6 4.25M3.9 14.75H14.1C14.9401 14.75 15.3601 14.75 15.681 14.5865C15.9632 14.4427 16.1927 14.2132 16.3365 13.931C16.5 13.6101 16.5 13.1901 16.5 12.35V6.65C16.5 5.80992 16.5 5.38988 16.3365 5.06901C16.1927 4.78677 15.9632 4.5573 15.681 4.41349C15.3601 4.25 14.9401 4.25 14.1 4.25H3.9C3.05992 4.25 2.63988 4.25 2.31901 4.41349C2.03677 4.5573 1.8073 4.78677 1.66349 5.06901C1.5 5.38988 1.5 5.80992 1.5 6.65V12.35C1.5 13.1901 1.5 13.6101 1.66349 13.931C1.8073 14.2132 2.03677 14.4427 2.31901 14.5865C2.63988 14.75 3.05992 14.75 3.9 14.75Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
            
          }
          linkName="LMS Content"
          activeName={"LMS Content"}
        />
        <svg
          width="209"
          height="1"
          viewBox="0 0 209 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="0.5"
            x2="208.5"
            y2="0.499982"
            stroke="#718ACA"
            stroke-opacity="0.42"
            stroke-linecap="round"
          />
        </svg>

        <SidebarLink
          path={"/teacher/tests&challenges"}
          icon2={
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 14.75L8.92496 14.6374C8.40398 13.856 8.14349 13.4652 7.79933 13.1824C7.49464 12.9319 7.14357 12.7441 6.7662 12.6295C6.33994 12.5 5.87033 12.5 4.93112 12.5H3.9C3.05992 12.5 2.63988 12.5 2.31901 12.3365C2.03677 12.1927 1.8073 11.9632 1.66349 11.681C1.5 11.3601 1.5 10.9401 1.5 10.1V3.65C1.5 2.80992 1.5 2.38988 1.66349 2.06901C1.8073 1.78677 2.03677 1.5573 2.31901 1.41349C2.63988 1.25 3.05992 1.25 3.9 1.25H4.2C5.88016 1.25 6.72024 1.25 7.36197 1.57698C7.92646 1.8646 8.3854 2.32354 8.67302 2.88803C9 3.52976 9 4.36984 9 6.05M9 14.75V6.05M9 14.75L9.07504 14.6374C9.59602 13.856 9.85651 13.4652 10.2007 13.1824C10.5054 12.9319 10.8564 12.7441 11.2338 12.6295C11.6601 12.5 12.1297 12.5 13.0689 12.5H14.1C14.9401 12.5 15.3601 12.5 15.681 12.3365C15.9632 12.1927 16.1927 11.9632 16.3365 11.681C16.5 11.3601 16.5 10.9401 16.5 10.1V3.65C16.5 2.80992 16.5 2.38988 16.3365 2.06901C16.1927 1.78677 15.9632 1.5573 15.681 1.41349C15.3601 1.25 14.9401 1.25 14.1 1.25H13.8C12.1198 1.25 11.2798 1.25 10.638 1.57698C10.0735 1.8646 9.6146 2.32354 9.32698 2.88803C9 3.52976 9 4.36984 9 6.05"
                stroke="#7D8089"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          icon={
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 14.75L8.92496 14.6374C8.40398 13.856 8.14349 13.4652 7.79933 13.1824C7.49464 12.9319 7.14357 12.7441 6.7662 12.6295C6.33994 12.5 5.87033 12.5 4.93112 12.5H3.9C3.05992 12.5 2.63988 12.5 2.31901 12.3365C2.03677 12.1927 1.8073 11.9632 1.66349 11.681C1.5 11.3601 1.5 10.9401 1.5 10.1V3.65C1.5 2.80992 1.5 2.38988 1.66349 2.06901C1.8073 1.78677 2.03677 1.5573 2.31901 1.41349C2.63988 1.25 3.05992 1.25 3.9 1.25H4.2C5.88016 1.25 6.72024 1.25 7.36197 1.57698C7.92646 1.8646 8.3854 2.32354 8.67302 2.88803C9 3.52976 9 4.36984 9 6.05M9 14.75V6.05M9 14.75L9.07504 14.6374C9.59602 13.856 9.85651 13.4652 10.2007 13.1824C10.5054 12.9319 10.8564 12.7441 11.2338 12.6295C11.6601 12.5 12.1297 12.5 13.0689 12.5H14.1C14.9401 12.5 15.3601 12.5 15.681 12.3365C15.9632 12.1927 16.1927 11.9632 16.3365 11.681C16.5 11.3601 16.5 10.9401 16.5 10.1V3.65C16.5 2.80992 16.5 2.38988 16.3365 2.06901C16.1927 1.78677 15.9632 1.5573 15.681 1.41349C15.3601 1.25 14.9401 1.25 14.1 1.25H13.8C12.1198 1.25 11.2798 1.25 10.638 1.57698C10.0735 1.8646 9.6146 2.32354 9.32698 2.88803C9 3.52976 9 4.36984 9 6.05"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          linkName="Test & Challenges"
          activeName={"Test & Challenges"}
        />
        <SidebarLink
          path={"/teacher/myquestions/"}
          icon2={
            <svg
              width="18"
              height="8"
              viewBox="0 0 18 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 3.65104C8.42515 3.11632 9.57476 3.11632 10.4999 3.65104M6.62132 1.87868C7.79289 3.05025 7.79289 4.94974 6.62132 6.12132C5.44975 7.29289 3.55026 7.29289 2.37868 6.12132C1.20711 4.94975 1.20711 3.05026 2.37868 1.87868C3.55025 0.707107 5.44974 0.707107 6.62132 1.87868ZM15.6213 1.87868C16.7929 3.05025 16.7929 4.94974 15.6213 6.12132C14.4498 7.29289 12.5503 7.29289 11.3787 6.12132C10.2071 4.94975 10.2071 3.05026 11.3787 1.87868C12.5502 0.707107 14.4497 0.707107 15.6213 1.87868Z"
                stroke="#7D8089"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          icon={
            <svg
              width="18"
              height="8"
              viewBox="0 0 18 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 3.65104C8.42515 3.11632 9.57476 3.11632 10.4999 3.65104M6.62132 1.87868C7.79289 3.05025 7.79289 4.94974 6.62132 6.12132C5.44975 7.29289 3.55026 7.29289 2.37868 6.12132C1.20711 4.94975 1.20711 3.05026 2.37868 1.87868C3.55025 0.707107 5.44974 0.707107 6.62132 1.87868ZM15.6213 1.87868C16.7929 3.05025 16.7929 4.94974 15.6213 6.12132C14.4498 7.29289 12.5503 7.29289 11.3787 6.12132C10.2071 4.94975 10.2071 3.05026 11.3787 1.87868C12.5502 0.707107 14.4497 0.707107 15.6213 1.87868Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          linkName="My Questions"
          activeName={"My Questions"}
        />
        <SidebarLink
          path={"/teacher/leaderboard"}
          icon2={
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4.25C12 3.55252 12 3.20378 11.9233 2.91766C11.7153 2.1412 11.1088 1.53472 10.3323 1.32667C10.0462 1.25 9.69748 1.25 9 1.25C8.30252 1.25 7.95378 1.25 7.66766 1.32667C6.8912 1.53472 6.28472 2.1412 6.07667 2.91766C6 3.20378 6 3.55252 6 4.25M3.9 14.75H14.1C14.9401 14.75 15.3601 14.75 15.681 14.5865C15.9632 14.4427 16.1927 14.2132 16.3365 13.931C16.5 13.6101 16.5 13.1901 16.5 12.35V6.65C16.5 5.80992 16.5 5.38988 16.3365 5.06901C16.1927 4.78677 15.9632 4.5573 15.681 4.41349C15.3601 4.25 14.9401 4.25 14.1 4.25H3.9C3.05992 4.25 2.63988 4.25 2.31901 4.41349C2.03677 4.5573 1.8073 4.78677 1.66349 5.06901C1.5 5.38988 1.5 5.80992 1.5 6.65V12.35C1.5 13.1901 1.5 13.6101 1.66349 13.931C1.8073 14.2132 2.03677 14.4427 2.31901 14.5865C2.63988 14.75 3.05992 14.75 3.9 14.75Z"
                stroke="#7D8089"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          icon={
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4.25C12 3.55252 12 3.20378 11.9233 2.91766C11.7153 2.1412 11.1088 1.53472 10.3323 1.32667C10.0462 1.25 9.69748 1.25 9 1.25C8.30252 1.25 7.95378 1.25 7.66766 1.32667C6.8912 1.53472 6.28472 2.1412 6.07667 2.91766C6 3.20378 6 3.55252 6 4.25M3.9 14.75H14.1C14.9401 14.75 15.3601 14.75 15.681 14.5865C15.9632 14.4427 16.1927 14.2132 16.3365 13.931C16.5 13.6101 16.5 13.1901 16.5 12.35V6.65C16.5 5.80992 16.5 5.38988 16.3365 5.06901C16.1927 4.78677 15.9632 4.5573 15.681 4.41349C15.3601 4.25 14.9401 4.25 14.1 4.25H3.9C3.05992 4.25 2.63988 4.25 2.31901 4.41349C2.03677 4.5573 1.8073 4.78677 1.66349 5.06901C1.5 5.38988 1.5 5.80992 1.5 6.65V12.35C1.5 13.1901 1.5 13.6101 1.66349 13.931C1.8073 14.2132 2.03677 14.4427 2.31901 14.5865C2.63988 14.75 3.05992 14.75 3.9 14.75Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          linkName="Leaderboard"
          activeName={"Leaderboard"}
        />
        <SidebarLink
          path={"/admin_center/dashboard/"}
          icon2={
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4.25C12 3.55252 12 3.20378 11.9233 2.91766C11.7153 2.1412 11.1088 1.53472 10.3323 1.32667C10.0462 1.25 9.69748 1.25 9 1.25C8.30252 1.25 7.95378 1.25 7.66766 1.32667C6.8912 1.53472 6.28472 2.1412 6.07667 2.91766C6 3.20378 6 3.55252 6 4.25M3.9 14.75H14.1C14.9401 14.75 15.3601 14.75 15.681 14.5865C15.9632 14.4427 16.1927 14.2132 16.3365 13.931C16.5 13.6101 16.5 13.1901 16.5 12.35V6.65C16.5 5.80992 16.5 5.38988 16.3365 5.06901C16.1927 4.78677 15.9632 4.5573 15.681 4.41349C15.3601 4.25 14.9401 4.25 14.1 4.25H3.9C3.05992 4.25 2.63988 4.25 2.31901 4.41349C2.03677 4.5573 1.8073 4.78677 1.66349 5.06901C1.5 5.38988 1.5 5.80992 1.5 6.65V12.35C1.5 13.1901 1.5 13.6101 1.66349 13.931C1.8073 14.2132 2.03677 14.4427 2.31901 14.5865C2.63988 14.75 3.05992 14.75 3.9 14.75Z"
                stroke="#7D8089"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          icon={
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4.25C12 3.55252 12 3.20378 11.9233 2.91766C11.7153 2.1412 11.1088 1.53472 10.3323 1.32667C10.0462 1.25 9.69748 1.25 9 1.25C8.30252 1.25 7.95378 1.25 7.66766 1.32667C6.8912 1.53472 6.28472 2.1412 6.07667 2.91766C6 3.20378 6 3.55252 6 4.25M3.9 14.75H14.1C14.9401 14.75 15.3601 14.75 15.681 14.5865C15.9632 14.4427 16.1927 14.2132 16.3365 13.931C16.5 13.6101 16.5 13.1901 16.5 12.35V6.65C16.5 5.80992 16.5 5.38988 16.3365 5.06901C16.1927 4.78677 15.9632 4.5573 15.681 4.41349C15.3601 4.25 14.9401 4.25 14.1 4.25H3.9C3.05992 4.25 2.63988 4.25 2.31901 4.41349C2.03677 4.5573 1.8073 4.78677 1.66349 5.06901C1.5 5.38988 1.5 5.80992 1.5 6.65V12.35C1.5 13.1901 1.5 13.6101 1.66349 13.931C1.8073 14.2132 2.03677 14.4427 2.31901 14.5865C2.63988 14.75 3.05992 14.75 3.9 14.75Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          linkName="Store"
          activeName={"Store"}
        />
        <SidebarLink
          path={"/admin_center/dashboard/"}
          icon2={
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M9 18C8.58729 17.9994 8.18129 17.9028 7.8188 17.719L0.862634 14.188C0.601684 14.0561 0.383799 13.8611 0.231971 13.6235C0.0801424 13.3859 0 13.1145 0 12.838C0 12.5615 0.0801424 12.2901 0.231971 12.0525C0.383799 11.8149 0.601684 11.6199 0.862634 11.488L1.98799 10.916L0.862634 10.348C0.601684 10.2161 0.383799 10.0211 0.231971 9.78348C0.0801424 9.54587 0 9.2745 0 8.99801C0 8.72151 0.0801424 8.45015 0.231971 8.21254C0.383799 7.97493 0.601684 7.77989 0.862634 7.64801L1.98799 7.08001L0.862634 6.50901C0.601684 6.37712 0.383799 6.18209 0.231971 5.94448C0.0801424 5.70687 0 5.4355 0 5.15901C0 4.88251 0.0801424 4.61115 0.231971 4.37354C0.383799 4.13593 0.601684 3.9409 0.862634 3.80901L7.81558 0.282009C8.17893 0.0969763 8.58641 0 9.00054 0C9.41466 0 9.82214 0.0969763 10.1855 0.282009L17.1374 3.81301C17.3983 3.9449 17.6162 4.13993 17.768 4.37754C17.9199 4.61515 18 4.88652 18 5.16301C18 5.4395 17.9199 5.71087 17.768 5.94848C17.6162 6.18609 17.3983 6.38112 17.1374 6.51301L16.0131 7.08401L17.1374 7.65601C17.3983 7.7879 17.6162 7.98293 17.768 8.22054C17.9199 8.45815 18 8.72951 18 9.00601C18 9.2825 17.9199 9.55387 17.768 9.79148C17.6162 10.0291 17.3983 10.2241 17.1374 10.356L16.0131 10.927L17.1374 11.499C17.3983 11.6309 17.6162 11.8259 17.768 12.0635C17.9199 12.3011 18 12.5725 18 12.849C18 13.1255 17.9199 13.3969 17.768 13.6345C17.6162 13.8721 17.3983 14.0671 17.1374 14.199L10.1844 17.718C9.82101 17.9024 9.41387 17.9994 9 18ZM3.70932 11.794L1.65189 12.839L8.60484 16.371C8.72587 16.4325 8.86157 16.4648 8.99946 16.4648C9.13736 16.4648 9.27305 16.4325 9.39409 16.371L16.3481 12.839L14.2853 11.794L10.1844 13.88C9.82107 14.065 9.41359 14.162 8.99946 14.162C8.58534 14.162 8.17786 14.065 7.81451 13.88L3.70932 11.794ZM3.70932 7.95601L1.65189 9.00001L8.60484 12.532C8.72587 12.5935 8.86157 12.6258 8.99946 12.6258C9.13736 12.6258 9.27305 12.5935 9.39409 12.532L16.3481 9.00001L14.2853 7.95501L10.1844 10.04C9.82107 10.225 9.41359 10.322 8.99946 10.322C8.58534 10.322 8.17786 10.225 7.81451 10.04L3.70932 7.95601ZM9 1.53601C8.86192 1.53616 8.72608 1.56848 8.60484 1.63001L1.65189 5.16101L8.60484 8.69301C8.72587 8.75454 8.86157 8.78678 8.99946 8.78678C9.13736 8.78678 9.27305 8.75454 9.39409 8.69301L16.3481 5.16101L9.39409 1.62901C9.27323 1.56748 9.13774 1.53516 9 1.53501V1.53601Z"
                fill="#7D8089"
              />
            </svg>
          }
          icon={
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M9 18C8.58729 17.9994 8.18129 17.9028 7.8188 17.719L0.862634 14.188C0.601684 14.0561 0.383799 13.8611 0.231971 13.6235C0.0801424 13.3859 0 13.1145 0 12.838C0 12.5615 0.0801424 12.2901 0.231971 12.0525C0.383799 11.8149 0.601684 11.6199 0.862634 11.488L1.98799 10.916L0.862634 10.348C0.601684 10.2161 0.383799 10.0211 0.231971 9.78348C0.0801424 9.54587 0 9.2745 0 8.99801C0 8.72151 0.0801424 8.45015 0.231971 8.21254C0.383799 7.97493 0.601684 7.77989 0.862634 7.64801L1.98799 7.08001L0.862634 6.50901C0.601684 6.37712 0.383799 6.18209 0.231971 5.94448C0.0801424 5.70687 0 5.4355 0 5.15901C0 4.88251 0.0801424 4.61115 0.231971 4.37354C0.383799 4.13593 0.601684 3.9409 0.862634 3.80901L7.81558 0.282009C8.17893 0.0969763 8.58641 0 9.00054 0C9.41466 0 9.82214 0.0969763 10.1855 0.282009L17.1374 3.81301C17.3983 3.9449 17.6162 4.13993 17.768 4.37754C17.9199 4.61515 18 4.88652 18 5.16301C18 5.4395 17.9199 5.71087 17.768 5.94848C17.6162 6.18609 17.3983 6.38112 17.1374 6.51301L16.0131 7.08401L17.1374 7.65601C17.3983 7.7879 17.6162 7.98293 17.768 8.22054C17.9199 8.45815 18 8.72951 18 9.00601C18 9.2825 17.9199 9.55387 17.768 9.79148C17.6162 10.0291 17.3983 10.2241 17.1374 10.356L16.0131 10.927L17.1374 11.499C17.3983 11.6309 17.6162 11.8259 17.768 12.0635C17.9199 12.3011 18 12.5725 18 12.849C18 13.1255 17.9199 13.3969 17.768 13.6345C17.6162 13.8721 17.3983 14.0671 17.1374 14.199L10.1844 17.718C9.82101 17.9024 9.41387 17.9994 9 18ZM3.70932 11.794L1.65189 12.839L8.60484 16.371C8.72587 16.4325 8.86157 16.4648 8.99946 16.4648C9.13736 16.4648 9.27305 16.4325 9.39409 16.371L16.3481 12.839L14.2853 11.794L10.1844 13.88C9.82107 14.065 9.41359 14.162 8.99946 14.162C8.58534 14.162 8.17786 14.065 7.81451 13.88L3.70932 11.794ZM3.70932 7.95601L1.65189 9.00001L8.60484 12.532C8.72587 12.5935 8.86157 12.6258 8.99946 12.6258C9.13736 12.6258 9.27305 12.5935 9.39409 12.532L16.3481 9.00001L14.2853 7.95501L10.1844 10.04C9.82107 10.225 9.41359 10.322 8.99946 10.322C8.58534 10.322 8.17786 10.225 7.81451 10.04L3.70932 7.95601ZM9 1.53601C8.86192 1.53616 8.72608 1.56848 8.60484 1.63001L1.65189 5.16101L8.60484 8.69301C8.72587 8.75454 8.86157 8.78678 8.99946 8.78678C9.13736 8.78678 9.27305 8.75454 9.39409 8.69301L16.3481 5.16101L9.39409 1.62901C9.27323 1.56748 9.13774 1.53516 9 1.53501V1.53601Z"
                fill="white"
              />
            </svg>
          }
          linkName="Inventory"
          activeName={"Inventory"}
        />
      </Accordion>
    </MainSidebar>
  );
}