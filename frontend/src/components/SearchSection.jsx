import { useState } from 'react';
import trip from '../data/data';
import Modal from './Modal';
import TripCard from './TripCard';

function SearchSection() {

    const [result, setResult] = useState(trip);
    const [location, setLocation] = useState();
    const [transport, setTransport] = useState();
    const [priceMax, setPriceMax] = useState();
    const [priceMin, setPriceMin] = useState();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState();
    const [title, setTitle] = useState();
    
    const handleSubmit = (e) => {
        
        e.preventDefault()
        setResult(trip.filter(locationFilter).filter(transportFilter).filter(priceMaxFilter).filter(priceMinFilter));
    }

    function locationFilter(res) {
        if (location) {
            return (res.country.toLowerCase() === location) || (res.province.toLowerCase() === location) || (res.city.toLowerCase() === location);
        }
        return res;
    };

    function transportFilter(res) {
        if(transport){
            return res.transport.toLowerCase() === transport;
        } 
        return res;
    };

    function priceMaxFilter(res) {
        if(priceMax){
            return res.price <= priceMax;
        }
        return res;
    };

    function priceMinFilter(res) {
        if(priceMin){
            return res.price >= priceMin;
        }
        return res;
    };



  return (
    <section id="show-trip" className="show-trip">

        <p>Chequeá los viajes que tenemos para vos! ↓↓↓↓</p>

        <form id="formSearch" action="" onSubmit={handleSubmit}>

            <div className="inputs-container">

                <div>
    
                    <label htmlFor="search">Destino:</label>
                    <input className="inputs" type="text" name="destino" id="search" placeholder="País, Provincia o Ciudad" onChange={ e => setLocation(e.target.value.toLowerCase().trim())}/>
    
                </div>
                <div>
    
                    <label htmlFor="search">Transporte:</label>
                    <select className="inputs" name="transporte" id="search2" onChange={ e => setTransport(e.target.value.toLowerCase().trim())}>
                        <option value="">Todos</option>
                        <option value="avion">Avión</option>
                        <option value="bus">Bus</option>
                    </select>
    
                </div>
                <div>
    
                    <label htmlFor="search">Precio Máximo:</label>
                    <input className="inputs" type="number" name="precioMax" id="search3" placeholder="Precio Máx." min="0" onChange={ e => setPriceMax(e.target.value.trim())}/>
    
                </div>
                <div>
    
                    <label htmlFor="search">Precio Mínimo:</label>
                    <input className="inputs" type="number" name="precioMin" id="search4" placeholder="Precio Mín." min="0" onChange={ e => setPriceMin(e.target.value.trim())}/>
                </div>

            </div>

            <button type='submit' className="btn-search">Buscar</button>
            <button id="btn-show-all" className="btn-show-all" onClick={
                (e) => {
                    e.preventDefault()
                    setResult(trip)
                }
            }>Mostrar Todos</button>

        </form>

        <div className="search-trip">
            {result.length ? result.map( (tr, i) => (
                
                <TripCard setTitle={setTitle} setMessage={setMessage} setOpen={setOpen} travel={tr} key={i}/>
                 
            )) :
            <>
                <div style={{width: "90vw", margin: "0 auto"}}>
                    <p style={{width: "50vw", margin: "0 auto"}}>No hay viajes que coincidan con su búsqueda.</p>
                </div>
            </>
            
            }
        <>
            <Modal open={open} setOpen={setOpen}>
                <h3>{title}</h3>
                <p>{message}</p>
            </Modal>
        </>
        </div>


    </section>
  )
}

export default SearchSection