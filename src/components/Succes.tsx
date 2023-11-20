import { Link, useSearchParams } from 'react-router-dom'
import iconList from '../assets/images/icon-list.svg'

const Succes = () => {
    const [searchParams] = useSearchParams()
    const email = searchParams.get('email')

    return (
        <div className='md:bg-Charcoal-Grey md:p-10 md:min-h-screen md:flex items-center justify-center'>
            <div className='w-[90%] md:w-[50%] md:bg-White md:py-7 md:px-10 md:rounded-3xl'>
                <div className='mt-[40%] w-[90%] md:mt-0 px-5 md:px-0'>
                    <img className='w-12' src={iconList} alt="icon list" />
                    <h1 className='font-Roboto text-4xl text-Dark-Slate-Grey mt-7 font-bold'>Thanks for subscribing!</h1>

                    <p className='font-Roboto text-base text-Dark-Slate-Grey mt-5 leading-[25px]'>A confirmation email has been sent to <span className='font-semibold'>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
                </div>

                <Link className='w-[90%] md:w-full hover:bg-gradient-to-r bg-gradient-to-r from-Dark-Slate-Grey to-Dark-Slate-Grey hover:from-[#FF4066] hover:to-Tomato transition-all md:mt-10 left-[50%] -translate-x-[50%] absolute md:relative bottom-10 md:bottom-0 block text-center font-Roboto text-base font-semibold text-White rounded-lg py-3' to={'/'}>Dismiss message</Link>
            </div>
        </div>
    )
}

export default Succes