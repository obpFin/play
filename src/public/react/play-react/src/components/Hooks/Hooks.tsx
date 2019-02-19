import * as React from "react"

export const Counter = () => {
  const [count, setCount] = React.useState(0)

  return (
    <div className="counter">
      <h2>React Hooks example</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>Click me</button>
    </div>
  )
}