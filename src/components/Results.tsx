import { Data } from "../models/Search";
import "./Results.css"
import { Image } from 'react-bootstrap-icons'

interface GifProp{
    gif: Data
}

export const Result = ({gif}:GifProp) =>{

    return(
        <div className="Result">
            <div className="storage">
                <h3>{gif.title}</h3>
                <img src={gif.images.fixed_height.url} alt="GIF"/>
                <p> <a href={gif.url}> <Image />Link to Image</a>  </p>
                
            </div>

        </div>
    )
}