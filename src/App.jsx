import "nes.css/css/nes.css";
import './App.css'
import Loading from './Loading.jsx';
import InitButton from './InitButton.jsx';
import Content from './Content.jsx';
import React, { useState, useEffect } from 'react';


let quotes = [
  {
    id: 0,
    buttonReq: "World Peace",
    title: "ERROR 404 :|",
    content: "when the power of love overcomes<br>the love of power, the world will know peace."
  },
  {
    id: 1,
    buttonReq: "Shut Down",
    title: "ERROR 404 :|",
    content: "how can you shut down if<br>you don't open up?"
  },
  {
    id: 2,
    buttonReq: "Make love easy",
    title: "ERROR 404 :|",
    content: "apologies, true love has no shortcuts.<br>please check heart connection<br>and try again."
  },
  {
    id: 3,
    buttonReq: "ESC",
    title: "ERROR 404 :|",
    content: "No Escape Today, 'Esc' Button<br>Seems to be taking a break.<br>Retry Later."
  },
  {
    id: 4,
    buttonReq: "Find Lost Items",
    title: "ERROR 404 :|",
    content: "Oops! Can't find lost items,<br>Keep calm and keep looking!"
  },
  {
    id: 5,
    buttonReq: "Undo",
    title: "ERROR 404 :|",
    content: "sorry, in life, no undo,<br>Just learn from your mistakes"
  },
  {
    id: 6,
    buttonReq: "Make Parents Proud",
    title: "Completed :]",
    content: "Your parent's pride grows every day.<br>Keep up the good work!"
  },
  {
    id: 7,
    buttonReq: "Make me forget you",
    title: "ERROR 404 :|",
    content: "Unable to forget, maybe some<br>memories stay forever.<br>Deal with it.."
  }
]

let newArr = [];

for(let i=0;i<quotes.length;i++) {
  newArr.push(quotes[i]);
}

let currentIndex = Math.floor(Math.random()*newArr.length);

function App() {

  let [currentQuote, setCurrentQuote] = useState(newArr[currentIndex]);
  let [loader, setLoader] = useState(false);
  let [content, setContent] = useState(false);
  let [button, setButton] = useState(true)

  
  function tryAgain() {
    setButton(!button)
    setContent(!setContent)


    newArr.splice(currentIndex, 1)
    
    currentIndex = Math.floor(Math.random()*newArr.length);
    
    setCurrentQuote(newArr[currentIndex]);

    if(newArr.length <= 1) {
      let i=0;
      for(i=0;i<quotes.length;i++) {
        newArr.push(quotes[i]);
      }
    }
  }


  function initButtonFunc(e) {
    setLoader(!loader)
    let reqButton = e.target;
    reqButton.className = 'nes-btn is-disabled';
    reqButton.disabled = true;
  }


  return (
    <>
      {(() => {
        if (loader) {
          return (
            <Loading setLoader={setLoader} setContent={setContent} setButton={setButton}/>
          )
        }
      })()}

      {(() => {
        if (button) {
          return (
            <InitButton buttonText={currentQuote.buttonReq}  setLoader={setLoader} initButtonFunc={initButtonFunc}/>
          )
        }
      })()}

      {(() => {
        if (content) {
          return (
            <Content tryAgain={tryAgain} title={currentQuote.title} content={currentQuote.content}/>
          )
        }
      })()}
      
    </>
  )
}

export default App




// document.querySelector('#initButton').className = 'nes-btn';
// document.querySelector('#initButton').disabled = false;
// document.querySelector('.loader').className = "loader ";
// document.querySelector('.content-container').style.display = "none";