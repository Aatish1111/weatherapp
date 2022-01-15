const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b4db9126500d3ade67f4e736b6674665
    // let url = 'http://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=b4db9126500d3ade67f4e736b6674665'
    // alert('hii');

    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = `Please Write the name before search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b4db9126500d3ade67f4e736b6674665` ;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            // console.log(data);

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;

            const tempmood = arrData[0].weather[0].main;
            if(tempmood== "Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68'></i>";
            }
            else if(tempmood== "Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color: #eccc68'></i>";
            }
            else if(tempmood== "Rain"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color: #eccc68'></i>";
            }
            else{
                temp_status.innerHTML="<i class='fas fa-cloud' style='color: #eccc68'></i>";
            }

            datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText = `Please Enter the City Name Properly`;
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);