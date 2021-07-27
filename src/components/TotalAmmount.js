import React from 'react'

export default function TotalAmmount(props) {
    return (
        <div class={`alert alert-${props.type} mt-4`} role="alert">
            <h4>₹ {props.value} /-  <span class={`badge bg-${props.type}`}>{props.name}</span></h4>
            
        </div>
    )
}
