const assert = require('chai').assert;
const dicegamelogic = require('../src/components/dicegamelogic');

describe('dicegame tests', function () {
    it('Throw Dice', function () {
        assert.isNumber(dicegamelogic.throwDie());
    })
})

