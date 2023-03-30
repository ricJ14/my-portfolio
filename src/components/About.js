import profile from '../images/profile.png';

const About = () => {

    return (
        <>
            <h1 className='drop-shadow-md text-primary md:text-[70px]'>About Me</h1>
            <h2 className='pt-2 text-primary'>A little something about me</h2>
            <div className='md:grid md:grid-cols-2 md:gap-4'>
                <div>
                    <p className='text-white pt-10'>Lorem ipsum dolor sit amet</p>
                    <p className='text-white pt-4'>Lorem ipsum dolor sit amet</p>
                </div>
                <div>
                    <img className='w-4/6 p-1 bg-border mt-10' src={profile} alt='profile pic' />
                </div>    
            </div>        
        </>
    )
}

export default About; 