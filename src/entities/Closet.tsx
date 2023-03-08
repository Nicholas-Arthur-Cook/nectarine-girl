import React, { useRef, useContext } from 'react';
import TextboxContext from '../store/textbox-context';
import Collider from '../@core/Collider';
import GameObject, { GameObjectProps } from '../@core/GameObject';
import Interactable, { InteractionEvent } from '../@core/Interactable';
import Sprite, { SpriteRef } from '../@core/Sprite';
import useGameObject from '../@core/useGameObject';
import useGameObjectEvent from '../@core/useGameObjectEvent';
import waitForMs from '../@core/utils/waitForMs';
import spriteData from '../spriteData';
import useGame from '../@core/useGame';

function ClosetScript(props: GameObjectProps) {
    // TODO: Maybe refactor to not need all of GameObjectProps? Not sure if this actually affects peformance
    const { getComponent } = useGameObject();
    const workState = useRef(false);
    const ctx = useContext(TextboxContext);
    console.log('Context', ctx);

    const { setPaused } = useGame();

    useGameObjectEvent<InteractionEvent>('interaction', () => {
        ctx.displayCloset();
        // setPaused(true);
        return waitForMs(400);
    });

    return null;
}

export default function Closet(props: GameObjectProps) {
    return (
        <GameObject {...props}>
            <Interactable />
            <ClosetScript {...props} />
        </GameObject>
    );
}
