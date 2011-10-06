alert('test');
var req = new XMLHttpRequest();
req.open(
    'GET',
    'http://feeds.feedburner.com/ArtistADay-ArtSubmissionsAccepted',
    true);
req.onload = replaceLogo;
req.send(null);

function replaceLogo() {
    // use a regular expression to find the image URL
    var imgPattern = new RegExp('img src="(http://www.aadstatic.com/uploads/[A-Za-z0-9\_]+\.jpg)"');
    var imgURL = imgPattern.exec(req.responseText)[1];
    // create a new logo div
    var newLogo = document.createElement('div');    
    newLogo.id = 'lga';
    // insert the logo into the new div
    newLogo.innerHTML = '<a href="http://www.artistaday.com"><img id="art" src="'+imgURL+'" height="231px"></a>';
    // find the old logo and replace it with the new one
    var oldLogo = document.getElementById('lga');
    oldLogo.parentNode.replaceChild(newLogo, oldLogo);
}
