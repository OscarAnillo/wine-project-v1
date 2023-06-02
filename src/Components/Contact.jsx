import { GoLocation } from 'react-icons/go';
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMailOpen } from 'react-icons/hi'

export const Contact = () => {
    return (
        <div className='contact-div'>
            <div className='contact-row'>
                <div>
                    <GoLocation />
                    <h4>Our main office</h4>
                    <p>Online store</p>
                </div>
                <div>
                    <FaPhone />
                    <h4>Our contact</h4>
                    <p>555-555-5555</p>
                </div>
                <div>
                    <FaWhatsapp />
                    <h4>Our Whatsapp</h4>
                    <p>+5730012345678</p>
                </div>
                <div>
                    <HiOutlineMailOpen />
                    <h4>Our Email</h4>
                    <p>wine@gmail.com</p>
                </div>
            </div>
            <h1>Contact Us</h1>
            <form className='contact-form'>
                <input type="text" placeholder='Enter your name'  />
                <input type="text" placeholder='Enter a valid email address'  />
                <textarea></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}