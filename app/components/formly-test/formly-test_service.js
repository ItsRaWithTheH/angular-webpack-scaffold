/* @ngInject */
export class FormlyTestService {
  constructor () {}

  getConfig () {
    return {
      fields: [
        {
          key: 'prop1',
          type: 'input',
          templateOptions: {
            label: 'property 1'
          }
        },
        {
          key: 'prop2.subprop1',
          type: 'input',
          templateOptions: {
            label: 'property 2'
          }
        },
        {
          key: 'prop2.subprop2',
          type: 'input',
          templateOptions: {
            label: 'property 3'
          }
        },
        {
          key: 'prop4',
          type: 'dropdown',
          templateOptions: {
            label: 'property 4',
            options: [
              {
                name: 'testOption1',
                value: 1
              },
              {
                name: 'testOption2',
                value: 2
              }
            ]
          }
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
