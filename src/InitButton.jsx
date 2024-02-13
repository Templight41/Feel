function InitButton({buttonText, setLoader, initButtonFunc}) {

    return (
        <button className='nes-btn' id="initButton" onClick={initButtonFunc}>{buttonText}</button>
    )
}

export default InitButton