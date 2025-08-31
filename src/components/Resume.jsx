import resumeImg from '../assets/resume.jpg'
import resumePdf from '../assets/FED.pdf'


const Resume = () => {
  return (
        <section className="flex flex-col-reverse gap-5 md:flex-row justify-center px-5 bg-secondary md:py-32 py-20" id='resume'>
            <div className="md:w-1/2 flex justify-center items-center">
                <img className='w-[300px]' src={resumeImg} alt="" />
            </div>
            <div className="md:w-1/2 flex  justify-center">
            <div className='flex flex-col gap-5 justify-center text-white'>
                <h1 className='md:text-4xl text-2xl border-b-4 border-primary w-fit'>About Me</h1>
                <p>You can view my resume <a className='btn ml-3' href={resumePdf} download="FED.pdf">Download</a></p>
            </div>
            </div>
        </section>
  )
}

export default Resume
