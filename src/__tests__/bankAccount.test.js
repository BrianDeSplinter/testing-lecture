import backAccount from '../bankAccount'

describe('Bank account methods and properties', () => {
    beforeEach(() => {
        backAccount.balance = 1000
    })

    test('Initial balance is 1000', () => {
        expect(backAccount.balance).toBe(1000)
    })

    test('deposit money should correctly alter balance', () => {
        backAccount.depositMoney(1000)
        expect(backAccount.balance).toBe(2000)
    })

    test('Withdraw function correctly alters balance', () => {
        backAccount.withdrawMoney(5000)
        expect(backAccount.balance).toBe(-4000)
    })
})