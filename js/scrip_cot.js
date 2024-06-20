
document.addEventListener("DOMContentLoaded", function () {
    function adjustLayout() {
        const main = document.querySelector('main');
        const form = document.querySelector('.formulario__cotizacion');
        const width = window.innerWidth;

        if (width <= 850) {
            main.style.marginTop = "50px";
            form.style.padding = "20px";
        } else {
            main.style.marginTop = "100px";
            form.style.padding = "40px 20px";
        }
    }

    // Adjust layout on page load
    adjustLayout();

    // Adjust layout on window resize
    window.addEventListener("resize", adjustLayout);
});
