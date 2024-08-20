import React, {useState} from 'react'

export default function TextForm(props) {

  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  }
  
  const convertToUpperCase = () => {
    setText(text.toUpperCase());
    text===''?props.setAlert(null):props.showAlert("Converted To UpperCase","Success");
  }

  const convertToLowerCase = () => {
    setText(text.toLowerCase());;
    text===''?props.setAlert(null):props.showAlert("Converted To LowerCase","Success");
  }

  const clearText = () => {
    setText('')
    text===''?props.setAlert(null):props.showAlert("Text Cleared","Success");
  }

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copies Text!","Success")
  }

  return (
    <>
        <h1 style={{color : props.mode === 'dark' ? "white" : "black"}}>{props.heading}</h1>
        <div class="input-group">
            <textarea style={{color : props.mode === 'dark' ? "white" : "black", backgroundColor: props.mode === 'dark' ? "gray" : "white"}} placeholder='Enter Text Here' class="form-control" value={text} onChange={handleChange} rows='9'></textarea>
        </div>
        <div className="container">
        <button disabled={text.length===0} onClick={convertToUpperCase} className='btn btn-primary my-1 mx-1'>Convert To UpperCase</button>
        <button disabled={text.length===0} onClick={convertToLowerCase} className='btn btn-primary my-1 mx-1'>Convert To LowerCase</button>
        <button disabled={text.length===0} onClick={copyText} className='btn btn-primary  my-1 mx-1'>Copy Text</button>
        <button disabled={text.length===0} onClick={clearText} className='btn btn-primary  my-1 mx-1'>Clear Text</button>
        </div>
        <h2 style={{color : props.mode === 'dark' ? "white" : "black"}}>Details:</h2>
        <p style={{color : props.mode === 'dark' ? "white" : "black"}}>Words: {text.trim()===''?'0':text.trim().split(/\s+/).length}, Characters: {text.length}</p>

    </>
  )
}
