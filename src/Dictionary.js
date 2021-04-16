import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';


export default function Dictionary (props){

    let [keyword, setKeyword] = useState (props.defaultKeyword);
    let [results, setResults] = useState (null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse (response){
        console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults (response.data[0]);
    }
    
    function search () {
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleResponse);
        
    }

    function handleSubmit (event){
        event.preventDefault();
        search();
        
    }

      function handleKeywordChange (event){
        setKeyword(event.target.value)
    }

    function load () {
        setLoaded(true);
        search();
    }

  if (loaded) {
    return (
        <div className="Dictionary">

            <form  className="Dictionary-form" onSubmit={handleSubmit}>
            
            <div className="row">
                       
                <div className="col-11">
                    <input 
                    type="search" 
                    placeholder="Find your words" 
                    className="form-control"
                    autoFocus="on"
                    onChange={handleKeywordChange}
                 
                    />
                    
                </div>
                <div className="col-1 Button">
                    <input 
                    type="submit" 
                    value="Search"
                    className="Button"/>
                </div>
            
            
            </div> 
        </form>
        
        <Results results={results}/>
        <hr />

        </div>

    );


  } else {
      load();
      return "loading"
  }


    


}

    
