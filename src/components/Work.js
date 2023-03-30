import Website1 from '../images/Portfolio-Challenge1.png';
import Website2 from '../images/bootstrap-portfolio.jpg';

const images = [
    {image: Website1, title: 'Portfolio Challenge 1', description: 'First Bootstrap-Portfolio Challenge.'},
    {image: Website2, title: 'Portfolio Challenge 2', description: 'A portfolio website I created using React and TailwindCSS.'},
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