import PartnersList from './PartnersList'
import FooterMenu from './FooterMenu'
import { FaFacebookF, FaYoutube } from 'react-icons/fa'
import { IoLogoInstagram, IoSend } from 'react-icons/io5'

function Footer () {
  return (
    <>
      <PartnersList />
      <FooterMenu />
      <div className='flex flex-row justify-between pt-11 pb-24 pl-11 bg-primaryGray'>
        <div className='font-montserrat'>
          <p className='text-venex font-semibold'>ATENCIÓN AL CLIENTE:</p>
          <p className='text-white mt-4'>0810-555-8893</p>
          <p className='text-white'> consultas@venex.com.ar </p>
          <p className='text-white'>WhatsApp +54 11 2040-0949</p>
          <p className='text-white'>Lunes a viernes de 8 a 18hs.</p>
          <p className='text-venex font-semibold mt-11'>VENEX PICKUP POINT</p>
          <p className='text-white mt-4'> <strong> Buenos Aires:</strong> Lunes a Viernes de 10 a 17h.</p>
          <p className='text-white mt-2'><strong>Córdoba:</strong> Lunes a Viernes de 10 a 18h.</p>
        </div>
        <div>
          <p className='font-montserrat font-semibold text-white'>SÉ EL PRIMERO EN ENTERARTE</p>
          <p className='font-montserrat text-white mt-5'>Suscribite y recibí las mejores promos!</p>

          <div className='mt-4 flex'>
            <input
              className='h-10 w-80 p-4'
              type='text'
              placeholder='direccíon de email...'
            />
            <button className='bg-venex px-3'>
              <IoSend className='text-white' />
            </button>
          </div>

          <ul className='flex mt-8'>
            <li className='p-3 bg-venex rounded-full mr-3'>
              <FaFacebookF className='text-white text-2xl' />
            </li>

            <li className='p-3 bg-venex rounded-full mr-3'>
              <IoLogoInstagram className='text-white text-2xl' />
            </li>

            <li className='p-3 bg-venex rounded-full'>
              <FaYoutube className='text-white text-2xl' />
            </li>
          </ul>
        </div>

        <div className='flex mr-32 '>
          <img
            className='h-20 w-16 mr-8'
            src='https://www.afip.gob.ar/images/f960/DATAWEB.jpg'
            alt='#'
          />
          <a href='https://cace.org.ar/'>
            <img
              className='h-11 w-20 mt-4'
              src='https://www.venex.com.ar/images/sello-cace-venex.png'
              alt='#'
            />
          </a>
        </div>
      </div>
      <p className='flex justify-center bg-primaryGray pb-5 text-white'>Copyright &copy; {new Date().getFullYear()} - Venex Clon. Córdoba, Argentina.</p>
    </>
  )
}

export default Footer
