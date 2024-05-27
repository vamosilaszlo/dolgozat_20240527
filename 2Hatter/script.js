document.addEventListener("DOMContentLoaded", function() {
    function createDivWithImageChange() {
        const div = document.createElement('div');
        div.id = 'imageDiv';
        
        const originalImage = 'Archimedes.jpg';
        const newImage = 'Heron.jpeg';
        
        div.style.backgroundImage = `url(${originalImage})`;
        
        div.addEventListener('click', function() {
            div.style.backgroundImage = `url(${newImage})`;
            setTimeout(() => {
                div.style.backgroundImage = `url(${originalImage})`;
            }, 2000);
        });

        document.body.appendChild(div);
        return div;
    }

    createDivWithImageChange();
});
