const externals = {
    getWeather: async function() {
        const url = "http://api.weatherapi.com/v1/forecast.json?key=d24851f0ead347a698f203014221805&q=lund&days=1&aqi=no&alerts=no"
        const weather = null;
        // const weather = await fetch(url)
        // .then(res => res.json())
        // console.log(weather)
        return weather
    },
    getOsrs: async function (playerName) {
        // const url = "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=" + playerName
        
        // const osrsStats = await fetch(url)
        //     .then(response => response.text())
        //     .then(data => {
        //         return data
        //     })
        return ""
        // console.log("osrsStats");
        // console.log(osrsStats);
        // console.log("osrsStats");
        // return osrsStats
    }
}
export default externals;
export const getWeather = externals.getWeather
export const getOsrs = externals.getOsrs
