import Header from "./Components/Header"
import Tags from "./Components/Tags"
import Keyboard from "./Components/KeyBoard"
import "./App.css"

import { useState } from "react"
import { useEffect } from "react"


export default function App() {

  const [words, setWords] = useState("Javascript")

  const [userGuess, setUserGuess] = useState([])

  const letterElement = words.split("").map((letter, index) => (
    <span key={index}
    >{userGuess.includes(letter.toLowerCase()) && letter.toUpperCase()}</span>
  ))

  function checkWords(letter) {
    return words.toLowerCase().includes(letter)
  }

  const [wrongGuesses, setWrongGuesses] = useState(new Array(8).fill(false));
  const [guessTime, setGuesstime] = useState(8)

  function startNewGame() {
    setUserGuess([])
    setGuesstime(8)
    setWrongGuesses(new Array(8).fill(false))
  }


  function count(letter) {
    if (!checkWords(letter)) {
      setWrongGuesses(prev => {
        const nextWrong = [...prev]
        const firstFalseIndex = nextWrong.indexOf(false);
        if (firstFalseIndex !== -1) {
          nextWrong[firstFalseIndex] = true;
        }
        return nextWrong;

      })
      setGuesstime(prev => {
        const newTime = prev - 1
        if (newTime === 0) {
          return newTime
        }
        return newTime
      })
    }
  }


  const isWin = words
    .toLowerCase()
    .split("")
    .every(letter => userGuess.includes(letter.toLowerCase()))

  const isGameOver = isWin || guessTime === 0

  return (

    <div>
      <Header
        guessTime={guessTime}
        isWin={isWin}
        isGameOver={isGameOver} />

      <Tags
        isWrong={wrongGuesses} />

      <section className="words">
        {letterElement}
      </section>

      <h4 style={{ textAlign: "center", color: "white" }}>Guessing time remains: {guessTime}</h4>


      <Keyboard guess={userGuess}
        setGuess={setUserGuess}
        word={words}
        checkLetter={checkWords}
        count={count}
        guessTime={guessTime}
        startNewGame={startNewGame}
        isGameOver={isGameOver}
      />
    </div>


  )
}