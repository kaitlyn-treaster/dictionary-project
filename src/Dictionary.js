import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleDictionResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionResponse);

        let pexelsApiKey = "563492ad6f917000010000019682d717c38c40cda7ffd038a2b9233b";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <h1>Dictionary</h1>
            <h4>What word do you want to look up?</h4>
            <br />
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}/>
            </form>
            <br />
            <Results results={results} />
            <br />
            <Photos photos={photos} />
            
            
        </div>
    );
}