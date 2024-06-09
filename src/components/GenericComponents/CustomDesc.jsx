import React from 'react'

const CustomDesc = ({ text, textColor }) => {
    return (
        <div>
            <p className={`fs-5 text-secondary ${textColor}`}>{text}</p>
        </div>
    )
}

export default CustomDesc;