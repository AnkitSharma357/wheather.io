function fetch_city_name(){
    let city_name = document.querySelector('.city_name_input_tag').value;
    console.log(city_name);
    return city_name;
}

function render_data(data){

    console.log(data);
    let city = document.querySelector('.cityname').innerHTML = data.name;

    var temp = document.querySelector('.temperature').innerHTML = parseInt(data.main.temp-273);

    let humidity = document.querySelector('.humidity').innerHTML = 'Humidity: ' +data.main.humidity+'%';

    let pressure= document.querySelector('.pressure').innerHTML = 'Pressure: ' +data.main.pressure+'hPa';

    let wind_speed= document.querySelector('.wind_speed').innerHTML = 'Wind: ' +parseInt(data.wind.speed)+'m/s';
    
}


async function fetch_weather(){

    let url = 'https://api.openweathermap.org/data/2.5/weather?q=';
    let API_key = '&appid=8889e93e6bee14060981c590d19478ad';
    let city = fetch_city_name();
    let url1 = url+city+API_key;
    let data = await fetch(url1);
    data = await data.json();
    render_data(data);
}
