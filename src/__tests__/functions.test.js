const {sum, sayHello} = require('../functions')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
})

test('sayHello says hello', () => {
    expect(sayHello()).toBe('hello')
})

test('object assignment', () => {
    const data = {one: 1}
    data['two'] = 2
    expect (data).toEqual({one: 1, two: 2})
})

test('Expect true to be truthy', () => {
    expect(true).toBeTruthy()
})