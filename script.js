const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7b50ecb312mshbcb40a22aed6bc0p1076ddjsn366e0a02a00e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dhaka', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));