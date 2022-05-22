import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    
    const increase = () => {
        setCount(count + 1)
        localStorage.setItem("Count", JSON.stringify(count))
    }
 
    const decrease = () => {
        if(count > 0) {
            setCount(count - 1)
            localStorage.setItem("Count", JSON.stringify(count))
        }
    }

    const reset = () => {
        setCount(0)
        localStorage.setItem("Count", 0)
    }
    

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter