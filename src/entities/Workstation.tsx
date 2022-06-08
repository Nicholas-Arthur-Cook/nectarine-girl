import React, { useRef } from 'react';
import Collider from '../@core/Collider';
import GameObject, { GameObjectProps } from '../@core/GameObject';
import Interactable, { InteractionEvent } from '../@core/Interactable';
import Sprite, { SpriteRef } from '../@core/Sprite';
import useGameObject from '../@core/useGameObject';
import useGameObjectEvent from '../@core/useGameObjectEvent';
import waitForMs from '../@core/utils/waitForMs';
import spriteData from '../spriteData';

function WorkstationScript() {
    const { getComponent } = useGameObject();
    const workState = useRef(false);

    useGameObjectEvent<InteractionEvent>('interaction', () => {
        const el = document.getElementById('overlayContainer');
        const txt = document.getElementById('overlayText');
        if (el.style.display === 'none') {
            // ✅ Shows element if hidden
            txt.textContent =
                'Looks like some music is on the desk. Want to listen?\n Yes     No';
            el.style.display = 'block';
            setTimeout(() => {
                el.style.display = 'none';
            }, 4000);
        } else {
            // ✅ Hides element if shown
            el.style.display = 'none';
        }

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
            <WorkstationScript />
        </GameObject>
    );
}
