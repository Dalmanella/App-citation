import React from "react";
import CitationItem from "./CitationItem";
import CitationShadok from "./CitationShadok";

const Liste = (props) => {

    return (

        <ul>

            {props.citations.map(citation =>(
                <CitationItem 
                    key={citation.id}
                    citation={citation}
                    delCitationProps={props.delCitationProps}
                    majTexte={props.majTexte}
                    majAuteur={props.majAuteur}
                    majImg={props.majImg}
                />    
            ))}
            {props.citShadoks.map(citShadok =>(
                <CitationShadok 
                    key={citShadok.id}
                    citShadok={citShadok}
                />    
            ))}

        </ul>
    )
}

export default Liste;