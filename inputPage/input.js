(function() {
    window.addEventListener('tizenhwkey', function(ev) {
        if (ev.keyName === 'back') {
            history.back();
        }
    });
}());
let theCodeText = '';
function saveAndExit() {

    // for app bar code
    localStorage.setItem("SbScanAndPayCardNumber", theCodeText);

    // for widget
    let opts = {
        bcid:        'code128',       // Barcode type
        text:        theCodeText,    // Text to encode
        scale:       0.175, //3,               // 3x scaling factor
        height:      200,              // Bar height, in millimeters
        width:       600,
        columns: 3,
        //includetext: true,            // Show human-readable text
        //textxalign:  'center',        // Always good to set this
    };

    try {
        // fixupOptions() modifies options values (currently padding and
        // background color) to provide a simplified interface for the
        // drawing code.
        bwipjs.fixupOptions(opts);

        // The drawing needs FontLib to extract glyph paths
        let svg = bwipjs.render(opts, DrawingSVG(opts, bwipjs.FontLib));
        tizen.preference.setValue("SbScanAndPayCardNumberForWidget1", svg);
        //localStorage.setItem("SbScanAndPayCardNumberForWidget1", svg);
        
    } catch (e) {
        //localStorage.setItem("SbScanAndPayCardNumberForWidget1",  e);
        //tizen.preference.setValue("SbScanAndPayCardNumberForWidget1", e);
        
    }
    window.history.back();
}
// old variable: SBcardNumber | new variable: SbScanAndPayCardNumber
// max 32 chars
function myInput(){
    let str = document.getElementById('input-box').value;
    let y = str.replace(/\s/g,'');
    theCodeText = y;
    document.getElementById('output-text').innerHTML = spaceOut(y);
}

function spaceOut(s) {
    let temp = '';
    for (let i = 0; i < s.length; i++) {
        if (i%4 == 0) {
            temp = temp + ' ';
        }
        temp = temp + s[i];
    }
    return temp
}