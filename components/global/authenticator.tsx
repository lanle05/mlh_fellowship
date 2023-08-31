import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";
import toast from "react-hot-toast";
import CookieManager from "../../utils/cookieManager";
import { useToastStore } from "../../utils/store";
import { Image } from "react-bootstrap";

export default function AuthWrapper(props: { children: JSX.Element }) {
  const [hasJWT, setHasJWT] = useState(false);
  const [timer, setTimer] = useState<number>(4);
  const router = useRouter();
  const { showLoginToast } = useToastStore();

  useLayoutEffect(() => {
    const token = CookieManager.getCookie("jwt");
    const isLoginPage = router.pathname === "/login";
    const isCatPage = router.pathname === "/category";
    const isBiodata =
      router.pathname === "/teacher-bio-data" ||
      router.pathname === "student-bio-data";
    const isSuccess = router.pathname === "/success";
    const isSignupPage = router.pathname === "/";

    if (token === undefined && !isLoginPage && !isSignupPage && !isCatPage && !isBiodata) {
      setHasJWT(false);
      const redirectTimer = setTimeout(() => router.push("/login"), 1500);
      showLoginToast(); // Uncomment this line if you want to show a login toast message
      return () => clearTimeout(redirectTimer);
    } else {
      setHasJWT(true);
    }
  }, [router, showLoginToast]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTime: number) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <>
      {hasJWT ? (
        props.children
      ) : (
        <div className="text-center">
          <p className="mont">Unauthorized view</p>
          <p className="mont">Redirecting to Login Page... </p>
          <span className="gothic-header">
            {timer > 0 ? (
              timer
            ) : (
              <div className="ms-2 mt-1">
                <Image alt="start struck" src="../images/Star Struck.svg" />
              </div>
            )}
          </span>
        </div>
      )}
    </>
  );
}
