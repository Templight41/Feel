import "nes.css/css/nes.css";
import './App.css'
import Loading from './Loading.jsx';
import InitButton from './InitButton.jsx';
import Content from './Content.jsx';
import React, { useState } from 'react';


let quotes = [
  {
    buttonReq: "World Peace",
    title: "ERROR 404 :|",
    content: "when the power of love overcomes<br>the love of power, the world will know peace."
  },
  {
    buttonReq: "Shut Down",
    title: "ERROR 404 :|",
    content: "how can you shut down if<br>you don't open up?"
  },
  {
    buttonReq: "Make love easy",
    title: "ERROR 404 :|",
    content: "apologies, true love has no shortcuts.<br>please check heart connection<br>and try again."
  },
  {
    buttonReq: "ESC",
    title: "ERROR 404 :|",
    content: "No Escape Today, 'Esc' Button<br>Seems to be taking a break.<br>Retry Later."
  },
  {
    buttonReq: "Find Lost Items",
    title: "ERROR 404 :|",
    content: "Oops! Can't find lost items,<br>Keep calm and keep looking!"
  },
  {
    buttonReq: "Undo",
    title: "ERROR 404 :|",
    content: "sorry, in life, no undo,<br>Just learn from your mistakes"
  },
  {
    buttonReq: "Make Parents Proud",
    title: "Completed :]",
    content: "Your parent's pride grows every day.<br>Keep up the good work!"
  },
  {
    buttonReq: "Make me forget you",
    title: "ERROR 404 :|",
    content: "Unable to forget, maybe some<br>memories stay forever.<br>Deal with it.."
  }
]

let prevIndexes = [];
let currentIndex = Math.floor(Math.random()*quotes.length);
prevIndexes.push(currentIndex)

function App() {

  let [currentQuote, setCurrentQuote] = useState(quotes[currentIndex]);
  
  function tryAgain() {
    document.querySelector('#initButton').className = 'nes-btn';
    document.querySelector('#initButton').disabled = false;
    document.querySelector('.loader').className = "loader ";
    document.querySelector('.content-container').style.display = "none";


    currentIndex = Math.floor(Math.random()*quotes.length);
    setCurrentQuote(quotes[currentIndex]);

    prevIndexes.push(currentIndex)
    console.log(prevIndexes)
  }

  return (
    <>
      <Loading />
      <InitButton buttonText={currentQuote.buttonReq}/>
      <Content tryAgain={tryAgain} title={currentQuote.title} content={currentQuote.content}/>
    </>
  )
}

export default App
