import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux/actions/authActions'

function Login () {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required('Por favor, escribe una dirección de correo válida'),
      password: Yup.string().min(8, 'Recordá que tu contraseña debe tener un mínimo de 8 caracteres.')
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values))
    }
  })

  return (
    <>

      <div className='border rounded-md border-red-600 w-[800px] m-11 p-2 font-montserrat'>

        <div className={`px-3 py-1 ${(formik.touched.name && formik.errors.name) || (formik.touched.email && formik.errors.email) || (formik.touched.password && formik.errors.password) ? 'bg-[#dd4b39] border rounded-lg ' : ''}`}>
          {formik.touched.email && formik.errors.email && (
            <p className='text-white'>{formik.errors.email}</p>
          )}
          {formik.touched.password && formik.errors.password && (
            <p className='text-white'>{formik.errors.password}</p>
          )}
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className='flex  items-center flex-wrap h-[360px]  [&>input]:outline-none [&>input]:w-[370px] [&>input]:h-[41px] [&>input]:p-3 [&>input]:my-6 [&>input]:border [&>input]:border-1 [&>input]:border-gray-300 [&>input]:rounded-md [&>input]:m-2 '
        >
          <input
            type='email'
            placeholder='Dirección de email*'
            name='email'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <input
            type='password'
            placeholder='Contraseña*'
            name='password'
            values={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <button
            type='submit'
            className='flex items-center justify-start px-3 m-2 w-[370px] h-[41px] text-white rounded-md border-b-2 hover:bg-[#1670f7] transition-colors duration-300 border-[#1670f7] bg-[#3483fa]'
          >Iniciar sesión
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
