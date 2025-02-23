import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

const Technology = () => {
  return ( 
    <div className='border-b border-black pb-24'>
        <h1 className='text-center my-20 text-4xl'>Technologies</h1>

        <div className="flex flex-wrap items-center justify-center gap-4 ">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className='w-10' src={github} alt="" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className='w-10' src={linkedin} alt="" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className='w-10' src={instagram} alt="" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className='w-10' src={twitter} alt="" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className='w-10' src={github} alt="" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className='w-10' src={github} alt="" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className='w-10' src={github} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Technology