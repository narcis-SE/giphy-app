import { FormEvent } from "react"
import { useState } from "react"
import { Button, Form } from "react-bootstrap";

import "./SearchForm.css"

interface SearchProp{
    onSubmit:(searchTerm:string)=> void
}

export const SearchForm = ({onSubmit}:SearchProp) =>{
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [holder, setHolder] = useState<string>("");
    const [searchDisplay, setSearchDisplay] = useState<boolean>(true)

    function handleSearchSubmit(event:FormEvent){
        event.preventDefault();
        onSubmit(searchTerm);
        
        if(!searchDisplay){
            setHolder(searchTerm)
            return holder
        }else{
            return;
        }
        
    }

    return(
        <div className="SearchForm" onSubmit={handleSearchSubmit}>
            <div className="content">
                <Form>
                    <div className="label">
                    <Form.Label size="lg">Search for a Gif</Form.Label>
                    </div>
                   <div className="form">
                   <Form.Control type="text" placeholder="Enter Search Term" name="search" onChange={(e)=>setSearchTerm(e.target.value)}></Form.Control>
                   </div>
                    <div className="button">
                    <Button variant="primary" type="submit" onClick={() => setSearchDisplay(false)}>Search</Button>
                    </div>
                    {
                        searchDisplay ? <div> </div> : <div><Form.Text className="text-muted"> Showing Results for "{holder}"</Form.Text> </div>
                    }
                    
                    
                </Form>
            </div>

        </div>
    )
}