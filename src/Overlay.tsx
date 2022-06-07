import React from 'react';

export function Overlay() {
    const css = `
    .textBox p {
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        //border-right: .15em solid white; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: .15em; /* Adjust as needed */
        animation: 
            typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;
        word-wrap: break-word;
        width: parent;
    }

    /* The typing effect */
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: white; }
    }
    `;
    const text =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

    return (
        <div
            id="overlayContainer"
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
                className="textBox"
                style={{
                    position: 'absolute',
                    bottom: 40,
                    left: 0,
                    right: 0,
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    width: '50%',
                    height: '20%',
                    textAlign: 'center',
                    fontSize: '18px',
                    fontFamily: 'Courier New',
                    border: 'solid',
                    backgroundColor: 'black',
                }}
            >
                {/* <style> {css} </style> */}
                <p>{text}</p>
            </div>
        </div>
    );
}
