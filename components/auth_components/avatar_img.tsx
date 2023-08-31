import { Image } from 'react-bootstrap'

interface AvatarProps {
    src_path: string
    alt: string;
    key:number;
    onClick: (e:any) => void
    className: string
}

export default function AvatarImgs(props: AvatarProps) {
    return (
        <Image onClick={props.onClick} src={props.src_path} alt={props.alt} className={props.className} />
    )
}