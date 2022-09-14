( function(){
    const clock = document.querySelector('.header__clock');

    function updateClock(){
    clock.innerHTML = new Date().toLocaleTimeString();
    }

    setInterval(updateClock, 1000);

})();