import React, { useState, createContext } from 'react';

export const GameContext = createContext();

export const GameProvider = props => {
    const [cards, setCards] = useState([]);
    const [show, setShow] = useState(false);
    const [isLast, setIsLast] = useState(false);

    return (
    <GameContext.Provider value={[cards, setCards, show, setShow, isLast, setIsLast]}>
    {props.children}
    </GameContext.Provider>);
}
