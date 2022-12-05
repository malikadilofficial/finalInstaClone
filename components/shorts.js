import Image from 'next/image'
import image01 from './../public/images/pexels-yuri-manei-2690323.jpg'
import image02 from './../public/images/julian-wan-WNoLnJo7tS8-unsplash.jpg'
import image03 from './../public/images//matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'
import image04 from './../public/images/pexels-behrouz-sasani-10878304.jpg'
import image05 from './../public/images/pexels-lucas-allmann-1116344.jpg'
import image06 from './../public/images/pexels-marcio-skull-3579181.jpg'
import image07 from './../public/images/pexels-yuri-manei-2690323.jpg'
import customStyle from './../styles/style.module.css'

export default function Shorts() {
    return (
        <div>
            <div className='border rounded p-3 d-flex justify-content-around'>
                <div className='d-flex flex-column align-items-center'>
                    <Image className={`rounded-circle ${customStyle.shorts}`} src={image01} alt='female-image' />
                    <label>Christanio</label>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <Image className={`rounded-circle ${customStyle.shorts}`} src={image02} alt='female-image' />
                    <label>Alina</label>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <Image className={`rounded-circle ${customStyle.shorts}`} src={image03} alt='female-image' />
                    <label>Aliya</label>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <Image className={`rounded-circle ${customStyle.shorts}`} src={image04} alt='female-image' />
                    <label>John</label>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <Image className={`rounded-circle ${customStyle.shorts}`} src={image05} alt='female-image' />
                    <label>Sadia</label>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <Image className={`rounded-circle ${customStyle.shorts}`} src={image06} alt='female-image' />
                    <label>Smith</label>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <Image className={`rounded-circle ${customStyle.shorts}`} src={image07} alt='female-image' />
                    <label>Mark</label>
                </div>

            </div>
        </div>
    )
}