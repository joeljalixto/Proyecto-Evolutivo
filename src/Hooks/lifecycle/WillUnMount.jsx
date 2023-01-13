/**
 * ejemplo de uso del metodo componentWillMount para componente clase
 * ejemplo de uso del hooks para compoennete funcional
 * (cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log("comportamiento antes que el componente desaparezca")
    }

    render() {
        return (
            <div>
                <h1>
                    WillUnMount
                </h1>
            </div>
        );
    }
}

export const WillUnMountHooks = () => {

    useEffect(() => {
        //aqui no ponemos nada
        return () => {
            console.log("comportamiento antes que el componente desaparezca")
        };
    }, []);

    return (
        <div>
            <h1>
                WillUnMount
            </h1>
        </div>
    );
}



