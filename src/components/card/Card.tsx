import React, { FC, useState } from "react";
import { Character } from "../../models/Character";
import './card.css';


const Card: FC<{character: Character}> = (props) => {
    const {children} = props;
    console.log('children:', children);
    const {character: {name, image}} = props;
    const [shadow, setShadow] = useState('0px 0px')
    return <div
        onMouseLeave={() => setShadow('0px 0px')} 
        onMouseEnter={() => setShadow('2px 2px')} 
        style={{boxShadow: shadow}} 
    >
        <img style={{width: 100, borderRadius: '10px 10px 0px 0px'}} src={image} alt={name} />
        <span>{children}</span>
        <span>{ name }</span>
        </div>
}

export {Card}


