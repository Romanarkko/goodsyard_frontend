import { expect } from 'chai';
import 'mocha';
import { HelloWorld } from '../src/checkTest';

describe('This', () => {
  describe('should', () => {
    it('always pass', () => {
      expect(true).to.equal(true);
    });

    it('check app', () => {
      const hw = new HelloWorld();
      expect(hw.show()).to.be.equal('Hello World!');
    });
  });
});
