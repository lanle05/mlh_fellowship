import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


interface ValidationIconProps {
    valid:boolean,
    color:string
}
function ValidationIcon(props:ValidationIconProps) {
  return (
    <>
        
        <div className=" d-flex justify-content-end mb-2">
            {" "}
            {
                props.valid ? (
                <FontAwesomeIcon
                icon={faCheck}
                style={{
                width: "1.2rem",
                height: "1.2rem",
                color: props.color,
                }} />
                )
                : (
                    <FontAwesomeIcon
                        icon={faTimes}
                        style={{
                        width: "1.2rem",
                        height: "1.2rem",
                        color: props.color,
                    }} />
                )
        
            }
            
        </div>
    </>
  )
}

export default ValidationIcon


{/* <div className=" d-flex justify-content-end">
                {" "}
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validEmail ? "valid" : "hide"}
                  style={{
                    width: "1.2rem",
                    height: "1.2rem",
                    color: "#00FF00",
                  }}
                />
              </div>

              <div className="d-flex justify-content-end">
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validEmail || !email ? "hide" : "invalid"}
                  style={{
                    width: "1.2rem",
                    height: "1.2rem",
                    color: "#FF0000",
                  }}
                />
              </div> */}