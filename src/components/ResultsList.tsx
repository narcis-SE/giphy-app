import { useState } from "react";
import { Button } from "react-bootstrap";
import { Data } from "../models/Search";
import { Result } from "./Results";

import "./ResultsList.css"

export interface Props{
    gifs:Data[]
}

export const ResultsList = ({gifs}: Props)=>{
    const [condition, setCondition] = useState<boolean>(true)


    return(
        <div className="ResultsList">
            <h1 >Results: </h1>

            <div className="container">
                <div className="resultsList">
                    {
                        condition ? <div className="resultsList">{gifs.slice(0,3).map((gif,i) => <Result key={i} gif={gif}/>)}  <Button onClick={() => setCondition(false)}> Display All Results</Button></div> : <div className="resultsList">{gifs.map((gif,i) => <Result key={i} gif={gif}/>)} </div>
                    }
                    
                    {/* {gifs.slice(0,3).map((gif,i) => <Result key={i} gif={gif}/>)} */}
                        
                </div>
            </div>

        </div>
    )
}