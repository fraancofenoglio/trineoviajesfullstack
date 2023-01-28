import Loader from './Loader';

const Orders = ({data, loading}) => {

 console.log(data)
  const parsear = (viajes) => {
    const trips = JSON.parse(viajes)
    console.log(trips)
    return trips
  }

  if (loading) {
    return  <Loader/>
  } else return (
    <div className='orders'>
      <h1>Mis órdenes</h1>

      {data?.map((d, i) => (
        <div className='order-card' key={i}>
          <h2 className='order-id'>ID de la reserva: <span>{d.resid}</span></h2>
          
          <>{parsear(d.trips).map((v, e) => (
            <div className='order-info' key={e}>
              <h3>● Ciudad: <span>{v.city}</span></h3>
              <h3>● Precio: <span>{v.price}</span></h3>
              <h3>● Pasajeros: <span>{v.quantity}</span></h3>
            </div>))
            }
          </>

          <h2 className='order-total'>Total: ${d.totalPrice}</h2>
        </div>
      ))
      }

    </div>
  )
}

export default Orders