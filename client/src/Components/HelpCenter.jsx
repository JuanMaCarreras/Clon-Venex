function HelpCenter () {
  return (
    <section className='mt-11 ml-12  mb-72'>
      <h2 className='text-3xl font-bold font-montserrat text-font'>Centro de ayuda</h2>
      <br />
      <p
        className='font-montserrat '
      >Encontrá la información que necesitás para comprar online, métodos de pago, garantías, envíos, seguimiento de compras y más.
      </p>

      <h3 className=' mt-16 font-montserrat text-lg font-semibold text-font'>Contactate con nuestros asesores vía:</h3>
      <article className='flex flex-row '>
        <div className='flex flex-row mb-8 ml-5 mr-16'>
          <img src='https://www.venex.com.ar/images/help_center/mail.png' alt='#' />
          <div className='flex flex-col justify-center'>
            <h4 className='font-montserrat text-base'>Correo electróinco:</h4>
            <p className='font-semibold text-font'>consultas@venex.com.ar</p>
          </div>
        </div>

        <div className='flex flex-row mb-8 ml-28 mr-20'>
          <img src='https://www.venex.com.ar/images/help_center/whatsapp.png' alt='#' />
          <div className='flex flex-col justify-center'>
            <h4 className='font-montserrat '>WhatsApp:</h4>
            <p className='font-semibold text-font'>+54 11 2040-0949</p>
          </div>
        </div>

        <div className='flex flex-row mb-8 ml-28 '>
          <img src='https://www.venex.com.ar/images/help_center/telefono.png' alt='#' />
          <div className='flex flex-col justify-center'>
            <h4 className='font-montserrat '>Teléfono:</h4>
            <p className='font-semibold text-font'>0810-555-8892</p>
          </div>
        </div>
      </article>

      <h3 className=' mt-16 font-montserrat text-lg font-semibold text-font '>Recibí, retirá o seguí tu compra:</h3>
      <article className='flex flex-row '>
        <div className='flex flex-row  ml-5 mr-16'>
          <img src='https://www.venex.com.ar/images/help_center/pickup.png' alt='#' />
          <div className='flex flex-col justify-center'>
            <h4 className='font-montserrat '>Recibí o retirá tu compra.</h4>
          </div>
        </div>

        <div className='flex flex-row  ml-24'>
          <img src='https://www.venex.com.ar/images/help_center/envios.png' alt='#' />
          <div className='flex flex-col justify-center'>
            <h4 className='font-montserrat text-base'>Seguimiento de envíos</h4>
          </div>
        </div>
      </article>
      <article className='mt-20'>
        <h3 className=' mt-16 font-montserrat text-lg font-semibold text-font'>Horarios de atención:</h3>
        <div className='flex flex-row'>
          <div className=' ml-16 mr-32 font-montserrat'>
            <h4 className=' font-semibold text-venex pt-7 pb-2'>TEL. / WhatsApp / Mail</h4>
            <p>Lunes a viernes de 8 a 18hs</p>
          </div>

          <div className=' ml-28 mr-28 font-montserrat'>
            <h4 className=' font-semibold text-venex pt-7 pb-2'>TEL. / WhatsApp / Mail</h4>
            <p>Lunes a viernes de 8 a 18hs</p>
          </div>

          <div className=' ml-28 font-montserrat '>
            <h4 className=' font-semibold text-venex pt-7 pb-2'>TEL. / WhatsApp / Mail</h4>
            <p>Lunes a viernes de 8 a 18hs</p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default HelpCenter
