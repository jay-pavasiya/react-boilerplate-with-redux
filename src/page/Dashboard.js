import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Dashboard = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: 'CASE', payload: [11] })
        return () => {
            
        }
    }, [])
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}

export default Dashboard
