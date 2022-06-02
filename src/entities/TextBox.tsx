import React, { useState } from 'react';
import { extend } from 'react-three-fiber';
import { Text } from 'drei';
import GameObject, { GameObjectProps } from '../@core/GameObject';
import Sprite from '../@core/Sprite';

// import TextScript from '../components/TextScript';
import spriteData from '../spriteData';

extend({ Text });
const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default function TextBox(props: GameObjectProps) {
    return (
        <GameObject name="player" displayName="Player" layer="fx" {...props}>
            {/* <TextScript> */}
            <Sprite {...spriteData.player} />
            <Text
                scale={[10, 10, 10]}
                color="white" // default
                anchorX="center" // default
                anchorY="middle" // default
                applyMatrix4={undefined}
            >
                HELLO WORLD
            </Text>
            {/* </TextScript> */}
        </GameObject>
    );
}
