import Image from 'next/image'
import image01 from './../public/images/pexels-yuri-manei-2690323.jpg'
import image02 from './../public/images/julian-wan-WNoLnJo7tS8-unsplash.jpg'
import image03 from './../public/images//matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'
import image04 from './../public/images/pexels-behrouz-sasani-10878304.jpg'
import image05 from './../public/images/pexels-lucas-allmann-1116344.jpg'
import image06 from './../public/images/pexels-marcio-skull-3579181.jpg'
import image07 from './../public/images/pexels-yuri-manei-2690323.jpg'
import customStyle from './../styles/style.module.css'

export default function Stories() {
    return (
        <div>
            <div className='py-5 d-flex justify-content-between'>
                <div className='d-flex flex-column align-items-center'>
                    <Image className={`rounded-circle ${customStyle.stories}`} src={image04} alt='female-image' />
                    <label className='pt-2'>Falak</label>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <Image className={`rounded-circle ${customStyle.stories}`} src={image02} alt='female-image' />
                    <label className='pt-2'>John</label>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <Image className={`rounded-circle ${customStyle.stories}`} src={image03} alt='female-image' />
                    <label className='pt-2'>Aliya</label>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <Image className={`rounded-circle ${customStyle.stories}`} src={image04} alt='female-image' />
                    <label className='pt-2'>Alina</label>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <Image className={`rounded-circle ${customStyle.stories}`} src={image05} alt='female-image' />
                    <label className='pt-2'>Sadia</label>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <Image className={`rounded-circle ${customStyle.stories}`} src={image06} alt='female-image' />
                    <label className='pt-2'>Smith</label>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <Image className={`rounded-circle ${customStyle.stories}`} src={image04} alt='female-image' />
                    <label className='pt-2'>Sadia</label>
                </div>

            </div>
        </div>
    )
}