import * as React from 'react';
import * as style from 'app/containers/Tables/style.scss';


export const BackButton = (props) => {
    return<a href="/">
         <button className={style.button}>{"<- Back"} </button>
    </a>
    
}