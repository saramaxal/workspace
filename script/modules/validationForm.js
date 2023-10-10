export const validationForm = (form) => {
    const validate = new JustValidate(form, {
        errorsContainer: '.employer__error',
        errorLabelStyle: {
            color: "#f00"
        },
        errorFieldStyle: {
            borderColor: "#f00"
        },
        errorFieldCssClass: 'invalid'
    });

    validate
        .addField("#logo", [
            {
                rule: 'minFilesCount',
                value: 1,
                errorMessage: 'Добавьте логотип'
            },
            {
                rule: 'files',
                value: {
                    files: {
                        extensions: ['jpeg', 'png', 'jpg'],
                        maxSize: 102400,
                        minSize: 1000,
                    },
                },
                errorMessage: 'Размер файла должен быть не больше 100кб'
            },
        ])
        .addField("#company", [{ rule: 'required', errorMessage: "Заполните название компании" }])
        .addField("#title", [{ rule: 'required', errorMessage: "Заполните название вакансии" }])
        .addField("#salary", [{ rule: 'required', errorMessage: "Заполните заработную плату" }])
        .addField("#location", [{ rule: 'required', errorMessage: "Заполните город" }])
        .addField("#email", [
            { rule: 'required', errorMessage: "Заполните email" },
            { rule: 'email', errorMessage: "Некорректный email" }
        ])
        .addField("#description", [{ rule: 'required', errorMessage: "Заполните описание" }])
        .addRequiredGroup("#format", "Выберите формат")
        .addRequiredGroup("#experience", "Выберите опыт")
        .addRequiredGroup("#type", "Выберите занятость");

    return validate;
};
