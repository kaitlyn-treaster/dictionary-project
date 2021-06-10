import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <div className="container">
                    <div className="row_">
                        <div className="col">
                            <h2>{props.results.word}</h2>
                            {props.results.phonetics.map(function(phonetic, index) {
                            return (
                                <div key={index}>
                                    <Phonetic phonetic={phonetic} />
                                </div> 
                            );
                            })}
                        </div>
                        <div className="col-sm">
                            <span className="vertical-line"></span>
                        </div>
                        <div className="col-8">
                            {props.results.meanings.map(function(meaning, index) {
                                return (
                                    <section key={index}>
                                        <Meaning meaning={meaning} />
                                    </section>
                                );  
                            })}
                        </div>
                    </div>
                </div>
                <hr />
                
            </div>
            
        );
    } else {
        return null;
    }
}