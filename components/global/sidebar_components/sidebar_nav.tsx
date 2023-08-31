interface NavItems{
    children?: React.ReactNode | React.ReactNode[];
}

export default function SidebarNav(props: NavItems){
    return(
        <div className="bg-white mb-4" style={{height:70}}>
            <div className="p-2 d-flex justify-content-start ms-5 d-grid gap-3 h-100 align-items-center">
                {props.children}
            </div>
        </div>
    )
}