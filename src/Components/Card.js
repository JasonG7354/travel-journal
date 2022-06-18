import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';

export default function Card(props){
    return (
        <main className="card--container">
            <div className="card--img--container">
                <a href={props.item.imageUrl} target="_blank" rel="noopener noreferrer">
            <img className="card--img" src={props.item.imageUrl} alt={props.item.title}></img></a>
            </div>
            <div className="card--content">
            <p><FontAwesomeIcon icon={faLocationDot} className="icon--style"/><span className="icon--margin">{props.item.location} &nbsp;&nbsp;<a href={props.item.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a></span></p>
            <h1>{props.item.title}</h1>
            <h6>{props.item.startDate} - {props.item.endDate}</h6>
            <p className="card--info">{props.item.description}</p>
            </div>
        </main>
    )
}