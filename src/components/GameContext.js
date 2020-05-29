import React, { useState, createContext } from 'react';

export const GameContext = createContext();

export const GameProvider = props => {
    const [cards, setCards] = useState([]);

    return (
    <GameContext.Provider value={[cards, setCards]}>
    {props.children}
    </GameContext.Provider>);
}
