app.directive('fieldValidation', function($compile) {
    return {
        restrict: 'A',
        link: function($scope, elem, attrs) {
            var errorBlock, fields;
            fields = {
                email: {
                    required: true,
                    pattern: {
                        reg: '/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/',
                        errorMessage: 'Введите корректный email. Пример: test@example.com'
                    }
                },
                password: {
                    required: true
                }
            };
            if (!attrs['fieldValidation']) {
                return false;
            }
            if (fields[attrs['fieldValidation']].required) {
                elem.attr('required', true);
            }
            if (fields[attrs.fieldValidation].pattern)
                elem.attr('ng-pattern', fields[attrs.fieldValidation].pattern.reg);

            errorBlock = $('<div class="error-block"></div>');

            if (fields[attrs.fieldValidation].required)
                errorBlock.append('<p class="input-error required">Это поле обязательно для заполнения</p>');

            if (fields[attrs.fieldValidation].pattern)
                errorBlock.append('<p class="input-error pattern">' + fields[attrs.fieldValidation].pattern.errorMessage + '</p>');

            errorBlock.insertAfter(elem);
            $compile(errorBlock)($scope);
            elem.removeAttr('data-field-validation');
            return $compile(elem)($scope);
        }
    };
});