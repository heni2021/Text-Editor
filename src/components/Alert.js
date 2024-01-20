import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.message && <div className={`alert alert-${props.message.type} alert-dismissible fade show`} role="alert">
            {capitalize(props.message.type)} : {props.message.msg}
        </div>
    )
}

export default Alert
