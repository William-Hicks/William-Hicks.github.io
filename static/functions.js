
var displayImageFromUrl = function () {
	var value = document.getElementById('urlSubmit').value,
	img = document.createElement('img');
	img.src = value;
	document.body.appendChild(img);
}

var inputWithUrl = function () {
	var html = [
		'<form method="POST" class="submitContent">',
		'<input type="text" placeholder="url" id="urlContent">',
		'<input type="text" placeholder="text overlay" id="selftext">',
		'<button type="button" onclick="displayImageFromUrl()">Preview Image</button>',
		'</form>',
		"<button type='button' onclick='chooseInputType()'>Back</button>",
		].join('');
	var div = document.getElementById('main');
	div.innerHTML = '';
	div.innerHTML = html;
}

var inputWithFile = function () {
	var html = [
	"<form method='POST' class='submitContent'>",
	"<input type='file' id='inputFile'>",
	"<input type='submit' value='submit' id='submitFromFile' onclick=''>",
	"</form>",
	"<button type='button' onclick='chooseInputType()'>Back</button>",
	].join('');
	var div = document.getElementById('main');
	div.innerHTML = '';
	div.innerHTML = html;
}
var chooseInputType = function () {
	var html = [
	'<li><button type="button" onclick="inputWithFile()">From file</button></li>',
	'<li><button type="button" onclick="inputWithUrl()">From url</button></li>'].join('');
	var div = document.getElementById('main');
	div.innerHTML = '';
	div.innerHTML = html;
}
