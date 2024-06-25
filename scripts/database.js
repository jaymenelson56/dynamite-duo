const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        },
        {
            id: 3,
            name: "Manman",
            power: "None"
        },
        {
            id: 4,
            name: "Hyperspeed Jr.",
            power: "Super speed"
        },
        {
            id: 5,
            name: "The Debugger",
            power: "Technology Interface"
        },
        {
            id: 6,
            name: "Card Trick",
            power: "Magic"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Dynofry",
            power: "Ice blasts"
        },
        {
            id: 2,
            name: "Reverse Hyperspeed",
            power: "Super speed"
        },
        {
            id: 3,
            name: "Mannequin",
            power: "Shapeshifter"
        },
        {
            id: 4,
            name: "Cotton Candy",
            power: "Unpleasent Texture"
        },
        {
            id: 5,
            name: "Syntax Error",
            power: "Technology Interface"
        },
        {
            id: 6,
            name: "Magic Show",
            power: "Magic"
        }
    ]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}
export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}