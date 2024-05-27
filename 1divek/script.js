document.addEventListener("DOMContentLoaded", function() {
    const divs = document.querySelectorAll("body > div");

    if (divs.length >= 5) {
        divs[0].textContent = "Első";
        divs[2].textContent = "Harmadik";
        divs[4].textContent = "Utolsó";
        
        divs[1].textContent = `Második, index: ${[...divs].indexOf(divs[1])}`;
        divs[3].textContent = `Negyedik, index: ${[...divs].indexOf(divs[3])}`;
    }
});

