export const Key = "94c9bc39e8964e53b7b362fdf781e286";


const request = {
    topheading:`https://newsapi.org/v2/top-headlines?country=us&apiKey=${Key}`,
    sports:`https://newsapi.org/v2/everything?q=sports&apiKey=${Key}`,
    bitcoin:`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${Key}`,
    technology:`https://newsapi.org/v2/everything?q=technology&apiKey=${Key}`


}

export default request