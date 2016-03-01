/* @ngInject */
export class FormlyTestService {
  constructor () {}

  getConfig () {
    return {
      fields: [
        {
          key: 'prop1',
          type: 'input'
        },
        {
          key: 'prop1.subprop1',
          type: 'input'
        },
        {
          key: 'prop1.subprop2',
          type: 'number'
        }
      ]
    };
  }

  getOptions () {
    return {
      test: {
        templateOptions: {
          test: 'test'
        }
      }
    };
  }
}
