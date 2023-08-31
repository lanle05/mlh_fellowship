import { useRouter } from "next/router";
import Navbar from "./navbar";
import Navbar1 from "./navbar1";
import Sidebar from "./sidebar";
import Sidebar1 from "./sidebar1";
import { useEffect, useRef, useState } from "react";
import { useStateManager } from "react-select";
import SidebarNav from "./sidebar_components/sidebar_nav";
import SidebarNavItems from "./sidebar_components/sidebar_navItems";
// import routes from "../../public/json/sidebarNav.json";
import { useSidebarStore } from "../../utils/store";
import CollapsedSidebar from "./collapsedsidebar";
interface LayoutProps {
  color: "bg-light" | "bg-dark-purple" | "bg-cream" | "bg-grey-white";
  className?: string;
  children?: JSX.Element;
}

const pagesLayout1: string[] = [
  "/student/dashboard",
  "/student/test",
  "/student/userprofile",
  "/student/leaderboard",
  "/student/store",
  "/student/subjects",
  "/student/otherprofile",
  "/student/messaging",
  "/student/wallet",
  "/student/discussion",
  "/student/notifications",
  "/student/marketplace",
  
  "/teacher/dashboard",
  "/teacher/userprofile",
  "/teacher/subject",
  "/teacher/myquestions",
  "/teacher/tests&challenges",
  "/teacher/discussion",
  "/teacher/lms",

];



export default function Layout(props: LayoutProps) {
  const router = useRouter();
  const url = router.pathname.split("/");
  const { isShowing } = useSidebarStore()
  let useLayout1 = false;
  let useLayout2 = false;
  let current = '';
  pagesLayout1.forEach((page) => {
    const pageName = page.split("/");
    
    if (pageName[2] === url[2]) {
      useLayout1 = true;
      current = url[1]
    } 
  });
  console.log(current)
  
  useEffect(() => {
    const currentPath = router.pathname;

    const shouldRedirect = () => {
      const previousName = currentPath.split("/")[1];
      const newName = router.pathname.split("/")[1];

      if (
        (previousName === "student" && newName === "teacher") ||
        (previousName === "teacher" && newName === "student")
      ) {
        return true;
      }

      return false;
    };

    if (shouldRedirect()) {
      router.push("/login");
    }
  }, [router]);

  return (
    <main className={`${props.color} ${props.className}`}>
      {current ==='student'?
      (useLayout1 !== false ? (
        <>
        {!isShowing ? <Sidebar /> :
          <CollapsedSidebar />}
          <div className={!isShowing ? " mainLayout " : "mainLayoutCollapse "}>
            <div className="navbar-container" >
              <Navbar />
            </div>
            <div
              className={"mainContainer py-3 px-4"}
            >
              {props.children}
            </div>
          </div>
        </>
      ) : null)
      :
      (useLayout1 !== false ? (
        <>
        {!isShowing ? <Sidebar1 /> :
          <CollapsedSidebar />}
          <div className={!isShowing ? " mainLayout " : "mainLayoutCollapse "}>
            <div className="navbar-container" >
              <Navbar1 />
            </div>
            <div
              className={"mainContainer py-3 px-4"}
            >
              {props.children}
            </div>
          </div>
        </>
      ) : null)
    }
      {!useLayout1 && !useLayout2 && props.children}
    </main>
  );
}
