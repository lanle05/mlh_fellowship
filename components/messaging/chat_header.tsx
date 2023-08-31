import { Image, Card } from "react-bootstrap";

interface ChatHeaderProps {
  name: string;
}

export default function ChatHeader(props: ChatHeaderProps) {
  return (
    <>
    <Card className=" py-2 w-100 border-0 mb-3 shadow-sm">
      <div className="d-flex px-2 justify-content-between align-items-center w-100">
        <div className="d-flex  align-items-center gap-2">
        <div>
          <Image
          alt="user"
            width={"48px"}
            height="48px"
            style={{ borderRadius: "50%" }}
            className="border-dark-gray-1 border"
            src="../images/Userpic3.svg"
          ></Image>
        </div>
        
        <div className="fw-semibold" style={{ fontSize: "16px" }}>
            {props.name}
          </div>
          </div>

        <div className="">
          <div>
          <svg width="14" height="5" viewBox="0 0 18 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6077 4.36646C15.3624 4.36654 15.1195 4.3183 14.8928 4.22451C14.6662 4.13072 14.4602 3.9932 14.2867 3.81982C14.1133 3.64643 13.9756 3.44057 13.8817 3.21399C13.7877 2.98741 13.7393 2.74454 13.7393 2.49926C13.7392 2.25398 13.7874 2.01108 13.8812 1.78444C13.975 1.5578 14.1125 1.35185 14.2859 1.17835C14.4593 1.00485 14.6651 0.867206 14.8917 0.773267C15.1183 0.679329 15.3612 0.630938 15.6065 0.630859C16.1018 0.6307 16.577 0.827333 16.9274 1.1775C17.2778 1.52767 17.4747 2.00269 17.4749 2.49806C17.475 2.99343 17.2784 3.46858 16.9282 3.81897C16.578 4.16936 16.103 4.3663 15.6077 4.36646Z" fill="#7D8089"/>
<path d="M9.19728 4.36721C10.2285 4.36721 11.0645 3.53124 11.0645 2.50001C11.0645 1.46879 10.2285 0.632812 9.19728 0.632812C8.16605 0.632812 7.33008 1.46879 7.33008 2.50001C7.33008 3.53124 8.16605 4.36721 9.19728 4.36721Z" fill="#7D8089"/>
<path d="M2.78615 4.36721C3.81737 4.36721 4.65335 3.53124 4.65335 2.50001C4.65335 1.46879 3.81737 0.632812 2.78615 0.632812C1.75492 0.632812 0.918945 1.46879 0.918945 2.50001C0.918945 3.53124 1.75492 4.36721 2.78615 4.36721Z" fill="#7D8089"/>
</svg>

          </div>
        </div>
      </div>
    </Card>
    </>
  );
}
