function FooterMenu () {
  return (
    <>
      <ul
        className='flex felx-row justify-evenly py-6 bg-secondaryGray text-white font-montserrat text-sm font-medium'
      >
        <li
          className='hover:text-gray-400 cursor-pointer'
        >Quiénes somos
        </li>
        <li
          className='hover:text-gray-400 cursor-pointer'
        >Botón de arrepentimiento
        </li>
        <li
          className='hover:text-gray-400 cursor-pointer'
        >Ventas corporativas
        </li>
        <li
          className='hover:text-gray-400 cursor-pointer'
        >Términos y condiciones
        </li>
        <li
          className='hover:text-gray-400 cursor-pointer'
        >Politicas de privacidad
        </li>
        <li
          className='hover:text-gray-400 cursor-pointer'
        >Garantía y devoluciones
        </li>
        <li
          className='hover:text-gray-400 cursor-pointer'
        >Promociones y sorteos
        </li>
      </ul>
    </>
  )
}

export default FooterMenu
