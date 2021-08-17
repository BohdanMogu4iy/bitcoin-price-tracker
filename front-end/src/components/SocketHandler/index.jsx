import React, {useEffect} from 'react'
const SocketHandler = ({children}) => {


    useEffect(() => {
        return () => {}
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default SocketHandler