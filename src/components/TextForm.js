import React, { useState } from 'react'
import PropTypes from 'prop-types'

let currentText = 'Enter text here';
export default function TextForm(props) {
    let upperPressed = false, lowerPressed = false;
    const upperCaseClicked = () => {
        let newText = text.toUpperCase();
        upperPressed = true;
        console.log("Current Text = " + currentText);
        setText(newText);
        props.alert("Text Converted to Upper Case!", "success");
    }

    const lowerCaseClicked = () => {
        let newText = text.toLowerCase();
        lowerPressed = true;
        console.log("Current Text = " + currentText);
        setText(newText);
        props.alert("Text Converted to Lower Case!", "success");

    }

    const getOriginalText = () => {
        console.log("Current Text = " + currentText);
        setText(currentText);
        props.alert("Original Text Regained!", "success");

    }

    const clearText = () => {
        let newText = "";
        setText(newText);
        currentText = newText;
        props.alert("Text Area Reset Successully!", "success");

    }

    const getWordCount = (event) => {
        let count = 0;
        const splittedString = currentText.split(" ");
        console.log(splittedString);
        for (let i = 0; i < splittedString.length; i++) {
            if (splittedString[i].length > 1) {
                console.log(splittedString[i] + " Done!");
                count++;
            }
        }
        props.alert("Number of words: " + count, "info");
    }

    const getVowelCount = (event) => {
        let count = 0;
        let newText = currentText;
        newText = newText.toLowerCase();
        const splittedString = newText.split("");
        console.log(splittedString);
        for (let i = 0; i < splittedString.length; i++) {
            if (splittedString[i] === 'a' || splittedString[i] === 'e' || splittedString[i] === 'i' || splittedString[i] === 'o' || splittedString[i] === 'u') {
                count++;
            }
        }
        props.alert("Number of vowels: " + count, "info");
    }

    const copyText = () => {
        var text = document.getElementById("myTextBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.alert("Text Copied!", "success");

    }

    const removeExtraSpace = () => {
        let newText = text.split(/[ ] +/);
        setText(newText.join(" "));
        props.alert("Extra Spaces Removed!", "success");

    }
    const getConsonantCount = (event) => {
        let count = 0;
        let newText = currentText;
        newText = newText.toLowerCase();
        const splittedString = newText.split("");
        console.log(splittedString);
        for (let i = 0; i < splittedString.length; i++) {
            if (splittedString[i] !== 'a' && splittedString[i] !== 'e' && splittedString[i] !== 'i' && splittedString[i] !== 'o' && splittedString[i] !== 'u') {
                count++;
            }
        }
        props.alert("Number of consonants: " + count, "info");
    }

    // if event not handled we cannot type anything in the text box
    const handleOnChange = (event) => {
        console.log("OnChange is occured!" + event.target.value);
        if (!upperPressed && !lowerPressed) {
            currentText = event.target.value;
        }
        console.log("Current Text = " + currentText);
        setText(event.target.value)// changing value of text variable everytime
    }
    const [text, setText] = useState('');
    // text = "jfdkdfkj" // wrong way to change value/ state
    // setText("ugfhjfjsd") // correct way to change value/state
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                {/* setText is the updation function which is used to update text variable which contains text in textbox */}
                <h1>{props.textLabel}</h1>
                <div className={`mb-4`}>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#aaa6c0', color: props.mode === 'light' ? 'black' : 'white' }} id="myTextBox" rows="10"></textarea>
                </div>
                <div className="mb-2">
                    <button className={`btn btn-outline-${props.mode === 'light' ? 'primary' : 'info'} mx-2 my-1`} onClick={upperCaseClicked}>To UpperCase</button>
                    <button className={`btn btn-outline-${props.mode === 'light' ? 'primary' : 'info'} mx-2 my-1`} onClick={lowerCaseClicked}>To LowerCase</button>
                    <button className={`btn btn-outline-${props.mode === 'light' ? 'primary' : 'info'} mx-2 my-1`} onClick={getOriginalText}>Get Original Text</button>
                    <button className={`btn btn-outline-${props.mode === 'light' ? 'primary' : 'info'} mx-2 my-1`} onClick={getWordCount}>Get Word Count</button>
                    <button className={`btn btn-outline-${props.mode === 'light' ? 'primary' : 'info'} mx-2 my-1 mb-2`} onClick={getVowelCount}>Get Vowel Count</button>
                    <button className={`btn btn-outline-${props.mode === 'light' ? 'primary' : 'info'} mx-2 my-1`} onClick={getConsonantCount}>Get Consonant Count</button>
                    <button className={`btn btn-outline-${props.mode === 'light' ? 'primary' : 'info'} mx-2 my-1`} onClick={clearText}>Clear Text</button>
                    <button className={`btn btn-outline-${props.mode === 'light' ? 'primary' : 'info'} mx-2 my-1`} onClick={copyText}>Copy Text</button>
                    <button className={`btn btn-outline-${props.mode === 'light' ? 'primary' : 'info'} mx-2 my-1`} onClick={removeExtraSpace}>Trim Text</button>

                </div>
                {/* <div className="container mb-2">
                <p>Number of characters: {text.length}</p>
                <p>Number of words: {text.split(" ").length}</p>
            </div> */}
            </div>
        </>
    );
}
TextForm.propTypes = { textLabel: PropTypes.string.isRequired }
TextForm.defaultProps = { textLabel: "Enter your text label here!" }

// Types of Buttons
// <button type = "button" class="btn btn-primary" > Primary</ > - dark blue
// <button type="button" class="btn btn-secondary">Secondary</button> - grey
// <button type="button" class="btn btn-success">Success</button> - green
// <button type="button" class="btn btn-danger">Danger</button> - red
// <button type="button" class="btn btn-warning">Warning</button> - yellow
// <button type="button" class="btn btn-info">Info</button> - sky blue
// <button type="button" class="btn btn-light">Light</button> - white
// <button type="button" class="btn btn-dark">Dark</button> - black

// <button type="button" class="btn btn-link">Link</button>