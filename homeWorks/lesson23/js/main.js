let inpuTimer;

function initialisation() {
    document.getElementById('footer').textContent = new Date().getFullYear();

    document.getElementById('country').disabled = true;

    const answer = document.getElementById('answer');

    document.getElementById('cityInput').addEventListener('input', showCityList);

    document.addEventListener('click', (e) => hideCountriesList(e));

    document.getElementById('countries').addEventListener('click', (e) => getInfo(e.target));

}

function showCountriesList() {
    
    
    const div = document.getElementById('countries');
    div.style.visibility = "visible";
    div.innerHTML = '';
    div.innerHTML = getCountries(document.getElementById('country').value);
}

function getCitiesName(cityNmae){
    fetch('http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}')
}



function getInfo(e) {
    const answer = document.getElementById('answer');
    if (e.classList.contains('countryListEl')) {
        const country = e.innerText;
        document.getElementById('countries').style.visibility = "hidden";
        const timer = showSpiner(answer);
        document.getElementById('country').value = '';
        let html = '';

        fetch(`http://universities.hipolabs.com/search?country=${country}`)
            .then(
                response => {
                    if (response.status !== 200) {
                        throw ('Server is not available');
                    }
                    return response.json()
                })
            .then(data => {
                data.forEach(item => {
                    html += `
                    <a href='${item.web_pages[0]}' target='blank'> 
                        <div class="uni">
                                ${item.name}
                        </div>
                    </a>
                    `;
                });
                document.getElementById('country').disabled = false;
                stopSpiner(timer, answer);
                document.getElementById('answer').innerHTML = 
                `<div class='countryName'>${country} has Universyties:</div>` + html;
            })
            .catch(reject => {
                stopSpiner(timer, answer);
                answer.textContent = reject;
                answer.style.color = 'red';
            });
    }
}

function showCountriesList() {
    const div = document.getElementById('countries');
    div.style.visibility = "visible";
    div.innerHTML = '';
    div.innerHTML = getCountries(document.getElementById('country').value);
}

function hideCountriesList(e) {
    if (e.target.id !== 'country'
        && e.target.id !== 'countries'
        && e.target.className !== 'countryListEl'
        && document.getElementById('countries').style.visibility === "visible") {
        document.getElementById('countries').style.visibility = "hidden";
    }
}

function getCountries(value) {
    let html = '';
    countries.filter(
        item => {
            const itemLowerCase = item.toLowerCase();
            return itemLowerCase.includes(value.toLowerCase())
        }).slice(0, 10)
        .forEach(element =>
            html += `<div class="countryListEl">
    ${element}
    </div>`);
    return html;
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



