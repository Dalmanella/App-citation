import React, {useState} from "react";
import { GiCheckMark } from "react-icons/gi";
import {FaPlusCircle, FaMinusSquare} from "react-icons/fa";

//Ajout de nouvelle citation
const AjoutCitation = (props) =>{

    const [inputCitation, setInputCitation] = useState({
        texte:"",
        auteur:"",
        img:"",
        id:"",
      });      
    
      const onChange = e => {
        setInputCitation({
          ...inputCitation,
          [e.target.name]: e.target.value,
        })
      }

    const gererAjout = e => {
        e.preventDefault()
        if (inputCitation.texte.trim() && inputCitation.auteur.trim()) {
            props.addCitationProps(inputCitation)
            setInputCitation({
                img:"",
                texte: "",
                auteur: "",
            })
        } 
        else {
          alert("Entrez une citation et un auteur sont requis.")
        }
    }

    //Afficher masquer le formulaire
    const [affichage, setAffichage] = useState(true);

    const afficherForm = () =>{
        setAffichage(!affichage);
    }
    
    let modeAfficher= {};
    let texteAjout = {};


        if (affichage){
            modeAfficher.display = "none";
            texteAjout = <FaPlusCircle style={{ color: "rgb(9, 71, 18)", backgroundColor:"orange", fontSize:"3rem" }}/>;
        }
        else{
            modeAfficher.display = "block";
            texteAjout = <FaMinusSquare style={{ color: "rgb(9, 71, 18)", backgroundColor:"orange", fontSize:"3rem" }}/>;
        }



   
    return (
        <div className="ajoutCitation">
            <button onClick={afficherForm} className="btn-ajout" style={{backgroundColor:"orange", borderRadius: "3px", borderColor:"orange"}}>{texteAjout}</button>
            
            <form onSubmit={gererAjout} className="form-container" style={modeAfficher}>   
                <input
                    type="text"
                    className="ajout-cit"
                    placeholder="Nouvelle citation..."
                    value={inputCitation.texte}
                    name="texte"
                    onChange={onChange}
                />

                <input
                    type="text"
                    className="ajout-auteur"
                    placeholder="auteur..."
                    value={inputCitation.auteur}
                    name="auteur"
                    onChange={onChange}
                />

                <input
                    type="text"
                    className="ajout-img"
                    placeholder="Lien pour votre image."
                    value={inputCitation.img}
                    name="img"
                    onChange={onChange}
                />

                <button onClick={afficherForm} className="btn-valid"><GiCheckMark style={{ color: "green" }}/></button>
            </form>
        </div>
    )
}

export default AjoutCitation;