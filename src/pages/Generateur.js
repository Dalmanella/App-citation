import React, {useState} from "react";
import titre from "../images/les-devises.png"
import { GrRefresh} from "react-icons/gr";

import Shadok1 from "../images/Shadok-1.png";
import Shadok2 from "../images/Shadok-2.png";
import Shadok3 from "../images/Shadok-3.png";
import Shadok4 from "../images/Shadok-4.png";
import Shadok5 from "../images/Shadok-5.png";
import Shadok6 from "../images/Shadok-6.png";
import Shadok7 from "../images/Shadok-7.png";
import Shadok8 from "../images/Shadok-8.png";
import Shadok9 from "../images/Shadok-9.png";
import Shadok10 from "../images/Shadok-10.png";
import Shadok11 from "../images/Shadok-11.png";
import Shadok12 from "../images/Shadok-12.png";
import Shadok13 from "../images/Shadok-13.png";


const Generateur = () => {

    const [compilation, setcompilationn] = useState(recupererCompilation());
    
    // recuperation de le tableau compilé
   
    function recupererCompilation() {
        // getting stored items
        const temp = localStorage.getItem("Compilation")
        const savedCompilation = JSON.parse(temp)
        return savedCompilation || []
      }
    console.log(recupererCompilation());

    //Pioche Aléatoire d'une citation

    const genererCitation = () =>{
        let pioche= (Math.round((Math.random()*compilation.length)-0.5));  
        console.log(pioche);
        return (compilation[pioche]);
    }
        console.log(genererCitation());
    
        const citationJour = genererCitation ();


    //refresh citation
    function refreshPage() {
        window.location.reload(false);
    }

    return (
      
        <div className="conteneur">
            <div className="hamza">
            
                <img src={titre} alt="Les devises Shadoks" />
                <h1>CITATION DU JOUR</h1>
                            
            </div>

            <div className="citation-box">

                {/* image par défaut */}
                {/* <img src={citationJour.img} alt="Shadocks pompant" /> */}
                {citationJour.img? <img src={citationJour.img} /> : <img src={Shadok1} alt="Shadok réflechissant"/> }

                {/* affichage de la citation et de son auteur */}
                <div className="Pain-au-chocolat">
                    <p className="cit">{citationJour.texte}</p>
                    <br/> 
                    <p className="aut">{citationJour.auteur} </p>
                </div>
            </div>

            <div className="btn-generateur">
               
                <button className="renouveler" onClick={refreshPage}><GrRefresh /></button>
            </div> 
        </div>
      
     
    )
  }

{/* <img src="" alt="image perso" hidden/> */}


export default Generateur;