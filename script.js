const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'xxxxx',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	cityName.innerHTML = city 
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		
		//cloud_pct.innerHTML = response.cloud_pct  
		temp.innerHTML = response.temp 
		temp2.innerHTML = response.temp 
		feels_like.innerHTML = response.feels_like 
		humidity.innerHTML = response.humidity 
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp 
		max_temp.innerHTML = response.max_temp 
		wind_speed.innerHTML = response.wind_speed 
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees 
		sunrise.innerHTML = parseFloat(response.sunrise/360000000).toFixed(2)
		sunset.innerHTML = parseFloat(response.sunset/360000000).toFixed(2)

	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>
{
	e.preventDefault();
	getWeather(city.value)
})

const getWeatherDhaka = (city2)=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city2 , options)
	.then(response => response.json())
	.then((response) => {
		
		tempDhaka.innerHTML = response.temp 
		feels_likeDhaka.innerHTML = response.feels_like 
		humidityDhaka.innerHTML = response.humidity 
		min_tempDhaka.innerHTML = response.min_temp 
		max_tempDhaka.innerHTML = response.max_temp 
		wind_speedDhaka.innerHTML = response.wind_speed 		
		wind_degreesDhaka.innerHTML = response.wind_degrees 
		sunriseDhaka.innerHTML = parseFloat(response.sunrise/360000000).toFixed(2)
		sunsetDhaka.innerHTML = parseFloat(response.sunset/360000000).toFixed(2)
	})
	.catch(err => console.error(err));
}

const getWeatherRaj = (city3)=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city3 , options)
	.then(response => response.json())
	.then((response) => {
		
		tempRaj.innerHTML = response.temp 
		feels_likeRaj.innerHTML = response.feels_like 
		humidityRaj.innerHTML = response.humidity 
		min_tempRaj.innerHTML = response.min_temp 
		max_tempRaj.innerHTML = response.max_temp 
		wind_speedRaj.innerHTML = response.wind_speed 		
		wind_degreesRaj.innerHTML = response.wind_degrees 
		sunriseRaj.innerHTML = parseFloat(response.sunrise/360000000).toFixed(2)
		sunsetRaj.innerHTML = parseFloat(response.sunset/360000000).toFixed(2)
	})
	.catch(err => console.error(err));
}

const getWeatherLal = (city4)=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city4 , options)
	.then(response => response.json())
	.then((response) => {
		
		tempLal.innerHTML = response.temp 
		feels_likeLal.innerHTML = response.feels_like 
		humidityLal.innerHTML = response.humidity 
		min_tempLal.innerHTML = response.min_temp 
		max_tempLal.innerHTML = response.max_temp 
		wind_speedLal.innerHTML = response.wind_speed
		wind_degreesLal.innerHTML = response.wind_degrees 
		sunriseLal.innerHTML = parseFloat(response.sunrise/360000000).toFixed(2)
		sunsetLal.innerHTML = parseFloat(response.sunset/360000000).toFixed(2)
		
	})
	.catch(err => console.error(err));
}
const getWeatherGai = (city5)=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city5 , options)
	.then(response => response.json())
	.then((response) => {
		
		feels_likeGai.innerHTML = response.feels_like 
		humidityGai.innerHTML = response.humidity 
		min_tempGai.innerHTML = response.min_temp 
		max_tempGai.innerHTML = response.max_temp 
		sunriseGai.innerHTML = parseFloat(response.sunrise/360000000).toFixed(2)
		sunsetGai.innerHTML = parseFloat(response.sunset/360000000).toFixed(2)
		tempGai.innerHTML = response.temp 
		wind_degreesGai.innerHTML = response.wind_degrees 
		wind_speedGai.innerHTML = response.wind_speed 	
	})
	.catch(err => console.error(err));
}
const getWeatherCox = (city6)=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city6 , options)
	.then(response => response.json())
	.then((response) => {
		
		tempCox.innerHTML = response.temp 
		feels_likeCox.innerHTML = response.feels_like 
		humidityCox.innerHTML = response.humidity 
		min_tempCox.innerHTML = response.min_temp 
		max_tempCox.innerHTML = response.max_temp 
		wind_speedCox.innerHTML = response.wind_speed
		wind_degreesCox.innerHTML = response.wind_degrees 
		sunriseCox.innerHTML = parseFloat(response.sunrise/360000000).toFixed(2)
		sunsetCox.innerHTML = parseFloat(response.sunset/360000000).toFixed(2)
		
	})
	.catch(err => console.error(err));
}

const getWeatherSyl = (city7)=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city7 , options)
	.then(response => response.json())
	.then((response) => {
		
		tempSyl.innerHTML = response.temp 
		feels_likeSyl.innerHTML = response.feels_like 
		humiditySyl.innerHTML = response.humidity 
		min_tempSyl.innerHTML = response.min_temp 
		max_tempSyl.innerHTML = response.max_temp 
		wind_speedSyl.innerHTML = response.wind_speed
		wind_degreesSyl.innerHTML = response.wind_degrees 
		sunriseSyl.innerHTML = (response.sunrise/360000000).toFixed(2) 
		sunsetSyl.innerHTML = parseFloat(response.sunset/360000000).toFixed(2)
		
	})
	.catch(err => console.error(err));
}


getWeather("")
getWeatherDhaka("Dhaka")
getWeatherRaj("Rajshahi")
getWeatherLal("Lalmonirhat")
getWeatherGai("Gaibandha")
getWeatherCox("Coxs bazar")
getWeatherSyl("Sylhet")