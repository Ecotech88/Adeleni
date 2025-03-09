import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between'>
        <div className="flex flex-shrink-0 items-center">
         </div>
        <div className='m-8 flex items-center justify-center gap-4'>
            <img className='w-5' src={github} alt="github" />
            <img className='w-5' src={linkedin} alt="linkedin" />
            <img className='w-5' src={instagram} alt="instagram" />
            <img className='w-5' src={twitter} alt="twitter" />
        </div>
    </nav>
  )
}

export default Navbar 