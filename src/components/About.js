import profile from '../images/profile.png';

const About = () => {

    return (
        <>
            <h1 className='drop-shadow-md text-primary md:text-[70px]'>About Me</h1>
            <h2 className='pt-2 text-primary'>A little something about me</h2>
            <div className='md:grid md:grid-cols-2 md:gap-4'>
                <div>
                    <p className='text-white pt-10'>My name is Richard Johnston, I am currently studying fot a BA in Graphic design and have just finished a 16-week Front-End Web Developement bootcamp.</p>
                    <p className='text-white pt-4'>My hobbies are self-learning, digital content creation using software such as Adobe CC, web developement, blockchain technology, collecting sneakers, comics, and art.</p>
                    <p className='text-white pt-4'>Feel free to follow my media links in the contact page to see more of my work!</p>
                    
                </div>
                <div>
                    <img className='w-4/6 p-1 bg-border mt-10' src={profile} alt='profile pic' />
                </div>    
            </div>        
        </>
    )
}

export default About; 