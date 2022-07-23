import React, { Fragment } from 'react';
import Collider from '../@core/Collider';
import GameObject from '../@core/GameObject';
import Interactable from '../@core/Interactable';
import ScenePortal from '../@core/ScenePortal';
import Sprite from '../@core/Sprite';
import TileMap, { TileMapResolver } from '../@core/TileMap';
import { mapDataString } from '../@core/utils/mapUtils';
import CoffeeMachine from '../entities/CoffeeMachine';
import PizzaPickup from '../entities/PizzaPickup';
import Plant from '../entities/Plant';
import Player from '../entities/Player';
import Workstation from '../entities/Workstation';
import spriteData from '../spriteData';

interface Props {
    displayMessage: Function;
    displayQuestion: Function;
}

export default function BedroomScene(textBoxProps: Props) {
    const resolveMapTile: TileMapResolver = (type, x, y) => {
        const key = `${x}-${y}`;
        const position = { x, y };

        const floor = (
            <GameObject key={key} {...position} layer="ground">
                <Sprite {...spriteData.objects} state="floor" />
            </GameObject>
        );
        const tile = (tileType, layer, collidable) => {
            return (
                <GameObject key={key} {...position} layer={layer}>
                    {collidable && <Collider />}
                    <Sprite {...spriteData.objects} state={tileType} />
                </GameObject>
            );
        };

        switch (type) {
            case '·':
                return floor;
            case '#':
                return tile('wall1', 'wall', true);
            case '@':
                return tile('wall2', 'wall', true);
            case '[':
                return tile('ULCorner1', 'wall', true);
            case '{':
                return tile('ULCorner2', 'wall', true);
            case ']':
                return tile('URCorner1', 'wall', true);
            case '}':
                return tile('URCorner2', 'wall', true);
            case '<':
                return tile('LLCorner', 'wall', true);
            case '>':
                return tile('LRCorner', 'wall', true);
            case '/':
                return (
                    <Fragment key={key}>
                        {tile('doorLeft', 'wall-decal', true)}{' '}
                        {tile('wall2', 'wall', true)}
                    </Fragment>
                );
            case '\\':
                return (
                    <Fragment key={key}>
                        {tile('doorRight', 'wall-decal', true)}{' '}
                        {tile('wall2', 'wall', true)}
                    </Fragment>
                );
            case '|':
                return (
                    <Fragment key={key}>
                        {tile('doorCenter', 'wall-decal', false)}{' '}
                        {tile('wall2', 'wall', false)}
                    </Fragment>
                );
            case 'q':
                return (
                    <Fragment key={key}>
                        {tile('lights1', 'wall-decal', true)}{' '}
                        {tile('wall2', 'wall', true)}
                    </Fragment>
                );
            case 'w':
                return (
                    <Fragment key={key}>
                        {tile('lights2', 'wall-decal', true)}{' '}
                        {tile('wall2', 'wall', true)}
                    </Fragment>
                );
            case 'e':
                return (
                    <Fragment key={key}>
                        {tile('lights3', 'wall-decal', true)}{' '}
                        {tile('wall2', 'wall', true)}
                    </Fragment>
                );
            case 'r':
                return (
                    <Fragment key={key}>
                        {tile('lights4', 'wall-decal', true)}{' '}
                        {tile('wall2', 'wall', true)}
                    </Fragment>
                );
            case 't':
                return (
                    <Fragment key={key}>
                        {tile('lights5', 'wall-decal', true)}{' '}
                        {tile('wall2', 'wall', true)}
                    </Fragment>
                );
            case 'y':
                return (
                    <Fragment key={key}>
                        {tile('lights6', 'wall-decal', true)}{' '}
                        {tile('wall2', 'wall', true)}
                    </Fragment>
                );
            case 'u':
                return (
                    <Fragment key={key}>
                        {tile('bed1', 'ground-decal', true)}
                        {floor}
                    </Fragment>
                );
            case 'i':
                return (
                    <Fragment key={key}>
                        {tile('bed2', 'ground-decal', false)}
                        {floor}
                    </Fragment>
                );
            case 'o':
                return (
                    <Fragment key={key}>
                        {tile('bed3', 'ground-decal', false)}
                        {floor}
                    </Fragment>
                );
            case 'p':
                return (
                    <Fragment key={key}>
                        {tile('bed4', 'ground-decal', false)}
                        {floor}
                    </Fragment>
                );
            case 'a':
                return (
                    <Fragment key={key}>
                        {tile('bed5', 'ground-decal', false)}
                        {floor}
                    </Fragment>
                );
            case 's':
                return (
                    <Fragment key={key}>
                        {tile('bed6', 'ground-decal', false)}
                        {floor}
                    </Fragment>
                );
            case 'd':
                return (
                    <Fragment key={key}>
                        {tile('bed7', 'ground-decal', false)}
                        {floor}
                    </Fragment>
                );
            case 'f':
                return (
                    <Fragment key={key}>
                        {tile('n1', 'ground-decal', false)}
                        {floor}
                    </Fragment>
                );
            case 'g':
                return (
                    <Fragment key={key}>
                        {tile('n2', 'ground-decal', false)}
                        {floor}
                    </Fragment>
                );
            case 'h':
                return (
                    <Fragment key={key}>
                        {tile('n3', 'ground-decal', false)}
                        {floor}
                    </Fragment>
                );
            case 'j':
                return (
                    <Fragment key={key}>
                        {tile('n4', 'ground-decal', false)}
                        {floor}
                    </Fragment>
                );
            case 'k':
                return (
                    <Fragment key={key}>
                        {tile('n5', 'ground-decal', false)}
                        {floor}
                    </Fragment>
                );
            case 'l':
                return (
                    <Fragment key={key}>
                        {tile('n6', 'ground-decal', false)}
                        {floor}
                    </Fragment>
                );
            case 'z':
                return (
                    <Fragment key={key}>
                        {tile('n7', 'ground-decal', false)}
                        {tile('piano3', 'foreground', false)}
                        {floor}
                    </Fragment>
                );
            case 'x':
                return (
                    <Fragment key={key}>
                        {tile('n8', 'ground-decal', false)}
                        {floor}
                    </Fragment>
                );
            case 'c':
                return (
                    <Fragment key={key}>
                        {tile('n9', 'ground-decal', false)}
                        {floor}
                    </Fragment>
                );
            case 'v':
                return (
                    <Fragment key={key}>
                        {tile('coffee1', 'foreground', false)}
                        {floor}
                    </Fragment>
                );
            case 'b':
                return (
                    <Fragment key={key}>
                        {tile('coffee2', 'foreground', true)}
                        {floor}
                    </Fragment>
                );
            case 'n':
                return (
                    <Fragment key={key}>
                        {tile('couch1', 'foreground', false)}
                        {floor}
                    </Fragment>
                );
            case 'm':
                return (
                    <Fragment key={key}>
                        {tile('couch2', 'foreground', false)}
                        {floor}
                    </Fragment>
                );
            case 'Q':
                return (
                    <Fragment key={key}>
                        {tile('couch3', 'ground-decal', false)}
                        {floor}
                    </Fragment>
                );
            case 'W':
                return (
                    <Fragment key={key}>
                        {tile('couch4', 'ground-decal', false)}
                        {floor}
                    </Fragment>
                );
            case 'E':
                return (
                    <Fragment key={key}>
                        {tile('couch5', 'ground-decal', false)}
                        {floor}
                    </Fragment>
                );
            case 'R':
                return (
                    <Fragment key={key}>
                        {tile('couch6', 'ground-decal', false)}
                        {floor}
                    </Fragment>
                );
            case 'T':
                return (
                    <Fragment key={key}>
                        {tile('couch7', 'ground-decal', false)}
                        {tile('tv1', 'foreground', false)}
                        {floor}
                    </Fragment>
                );
            case 'Y':
                return (
                    <Fragment key={key}>
                        {tile('couch8', 'ground-decal', false)}
                        {tile('tv2', 'foreground', false)}
                        {floor}
                    </Fragment>
                );
            case 'U':
                return (
                    <Fragment key={key}>
                        {tile('tv3', 'foreground', false)}
                        {floor}
                    </Fragment>
                );
            case 'I':
                return (
                    <Fragment key={key}>
                        {tile('tv4', 'foreground', true)}
                        {floor}
                    </Fragment>
                );
            case 'O':
                return (
                    <Fragment key={key}>
                        {tile('boxes1', 'foreground', false)}
                        {floor}
                    </Fragment>
                );
            case 'P':
                return (
                    <Fragment key={key}>
                        {tile('boxes2', 'foreground', false)}
                        {floor}
                    </Fragment>
                );
            case 'A':
                return (
                    <Fragment key={key}>
                        {tile('boxes3', 'foreground', true)}
                        {floor}
                    </Fragment>
                );
            case 'S':
                return (
                    <Fragment key={key}>
                        {tile('boxes4', 'foreground', true)}
                        {floor}
                    </Fragment>
                );
            case 'D':
                return (
                    <Fragment key={key}>
                        {tile('plant1', 'foreground', false)}
                        {floor}
                    </Fragment>
                );
            case 'F':
                return (
                    <Fragment key={key}>
                        {tile('plant2', 'foreground', true)}
                        {floor}
                    </Fragment>
                );
            case 'G':
                return (
                    <Fragment key={key}>
                        {tile('piano1', 'foreground', false)}
                        {floor}
                    </Fragment>
                );
            case 'H':
                return (
                    <Fragment key={key}>
                        {tile('piano2', 'foreground', false)}
                        {floor}
                    </Fragment>
                );
            case 'K':
                return (
                    <Fragment key={key}>
                        {tile('piano4', 'foreground', true)}
                        {floor}
                    </Fragment>
                );
            case 'L':
                return (
                    <Fragment key={key}>
                        {tile('piano5', 'foreground', true)}
                        {floor}
                    </Fragment>
                );
            case 'Z':
                return (
                    <Fragment key={key}>
                        {tile('piano6', 'foreground', true)}
                        {floor}
                    </Fragment>
                );
            default:
                return null;
        }
    };
    const mapData = mapDataString(`
[ @ @ @ q w e @ @ @ ]
{ @ @ @ r t y @ @ @ }
# · · d u i o · · · #
# · · · p a s · n m #
# · · · f g h · Q W #
# · · · j k l v E R #
# D G H z x c b T Y #
# F K L Z · O P U I #
# · · · · · A S · · #
< @ @ @ / | \\ @ @ @ >
`);

    return (
        <>
            <GameObject name="map">
                <ambientLight />
                <TileMap data={mapData} resolver={resolveMapTile} definesMapSize />
            </GameObject>
            <GameObject x={5} y={-1}>
                <Collider />
                <Interactable />
                <ScenePortal name="exit" enterDirection={[0, 0]} target="other/start" />
            </GameObject>
            <Player x={6} y={3} />
        </>
    );
}
