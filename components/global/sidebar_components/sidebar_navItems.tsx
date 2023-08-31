import { useRouter } from "next/router";

interface ItemProps {
  navName: string;
  path: string;
}

export default function SidebarNavItems(props: ItemProps) {
  const router = useRouter();
  const splitUrlPath = router.pathname.split("/");
  const splitPath = props.path.split("/");
  const isActive = splitUrlPath[3] === splitPath[3];

  return (
    <button
      onClick={() => router.push(props.path)}
      className={
        router.pathname === props.path
          ? "btn bg-light-purple-2 rounded text-light-purple fw-bold"
          : " btn bg-white text-text-gray-3 fw-bold"
      }
      style={{ padding: "11px 13px", height: "fit-content" }}
    >
      {props.navName}
    </button>
  );
}
