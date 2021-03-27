import React from 'react'
import Producto from './Producto'
import Busqueda from './busqueda'
import {  obtenerProductosParaBusqueda} from './obtenerBusqueda'
import 'bootstrap/dist/css/bootstrap.min.css';

class ProductContainer extends React.Component{
    constructor() {
        super();


        this.state={
            productos: [],
        }
    }

    
   
        
    handleSearch = async (search) => {

        const responseJson = await obtenerProductosParaBusqueda(search)
        this.setState({productos: responseJson.results})
        console.log(responseJson.results)
     }   

    renderProducts = productos => {
        return (
			<div className="row">
				{productos.map((producto, i) => {
                    return <Producto 
                    idseller={producto.seller.id}  
                    nombre={producto.title} 
                    precio={producto.price} 
                    imagen={producto.thumbnail}
                    to={`/nosotros/${producto.id}`}
                    key={producto.id}
                    />
                })}
					
			</div>
		);
    }

      

    render (){
        

        const {productos} = this.state
        var test
        if(productos[0] !== undefined){
            test = this.renderProducts(productos)       
        }
        
       
        return (
        
        
		<div className="container">
             
        <Busqueda handleSearch= {this.handleSearch}/>   
		{test}
		</div>
		);
    }


    



}

export default ProductContainer;