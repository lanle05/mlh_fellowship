import { Form } from "react-bootstrap"

interface CustomProps {
    onClick: (e:any) => void
}

export default function CustomUpload(props:CustomProps) {
    return (
        <>
            <button 
            onClick={(e) => props.onClick(e)}
            style={{width:'70px', height:'70px', marginBottom:'14px',marginRight:'12px'}}
            className="d-inline-flex h-auto border-dotted border-10 border-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="m-auto text-accent bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </button>
        </>
    )
}