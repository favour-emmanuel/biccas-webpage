import  heroImage  from '../assets/hero-image.svg';
import heroImage2 from '../assets/hero-image-2.svg'
import { Icon } from '@iconify/react';

const Hero = () => {
  return (
    <div className="max-w-[72rem] mx-auto lg:px-0 px-5 md:flex md:flex-row flex-col md:justify-between pt-16">
        {/* left */}
        <div className=''>
          <h1 className='hero__text'>We're here to Increase your Productivity</h1>
          <img src={heroImage2} alt="heading buttom image" className='lg:max-w-[24rem] md:max-w-[22rem] max-w-[20rem] ' />
          <p className='hero__ptext'>Let's make your work more organize and easily using the Taskio Dashboard with many of the latest features in managing work every day.</p>
          <div className='flex items-center gap-6 pt-8 pb-5'>
            <button className='hero__btn'>Try for free</button>
            <button className='hero__btnLite'><Icon icon="carbon:play-outline" className='text-2xl' /> View Demo</button>
          </div>
        </div>

        {/* right */}
        <div className='lg:max-w-[30rem] max-w-[28rem]'>
          <img src={heroImage} alt="hero image" className='lg:pt-0 pt-16' />
        </div>
    </div>
  )
}

export default Hero