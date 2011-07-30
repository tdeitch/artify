var req = new XMLHttpRequest();
req.open(
    "GET",
    "http://tdeitch.com/art",
    true);
req.onload = replaceLogo;
req.send(null);

function replaceLogo() {
    var originalLogo = document.getElementById("lga");
//    var form = document.getElementsByName("f")[0];
    var myDiv = document.createElement("div");    
    myDiv.id = 'lga';
    myDiv.innerHTML = req.responseText;
//    form.parentNode.insertBefore(myDiv, form)
//    originalLogo.parentNode.removeChild(originalLogo);
    originalLogo.parentNode.replaceChild(myDiv, originalLogo);
}