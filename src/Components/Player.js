import React, { useContext } from 'react';
import { ScoreContext } from './Context';

function Player() {
    const { score, actions } = useContext(ScoreContext);
    return (
        <div>
            <p>Score: {score}</p>
            <button onClick={() => {actions.setScore(1)}}>Add 1</button>
        </div>
    )
}

export default Player;