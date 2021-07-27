import React from 'react'

export default function TotalAmmount(props) {
    return (
        <div class={`alert alert-${props.type} mt-4`} role="alert">
            <h5>{props.name} : ₹ {props.value} /- </h5>
            
        </div>
    )
}
