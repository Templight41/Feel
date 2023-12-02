function Content({tryAgain, title, content}) {

    let currentQuote;

    function tryAgainButton(e) {
        document.querySelector('#initButton').className = 'nes-btn';
        document.querySelector('#initButton').disabled = false;
        document.querySelector('.loader').className = "loader ";
        document.querySelector('.content-container').style.display = "none";
        
    }

    return (
        <div className="nes-container is-rounded content-container">
            <h3 className="heading">{title}</h3>
            <hr />
            <p className="mainContent" dangerouslySetInnerHTML={{ __html: content }}></p>
            <button className='nes-btn try-again' onClick={tryAgain}><img src="/brokenHeart.png" alt="" />Try Again</button>
        </div>
    )
}

export default Content