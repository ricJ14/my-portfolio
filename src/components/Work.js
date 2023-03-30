import ricjabsolute from '../images/ric-j-absolut-narcissist.jpg';
import ricjbttf from '../images/ric-j-bttf-hoverboard-final.jpg';
import ricjcrcover from '../images/ric-j-cr-cover-white-header-2.jpg';
import ricjidposter from '../images/ric-j-idmultiposter.jpg';
import Website1 from '../images/Akira1.png';
import Website2 from '../images/TODwebsite.png';

const images = [
    {image: ricjabsolute, title: 'Absolute Narcissist', description: 'A fictional poster campaign for absolut vodka.'},
    {image: ricjbttf, title: 'Back to the Future Hoverboard Poster', description: 'A fanboy poster created in my spare time.'},
    {image: ricjcrcover, title: 'Creative Review Cover Portrait', description: 'A fictional magazine cover for a uni project.'},
    {image: ricjidposter, title: 'Sci-fi poster collection', description: 'A fictional sci-fi campaign for a uni project.'},
    {image: Website1, title: 'Akira Themed Portfolio Website', description: 'A portfolio website I created using React and TailwindCSS.'},
    {image: Website2, title: 'Taste Of Design website', description: 'A website redesign I created for a uni project.'},
]

const Work = () => {
    return (
        <>
            <h1 className='drop-shadow-md text-primary md:text-[70px]'>My Work</h1>
            <h2 className='pt-2 text-primary'>A selection of my work</h2>
            <div>
                <div>
                <p className='text-white pt-10'>This is a small selection of some of my Graphic Design work over the last couple of years.</p>
                <p className='text-white pt-4'>I have also included some of my web development work, which I have been learning over the last 16 weeks.</p>
                </div>
            </div>
            <div className='sm:grid md:grid-cols-2 md:gap-4 mt-4'>
                {images.map((item, key) => 
                <div className="mb-4 md:mb-0 rounded-[20px] border-2 border-cover relative overflow-hidden" key={key}>
                    <img src={item.image} alt="" />
                    <div className="absolute bottom-0 z-10 w-full h-[80px]">
                        <div className="absolute bg-black opacity-80 w-full"></div>
                        <h2 className="top-4 left-4 relative font-bold">{item.title}</h2>
                        <p className="top-4 left-4 relative text-white">{item.desc}</p>
                    </div>
                </div>
                    )}
            </div>
        </>
    )
}

export default Work;