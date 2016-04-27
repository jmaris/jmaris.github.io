function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function changeDirection() {
	if(direction=="defr") {
		direction="frde";
		document.getElementById('direction').innerHTML="Direction : frde";
		document.getElementById('comment').innerHTML="";
	}
	else if(direction=="frde") {
		direction="defr";
		document.getElementById('direction').innerHTML="Direction : defr";
		document.getElementById('comment').innerHTML="";
	}
	newWord();
	
}

function newWord() {
	document.getElementById('translatedword').value="";
	if(direction=="frde") {
		document.getElementById('wordtotranslate').innerHTML=(workingVocab[0][0]);
	}
	else if(direction=="defr") {
		document.getElementById('wordtotranslate').innerHTML=(workingVocab[0][1]);
	}
}

function rightAnswer(){
	if(lastanswer==true) {workingVocab.splice(0,1);}
	else {workingVocab=shuffle(workingVocab);}
	lastanswer=true;
	document.body.style.backgroundColor = "lightgreen";
	document.getElementById('wordtotranslate').innerHTML="Correct !";
	document.getElementById('comment').innerHTML="";
	newWord();
}
function checkVocab() {
	answer=document.getElementById('translatedword').value.toLowerCase();
	if(direction=="frde"){
		if(answer==workingVocab[0][1].toLowerCase()) {
			rightAnswer();
		}
		else {
			document.body.style.backgroundColor = "#C24641";
			document.getElementById('comment').innerHTML="Incorrect ! Please type the correction : <h1>" + workingVocab[0][1] + "</h1>";
			lastanswer=false;
		}
	}
	
	else if(direction=="defr") {
		if(answer==workingVocab[0][0].toLowerCase()) {
			rightAnswer();
		}
		else {
			document.body.style.backgroundColor = "#C24641";
			document.getElementById('comment').innerHTML="Incorrect ! Please type the correction : <h1>" + workingVocab[0][0] + "</h1>";
			lastanswer=false;
		}
	}
	document.getElementById('wordsleft').innerHTML=workingVocab.length + " mots restants !";
}

function init() {
	lastanswer=true;
	direction="frde";
	loadvocab();
	workingVocab=shuffle(vocab);
	newWord();
	$("input").on("keydown",function search(e) {
    if(e.keyCode == 13) {
        checkVocab()
    }
});
}

// THIS IS SUCH BAD PRACTICE, PLEASE DO NOT JUDGE ME

function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}


function loadvocabfile(vocabfile) {
	loadjscssfile(vocabfile, 'js');
	init();
	newWord();
}
