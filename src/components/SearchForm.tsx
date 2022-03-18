import { FormEvent } from "react"
import { useState } from "react"
import { Button, Form } from "react-bootstrap";

import "./SearchForm.css"

interface SearchProp{
    onSubmit:(searchTerm:string)=> void
}

export const SearchForm = ({onSubmit}:SearchProp) =>{
    const [searchTerm, setSearchTerm] = useState<string>("");

    function handleSearchSubmit(event:FormEvent){
        event.preventDefault();

        onSubmit(searchTerm)
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
                    <Button variant="primary" type="submit">Search</Button>
                    </div>
                    <Form.Text className="text-muted"> Showing Results for "{searchTerm}"</Form.Text>
                    
                </Form>
            </div>

            {/* <form className="searchForm">
                <label htmlFor="search">Search for a GIF</label>
                <div className="searchBar">
                    <input type="text" name="search" onChange={(e)=>setSearchTerm(e.target.value)}/>
                    <button>Search</button>
                </div>
            </form> */}

        </div>
    )
}