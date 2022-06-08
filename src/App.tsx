import { css, Global } from '@emotion/core';
import React, { useState } from 'react';
import AssetLoader from './@core/AssetLoader';
import Game from './@core/Game';
import Scene from './@core/Scene';
import SceneManager from './@core/SceneManager';
import useWindowSize from './@core/useWindowSize';
import OfficeScene from './scenes/OfficeScene';
import OtherScene from './scenes/OtherScene';
import soundData from './soundData';
import spriteData from './spriteData';
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
    const [hidden, setHidden] = useState(true);

    function displayMessage(inputText) {
        setText(inputText);
        setHidden(false);
    }

    return (
        <>
            <Global styles={globalStyles} />
            <div css={styles.root(width, height)}>
                <Game cameraZoom={80}>
                    <AssetLoader urls={urls} placeholder="Loading assets ...">
                        <SceneManager defaultScene="office">
                            <Scene id="office">
                                <OfficeScene />
                            </Scene>
                            <Scene id="other">
                                <OtherScene />
                            </Scene>
                        </SceneManager>
                    </AssetLoader>
                </Game>
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
                </div>
            </div>
        </>
    );
}
