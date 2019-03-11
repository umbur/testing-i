const { repair, succeed } = require('./enhancer.js');
// test away!

const gameItem = {
    name: 'Game Item',
    durability: 45,
    enhancement: 0
}

const repairedItem = {
    name: 'Game Item',
    durability: 100,
    enhancement: 0
}

const enhancedItem = {
    name: 'Game Item',
    durability: 45,
    enhancement: 1
}

describe('enhancer.js', () => {
    describe('repair()', () => {
        test('The durability of game item set to 100', () => {
            expect(repair(gameItem)).toEqual(repairedItem);
        })
    })
})

describe('succeed()', () => {
    test('happy case, enhancement from 0 to 1 of regular item', () => {
        expect(succeed(gameItem)).toEqual(enhancedItem);
    })
   
})
   