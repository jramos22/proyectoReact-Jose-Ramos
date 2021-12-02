import React from "react";
import { useContext, useState, useEffect, createContext } from "react";


export const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')
    const [isOpened, setIsOpenned] = useState(false)
    const [position,setPosition] = useState('right');
    const [autoclose, setClose] = useState(5000);
    
    const sendAlert = ({type, message, position, autoclose}) => {
        setMessage(message)
        setType(type)
        setIsOpenned(true)
        setPosition(position)
        setClose(autoclose)
    }

    
    useEffect(() => {
        if (autoclose === false) {
            return null
        }else{
            const alertTimer = setTimeout(()=> {
                setIsOpenned(false)
            },autoclose)
            return () => clearTimeout(alertTimer)
        }
    })

    return (
        <AlertContext.Provider value={{ sendAlert, type, message, isOpened, position}}>
            { children }
        </AlertContext.Provider>
    )
}

const useAlert = () => {
    const context = useContext(AlertContext)

    if (context === undefined) {
        throw new Error(
            'You must wrap your application with <AlertProvider /> in order to useAlert().',
        ) 
    }
    return context
}

export default useAlert