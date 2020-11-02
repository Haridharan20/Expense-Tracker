import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transcation from './Transaction';

const TranscationList = () => {
    const context = useContext(GlobalContext);
    const { transactions } = context
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {
                    transactions.map(
                        transaction =>
                            (
                                <Transcation key={transaction.id} transaction={transaction} />
                            )
                    )
                }
            </ul>
        </>
    )
}

export default TranscationList
