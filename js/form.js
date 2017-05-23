(function (d, w) {
    'use strict';

    var READY_STATE_COMPLETE = 4,
		OK = 200,
		NOT_FOUND = 404,
		ajax = new XMLHttpRequest(),
		form = d.forms[0],
		preload = form.querySelector('.preload'),
		message = form.querySelector('.message');

    function sendForm(e) {
        var formElements = d.querySelectorAll('[required]'),
            formData = '';
        

        e.preventDefault();

        ajax.open('POST', './action_page.php', true);
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        ajax.onload = function () {
            preload.classList.remove('hidden');

            if ( ajax.readyState === READY_STATE_COMPLETE ) {
                preload.classList.add('hidden');
                message.classList.remove('hidden');

                if ( ajax.status === OK ) {
                    message.innerHTML = ajax.response;
                } else {
                    message.innerHTML = '<p>Problemas con el servidor. Error N° <mark>' + ajax.status + '</mark>: <b>' + ajax.statusText + '</b></p>';
                }
            }
        }

        formElements.forEach(function (input) {
            formData += input.name + '=' + input.value + '&'
        });

        ajax.send( encodeURI(formData) );

        console.log(formData);
    }
    

    form.onsubmit = sendForm;
})(document, window);