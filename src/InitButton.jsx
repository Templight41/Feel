function InitButton({buttonText}) {

    function initButtonFunc(e) {
        let reqButton = e.target;
        reqButton.className = 'nes-btn is-disabled';
        reqButton.disabled = true;
        document.querySelector('.loading-container').style.opacity = '1';
        document.querySelector('.loader').className = "loader loader-animation"
        setTimeout(() => {
            document.querySelector('.loading-container').style.opacity = '0';
            document.querySelector('.loader').className = "loader";
            document.querySelector('.content-container').style.display = "block"
        }, 1010)
    }

    return (
        <button className='nes-btn' id="initButton" onClick={initButtonFunc}>{buttonText}</button>
    )
}

export default InitButton