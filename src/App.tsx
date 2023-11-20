import illustrationSighUpMobile from './assets/images/illustration-sign-up-mobile.svg'
import iconList from './assets/images/icon-list.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import illustrationSighUpDesktop from './assets/images/illustration-sign-up-desktop.svg'

const products = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!'
]

const App = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState({
    status: false,
    message: ''
  })

  let isValidEmail = (email: string) => {
    return /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm.test(email);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setError({ status: true, message: 'Email cannot be empty' });
    } else if (!isValidEmail(e.target.value)) {
      setError({ status: true, message: 'Valid email required' });
    } else {
      setError({ status: false, message: '' });
    }

    console.log(isValidEmail(e.target.value));

    setEmail(e.target.value);
    console.log(e.target.value);
  }

  console.log(error);

  return (
    <div className="md:bg-Charcoal-Grey md:p-10 min-h-screen md:flex items-center justify-center">
      <img className='md:hidden block w-full' src={illustrationSighUpMobile} alt="illustration sign up mobile" />

      <div className='md:flex justify-center gap-10 items-center rounded-3xl bg-White md:pl-5 pr-3 py-3'>
        <div className='px-5 py-7 m-auto md:m-0'>
          <h1 className='font-Roboto font-bold text-Dark-Slate-Grey text-4xl'>Stay updated!</h1>

          <p className='font-Roboto text-Dark-Slate-Grey text-base mt-5'>Join 60,000+ product managers receiving monthly updates on:</p>

          <div className='mt-5'>
            {products.map((product, index) => (
              <div key={index} className='flex items-start gap-3 mt-3'>
                <img src={iconList} alt="icon list" />
                <p className='font-Roboto text-Dark-Slate-Grey text-base'>{product}</p>
              </div>
            ))}
          </div>

          <div className='mt-10'>
            <div className='w-full flex items-center justify-between'>
              <p className='font-Roboto font-semibold text-sm text-Dark-Slate-Grey'>Email address</p>

              {error.status && <p className='font-Roboto font-semibold text-sm text-Tomato'>{error.message}</p>}
            </div>

            <input value={email} onChange={handleChange} className={`${error.status ? 'border-Tomato bg-Tomato bg-opacity-50 focus:outline-Tomato' : 'border-Grey focus:outline-none'} transition-all border w-full px-5 py-3 rounded-lg mt-3 font-Roboto`} type="text" placeholder='email@company.com' />

            <Link to={`/Succes?email=${email}`} className={`${error.status ? 'pointer-events-none opacity-80' : 'pointer-events-auto opacity-100 hover:-translate-y-1 hover:scale-[1.01]'} transition-all w-full z-0 block text-center bg-Dark-Slate-Grey font-Roboto text-base font-semibold text-White mt-5 rounded-lg py-3`}>
              Subscribe to monthly newsletter
            </Link>
          </div>
        </div>

        <img className='hidden md:block w-[50%] h-[100%]' src={illustrationSighUpDesktop} alt="illustration sign up desktop" />
      </div>
    </div>
  )
}

export default App