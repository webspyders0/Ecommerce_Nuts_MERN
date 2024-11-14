
import React, { createContext, useContext, useEffect, useState } from 'react';

const TitleContext = createContext();

export const useTitle = () => useContext(TitleContext);

export const TitleProvider = ({ children }) => {
    const [title, setTitle] = useState('Default Title');

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <TitleContext.Provider value={setTitle}>
            {children}
        </TitleContext.Provider>
    );
};
