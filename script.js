const apiKey = 'f34dfc898529d86eabebc47301c1d393';
const weatherContainer = document.getElementById('weatherContainer');
const cityName = document.getElementById('cityName');
const day1 = document.getElementById('day1');
const day2 = document.getElementById('day2');
const day3 = document.getElementById('day3');
const day4 = document.getElementById('day4');
const day5 = document.getElementById('day5');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const day1L = document.getElementById('day1L');
const day2L = document.getElementById('day2L');
const day3L = document.getElementById('day3L');
const day4L = document.getElementById('day4L');
const day5L = document.getElementById('day5L');
const day1H = document.getElementById('day1H');
const day2H = document.getElementById('day2H');
const day3H = document.getElementById('day3H');
const day4H = document.getElementById('day4H');
const day5H = document.getElementById('day5H');

function DefaultScreen() {
  // set default city
  document.getElementById('cityInput').value = 'London';
  GetInfo();
}

function GetInfo() {
  // get city name
  const cityNameInput = document.getElementById('cityInput').value;

  // call API to get forecast
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityNameInput}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      // update city name
      cityName.innerHTML = data.city.name;

      // update forecast data
      day1.innerHTML = new Date(data.list[0].dt_txt).toDateString();
      img1.src = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
      day1L.innerHTML = `Low: ${data.list[0].main.temp_min}&deg;C`;
      day1H.innerHTML = `High: ${data.list[0].main.temp_max}&deg;C`;

      day2.innerHTML = new Date(data.list[8].dt_txt).toDateString();
      img2.src = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
      day2L.innerHTML = `Low: ${data.list[8].main.temp_min}&deg;C`;
      day2H.innerHTML = `High: ${data.list[8].main.temp_max}&deg;C`;

      day3.innerHTML = new Date(data.list[16].dt_txt).toDateString();
      img3.src = `https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`;
      day3L.innerHTML = `Low: ${data.list[16].main.temp_min}&deg;C`;
      day3H.innerHTML = `High: ${data.list[16].main.temp_max}&deg;C`;

      day4.innerHTML = new Date(data.list[24].dt_txt).toDateString();
      img4.src = `https://openweathermap.org/img/w/${data.list[24].weather[0].icon}.png`;
      day4L.innerHTML = `Low: ${data.list[24].main.temp_min}&deg;C`;
      day4H.innerHTML = `High: ${data.list[24].main.temp_max}&deg;C`;

      day5.innerHTML = new Date(data.list[32].dt_txt).toDateString();
	  img5.src = https://openweathermap.org/img/w/${data.list[32].weather[0].icon}.png;
	  day5L.innerHTML = Low; ${data.list[32].main.temp_min}&deg;C;
	  day5H.innerHTML = High; ${data.list[32].main.temp_max}&deg;C;
	    // show weather container
  weatherContainer.style.display = 'block';
})
.catch(error => {
  console.log('Error: ', error);
  alert('City not found. Please try again.');
});
}

// add event listener to search button
document.getElementById('searchBtn').addEventListener('click', GetInfo);

// load default screen
DefaultScreen();
