import aboutImg from '../assets/about.png'

const About = () =>{
    return(
        <section className="flex flex-col-reverse md:flex-row justify-center px-5 bg-secondary md:py-32 py-20" id='about'>
            <div className="md:w-1/2">
                <img src={aboutImg} alt="" />
            </div>
            <div className="md:w-1/2 flex  justify-center">
            <div className='flex flex-col gap-5 justify-center text-white'>
                <h1 className='md:text-4xl text-2xl border-b-4 border-primary w-fit'>About Me</h1>
                <p>Hi, My name is somasundaram. I am Front End Developer. I build beautifull websites with React JS ana Tailwind CSS </p>
                <p>I am proficiant in Frontend skill like React JS, Redux, Tailwind CSS, CSS3 and many more..</p>
                <p>In Backend I know Node JS,Express JS, MongoDB</p>
            </div>
            </div>
        </section>
    )
}
export default About