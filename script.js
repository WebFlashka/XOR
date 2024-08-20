let text1 = document.getElementById('text1');
text1.onchange = function() { 
  
  readfile(this.files)
  
  };

function readfile(files) {
    var text = files[0];
    document.getElementById("text1").name = text.name;
    console.dir(encode);
    var reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("encode").value = e.target.result;
    };
    reader.readAsText(text);
}

function copyToClip(){
  var text2 = document.getElementById("out_code");
  text2.select();
  document.execCommand("Copy");
  console.log("copied");
}

let saveFile = document.getElementById('save');
saveFile.onclick = download;

function download() {
    var link = document.createElement('a');
    var str = document.getElementById("out_code").value;
    str = str.split("\u000A").join("\u000D\u000A");
    bl = new Blob([str]);
    link.href = URL.createObjectURL(bl);
    if (document.getElementById("out_code").name != "") {
        link.download = document.getElementById("out_code").name;
    } else {
        link.download = "text.txt";
    }
    var e = new MouseEvent("click");
    link.dispatchEvent(e);
}








let enter_encode = document.getElementById('enter_encode');

enter_encode.onclick = /*function () {

(*/function() {
  
  
  
let input1 = document.getElementById('encode').value;

let key = document.getElementById('key').value;

/*var input = document.getElementById("out_code1" ).innerHTML = input1;*/
		
		
		var output = xorEncode(input1);
		
		
		document.getElementById("out_code" ).innerHTML = output;



	function xorEncode( str ) {
		
		var output = "";

		for( var i = 0; i < str.length; ) {
		  
			for( var j = 0; ( j < key.length && i < str.length ); j++, i++ ) {
			  
				output += String.fromCharCode(str[i].charCodeAt(0) ^ key[j].charCodeAt(0));
				
			}
		}

		return output;
	}

	/*document.addEventListener( "DOMContentLoaded", function() {*/
	  
	
		
		 

	//});

};
//};