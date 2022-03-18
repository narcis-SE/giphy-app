import axios from "axios";
import { Data } from "../models/Search";

const apiKey:string = process.env.REACT_APP_GIPHY_KEY || "";


export function fetchTrending():Promise<Data[]>{
    return axios.get("https://api.giphy.com/v1/gifs/trending",{
        params:{
            api_key: apiKey
        }
    })
    .then(response=>response.data.data)
}


export function fetchSearch(query:string):Promise<Data[]>{
    return axios.get("https://api.giphy.com/v1/gifs/search", {
        params:{
            q: query,
            api_key: apiKey
          
        }
    })
    .then(response=>response.data.data)
}