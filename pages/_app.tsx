import "../scss/custom.scss";
import "../styles/custom.css";
import "../scss/layout.scss";
// import 'react-querybuilder/dist/query-builder.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-circular-progressbar/dist/styles.css";
// import "react-datepicker/dist/react-datepicker.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import Layout from "../components/global/layout";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { toast, Toaster, ToastBar } from "react-hot-toast";
import AuthWrapper from "../components/global/authenticator";
import successIcons from "../public/images/taost_icons/success_icon.svg";
import warningIcon from "../public/images/taost_icons/warning_icon.svg";
import Image from "next/image";
import dynamic from "next/dynamic";

const publicPages = ["/sign-in"];

const LayoutNoSSR = dynamic(() => import("../components/global/layout"), {
  ssr: false,
});

function LMSApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // const isPublicPage = publicPages.includes(router.pathname);
  const isPublicPage = publicPages.some((pages) => {
    if (router.pathname.includes(pages)) {
      return true;
    }
    return false;
  });
  return (
    <SSRProvider>
      <Toaster
        toastOptions={{
          success: {
            style: {
              borderLeft: "5px solid #36D576",
              padding: "0.75rem",
            },
            icon: (
              <Image
                src={successIcons}
                width={24}
                height={24}
                alt="success_icon"
              />
            ),
          },
          error: {
            style: {
              borderLeft: "5px solid #F58A8A",
              padding: "0.75rem",
            },
          },
          icon: (
            <Image
              src={warningIcon}
              width={24}
              height={24}
              alt="warning_icon"
            />
          ),
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    className="btn bg-white"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="#606B85"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.1597 13.5145L11.6453 10L15.1597 6.48551C15.6134 6.03184 15.6134 5.29393 15.1597 4.84026C14.7061 4.38658 13.9682 4.38658 13.5145 4.84026L10 8.35474L6.48551 4.84026C6.03184 4.38658 5.29393 4.38658 4.84026 4.84026C4.38658 5.29393 4.38658 6.03184 4.84026 6.48551L8.35474 10L4.84026 13.5145C4.38658 13.9682 4.38658 14.7061 4.84026 15.1597C5.29393 15.6134 6.03184 15.6134 6.48551 15.1597L10 11.6453L13.5145 15.1597C13.9682 15.6134 14.7061 15.6134 15.1597 15.1597C15.6134 14.7061 15.6134 13.9682 15.1597 13.5145Z"
                        fill="#606B85"
                      />
                    </svg>
                  </button>
                  // <CloseButton  />
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <AuthWrapper>
          {/* <Layout
            color={router.pathname.includes('sign-in') || router.pathname.includes('sign_up') ? 'bg-dark-purple' : 'bg-grey-white'}
            className='d-flex '>
            <Component {...pageProps} />
          </Layout> */}
          <LayoutNoSSR
            color={
              router.pathname.includes("sign-in") ||
              router.pathname.includes("sign_up")
                ? "bg-dark-purple"
                : "bg-grey-white"
            }
            className="d-flex "
          >
            <Component {...pageProps} />
          </LayoutNoSSR>
        </AuthWrapper>
      )}
    </SSRProvider>
  );
}

export default LMSApp;
