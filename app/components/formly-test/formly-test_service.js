/* @ngInject */
export class FormlyTestService {
  constructor () {}

  getConfig () {
    return {
      fields: [
        {
          // this field's ng-model will be bound to vm.model.username
          key: 'username',
          type: 'input'
        },
        {
          key: 'name.first',
          type: 'input'
        },
        {
          key: 'name.last',
          type: 'input'
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
