import axios from 'axios';

const SPOONACULAR_API = 'https://api.spoonacular.com'

//export const API_KEY = '?apiKey=0cc1acca598f4125a2abf1a515ab06bd'

// !!! à utiliser si API_KEY à dépasser le quota
export const API_KEY = '?apiKey=6693751b445d45d9a8c67bead8dd38e9'

export const API = axios.create({
  baseURL: SPOONACULAR_API,
});