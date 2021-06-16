

const input = document.querySelector('.input');
const output = document.querySelector('.output');

let out = '', angka = '';
let bil1 = [];
let bil2 = [];
let operator = [];
let betul = true;

input.addEventListener('click', function(e){
	if(e.target.className == 'angka'){
		out += e.target.textContent;
		angka += e.target.textContent
	} else if(e.target.textContent == 'C'){
		out = '';
	} 
	else if(e.target.className == 'operator'){

		out += ' '+e.target.textContent+' ';

		if(betul == true){
			bil1.push(Number(angka));
			angka = 0;
			betul = false;
		} else if(betul == false){
			bil2.push(Number(angka));
			angka = 0;
			betul = true;
		}

		if(e.target.textContent == ':'){
			operator.push(':');
		} else if(e.target.textContent == 'x'){
			operator.push('x');
		} else if(e.target.textContent == '-'){
			operator.push('-');
		} else if(e.target.textContent == '+'){
			operator.push('+');
		} else if(e.target.textContent == '='){
			
			out = hasil;
		} 
	} 
	output.textContent = out;
})