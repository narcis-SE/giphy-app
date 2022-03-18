import { fetchTrending, fetchSearch } from "../services/GiphyApiServices";
import { useState, useEffect } from "react";
import { Data } from "../models/Search";
import { SearchForm } from "./SearchForm";
import { ResultsList } from "./ResultsList";

import "./Main.css"

export interface MainProp{
    gif: Data[];
    setGif: ()=> void
}


export const Main = () =>{
    const [gifs, setGifs] = useState<Data[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");


    useEffect(()=>{
        if(searchTerm){
            fetchSearch(searchTerm).then(
                response=>setGifs(response))
        }
        else{
            fetchTrending().then(
                gif=>setGifs(gif)
            )
        }
    }, [searchTerm])

    function handleFormSubmit(searchTerm:string){
        setSearchTerm(searchTerm);
    }

    return(
        <div className="Main">
           
            <SearchForm onSubmit={handleFormSubmit}/>
            <ResultsList gifs={gifs}/>

        </div>
    )
}