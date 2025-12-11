document.addEventListener('DOMContentLoaded', () => {
            const hello = document.querySelector('#hello');
            document.querySelector('form').onsubmit = function() {
                    const name = document.querySelector('#name').value;
                    event.preventDefault();
                    document.querySelector('h1').innerHTML = `${name}`;

            document.querySelector('#color-change').onchange = function () {
                hello.style.color = this.value;
};


            document.querySelector('#font-change').onchange = function () {
                hello.style.fontFamily = this.value;
};


            document.querySelector('#size-change').onchange = function () {
                hello.style.fontSize = this.value;
            };
        }
    });