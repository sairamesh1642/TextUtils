import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase Done","success");
    }
    
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase Done","success");
    }
    
    let handleClClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    
    let COPYIT=()=>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("text copied successfully","success");
    };

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const [text,setText]=useState("");
    return (
        <>
        <div className="container">
            <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#343a40',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick} >Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClClick}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={COPYIT}>Copy</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
           <p>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
           <p>{0.008*(text.trim() === '' ? 0 : text.trim().split(/\s+/).length)} Minutes read</p>
           <h2>Preview</h2>
            <div>{text.length>0 ?text:'Write something in textbox to see here'}</div>
        </div>
        </>
    )
}
