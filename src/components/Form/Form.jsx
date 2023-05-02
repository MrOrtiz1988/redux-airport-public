import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';

function Form () {

    const [inputText, setInputText] = useState('')
    // const airlineArray = useSelector((store) => store.airlineArray)

    const dispatch = useDispatch()

    const addAirline = (event) => {
        event.preventDefault()
        dispatch({
            type: 'ADD_AIRLINE',
            payload: inputText
        })
        setInputText('')
    }

    return (
        <form onSubmit={addAirline}>
            <input 
                placeholder="Airline"
                type="text"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
            />
            <button>Add Airline</button>
        </form>
    )
}

export default Form;