import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Contact from '../models/Contact';

const BComponent = ({ contact }) => {

    const [isConnected, setConnect] = useState(contact.isConnected);

    const updateStatus = () => {
        contact.isConnected = !contact.isConnected
        setConnect(contact.isConnected)
    }

    return (
        <div>
            <h1>Conctact:</h1>
            <h2>Name: {contact.name}</h2>
            <h2>Surname: {contact.surname}</h2>
            <h3>Email: {contact.email}</h3>
            <h4>Status: {isConnected ? "Contacto En Línea" : "Contacto No Disponible"}</h4>
            <button onClick={updateStatus}>Change state</button>
        </div>
    );
}

BComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default BComponent;