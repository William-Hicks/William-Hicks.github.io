
var displayImageFromUrl = function () {
	var value = document.getElementById('urlSubmit').value,
	img = document.createElement('img');
	img.src = value;
	document.body.appendChild(img);
}
