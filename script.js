

const input = document.querySelector('.input');
const output = document.querySelector('.output');

let out = '';
let inp = '';

input.addEventListener('click', function(e){
	if(e.target.className == 'angka'){
		out += e.target.textContent;
		inp += e.target.textContent;
	} else if(e.target.textContent == 'C'){
		out = '';
	} else if(e.target.className == 'operator'){
		if(e.target.textContent == '÷'){
			out += '/';
			inp += e.target.textContent; 
		} else if (e.target.textContent == 'x'){
			inp += '*';
			out += e.target.textContent; 
		} else {
			out += e.target.textContent;
			inp += e.target.textContent;
		}
	} else if(e.target.className == 'hasil'){
		let hasil = eval(inp);
		out = hasil;
	}
	
	output.textContent = out;
})