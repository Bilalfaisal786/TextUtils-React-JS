import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({

    //     color: "black",
    //     backgroundColor: "white"
    // }
    // )
    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === "black") {

    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black"
    //         }
    //         )
    //         setBtnText("Enable Light Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white"

    //         })
    //         setBtnText("Enable Dark Mode")
    //     }

    // }

    let myStyle = {
        color: props.mode === "dark" ? "white" : "#042743",
        backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
    }

    return (

        <div className='container'
            style={{ color: props.mode === "dark" ? "white" : "#042743" }} >
            <h1 className='my-4'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong> Introduction</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Introducing the TextUtility App – a text manipulation tool designed to simplify and enhance your text editing experience. Packed with features, this React-based application allows users to effortlessly convert text to uppercase or lowercase, remove numbers or alphabets, clear the text, and execute actions like cutting and copying
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong>Seamless Text Editing </strong >
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Navigating the clean and intuitive interface of TextUtility is a breeze. Simply input your text into the provided textbox, and with a click of a button, witness instant transformations. The app keeps users informed through alert messages, ensuring a smooth and error-free operation. Additionally, TextUtility provides a comprehensive summary of your text, including word count, character count, and an estimated reading time – making text editing a seamless and efficient process.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            <strong> Personalized Experience with Simplicity and Versatility</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            What sets TextUtility apart is its adaptability. It caters to your visual preference with a dark/light mode, offering a personalized experience for users. Beyond its aesthetic appeal, TextUtility stands out for its simplicity and versatility. Whether you're clearing text, analyzing word count, or copying to the clipboard, TextUtility proves to be a reliable go-to tool for quick and effective text manipulation. Experience the power of TextUtility in transforming and analyzing text effortlessly.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">


            </div>
        </div >
    )
}
