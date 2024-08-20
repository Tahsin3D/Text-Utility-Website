import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className="alert alert-success d-flex align-items-center" role="alert">
        <div>
            {props.alert.message}: <strong>{props.alert.state}</strong>
        </div>
    </div>
  )
}
