import React from 'react'

export function WithLogging({children}) {
    console.log("WithLogging Higher Order Component")
    return (
        <div>
            {children}
        </div>
        
    )
}

