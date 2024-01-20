import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height: '50px'}}>
       { props.message && <div className={`alert alert-${props.message.type} alert-dismissible fade show`} role="alert">
            {capitalize(props.message.type)} : {props.message.msg}
        </div>}

        </div>
    )
}

export default Alert
