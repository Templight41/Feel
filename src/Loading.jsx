import { useEffect } from 'react';

function Loading({setLoader, setButton, setContent}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader((loader) => {
                return !loader
            })
            setButton((button) => {
                return !button
            })
            setContent((content) => {
                return !content
            })
        }, 8010);
        return () => clearTimeout(timer);
      }, []);
    return (
        <div className="nes-container loading-container">
            <div className="nes-container is-rounded loading">
                <div className="loader"></div>
            </div>
        </div>
    )
}

export default Loading