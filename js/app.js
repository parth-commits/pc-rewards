(function() {
    window.addEventListener('tizenhwkey', function(ev) {
        if (ev.keyName === 'back') {
            tizen.application.getCurrentApplication().exit();
        }
    });
}());