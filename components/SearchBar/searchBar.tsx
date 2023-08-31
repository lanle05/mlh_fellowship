interface SearchBarProps {
    inputClassName?: string
    innerClassName?: string
    value?:string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchBar(props: SearchBarProps) {
    return (
        <div className="inputHighlight">
            <div className={props.inputClassName === undefined ? "d-flex justify-content-between position-relative p-2" : `${props.inputClassName} d-flex justify-content-between position-relative p-2`} >
                <div className="ms-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-search me-2" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
                <input  value={props.value} onChange={(e) => {

                    if (props.onChange !== undefined) {
                        props.onChange(e);
                    }
                    
                }} type="text" className={props.innerClassName === undefined ? `border-0 shadow-none w-100`:`${props.innerClassName} border-0 shadow-none w-100 `  } style={{ outline: 0 }} placeholder="Search..." />
            </div>
        </div>
    )
}