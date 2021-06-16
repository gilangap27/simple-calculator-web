

const input = document.querySelector('.input');
const output = document.querySelector('.output');

let out = '', angka = '';
let bil1 = 0, bil2 = 0, operator = 0;

input.addEventListener('click', function(e){
	if(e.target.className == 'angka'){
		out += e.target.textContent;
		angka += e.target.textContent
	} else if(e.target.textContent == 'C'){
		out = '';
	} 
	else if(e.target.className == 'operator'){
		if(bil1 == 0){
			bil1 = Number(angka);
			angka = 0;
		} else if(bil2 == 0){
			bil2 = Number(angka);
			angka = 0;
		}

		if(e.target.textContent == ':'){
			operator = ':';
		} else if(e.target.textContent == 'x'){
			operator = 'x';
		} else if(e.target.textContent == '-'){
			operator = '-';
		} else if(e.target.textContent == '+'){
			operator = '+';
		} else if(e.target.textContent == '='){
			switch (operator) {
				case ':':
					hasil = bil1/bil2;
					break;
				case 'x':
					hasil = bil1*bil2;
					break;
				case '-':
					hasil = bil1-bil2;
					break;
				case '+':
					hasil = bil1+bil2;
					break;
			}

			out = hasil;
		} 

		out += ' '+e.target.textContent+' ';
	} 
	output.textContent = out;
})