import { css, Global } from '@emotion/core';
import React, { useCallback, useEffect, useState } from 'react';
import AssetLoader from './@core/AssetLoader';
import Game from './@core/Game';
import Scene from './@core/Scene';
import SceneManager from './@core/SceneManager';
import useWindowSize from './@core/useWindowSize';
import Closet from './modals/Closet';
import BedroomScene from './scenes/BedroomScene';
import OfficeScene from './scenes/OfficeScene';
import OtherScene from './scenes/OtherScene';
import soundData from './soundData';
import spriteData from './spriteData';
import TextboxContext, { TextboxContextInterface } from './store/textbox-context';
import globalStyles from './styles/global';

const styles = {
    root: (width: number, height: number) => css`
        display: flex;
        width: ${width - (width % 2)}px;
        height: ${height - (height % 2)}px;
        justify-content: center;
        align-items: center;
    `,
};

const urls = [
    ...Object.values(spriteData).map(data => data.src),
    ...Object.values(soundData).map(data => data.src),
    // flatten
].reduce<string[]>((acc, val) => acc.concat(val), []);

export default function App() {
    const [width, height] = useWindowSize();
    const [text, setText] = useState('Hello World');
    const [options, setOptions] = useState([]);
    const [highlighted, setHighlighted] = useState(5);
    const [hidden, setHidden] = useState(true);
    const [closetOpen, setClosetOpen] = useState(false);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if ((event.key === 'a' || event.key === 'ArrowLeft') && highlighted !== 0) {
                setHighlighted(prev => prev - 1);
            } else if (
                (event.key === 'd' || event.key === 'ArrowRight') &&
                highlighted !== options.length - 1
            ) {
                setHighlighted(prev => prev + 1);
            } else if (event.key === 'Enter') {
                // console.log(options, 'selected');
                window.removeEventListener('keydown', handleKeyDown);
                setHidden(true);
            }
        },
        [options, highlighted]
    );

    useEffect(() => {
        if (hidden) {
            console.log(options[highlighted], 'selected');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hidden, options]);

    function displayMessage(inputText) {
        setText(inputText);
        setHidden(false);
        setTimeout(() => {
            setHidden(true);
        }, 1000);
    }

    function displayQuestion(inputText, responses) {
        setText(inputText);
        setOptions(responses);
        setHighlighted(0);
        window.addEventListener('keydown', handleKeyDown);
        setHidden(false);
    }

    async function displayCloset() {
        setClosetOpen(true);
        // const requestOptions = {
        //     method: 'GET',
        //     headers: {
        // 'x-api-key': '<PLACE_KEY_ENV_HERE}',
        //     },
        // };
        // const response = await fetch(
        //     'https://api..com/v3/application/openapi-ping',
        //     requestOptions
        // );
        // if (response.ok) {
        //     const data = await response.json();
        //     console.log(data);
        // } else {
        //     console.log('oops');
        // }

        // setTimeout(() => {
        //     setClosetOpen(false);
        // }, 1000);
    }

    const textBoxProps = {
        displayMessage,
        displayQuestion,
    };

    return (
        <>
            <Global styles={globalStyles} />
            <div css={styles.root(width, height)}>
                <Game cameraZoom={80}>
                    <AssetLoader urls={urls} placeholder="Loading assets ...">
                        <TextboxContext.Provider
                            value={{
                                isVisible: !hidden,
                                text,
                                displayMessage,
                                displayQuestion,
                                displayCloset,
                            }}
                        >
                            <SceneManager defaultScene="office">
                                <Scene id="office">
                                    <BedroomScene {...textBoxProps} />
                                </Scene>
                                <Scene id="other">
                                    <OtherScene />
                                </Scene>
                            </SceneManager>
                        </TextboxContext.Provider>
                    </AssetLoader>
                </Game>
            </div>
            <div
                hidden={!closetOpen}
                id="closetContainer"
                style={{
                    position: 'absolute',
                    top: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                }}
            >
                <div
                    style={{
                        display: closetOpen ? 'flex' : 'none',
                        position: 'relative',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // margin: 'auto',
                        height: '100%',
                        aspectRatio: '352 / 320',
                        // width: '800.797px',
                    }}
                >
                    <Closet />
                    <div
                        role="button"
                        onClick={() => {
                            setClosetOpen(false);
                        }}
                        style={{
                            position: 'absolute',
                            top: 10,
                            right: '10%',
                            color: 'white',
                            fontSize: '38px',
                            zIndex: 3,
                            // textAlign: 'right',
                            // display: 'flex',
                        }}
                    >
                        Close
                    </div>
                    <img
                        height="100%"
                        src="./assets/Room/Room_Closet.png"
                        alt="Closet"
                        style={{
                            position: 'absolute',
                            top: 0,
                            // left: 0,
                            zIndex: 1,
                        }}
                    />
                </div>
            </div>
            <div
                hidden={hidden}
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
                    <p id="overlayText">{text}</p>
                    <p id="overlayOptions">
                        {options.map((x, id) => {
                            if (id === highlighted) {
                                return (
                                    <span
                                        key={id}
                                        style={{
                                            color: 'yellow',
                                        }}
                                    >
                                        {`${x.text} (${id}) `}
                                    </span>
                                );
                            }
                            return <span key={id}>{`${x.text} (${id}) `}</span>;
                        })}
                    </p>
                </div>
            </div>
        </>
    );
}
