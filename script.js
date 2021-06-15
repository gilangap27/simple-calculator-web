

const input = document.querySelector('.input');
const output = document.querySelector('.output');

let out = '';

input.addEventListener('click', function(e){
	if(e.target.className == 'btn 1'){
		out += '1';
	} else if(e.target.className == 'btn 2'){
		out += '2';
	} else if(e.target.className == 'btn 3'){
		out += '3';
	} else if(e.target.className == 'btn 4'){
		out += '4';
	} else if(e.target.className == 'btn 5'){
		out += '5';
	} else if(e.target.className == 'btn 6'){
		out += '6';
	} else if(e.target.className == 'btn 7'){
		out += '7';
	} else if(e.target.className == 'btn 8'){
		out += '8';
	} else if(e.target.className == 'btn 9'){
		out += '9';
	} else if(e.target.className == 'btn bagi'){
		out += ' : ';
	} else if(e.target.className == 'btn kali'){
		out += ' x ';
	} else if(e.target.className == 'btn kurang'){
		out += ' - ';
	} else if(e.target.className == 'btn tambah'){
		out += ' + ';
	} else if(e.target.className == 'btn sama'){
		out += ' = ';
	}
	output.textContent = out;
})