import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord, createLinearWall } from '../../utils/grid';
import miniMeAnimations from '../sprites/miniMe';

export const professionalExpRoom = {
    lowerImageSrc: "../images/backgrounds/generic.png",
    upperImageSrc: "../images/backgrounds/generic-upper.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(9),
            y: getGridPosition(11),
            isPlayer: true,
            hasShadow: true,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/characters/sprite-vasco.png',
                    width: 16,
                    height: 32,
                    imageWidth: 16,
                    imageHeight: 32,
                    animations: miniMeAnimations
                },
                shadow: {
                    src: '../images/characters/shadow.png',
                    width: 32,
                    height: 32,
                }
            }
        }),
        mirror: new GameObject({
            x: getGridPosition(7),
            y: getGridPosition(0),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/aniamted_haunted_mirror.png',
                    width: 16,
                    height: 32,
                    imageWidth: 16,
                    imageHeight: 32
                },
            },
            interactions: [
                {
                    events: [{
                        type: 'interactionBox',
                        title: 'About Me',
                        textLines: [
                            "My name is Vasco and I'm currently a Front-End Developer at Farfetch.",
                            "I've been working for Farfech since September 2017 developing components and features for the website but since 2020 I moved to a more techincal team that develops tools to maximize the performance of the website and improves our developers experience",
                        ] 
                    },
                    {
                        type: 'interactionBox',
                        title: 'About Me',
                        textLines: [
                            "I studied Computer Science at FCUP (Faculdade de Ciências da Universidade do Porto)",
                            "I consider myself a creative, dedicated and curious person",
                            "I love to travel, surf and meet new people"
                        ] 
                    }]
                }
            ],
            interactionIcon: {
                far:  '../images/objects/interaction.png'
            }
        }),
        // shelf: new GameObject({
        //     x: getGridPosition(9),
        //     y: getGridPosition(0),
        //     hasShadow: false,
        //     width: getGridPosition(2),
        //     height: getGridPosition(2),
        //     sprite: {
        //         object: {
        //             src: '../images/objects/shelf.png',
        //             width: getGridPosition(3),
        //             height: getGridPosition(3),
        //         },
        //     },
        // }),
        table: new GameObject({
            x: getGridPosition(5),
            y: getGridPosition(1),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/table.png',
                    width: getGridPosition(2),
                    height: getGridPosition(2),
                },
            },
        }),
        couch: new GameObject({
            x: getGridPosition(8),
            y: getGridPosition(4),
            hasShadow: false,
            width: getGridPosition(3),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/couch.png',
                    width: getGridPosition(3),
                    height: getGridPosition(2),
                },
            },
        })
    },
    actionSpaces: {
        // [getGridCoord(8,1)] : [
        //     {
        //         events: [
        //             { who: 'npc', type: 'walk', direction: 'up'},
        //             { who: 'npc', type: 'idle', direction: 'left'},
        //             { type: 'message', text: 'Dont walk there!!'},
        //         ]
        //     }
        // ],
        [getGridCoord(0,4)]: [
            {
                events: [
                    { type: 'changeMap', map: 'hobbies'},
                ]
            }
        ],
        [getGridCoord(9,11)]: [
            {
                events: [
                    { type: 'changeMap', map: 'outside'},
                ]
            }
        ]
    },
    walls: {},
};


createLinearWall({coord: 'x', x: 0, y: 0, n: 20, map: professionalExpRoom});
createLinearWall({coord: 'y', x: 0, y: 0, n: 11, map: professionalExpRoom});
createLinearWall({coord: 'x', x: 1, y: 6, n: 3, map: professionalExpRoom});
createLinearWall({coord: 'x', x: 5, y: 8, n: 4, map: professionalExpRoom});
createLinearWall({coord: 'x', x: 10, y: 8, n: 4, map: professionalExpRoom});
createLinearWall({coord: 'y', x: 4, y: 6, n: 6, map: professionalExpRoom});
createLinearWall({coord: 'y', x: 14, y: 1, n: 11, map: professionalExpRoom});
createLinearWall({coord: 'x', x: 5, y: 12, n: 4, map: professionalExpRoom});
createLinearWall({coord: 'x', x: 10, y: 12, n: 4, map: professionalExpRoom});