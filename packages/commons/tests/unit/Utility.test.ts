/**
 * Test Utility class
 *
 * @group unit/commons/utility
 */
import { Utility } from '../../src';

describe('Class: Utility', () => {

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  describe('Method: getColdStart', () => {

    test('when called multiple times on the parent class, it returns true the first time, then false afterwards', () => {

      // Prepare
      const utility = new Utility();
      const getColdStartSpy = jest.spyOn(utility, 'getColdStart');

      // Act
      utility.getColdStart();
      utility.getColdStart();
      utility.getColdStart();
      utility.getColdStart();
      utility.getColdStart();
    
      // Assess
      expect(getColdStartSpy).toHaveBeenCalledTimes(5);
      expect(getColdStartSpy.mock.results).toEqual([
        expect.objectContaining({ value: true }),
        expect.objectContaining({ value: false }),
        expect.objectContaining({ value: false }),
        expect.objectContaining({ value: false }),
        expect.objectContaining({ value: false }),
      ]);

    });

    test('when called multiple times on a child class, it returns true the first time, then false afterwards', () => {

      // Prepare
      class PowerTool extends Utility {
        public constructor() {
          super();
        }

        public dummyMethod(): boolean {
          return this.getColdStart();
        }
      }
      const powertool = new PowerTool();
      const dummyMethodSpy = jest.spyOn(powertool, 'dummyMethod');
      const getColdStartSpy = jest.spyOn(powertool, 'getColdStart');

      // Act
      powertool.dummyMethod();
      powertool.dummyMethod();
      powertool.dummyMethod();
      powertool.dummyMethod();
      powertool.dummyMethod();

      // Assess
      expect(dummyMethodSpy).toHaveBeenCalledTimes(5);
      expect(getColdStartSpy).toHaveBeenCalledTimes(5);
      expect(dummyMethodSpy.mock.results).toEqual([
        expect.objectContaining({ value: true }),
        expect.objectContaining({ value: false }),
        expect.objectContaining({ value: false }),
        expect.objectContaining({ value: false }),
        expect.objectContaining({ value: false }),
      ]);
      
    });

  });

  describe('Method: isColdStart', () => {

    test('when called multiple times on the parent class, it returns true the first time, then false afterwards', () => {

      // Prepare
      const utility = new Utility();
      const isColdStartSpy = jest.spyOn(utility, 'isColdStart');

      // Act
      utility.isColdStart();
      utility.isColdStart();
      utility.isColdStart();
      utility.isColdStart();
      utility.isColdStart();

      // Assess
      expect(isColdStartSpy).toHaveBeenCalledTimes(5);
      expect(isColdStartSpy.mock.results).toEqual([
        expect.objectContaining({ value: true }),
        expect.objectContaining({ value: false }),
        expect.objectContaining({ value: false }),
        expect.objectContaining({ value: false }),
        expect.objectContaining({ value: false }),
      ]);

    });

    test('when called multiple times on a child class, it returns true the first time, then false afterwards', () => {

      // Prepare
      class PowerTool extends Utility {
        public constructor() {
          super();
        }

        public dummyMethod(): boolean {
          return this.isColdStart();
        }
      }
      const powertool = new PowerTool();
      const dummyMethodSpy = jest.spyOn(powertool, 'dummyMethod');
      const isColdStartSpy = jest.spyOn(powertool, 'isColdStart');

      // Act
      powertool.dummyMethod();
      powertool.dummyMethod();
      powertool.dummyMethod();
      powertool.dummyMethod();
      powertool.dummyMethod();

      // Assess
      expect(dummyMethodSpy).toHaveBeenCalledTimes(5);
      expect(isColdStartSpy).toHaveBeenCalledTimes(5);
      expect(dummyMethodSpy.mock.results).toEqual([
        expect.objectContaining({ value: true }),
        expect.objectContaining({ value: false }),
        expect.objectContaining({ value: false }),
        expect.objectContaining({ value: false }),
        expect.objectContaining({ value: false }),
      ]);

    });

  });

});