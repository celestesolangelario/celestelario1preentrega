import { useState } from 'react'
import Button from '../Button/Button'
const Counter = () => {
    const [count,setCount] = useState(0)

    const decrement = () => {
        if (count > 0) {
            setCount(prev=>prev - 1)
            }
        }        
    const increment = () =>{
        for(let i = 0; i < 5; i++) {
        setCount(prev => {
            console.log(prev)
        return prev + 1
        })
        }
    }
    return(
    <div>
        <h1>{count}</h1>
        <Button callback={decrement} label={'-'}/> 
        <Button callback={increment} label={'+'}/>
        
    </div>
    )
}

export default Counter