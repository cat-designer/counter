let counter = 0;
let minusBtn = document.getElementById ('minus');
let plusBtn = document.getElementById ('plus');
let resetBtn = document.getElementById ('reset');
let value = document.getElementById ('value');

function color () {
	if (counter >= 10) {
		plusBtn.style.backgroundColor = 'red';
		} else if (counter <= -10) {
				minusBtn.style.backgroundColor = 'red';
	} else {
			plusBtn.style.backgroundColor = '#c9dbdd';
			minusBtn.style.backgroundColor = '#c9dbdd';
	}
}

plusBtn.addEventListener (
	'click', ()=> {
		counter++; 
		value.innerHTML = counter;
			color ();
	}
);

minusBtn.addEventListener (
	'click', ()=> {
		counter--; 
		value.innerHTML = counter;
			color ();
	}
);

resetBtn.addEventListener ('click', reset);
function reset () {
	counter = 0;
	plusBtn.style.backgroundColor = '#c9dbdd';
	minusBtn.style.backgroundColor = '#c9dbdd';
	value.innerHTML = counter;
}