import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Overlay() {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                width: '100%',
                height: '100%',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    bottom: 40,
                    left: 0,
                    right: 0,
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '28px',
                }}
            >
                Hello world
            </div>
        </div>
    );
}

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
