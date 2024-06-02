import React from 'react'

const CustomHeadingSecondary = ({ text }) => {
    return (
        <div>
            <h2 className='fw-bold'
                style={{ fontSize: "48px" }}
            >{text}</h2>
        </div>
    )
}

export default CustomHeadingSecondary