import Link from "next/link";
import { useRouter } from "next/router";

interface ButtonProps {
    linkName: string;
    linkPath: string;
}


export default function SidebarAccordLink(props: ButtonProps) {
    const router = useRouter();
    return (
        <Link
            href={props.linkPath}
            passHref
        >
            <a
                href="#"
                style={router.pathname === props.linkPath ? { color: "#8960FF" } : {color: "#8A92A6"}}
                className={router.pathname === props.linkPath ? "text-light-purple-3 p-1 ms-2 text-decoration-none w-100 text-start" : "ms-2 text-gray-1 p-1 text-decoration-none w-100 text-start"}
            >
                {props.linkName}
            </a>
        </Link>

    )
}