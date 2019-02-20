import React, { useEffect } from "react"

export const Counter = () => {

  const fetchQuote = () => {
    fetch('http://api.icndb.com/jokes/random')
    .then(res => res.json())
    .then(data => {
      if (data.value) {
        setQuote(data.value.joke)
      } else (
        setQuote('Unable to fetch quote')
      )
    })
  }

  const [count, setCount] = React.useState(0)
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [quote, setQuote] = React.useState('')
  useEffect(() => {
    fetchQuote()
  }, []);

  return (
    <div>
      <h1>React Hooks examples</h1>
      <div className="item">
        <h2>State within functional component</h2>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count+1)}>Click me</button>
      </div>
      <div className="item">
        <h2>Side-effects without lifecycle methods</h2>
        <strong><p>Random Chuck Norris quote</p></strong>
        <p>{quote}</p>
        <button onClick={fetchQuote}>New quote</button>
      </div>
    </div>
  )
}