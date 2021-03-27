import React from 'react';
import {BrowserRouter as Router, Route, Link, useParams} from 'react-router-dom';

//components
import ProductContainer from './components/ProductContainer';
import 'bootstrap/dist/css/bootstrap.min.css';



function Child() {
  let { idproduct } = useParams();
  
    const [product, setProducto] = React.useState([])
    const id = idproduct

    React.useEffect(() =>{
        const getProducto = async()=>{
            const data = await fetch(`https://api.mercadolibre.com/items/${id}`)
            const productos = await data.json()
            setProducto(productos)
        }
        getProducto()
    }, [id])
    
    const [descripcion, setDescripcion] = React.useState([])
    const id2 = idproduct

    React.useEffect(() =>{
        const getDescripcion = async()=>{
            const data = await fetch(`https://api.mercadolibre.com/items/${id2}/description`)
            const descripciones = await data.json()
            setDescripcion(descripciones)
        }
        getDescripcion()
    }, [id2])
    
    const [seller, setSeller] = React.useState([])
    const id3 = product.seller_id

    React.useEffect(() =>{
        const getSeller = async()=>{
            const data = await fetch(`https://api.mercadolibre.com/users/${id3}`)
            const sellers = await data.json()
            setSeller(sellers)
        }
        getSeller()
    }, [id3])
    console.log(product.original_price)
    console.log(product.base_price)
    let descuentoproducto;
    if(product.original_price==null){
      descuentoproducto = "0"
    }else{
      descuentoproducto = (100-(product.base_price*100/product.original_price)).toFixed(2)
    }
  return (
        <div class="row">
            <div class="col-8">
                <center>
                            <img
                                className="image-thumbnail"
                                src={product.thumbnail}
                                style={{ width: '50%', height: '50%' }}
                                alt={product.title}
                            />
                    </center>
            </div>
            <div class="col-4">
            <div className="card-body">
                        <h1 className="card-title">{product.title}</h1>
                        <h6 className="card-title">Price: ${product.price}</h6>
                        <h6 className="card-title">Descuento: {descuentoproducto}%OFF</h6>
                        <h6 className="card-title">Vendedor: {seller.nickname}</h6>
                        <p><h6>Descripción:</h6>{descripcion.plain_text}</p>
                        </div>
            </div>
        </div>
    
  );
}

function App() {



  return (
    <div className="App">
      <header >
        <div className="navbar navbar shadow-sm bg-dark">
          <div className="container d-flex justify-content-between">
            <center><img src="https://i.imgur.com/OuAhFrG.png" className="img-fluid" alt="Logo" /></center>
          </div>
        </div>
      </header>

      <Router>

        <Link to="/"><img src="https://www.flaticon.com/svg/vstatic/svg/25/25694.svg?token=exp=1616823404~hmac=96b5ec44ce27e5481e9cbb02b944e8a3" className="img-fluid" id="home"/></Link>
        <br/>
        

        <Route exact path="/" render={() =>{
          return <div>
            <ProductContainer/>
          </div>
        }}>
        </Route>

        <Route exact path="/nosotros/:idproduct" children={<Child />} />        

      </Router>

      
       
      <footer>
        <div className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
          <div className="container d-flex justify-content-between">
            <center><img src="https://i.imgur.com/fRctZUL.png" id="nombremt" className="img-fluid"/></center> 
          </div>
        </div>
      </footer>
    </div>


  );
}

export default App;