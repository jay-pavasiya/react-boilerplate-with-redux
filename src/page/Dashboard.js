import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import logo from '../logo.svg'

const Dashboard = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: 'CASE', payload: [11] })
        // eslint-disable-next-line
    }, [])

    return (
        <div className='main'>
            <h1>REACT</h1>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <h3>Edit src/page/Dashboard.js and save to reload.</h3>
            <span>by <a href="https://github.com/jay-pavasiya">Jay Pavasiya</a></span>
        </div>
    )
}

export default Dashboard
