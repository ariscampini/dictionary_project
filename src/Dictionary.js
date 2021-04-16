import React, {useState} from "react"
import './Dictionary.css';


export default function Dictionary (){

    let [keyword, setKeyword] = useState (null)

  

    function search (event){
        event.preventDefault();
        alert (`Searching for ${keyword} definition`)

    }

      function handleKeywordChange (event){
  
        setKeyword(event.target.value)
    }

    return (
        <div className="Dictionary">

            <form  className="Dictionary-form" onSubmit={search}>
            
            <div className="row">
                       
                <div className="col-9">
                    <input 
                    type="search" 
                    placeholder="Type any word" 
                    className="form-control"
                    autoFocus="on"
                    onChange={handleKeywordChange}
                 
                    />
                    
                </div>
                <div className="col-3">
                    <input 
                    type="submit" 
                    value="Search"
                    className="searchButton"/>
                </div>
            
            
            </div> 
        </form>

        </div>

    );


}

    
