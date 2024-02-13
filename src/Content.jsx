function Content({tryAgain, title, content}) {

    
    

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