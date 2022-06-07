import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Overlay } from './Overlay';

ReactDOM.render(
    <>
        <App />
        <Overlay />
    </>,
    document.getElementById('root')
);

type RequestIdleCallbackHandle = any;
type RequestIdleCallbackOptions = {
    timeout: number;
};
type RequestIdleCallbackDeadline = {
    readonly didTimeout: boolean;
    timeRemaining: () => number;
};

declare global {
    interface Window {
        requestIdleCallback: (
            callback: (deadline: RequestIdleCallbackDeadline) => void,
            opts?: RequestIdleCallbackOptions
        ) => RequestIdleCallbackHandle;
        cancelIdleCallback: (handle: RequestIdleCallbackHandle) => void;
    }
}
