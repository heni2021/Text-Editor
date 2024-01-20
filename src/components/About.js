import React, { useState } from 'react'

export default function About(props) {
    document.title = 'Text Modifier - About Us'
    let myStyle = {
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? 'white' : '#241c51',
        
    }

    let boxStyle = {
        border: '2px solid',
        borderColor: props.mode === 'light' ? '#241c51' : 'white'
    }

    return (
        <div className='container' style={myStyle}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={boxStyle}>

                    <h2 className="accordion-header" id="headingOne" style={myStyle}>
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This text editor ensures a way to analyze your text quickly and efficiently. Be it word count, trimming text, character count, etc.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={boxStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            It is a free character counter tool that provides seamless UI and is as free as it could be.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={boxStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatibility</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This software ensures browser compatibitly with all the updated browsers like Chrome, Microsoft Edge, FireFox, Brave, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
