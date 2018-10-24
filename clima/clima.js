const axios = require('axios')
const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=23d98baa489cd351d9bfaff046d04f0c`)
    let location = resp.data;
    return resp.data.main.temp
}

module.exports = {
    getClima
}