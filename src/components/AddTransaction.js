import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuid } from 'uuid'

const AddTransaction = () => {
    const context = useContext(GlobalContext);
    const { addTransaction } = context

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: uuid(),
            text,
            amount: parseInt(amount)
        }
        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text"
                        value={text} onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (expense,  income)</label
                    >
                    <input type="number"
                        value={amount} onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
