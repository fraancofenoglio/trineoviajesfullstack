import React, { useEffect } from 'react'
import { useFirestore } from '../hooks/useFirebase'
import Loader from './Loader';

const Orders = () => {

  const {data, getData, loading} = useFirestore();

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return  <Loader/>
  }

  return (
    <div className='orders'>
      <h1>Mis órdenes</h1>

      {data?.map((d, i) => (
        <div className='order-card' key={i}>
          <h2 className='order-id'>ID de la reserva: <span>{d.resid}</span></h2>
          {d.viajes.map((v, e )=> (
            <div className='order-info' key={e}>
              <h3>● Ciudad: <span>{v.city}</span></h3>
              <h3>● Precio: <span>${v.price}</span></h3>
              <h3>● Pasajeros: <span>{v.quantity}</span></h3>
            </div>
          ))}
          <h2 className='order-total'>Total: ${d.totalPrice}</h2>
        </div>
      ))
      }
      {!data.length ? <h2>Aún no hay viajes encargados.</h2> : <></>}


    </div>
  )
}

export default Orders