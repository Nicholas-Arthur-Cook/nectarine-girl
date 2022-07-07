import React from 'react';

export interface TextboxContextInterface {
    isVisible: boolean;
    text: string;
    displayMessage: (inputText: string) => void;
    displayQuestion: (
        inputText: string,
        responses: { text: string; func: () => void }[]
    ) => void;
}

const TextboxContext = React.createContext<TextboxContextInterface | null>(null);

export default TextboxContext;
