import customStyle from '../../styles/style.module.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineModeComment } from 'react-icons/md'
import { RiSendPlaneLine } from 'react-icons/ri'
import { FiSave } from 'react-icons/fi'

export default function Card({ data }) {
    // console.log(".................", data.urls.full);
    return (
        <div>
            <div className='border rounded mt-5'>
                <div className='d-flex align-items-center p-3'>
                    <div>
                        <img className={`rounded-circle ${customStyle.profileImg}`} src={data.user.profile_image.large} alt='female-image' />
                    </div>
                    <div className='d-flex flex-column ps-3'>
                        <label>{data.user.first_name}</label>
                        <label className={customStyle.textXsm}>{data.user.last_name}</label>
                    </div>
                </div>

                <div>
                    <img className={customStyle.cardImg} src={data.urls.full} alt='female-image' />
                </div>

                <div className='px-3 pt-2 d-flex justify-content-between'>
                    <div>
                        <AiOutlineHeart className='fs-2' />

                        <MdOutlineModeComment className='fs-2 ms-3' />

                        <RiSendPlaneLine className='fs-2 ms-3' />
                    </div>

                    <div>
                        <FiSave className='fs-3' />
                    </div>
                </div>

                <div className='px-3'>
                    <label className={customStyle.textSm}>31,031,086 likes</label>

                    <p className={customStyle.textSm}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                </div>
            </div>
        </div>
    )
}