(function() {
    window.addEventListener('tizenhwkey', function(ev) {
        if (ev.keyName === 'back') {
            history.back();
        }
    });
}());