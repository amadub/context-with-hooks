import React, { useState } from 'react';

export const ScoreContext = React.createContext();

export const Provider = (props) => {
    const [score, setScore] = useState(0);

    const handleScoreChange = (scoreChange) => {
        setScore(prevScore => {
            return(prevScore + scoreChange);
        })
        // setScore(score + scoreChange);
        // return score;
    }

    return (
        <ScoreContext.Provider value={{
            score,
            actions: {
                setScore: handleScoreChange
            }
        }}>
            { props.children }
        </ScoreContext.Provider>
    );
};