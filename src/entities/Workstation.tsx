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

function WorkstationScript(props: GameObjectProps) {
    // TODO: Maybe refactor to not need all of GameObjectProps? Not sure if this actually affects peformance
    const { getComponent } = useGameObject();
    const workState = useRef(false);
    const ctx = useContext(TextboxContext);
    console.log('Context', ctx);

    const { setPaused } = useGame();

    useGameObjectEvent<InteractionEvent>('interaction', () => {
        // const el = document.getElementById('overlayContainer');
        // const txt = document.getElementById('overlayText');
        // if (el.style.display === 'none') {
        //     // ✅ Shows element if hidden
        //     txt.textContent =
        //         'Looks like some music is on the desk. Want to listen?\n Yes     No';
        //     el.style.display = 'block';
        //     setTimeout(() => {
        //         el.style.display = 'none';
        //     }, 4000);
        // } else {
        //     // ✅ Hides element if shown
        //     el.style.display = 'none';
        // }

        const options = [
            {
                text: 'Spotify',
                func: () => {
                    setPaused(false);
                    console.log('spotify');
                },
            },
            {
                text: 'Apple Music',
                func: () => {
                    setPaused(false);
                    console.log('Apple Music');
                },
            },
        ];
        setPaused(true);
        ctx.displayQuestion('Looks like some music is on the desk!', options);

        return waitForMs(400);
    });

    return null;
}

export default function Workstation(props: GameObjectProps) {
    return (
        <GameObject {...props}>
            <Sprite {...spriteData.objects} state="workstation-1" />
            <Collider />
            <Interactable />
            <WorkstationScript {...props} />
        </GameObject>
    );
}
