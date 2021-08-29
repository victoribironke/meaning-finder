const abbr = document.getElementById('I');
const button = document.getElementById('second');
const description = document.getElementById('II');
const meaning = document.getElementById('meaning');
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('button');
let myArray;

fetch('http://finder.byethost13.com/words.txt')
    .then(res => {return res.text()})
    .then(data => myArray = data.split('\n'))
    .catch(e => console.log(e));

function sendMail() {
    Email.send({
        SecureToken : '7304b294-e188-4b00-a58e-a938715b56e0',
        To : 'ibironkevictor05@gmail.com',
        From : 'ibironkevictor05@gmail.com',
        Subject : 'New Word On Your Website!',
        Body : `${abbr.value}: ${description.value}`
    }).then(message => console.log(message));
};

button.addEventListener('click', () => {
    sendMail();
    abbr.value = '';
    description.value = '';
});

searchButton.addEventListener('click', () => {
	if (searchInput.value === '') {
		alert('Please enter a valid input.');
	} else {
		meaning.innerHTML = '';
		runSearch(searchInput.value.toUpperCase());
		searchInput.value = '';
	};
});

searchInput.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		if (searchInput.value === '') {
            alert('Please enter a valid input.');
        } else {
            meaning.innerHTML = '';
            runSearch(searchInput.value.toUpperCase());
            searchInput.value = '';
        };
	};
});

function runSearch(value) {
	let num = 0;

	for (let i = 0; i < myArray.length; i++) {
		if (myArray[i][0] === value[0] && myArray[i][1] === value[1]) {
			meaning.style.display = 'block';
			const word = document.createElement('p');
			word.innerText = myArray[i];
			meaning.appendChild(word);
		};
	};

	for (let i = 0; i < myArray.length; i++) {
		if (myArray[i][0] !== value[0] && myArray[i][1] !== value[1]) {
			num += 1;
		};
	};
    
	if (num === myArray.length) {
		meaning.style.display = 'block';
		const word = document.createElement('p');
		word.innerText = `No Result Found`;
		meaning.appendChild(word);
	};	
};