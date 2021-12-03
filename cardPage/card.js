
let cardNumber = '';
(function() {
    window.addEventListener('tizenhwkey', function(ev) {
        if (ev.keyName === 'back') {
            history.back();
        }
    });
}());

// this needs to happen before the function call below
if (localStorage.getItem("SbScanAndPayCardNumber") === null) {
    localStorage.setItem("SbScanAndPayCardNumber", "");
    //tizen.preference.setValue("SbScanAndPayCardNumberForWidget1", "");
    document.getElementById('no-code').style.opacity = '1';
    document.getElementById('help-button').style.opacity = '1';
} else {
    cardNumber = localStorage.getItem('SbScanAndPayCardNumber');
    // if it isnt empty
    if (cardNumber !== "") {
        addBarCode();
    } else {
        document.getElementById('no-code').style.opacity = '1';
        document.getElementById('help-button').style.opacity = '1';
    }
}

function toInfo() {
    document.location.href = "../helpPage/help.html";
}

function addBarCode() {
    try {
        // The return value is the canvas element
        let canvas = bwipjs.toCanvas('code', {
                bcid:        'code128',       // Barcode type
                text:        cardNumber,    // Text to encode
                scale:       3,               // 3x scaling factor
                height:      200,              // Bar height, in millimeters
                width:       600,
                columns: 3,
                includetext: false,            // Show human-readable text
                textxalign:  'center',        // Always good to set this
            });
        // turns everything else off
        let cardHolder = document.getElementById("qrcode-holder");
        cardHolder.style.backgroundColor = "white";
        myRemove(document.getElementById("no-code"));
        myRemove(document.getElementById("help-button"));
    } catch (e) {
        document.getElementById('no-code').style.opacity = '1';
        document.getElementById('help-button').style.opacity = '1';
    }
}

function myRemove(elem) {
    elem.parentNode.removeChild(elem);
}
