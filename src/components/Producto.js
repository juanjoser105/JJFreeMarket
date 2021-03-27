import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


const Producto=({
    imagen,
    nombre,
    precio,
    idseller,
    to
})=> {
    const [seller, setSeller] = React.useState([])
    const id = idseller

    React.useEffect(() =>{
        const getSeller = async()=>{
            const data = await fetch(`https://api.mercadolibre.com/users/${id}`)
            const sellers = await data.json()
            setSeller(sellers)
        }
        getSeller()
    }, [id])
    
    return(

                    
                    <div className="col-md-3">
                        <div className="card bg-dark">
                            <div className='card text-center'>
                                <center>
                                <img
                                    className="image-thumbnail"
                                    src={imagen}
                                    style={{ width: '50%', height: '50%' }}
                                    alt={nombre}
                                />
                                </center>


                                <div className="card-body">
                                    <h5 className="card-title">{nombre}</h5>
                                    <h6 className="card-title">Vendedor: {seller.nickname}</h6>
                                    <h6 className="card-title">Price: ${precio} </h6>
                                </div>

                                <Link to={to}> <button type="button" class="btn btn-outline-dark">Detalles</button> </Link>
                                
                             </div>
                         </div>
                    </div>
             
    
    )};


Producto.propTypes={
    nombre:PropTypes.string.isRequired,
   
}

export default Producto;