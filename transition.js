// background transition intro
const body = document.querySelector('body');
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {     
        event.preventDefault();     
        body.style.transition = 'opacity 0.5s';
        body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = anchor.href;
        }, 500); 
    });
});
