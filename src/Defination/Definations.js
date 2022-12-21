import React from "react";
import "./Definations.css"
const Defination =({meanings, word}) =>{
    return(
            <div classname="meanings">
                {/*audio---------------------------*/}
                {meanings[0] && word &&(
                    <audio
                    style={{backgroundColor:"#fff", borderRadius:10}}
                    src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                    controls
                    >
                        Your browser does not support the audio element.
                    </audio>
                )}
                {/*audio---------------------------*/}

                {word ===""
                ?(<span className="subTitle">Start by typing a word in search </span>
                ):(
                    meanings.map((mean=>
                        mean.meanings.map((items)=>
                        items.defination.map((def)=>(
                            <div className="singleMean">
                                <b>{def.defination}</b>
                                <hr style={{backgroundColour:"black", width:"100%"}}/>
                                {def.example &&(
                                    <span>
                                        <b>Example: </b>{def.example}
                                    </span>
                                )}
                                {def.synonyms &&(
                                    <span>
                                         <b>Synonyms: </b>{def.synonyms.map((s)=>`${s},`)}

                                    </span>
                                )}
                                </div>
                        )
                        )
                        )
                        )
                        )
                )}
</div>
)}
export default Defination;