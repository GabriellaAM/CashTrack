document.addEventListener('DOMContentLoaded', () => {
    const datepicker = document.getElementById('datepicker');
    const calendarIcon = document.querySelector('.calendar-icon');
    const picker = new Pikaday({
        field: datepicker,
        format: 'DD/MM/YYYY',
        i18n: {
            previousMonth: 'Mês Anterior',
            nextMonth: 'Próximo Mês',
            months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            weekdays: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
            weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
        },

        trigger: document.querySelector('.date-wrapper')
    });

    calendarIcon.addEventListener('click', () => {
        datepicker.focus();
    });

});