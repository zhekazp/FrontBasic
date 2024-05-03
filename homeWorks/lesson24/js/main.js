const apiKey = '';
let cities;

function initialisation() {
    document.getElementById('footer').textContent = new Date().getFullYear();

    document.addEventListener('click', (e) => hideCityList(e));

    document.getElementById('showWeather').addEventListener('click', getWeather);

    document.getElementById('cityList').addEventListener('click', (e) => showWeatherByCity(e));

}

function getWeather() {
    const cityName = document.getElementById('cityInput').value;
    if (cityName !== '') {
        const spinerBox = document.getElementById('massageBox');

        disableElements();
        const timer = showSpiner(spinerBox);

        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`)
            .then(response => response.json()).then(response => response.map(item => {
                return {
                    city: item.name,
                    country: item.country,
                    state: item.state,
                    lat: item.lat,
                    lon: item.lon
                }
            })).then(response => {
                if (response.length === 0) {
                    showModal('City not fonud');
                } else if (response.length === 1) {
                    getCityWeather(response[0].lat, response[0].lon)
                        .then(response => showWeather(response));
                } else {
                    showCytiesList(response);
                }
            }).catch(reject => showModal('Server Error: ' + reject))
            .finally(() => {
                enableElements();
                stopSpiner(timer, spinerBox);
            });
    } else {
        showModal('City is empty');
    }
}

function showWeather(weather) {
    const mainInfo = weather.weather[0];
    const info = weather.main;
    console.log(weather.main.temp_min, weather.main.temp_max);
    const html = `
        <div class='weatherInfo'>
            ${mainInfo.main} (${mainInfo.description})
            </div>
        <img src='http://openweathermap.org/img/w/${mainInfo.icon}.png' alt='mainInfo.main'>
        <div class='weatherInfo'>
           <span class='temp'>
                ${Math.round(info.temp)}°
            </span>
        </div>
    `;
    document.getElementById('answer').innerHTML = html;
}

function disableElements() {
    document.getElementById('showWeather').disabled = true;
    document.getElementById('cityInput').disabled = true;
}

function enableElements() {
    document.getElementById('showWeather').disabled = false;
    document.getElementById('cityInput').disabled = false;
}

function showCytiesList(cities) {
    const div = document.getElementById('cityList');
    div.style.visibility = "visible";
    div.innerHTML = '';
    let html = '';
    cities.forEach(item => {
        html += `
                    <div class="city" data-lat='${item.lat}' data-lon='${item.lon}'>
                            ${item.city} 
                            <span class='country'>
                                (${item.state === undefined ? "" : "St: " + item.state} C: ${item.country})
                            </span> 
                    </div>
                `;
    });
    div.innerHTML = html;
}


function hideCityList(e) {
    if (e.target.id !== 'cityList'
        && e.target.className !== 'city'
        && e.target.className !== 'country'
        && document.getElementById('cityList').style.visibility === "visible") {
        document.getElementById('cityList').style.visibility = "hidden";
    }
}

function getCityWeather(lat, lon) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        .then(response => response.json());
}

function showWeatherByCity(e) {
    let el=e.target;
    if(el.classList.contains('country')){
        el=e.target.parentNode;
    }
    if (el.classList.contains('city')) {
        getCityWeather(el.dataset.lat, el.dataset.lon)
        .then(response => showWeather(response));
        document.getElementById('cityList').style.visibility = "hidden";
    }
}

function removeModal() {
    const modal = document.getElementById('modalDialog');
    modal.removeEventListener('click', removeModal)
    modal.remove();
    clearTimeout(timerModal);
}

let timerModal;

function showModal(message) {
    const back = document.createElement('div');
    back.classList = 'modalBack';
    back.id = 'modalDialog';
    document.body.appendChild(back);

    const modal = document.createElement('div');
    modal.classList = 'mymodal';
    back.appendChild(modal);

    const info = document.createElement('h3');
    info.textContent = message;
    modal.appendChild(info);

    const button = document.createElement('button');
    modal.appendChild(button);
    button.textContent = "OK";
    button.classList.add('butOK');
    button.addEventListener("click", removeModal);
    timerModal = setTimeout(() => { removeModal(timerModal) }
        , 4000);
}


function showSpiner(e) {
    let currentEl = 1;
    e.innerHTML = `
    <div class="loading">
    <span id='sp1'>L</span>
    <span id='sp2'>O</span>
    <span id='sp3'>A</span>
    <span id='sp4'>D</span>
    <span id='sp5'>I</span>
    <span id='sp6'>N</span>
    <span id='sp7'>G</span>
    </div>
    `;
    document.getElementById('sp1').style.color = '#9fbeed';

    return setInterval(() => {
        document.getElementById('sp' + currentEl).style.color = '#0d6efd';
        if (currentEl < 7) {
            currentEl++;
        } else {
            currentEl = 1;
        }

        document.getElementById('sp' + currentEl).style.color = '#9fbeed';
    }, 100);
}

function stopSpiner(timer, e) {
    clearInterval(timer);
    e.innerHTML = '';
}

initialisation();



