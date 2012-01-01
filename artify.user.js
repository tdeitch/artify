// ==UserScript==
// @name          Artify
// @namespace     http://www.tdeitch.com/artify/
// @description   Replace the Google logo with art
// @include       https://encrypted.google.tld/
// @include       https://www.google.tld/
// @include       http://www.google.tld/
// @include       https://duckduckgo.com/
// @include       http://duckduckgo.com/
// ==/UserScript==

GM_xmlhttpRequest({
    method: 'GET',
    url: 'http://feeds.feedburner.com/ArtistADay-ArtSubmissionsAccepted',
    onload: function(resp) {
        // use a regular expression to find the image URL
        var imgPattern = new RegExp('img src="(http://www.aadstatic.com/uploads/[A-Za-z0-9\_]+\.jpg)"');
        var imgURL = imgPattern.exec(resp.responseText)[1];
        if (document.getElementById('lga') !== null) {
            // create a new logo div
            var newLogo = document.createElement('div');    
            newLogo.id = 'lga';
            // insert the logo into the new div
            newLogo.innerHTML = '<a href="http://www.artistaday.com"><img id="art" src="'+imgURL+'" height="217px" style="border: 8px solid #c4c8cc; -moz-border-radius: 15px; -webkit-border-radius: 15px;"></a>';
            // find the old logo and replace it with the new one
            var oldLogo = document.getElementById('lga');
            oldLogo.parentNode.replaceChild(newLogo, oldLogo);
        }
        else {
            var newLogo = document.createElement('center');
            // insert the logo into the new div
            newLogo.innerHTML = '<br><a href="http://www.artistaday.com"><img id="art" src="'+imgURL+'" height="217px" style="border: 8px solid #c4c8cc; -moz-border-radius: 15px; -webkit-border-radius: 15px;"></a><br>';
            // find the old logo and replace it with the new one
            var oldLogo = document.getElementById('dhl');
            oldLogo.parentNode.replaceChild(newLogo, oldLogo);
        }
    }
});