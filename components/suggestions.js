import Image from 'next/image'
import customStyle from './../styles/style.module.css'
import image02 from './../public/images/julian-wan-WNoLnJo7tS8-unsplash.jpg'
import image03 from './../public/images//matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'
import image04 from './../public/images/pexels-behrouz-sasani-10878304.jpg'
import image05 from './../public/images/pexels-lucas-allmann-1116344.jpg'
import image06 from './../public/images/pexels-marcio-skull-3579181.jpg'
import image07 from './../public/images/pexels-yuri-manei-2690323.jpg'

export default function Suggestions({ data }) {
   
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center p-3'>
                    <div>
                        <Image className={`rounded-circle ${customStyle.profileImgLg}`} src={image07} alt='female-image' />
                    </div>
                    <div className='d-flex flex-column ps-3'>
                        <label>Alina Khan</label>
                        <label className={customStyle.textXsm}>Los angeles</label>
                    </div>
                </div>

                <div>
                    <label className={`text-primary ${customStyle.textSm}`}>Switch</label>
                </div>
            </div>

            <div className='d-flex justify-content-between align-items-center ps-3'>
                <div>
                    <label className={customStyle.textSm}>Suggestions for you</label>
                </div>
                <div>
                    <label className={customStyle.textSm}>See All</label>
                </div>
            </div>
            {
                data.map(res => {
                    return (
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center px-3 pt-3'>
                                <div>
                                    <img className={`rounded-circle ${customStyle.profileImgSm}`} src={res.user.profile_image.large} alt='female-image' />
                                </div>
                                <div className='d-flex flex-column ps-3'>
                                    <label className={customStyle.textXsm}>{res.user.first_name}</label>
                                    <label className={customStyle.textXsm}>Popular</label>
                                </div>
                            </div>

                            <div>
                                <label className={`text-primary ${customStyle.textXsm}`}>Follow</label>
                            </div>
                        </div>
                    )
                })
            }



        </div>
    )
}