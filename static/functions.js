/*function loadImg(){
  img.src=document.getElementById("input").value;
}

function fromFile(){
  img.src=URL.createObjectURL(document.getElementById("inputFile").files[0]);
}*/

//------------------------

var displayImageFromUrl = function () {
    var value = document.getElementById('urlContent').value;
    var text=document.getElementById('selftext').value;
    alert(value);
    var img=document.getElementById("img_buffer");
    var canv=document.getElementById("canv"),ctx=canv.getContext("2d");
    img.src=value;
  
    img.onload=function(){
      //load the image into the canvas
      canv.width=img.width;
      canv.height=img.height
      ctx.drawImage(img,0,0);

      //draw text
      ctx.font="100px Times";
      ctx.fillStyle="white";
      ctx.fillText(text,(img.width/5)*1,(img.height/5)*2);
    };
    /*div = document.getElementById('pre'),
    html = "<img src="+value+" alt='Image Preview' id='previewImage'>";
    var oldImage = document.getElementById('previewImage');
    oldImage.parentNode.removeChild(oldImage);
    div.innerHTML = html;*/
}

function displayImageFromFile(){
  var img=document.getElementById("output")
  img.src=URL.createObjectURL(document.getElementById("inputFile").files[0]);
}

var inputWithUrl = function () {
    var html = [
        '<form method="POST" class="submitContent">',
        '<input type="text" placeholder="url" id="urlContent" class="urlInput">',
        '<input type="text" placeholder="text overlay" id="selftext" class="urlInput">',
        '<button type="button" onclick="displayImageFromUrl()" class="urlInput">Preview Image</button>',
        '</form>',
        "<button type='button' onclick='chooseInputType()'>Back</button>",
        "<div id='pre' class='previewImage'>",
        //ADDED CANVAS
        "<canvas id='canv'></canvas>",
        "</div>"
        ].join('');
    var div = document.getElementById('main');
    div.innerHTML = '';
    div.innerHTML = html;
}

var inputWithFile = function () {
    var html = [
    "<input type='file' id='inputFile'>",
    "<button id='submitFromFile' onclick='displayImageFromFile()'>submit</button>",
    "<button type='button' onclick='chooseInputType()'>Back</button>",
    "<img id='output'></img>"
    ].join('');
    var div = document.getElementById('main');
    div.innerHTML = '';
    div.innerHTML = html;
}

var chooseInputType = function () {
    var html = [
    '<p class="inputPreface">Select image from file or from url</p>',
    '<ul class="selectInput">',
    '<li><button type="button" onclick="inputWithFile()">From file</button></li>',
    '<li><button type="button" onclick="inputWithUrl()">From url</button></li>',
    '</ul>'].join('');
    var div = document.getElementById('main');
    div.innerHTML = '';
    div.innerHTML = html;
}
