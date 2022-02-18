import React, {useState} from "react";
import { MdDeleteForever } from "react-icons/md"; 
import {GiQuill, GiCheckMark } from "react-icons/gi";


const CitationItem = (props) => {

    const{ texte, auteur, img, id}= props.citation;

    //Afficher masquer la zone d'edition
    const [edition, setEdition] = useState(true);

        let modeDico= {};
        let modeEdition = {};

        if (edition){
            modeEdition.display = "none";
        }
        else{
            modeDico.display = "none";
        }

        
    const gererEdition = () =>{
        setEdition(!edition);
    }
    

    const validerEdition = (e) =>{
         
        e.preventDefault()
        if (!texte.trim() || !auteur.trim()) {
        alert("Une citation et un auteur sont requis.");     
        }
        else{
            setEdition(!edition);
        } 
    }

    return (
        <div>
            <hr/>
            <li className="citation">
                <div style={modeDico}> 
                        <p className="citation-txt" >{texte}</p>
                        <p className="citation-auteur"> {auteur}</p>
                </div>
                <div style={modeEdition}>
                    <input 
                        type="texte" 
                        value={texte}
                        name="texte"
                        onChange={(e)=> {props.majTexte(e.target.value, id)}} />
                    <input 
                        type="auteur" 
                        value={auteur}
                        name="auteur"
                        onChange={(e)=> {props.majAuteur(e.target.value, id)}}/>
                    <input 
                        type="img" 
                        value={img}
                        name="img"
                        onChange={(e)=> {props.majImg(e.target.value, id)}}/>

                    <button onClick={validerEdition} className="btn-valid"><GiCheckMark style={{ color: "green" }}/></button>
            
                </div>

                        <div className="citation-btn">
                            <button 
                            className="btn-modif"
                            onClick={gererEdition} >
                                <GiQuill style={{ color: "green" }}/>
                            </button>
                            <button 
                            className="btn-suppr"
                            onClick={() => props.delCitationProps(id)}
                            >
                            <MdDeleteForever style={{ color: "red" }}/></button>
                        </div>

            </li>
            
        </div>
    )
}

export default CitationItem;