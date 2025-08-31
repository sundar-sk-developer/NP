import projectImg1 from '../assets/ecommerce-websites.jpg'
import projectImg2 from '../assets/food-ecommerce.jpg'
import projectImg3 from '../assets/website-blog.jpg'

const Project = () => {
  return (
    <section className='flex flex-col gap-10 px-5 bg-primary md:py-32 py-20 text-white' id='projects'>
      <div className='flex flex-col justify-center gap-5'>
        <h1  className='md:text-4xl text-2xl border-b-4 border-secondary w-fit'>Projects</h1>
        <p>This are some of my best projects. i have buildwith this React and MERN.</p>
      </div>
      <div className='grid row-span-1 md:grid-cols-3 gap-5'>
        <div className='col-span-1 relative'>
            <img className='h-[200px] object-cover w-full col-span-1' src={projectImg1} alt="" />
            <div className='project-des'>
                <p>This website make using MERN stack technology</p>
            </div>
        </div>
        <div className='col-span-1 relative'>
            <img className='h-[200px] object-cover w-full col-span-1' src={projectImg2} alt="" />
            <div className='project-des'>
                <p>This website make using MERN stack technology</p>
            </div>
        </div>
        <div className='col-span-1 relative'>
            <img className='h-[200px] object-cover w-full col-span-1' src={projectImg3} alt="" />
            <div className='project-des'>
                <p>This website make using MERN stack technology</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Project
