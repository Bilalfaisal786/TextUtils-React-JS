import React, { useState } from 'react'
import './TextForm.css';

export default function TextForm(props) {

    // const handleUpClick = () => {
    //     if (text.trim() === "") {
    //         props.showAlert("Please enter something in the textbox below to perform any action", "warning");
    //     } else {
    //     console.log("Upper case was clicked" + text)
    //     let newText = text.toUpperCase()
    //     setText(newText)
    //     props.showAlert("Converted to uppercase", "success")
    //     }
    // }

    const handleUpClick = () => {
        if (text === text.toUpperCase()) {
            props.showAlert("Text is already in Uppercase", "warning");
        } else {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Uppercase", "success");
        }
    }

    // const handleLowClick = () => {

    //     let newText = text.toLowerCase()
    //     setText(newText)
    //     props.showAlert("Converted to Lowercase", "success")

    // }

    const handleLowClick = () => {
        if (text === text.toLowerCase()) {
            props.showAlert("Text is already in Lowercase", "warning");
        } else {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lowercase", "success");
        }
    }


    // const handleRnClick = () => {

    //     let newText = text.replace(/[0-9]/g, '');
    //     setText(newText)
    //     props.showAlert("All Numbers Removed successfully", "success")

    // }

    const handleRnClick = () => {
        if (!/[0-9]/.test(text)) {
            props.showAlert("Text doesn't contain numbers", "warning");
        } else {
            let newText = text.replace(/[0-9]/g, '');
            setText(newText);
            props.showAlert("All Numbers Removed successfully", "success");
        }
    }

    // const handleRaClick = () => {

    //     let newText = text.replace(/[a-zA-Z]/g, '');
    //     setText(newText)
    //     props.showAlert("All Alphabet Removed successfully", "success")

    // }

    const handleRaClick = () => {
        if (!/[a-zA-Z]/.test(text)) {
            props.showAlert("Text doesn't contain alphabets", "warning");
        } else {
            let newText = text.replace(/[a-zA-Z]/g, '');
            setText(newText);
            props.showAlert("All Alphabets Removed successfully", "success");
        }
    }


    const handleClearClick = () => {

        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared successfully", "success")

    }
    const handleCutClick = () => {

        // Assuming that "cut" means deleting all text and copying it
        // Copy text to clipboard
        navigator.clipboard.writeText(text);
        // Set text state to an empty string
        setText('');
        props.showAlert("Text Cutted successfully", "success")

    }
    const handleCopyClick = () => {

        // Copy text to clipboard
        navigator.clipboard.writeText(text);
        // Set text state to an empty string
        props.showAlert("Text Copied successfully in the ClipBoard", "success")

    }
    // const handleRemoveSpacesClick = () => {

    //     let newText = text.replace(/\s+/g, ' ').trim(); // Remove extra spaces
    //     setText(newText);
    //     props.showAlert("Extra Spaces Removed successfully", "success");

    // }


    const handleRemoveSpacesClick = () => {
        if (!/\s+/.test(text)) {
            props.showAlert("No extra spaces to remove", "warning");
        } else {
            let newText = text.replace(/\s+/g, ' ').trim(); // Remove extra spaces
            setText(newText);
            props.showAlert("Extra Spaces Removed successfully", "success");
        }
    }


    const handleSearchReplace = () => {
        const searchTerm = prompt("Enter search term:");
        const replaceTerm = prompt("Enter replacement term:");

        if (searchTerm !== null && replaceTerm !== null) {
            if (text.includes(searchTerm)) {
                let newText = text.split(searchTerm).join(replaceTerm);
                setText(newText);
                props.showAlert("Search and Replace completed", "success");
            } else {
                props.showAlert("Search term not found in the text", "warning");
            }
        } else {
            props.showAlert("Search and Replace cancelled", "warning");
        }
    };

    const handleDownloadClick = () => {
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'textfile.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        props.showAlert("Text Downloaded successfully", "success");
    }


    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("")

    //text = "new text" // Wrong way to change the state
    //setText("new text") // Correct way to change the state   


    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className="mb-4"> {props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                        color: props.mode === 'dark' ? 'white' : '#042743',
                    }} id="myBox" rows="8" placeholder='Write Your Text Here'></textarea>
                </div>


                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRnClick}>Remove All Numbers</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRaClick}>Remove All Alphabets</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCutClick}>Cut Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpacesClick}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleSearchReplace}>Search And Replace</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDownloadClick}>Download Text</button>


            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb-4' >

                    Your Text Summary
                </h1>
                <p className="MyCss1">
                    {text.trim() === "" ? "0 Word" : `${text.trim().split(" ").length} ${text.trim().split(" ").length === 1 ? 'Word' : 'Words'}`} and {text.trim().replace(/\s/g, '').length} {text.trim().length === 1 ? 'Character' : 'Characters'}
                </p>
                <p className="MyCss1">
                    Take Probably {text.trim() === "" ? "0" : (0.008 * text.trim().split(" ").length).toFixed(2)} Minutes to read
                </p>
                <h2>Preview</h2>
                <p className='MyCss2'>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div >
        </>
    )
}