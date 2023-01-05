import React from 'react';
import Contact from '../models/Contact';
import BComponent from './BComponent';


const AComponent = () => {

    const contact = new Contact("Renzo", "Santillán", "renzo@santillan.pe", true)

    return (
    <div>
        <BComponent contact={contact} />
    </div>
    );
};

export default AComponent