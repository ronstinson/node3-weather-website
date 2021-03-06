const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=64466aba507daae0243daa1a561aacc4&units=f&query=' + latitude + ',' + longitude

    

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + ', It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.'+ 'Wind Speed is ' +body.current.wind_speed + ' knots.')
        }
    })
}


module.exports = forecast