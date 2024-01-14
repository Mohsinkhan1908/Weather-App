const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d23c84568msh26bedb99fd8f088p11115bjsn5a7632ba0f41',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
// async function fetchApi(){
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// } catch (error) {
// 	console.error(error);
// }
// // console.log(response.temp)
// }
const input_Box = document.getElementById('city_input');
const searchBtn = document.querySelector('header img');


const getCity = (event) => {
		// console.log(event);
	if(input_Box.value===""){
		alert("Input Box is empty")
	}else{
	// event.preventDefault()
	let cityName = input_Box.value;
	let TemperatureSpan = document.querySelector('#temp')
	let citySpan = document.querySelector('#city') 
	let	HumiditySpan = document.querySelector('#humidity')
	let	windSpeed = document.querySelector('#windspeed')
	let	windDegree = document.querySelector('#wind_degree')
	let	feelsLike = document.querySelector('#feels_like')

	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`, options)
		.then((response) => {
			if(response.ok===false){
				alert("Invalid input");
				input_Box.value="";
				citySpan.innerHTML="";
				location.reload();

			}else{
			return response.json();
			}
		})
		.then((response) => {
			console.log(response);
			citySpan.innerHTML = input_Box.value;
			TemperatureSpan.innerHTML = `${response.temp}°C`;
			HumiditySpan.innerHTML=`${response.humidity}%`;
			windSpeed.innerHTML = `${response.wind_speed} km/hr`;
			windDegree.innerHTML = `${response.wind_degrees}°C`;
			feelsLike.innerHTML = `${response.feels_like}°C`;

		})
		.catch((err) => {
			console.log(`${err} Some error occured !`);

		});
		setTimeout( function(){
			input_Box.value = ""

		} ,1500)
	}
// }
			
}

function testFunc(e){
	if(e.key === "Enter"){
		if(input_Box.value===""){
			alert("Input Box is empty")
		}else{
		// e.preventDefault()
		let cityName = input_Box.value;
		let TemperatureSpan = document.querySelector('#temp')
		let citySpan = document.querySelector('#city') 
		let	HumiditySpan = document.querySelector('#humidity')
		let	windSpeed = document.querySelector('#windspeed')
		let	windDegree = document.querySelector('#wind_degree')
		let	feelsLike = document.querySelector('#feels_like')
	
		fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`, options)
			.then((response) => {
				if(response.ok===false){
					alert("Invalid input");
					input_Box.value="";
					citySpan.innerHTML="";
					location.reload();
				}else{
				return response.json();
				}		
			})
			.then((response) => {
				console.log(response);
				citySpan.innerHTML = input_Box.value;
				TemperatureSpan.innerHTML = `${response.temp}°C`;
				HumiditySpan.innerHTML=`${response.humidity}%`;
				windSpeed.innerHTML = `${response.wind_speed} km/hr`;
				windDegree.innerHTML = `${response.wind_degrees}°C`;
				feelsLike.innerHTML = `${response.feels_like}°C`;
	
			})
			.catch((err) => {
				console.log(`${err} Some error occured !`);
	
			});
			setTimeout( function(){
				input_Box.value = ""
	
			} ,1500)
	
	}
}
}

searchBtn.addEventListener('click', getCity);
input_Box.addEventListener('keyup',testFunc);