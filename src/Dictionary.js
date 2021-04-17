import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import './Dictionary.css';


export default function Dictionary (props){

    let [keyword, setKeyword] = useState (props.defaultKeyword);
    let [results, setResults] = useState (null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState (null);

    function handleResponse (response){
        
        setResults (response.data[0]);
    }

    function handlePexelsResponse (response) {
        setPhotos (response.data.photos);
    }
    
    function search () {
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey="563492ad6f91700001000001fdd29f0808df42bd90c33f42e128fa89";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
        axios.get(pexelsApiUrl, {headers: {"Authorization" : `Bearer ${pexelsApiKey}`}}).then (handlePexelsResponse);
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
            
            <div className="row search">
                       
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
        <Photos photos={photos}/>
        <hr />
        </div>

    );


  } else {
      load();
      return "loading"
  }


    


}

    
