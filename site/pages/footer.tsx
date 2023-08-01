import Pwlogo from './assets/image 1.png'
import Image from 'next/image';

const Footer = () => {
    return ( <>
    <div className="flex">
        <div className="">
            <div>
            <Image src={Pwlogo} alt="logo" />
            </div>
            <div className='text-[14px]'>
                We understand that every student has 
                different needs and capabilities, 
                which is why we create such a wonderful
                and unique curriculum that is
                the best fit for every student.
            </div>
            <div className='font-[700] text-[16px]'>
                About PW Unigo
            </div>
            <div>
                PW Foundation’s core mission lies in identifying 
                and working along with economically and socially
                deprived sections of society and empowering them to 
                become increasingly educated and skilled so that 
                they can be self-reliant, have a sense of holistic
                awareness and enjoy a healthy, dignified and 
                sustainable quality of life.
            </div>
        </div>
        <div>
        <div>Countries</div>
        <div>
            
        </div>
        </div>
        <div>

        </div>
    </div>
    </> );
}
 
export default Footer;