import React from 'react';

import style from './buttons.module.scss'



const ButtonPrimary = ({text, callback, isIcon, iconLink}) => {
    return (
        <button className={style.primaryBody} onClick={callback}>
            {isIcon &&
                <img src={iconLink} alt={text}/>
            }
            <span className={style.text}>{text}</span>
        </button>
    );
};

const ButtonPrimaryHot = ({text, callback, isIcon, iconLink}) => {
    return (
        <button className={style.primaryBody} onClick={callback}>
            {isIcon &&
                <img src={iconLink} alt={text}/>
            }
            <span className={style.text}>{text}</span>
        </button>
    );
};

export default ButtonPrimary;