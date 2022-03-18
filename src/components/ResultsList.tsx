import { Data } from "../models/Search";
import { Result } from "./Results";

import "./ResultsList.css"

export interface Props{
    gifs:Data[]
}

export const ResultsList = ({gifs}: Props)=>{
    return(
        <div className="ResultsList">
            <h1 >Results: </h1>

            <div className="container">
                <div className="resultsList">
                    {gifs.map((gif,i) => <Result key={i} gif={gif}/>)}
                </div>
            </div>

        </div>
    )
}