/**
 * ejemplo de componente de tipo clase que dispone de los 
 * metodos de ciclo de vida
 */

import React, {Component} from "react"
import {Proptypes} from "prop-types"

class LifeCycleExample extends Component {
    constructor(props){
        super(props)
        console.log("CONSTRUCTOR: Cuando se instancia el componente")
    }


componentWillMount(){
    console.log("ComponentWillMount: Antes del montaje del componente")
}

componentDidMount(){
    console.log("ComponentDidMount: justo al acabar el montaje del componente antes de renderizarlo")
}


componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps: si va recibir nuevas props")
}

shouldComponentUpdate(nextProps, nexState){
    /*
    controlar si el componente debe actualizarse 
    */
    //return true o falso
}

componentWillUpdate(nextProps,nexState){
    console.log("willUpdate: justo antes de actualizarse")
}

componentDidUpdate(prevProps,nexState){
    console.log("willUpdate: justo despues de actualizarse")
}

componentWillUnmount(){
    console.log("justo antes de desaparecer")
}


}
