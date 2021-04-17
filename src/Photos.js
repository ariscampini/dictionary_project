import React from "react";
import "./Photos.css";

export default function Photos (props) {
    
    if (props.photos) {
     return (
         <div className="Photos">
             <div className="row">
             {props.photos.map(function(photo,index){
                 return (
                     <div className="col-5" key={index}>
                         <a href={photo.src.original}  rel="noreferrer" target="_blank">
                         <img src={photo.src.landscape} alt="keyword" className="img-fluid"/>
                     </a>
                     </div>
                      );
            })}
             </div>
         </div>
     );
        
    }else {
        return null;
    }
  
}