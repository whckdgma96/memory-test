import React, {useState, useEffect} from 'react'

export const Records = ({ listOfHistory }) => {
    if (listOfHistory.length > 0){
        return (
            <>
                {listOfHistory.map(game => {
                    return (
                        <ul key={game.id}>
                            <li>{game.score}</li>
                        </ul>
                    )
                })}
                
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }
    
}