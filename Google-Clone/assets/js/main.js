$('.tdnn').click(function () {
    $("body").toggleClass('light');
    $("#dark").toggleClass('d-block');
    $("#light").toggleClass('d-none');
    $(".moon").toggleClass('sun');
    $(".tdnn").toggleClass('day');
});

/* If Input Focused */

const input_container = document.querySelector('.input-container');
const input_container_input = document.querySelector('#search');

document.addEventListener('click', (event) => {
    const withinBoundaries = event.composedPath().includes(input_container_input);

    if (withinBoundaries) {
        input_container.classList.add("input-focus");

        return;
    } else {
        if (input_container.classList[1] == "input-focus") {
            input_container.classList.remove("input-focus");
        }

        return;
    }
});