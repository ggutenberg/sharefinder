const expect = require('chai').expect;
const index = require('../dist/index.js');

describe('simple validate test', () => {
    it('should return true for null string', () => {
        const result = index.IsNullOrEmpty(null);
        expect(result).to.equal(true);
    });
    it('should return true for undefined string', () => {
        const result = index.IsNullOrEmpty(undefined);
        expect(result).to.equal(true);
    });
    it('should return true for empty string', () => {
        const result = index.IsNullOrEmpty('');
        expect(result).to.equal(true);
    });
    it('should return true for whitespace string', () => {
        const result = index.IsNullOrEmpty(' ');
        expect(result).to.equal(true);
    });
    it('should return false for non-empty string', () => {
        const result = index.IsNullOrEmpty('test');
        expect(result).to.equal(false);
    });
})