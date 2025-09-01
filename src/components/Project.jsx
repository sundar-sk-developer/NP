import projectImg1 from '../assets/ecommerce-websites.jpg'
import projectImg2 from '../assets/food-ecommerce.jpg'
import projectImg3 from '../assets/website-blog.jpg'

const Project = () => {

  const ProjectData = {
    title: 'Projects',
    description: 'This are some of my best projects. i have buildwith this React and MERN.',
    projectItems : [
      {
        id:1,
        img: projectImg1,
        des:'This website make using MERN stack technology',
        link:'/'
      },
      {
        id:2,
        img: projectImg2,
        des:'This website make using MERN stack technology',
        link:'/'
      },
     {
        id:3,
        img: projectImg3,
        des:'This website make using MERN stack technology',
        link:'/'
      }
    ]
  }

  return (
    <section className='flex flex-col gap-10 px-5 bg-primary md:py-32 py-20 text-white' id='projects'>
      <div className='flex flex-col justify-center gap-5'>
        <h1  className='md:text-4xl text-2xl border-b-4 border-secondary w-fit'>{ProjectData.title}</h1>
        <p>{ProjectData.description}</p>
      </div>
      <div className='grid row-span-1 md:grid-cols-3 gap-5'>
        {ProjectData.projectItems.map((item)=>(
        <div className='col-span-1 relative' key={item.id}>
            <img className='h-[200px] object-cover w-full col-span-1' src={item.img} alt="" />
            <div className='project-des'>
                <p>{item.des}</p>
            </div>
        </div>
        ))}
      </div>
    </section>
  )
}

export default Project
