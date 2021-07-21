var cityInput = document.getElementById('citySel')
var search = document.getElementById('go')
var formSubmit = document.getElementById('form')
var city1 = document.getElementById('austin')
var city2 = document.getElementById('miami')
var city3 = document.getElementById('denver')
var city4 = document.getElementById('cleveland')

var current = document.getElementById('currentCity')
var temp1 = document.getElementById('temp')
var wind2 = document.getElementById('wind')
var hum3= document.getElementById('hum')
var cond = document.getElementById('condition')

var daysButton = ['Austin', 'Miami', 'Denver', 'Cleveland']


// function buttonWeather(arrayV) {
//     var apiB = 'https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=e7d689a4d83ddc518b720d647d633cf9'
//     fetch(apiB)
//         .then(function(response) {
//             if (response.ok) {
//                 response.json().then(function(data) {
//                     displayCity(data, arrayV)
//                 })
//             }
//         })
//     var apiF = 'https://api.openweathermap.org/data/2.5/forecast?q=Austin&appid=e7d689a4d83ddc518b720d647d633cf9'
//     fetch(apiF)
//         .then(function(response) {
//             if (response.ok) {
//                 response.json().then(function(data) {
//                     displayForecast(data, arrayV)
//                 })
//             }
//         })
// }

function submit(event) {
    event.preventDefault()
    searchedCity = cityInput.value
    if (searchedCity) {
        getWeather(searchedCity)
        forecast(searchedCity)
    } else {
        alert('Please enter a city!')
        current.textContent = ''
    }
}

function getWeather(city) {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=e7d689a4d83ddc518b720d647d633cf9'
    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    displayCity(data, city)
                    
                })
            } else {
                alert('Error: Please enter a valid City')
            }
        })
}

function displayCity(weather) {
    if (!weather) {
        current.textContent = 'No city selected'
        return
    }
    current.textContent = weather.name
    temp1.textContent = 'Temperature in F: ' + parseInt((weather.main.feels_like - 273.15) * 9/5 + 32)
    wind2.textContent = 'Wind: ' + weather.wind.speed
    hum3.textContent = 'Humidity: ' + weather.main.humidity
    cond.textContent = 'Weather condition: ' + weather.weather[0].description
    
}

function forecast(city) {
    var apiUrlF = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=e7d689a4d83ddc518b720d647d633cf9'
    fetch(apiUrlF)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    displayForecast(data, city)
            })
        }
    })
}
function displayForecast(weather5) {
    document.getElementById('p1').textContent = weather5.list[1].dt_txt
    document.getElementById('p2').textContent = parseInt((weather5.list[1].main.feels_like - 273.15) * 9/5 + 32)
    document.getElementById('p3').textContent = weather5.list[1].wind.speed
    document.getElementById('p4').textContent = weather5.list[1].main.humidity

    document.getElementById('p5').textContent = weather5.list[9].dt_txt
    document.getElementById('p6').textContent = parseInt((weather5.list[9].main.feels_like - 273.15) * 9/5 + 32)
    document.getElementById('p7').textContent = weather5.list[9].wind.speed
    document.getElementById('p8').textContent = weather5.list[9].main.humidity

    document.getElementById('p9').textContent = weather5.list[17].dt_txt
    document.getElementById('p10').textContent = parseInt((weather5.list[17].main.feels_like - 273.15) * 9/5 + 32)
    document.getElementById('p11').textContent = weather5.list[17].wind.speed
    document.getElementById('p12').textContent = weather5.list[17].main.humidity

    document.getElementById('p13').textContent = weather5.list[25].dt_txt
    document.getElementById('p14').textContent = parseInt((weather5.list[25].main.feels_like - 273.15) * 9/5 + 32)
    document.getElementById('p15').textContent = weather5.list[25].wind.speed
    document.getElementById('p16').textContent = weather5.list[25].main.humidity

    document.getElementById('p17').textContent = weather5.list[32].dt_txt
    document.getElementById('p18').textContent = parseInt((weather5.list[32].main.feels_like - 273.15) * 9/5 + 32)
    document.getElementById('p19').textContent = weather5.list[32].wind.speed
    document.getElementById('p20').textContent = weather5.list[32].main.humidity
    }



search.addEventListener('click', submit)
// city1.addEventListener('click', buttonWeather(daysButton[0]))