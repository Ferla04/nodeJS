import dotenv from 'dotenv';
dotenv.config();

const urlCountries = process.env.URL_COUNTRIES;

const getCountries = async () => {
    const response = await fetch(urlCountries);
    const json = await response.json();
    console.log(json)

    return json;
}

export default getCountries;
