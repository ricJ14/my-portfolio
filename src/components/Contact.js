import artstationIcon from '../images/artstation-icon.png';
import githubIcon from '../images/github-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';
import behanceIcon from '../images/behance-icon.png';

const Contact = () => {
    return (
        <>
            <h1 className='drop-shadow-md text-primary md:text-[70px]'>Contact Me</h1>
            <h2 className='pt-2 text-primary'>Get intouch</h2>
            <div className="md:grid md:grid-cols-2 md:gap-4">
                <div>
                    <p className='text-white pt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, justo accumsan dignissim ultrices, ante turpis pretium sapien, at hendrerit justo ipsum nec enim. Pellentesque sodales risus vel arcu lacinia accumsan. Nulla fringilla magna nec sodales efficitur. Cras a orci nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id erat sed nunc maximus interdum sed id dolor. Suspendisse fermentum elit eget feugiat ultrices. Proin eget mattis purus. Cras vitae metus blandit, tincidunt tellus eget, vulputate velit. Mauris dictum libero vel tincidunt cursus.</p>
                    <p className='text-white pt-4'>Sed ut libero id purus volutpat pharetra. In hac habitasse platea dictumst. Fusce a laoreet lorem. Mauris semper mauris eget lorem porttitor laoreet. Vivamus nulla ligula, viverra et venenatis ac, suscipit a augue. Aliquam iaculis, dui in consequat hendrerit, metus nulla sodales diam, et auctor risus sem eget velit. Sed non nisi pretium, gravida turpis et, consectetur eros. Nunc id urna erat.</p>
                </div>
                <div className='relative flex justify-center flex-col'>
                    <div className='pl-[10px] pt-[50px] text-center'>
                        <p className='text-primary text-[20px] md:text-[40px]'>my-email@email.com</p>
                    </div>
                    <div className='pl-[10px] pt-[10px] text-center'>
                    <a href="https://ricj14.artstation.com/"><img className='inline ml-[10px] w-[40px] h-[40px] md:w-[60px] md:h-[60px]' src={artstationIcon} alt="artstation icon"></img></a>
                    <a href="https://www.behance.net/ricjohnston14"><img className='inline ml-[10px] w-[40px] h-[40px] md:w-[60px] md:h-[60px]' src={behanceIcon} alt="artstation icon"></img></a>
                    <a href="https://github.com/ricJ14?tab=repositories"><img className='inline ml-[10px] w-[40px] h-[40px] md:w-[60px] md:h-[60px]' src={githubIcon} alt="artstation icon"></img></a>
                    <a href="https://www.linkedin.com/in/richard-johnston-9a4919200/"><img className='inline ml-[10px] w-[40px] h-[40px] md:w-[60px] md:h-[60px]' src={linkedinIcon} alt="artstation icon"></img></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;

