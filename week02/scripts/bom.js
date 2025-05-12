const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const del = document.createElement('button');


        li.textContent = input.value;
        del.textContent = '❌';

        li.append(del);
        list.append(li);

        // Delete the chapter on button click
        del.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';

    }else{
        input.focus();
    }

});