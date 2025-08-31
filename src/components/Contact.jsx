import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
const Contact = () => {
  return (
        <section className="flex flex-col items-center gap-5 justify-center px-5 bg-primary md:py-32 py-20 text-white" id="contact">
                <h1 className='md:text-4xl text-2xl border-b-4 border-secondary w-fit'>Contact</h1>
                <p className='text-center'>If you want to discuse more details, please contact me</p>  
                <p className='flex items-center gap-2 ' ><MdEmail />  Email: <a href="mailto:sundarsk001@gmail.com" className=" underline">sundarsk001@gmail.com</a></p>
                <p className='flex items-center gap-2'><IoCall />  Mobile: <a href="tel:6383339561" className="underline">6383339561</a></p>
        </section>
  )
}
export default Contact
