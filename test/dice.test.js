import sum from './sum.js';
import dicegamelogic from '../src/components/dicegamelogic.js'
import { assert, expect } from 'chai';

describe('sum', function () {
    it('should return the sum of two arguments', function () {
        expect(sum(1, 2)).to.equal(3);
    });
});

describe('dicegame tests', function () {
    it('Throw Dice', function () {
        assert.isNumber(dicegamelogic.throwDie());
    })
})

