const mode = document.getElementById('mode_icon');

mode.addEventListener ('click', () => {
    const form = document.getElementById('login_form');
    const container = document.getElementById('container');
    const button = document.getElementById('login_button')


    if ( mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        container.classList.add('dark');
        button.classList.add('dark');
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
    container.classList.remove('dark');
    button.classList.remove('dark');
});