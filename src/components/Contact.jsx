import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
const Contact = () => {


  const data = {
    title: 'Contact',
    description: 'If you want to discuse more details, please contact me',
    userEmail: 'sundarsk001@gmail.com',
    userMobile: '6383339561',
  }

  return (
        <section className="flex flex-col items-center gap-5 justify-center px-5 bg-primary md:py-32 py-20 text-white" id="contact">
                <h1 className='md:text-4xl text-2xl border-b-4 border-secondary w-fit'>{data.title}</h1>
                <p className='text-center'>{data.description}</p>  
                <p className='flex items-center gap-2 ' ><MdEmail />  Email: <a href="mailto:sundarsk001@gmail.com" className=" underline">{data.userEmail}</a></p>
                <p className='flex items-center gap-2'><IoCall />  Mobile: <a href="tel:6383339561" className="underline">{data.userMobile}</a></p>
        </section>
  )
}
export default Contact
