import React from "react";
import {AiFillCode} from 'react-icons/ai';
import {MdOutlinePermMedia} from 'react-icons/md';
import {MdScience} from 'react-icons/md';
import {MdOutlineDesignServices} from 'react-icons/md';
import './Cards.css';
const Cards = ()=>{
    return ( 
        <React.Fragment>
            <div className="cards_main">
                <div className="cards_title">
                <p>What is Oppurtunity Portal?</p>
                </div>
                
                <div className="cards_compoenent">
                    <div className="cards_change">
                    <div className="cards_element">
                    <AiFillCode className="cards_icon"/>
                    <h4>Web Development</h4>
                    <p>Coding interview prep is a numbers game that many candidates lose. We've hand-picked 160 of the best coding interview questions to prepare you for every interview you could encounter</p>
                    </div>
                    <div className="cards_element">
                    <MdOutlinePermMedia className="cards_icon" />
                    <h4>Media</h4>
                    
                    <p>Coding interview prep is a numbers game that many candidates lose. We've hand-picked 160 of the best coding interview questions to prepare you for every interview you could encounter</p>
                    </div>
                    <div className="cards_element">
                        <MdScience className="cards_icon" />
                    <h4>Science</h4>
                    
                    <p>Coding interview prep is a numbers game that many candidates lose. We've hand-picked 160 of the best coding interview questions to prepare you for every interview you could encounter</p>
                    </div>
                    <div className="cards_element">
                        <MdOutlineDesignServices className="cards_icon" />
                    <h4>Design</h4>
                    
                    <p>Coding interview prep is a numbers game that many candidates lose. We've hand-picked 160 of the best coding interview questions to prepare you for every interview you could encounter</p>
                    </div>
                </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Cards;