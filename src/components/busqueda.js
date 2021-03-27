import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
class Busqueda extends React.Component{

    constructor(props){
        super(props)
        this.state= {search: ''}

    }

    handleChange = (e)=> {

        this.setState({search: e.target.value})
    }
    render (){

        const {handleSearch}= this.props
        const {search} =this.state

        return (
            
            
			<div className="container-busqueda container">
                <div className="row justify-content-md-center">
                    
                    <div className="col col-lg-4">
                    <input 
                            value={this.state.search}
                            onChange={this.handleChange}
                            className= "producto-entrada form-control"
                            type="text" placeholder="Search" aria-label="Search"
                        />
                    </div>
                    <div className="col col-lg-2">
                        <button className="boton-busqueda btn btn-outline-dark"  onClick={()=> handleSearch(search)}> Busqueda </button>
                    </div>
                </div>

            </div>
		);
    }

}

Busqueda.propTypes={

    handleSearch: PropTypes.func.isRequired

}

export default Busqueda;