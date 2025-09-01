import resumeImg from '../assets/resume.jpg'
import resumePdf from '../assets/FED.pdf'


const Resume = () => {

    const data = {
        title: 'Resume',
        description: 'You can view my resume',
        pdf : resumePdf,
        img : resumeImg,
    }

  return (
        <section className="flex flex-col-reverse gap-5 md:flex-row justify-center px-5 bg-secondary md:py-32 py-20" id='resume'>
            <div className="md:w-1/2 flex justify-center items-center">
                <img className='w-[300px]' src={data.img} alt="" />
            </div>
            <div className="md:w-1/2 flex  justify-center">
            <div className='flex flex-col gap-5 justify-center text-white'>
                <h1 className='md:text-4xl text-2xl border-b-4 border-primary w-fit'>{data.title}</h1>
                <p>{data.description} <a className='btn ml-3' href={data.pdf} download="FED.pdf">Download</a></p>
            </div>
            </div>
        </section>
  )
}

export default Resume
