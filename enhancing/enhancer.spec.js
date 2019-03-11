const { repair, succeed, fail } = require('./enhancer.js');
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

const failEnhancegameItem = {
    name: 'Game Item',
    durability: 40,
    enhancement: 0
}

describe('enhancer.js', () => {
    describe('repair()', () => {
        test('The durability of game item set to 100', () => {
            expect(repair(gameItem)).toEqual(repairedItem);
        })
    })
})

describe('succeed()', () => {
    test('Enhancement from 0 to 1 of Game Item', () => {
        expect(succeed(gameItem)).toEqual(enhancedItem);
    })
   
})

describe('fail()', () => {
    test('Game Item enhancement fails to be enhanced', () => {
        expect(fail(gameItem)).toEqual(failEnhancegameItem);
    })
 
})
   