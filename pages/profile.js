import Image from 'next/image'
import customStyle from './../styles/style.module.css'
import styles from '../styles/Home.module.css'
import Sidebar from "../components/sidebar"
import Shorts from '../components/shorts'
import Card from '../components/data/card'
import Suggestions from '../components/suggestions'
import image07 from './../public/images/pexels-yuri-manei-2690323.jpg'
import { MdVerified } from 'react-icons/md'
import { IoMdPersonAdd } from 'react-icons/io'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

import Stories from '../components/stories'


export default function Profile() {
    return (
        <div className={styles.container}>
            <main>
                <div className='container-fluid'>
                    <div className='row vh-100'>
                        <div className='col-2 border-end'>
                            <Sidebar />
                        </div>

                        <div className='col-10'>
                            <div className='row vh-100 overflow-auto'>
                                <div className='col-8 offset-2 pt-5'>
                                    <div className='d-flex'>
                                        <div>
                                            <Image className={`rounded-circle border border-3 border-danger p-2 ${customStyle.profileImgXxl}`} src={image07} alt='female-image' />
                                        </div>

                                        <div className='ps-5'>
                                            <div className='d-flex align-items-center'>
                                                <h3 className='fw-light pe-4 mb-0'>ushnashah <span><MdVerified className='text-primary' /></span></h3>
                                                <label className={`px-3 py-1 border rounded me-2 ${customStyle.bgLight}`}>Following</label>
                                                <label className={`px-3 py-1 border rounded me-2 ${customStyle.bgLight}`}>Message</label>
                                                <label className={`px-3 py-1 border rounded ${customStyle.bgLight}`}><IoMdPersonAdd /></label>
                                            </div>

                                            <div className='py-4'>
                                                <label className='fw-bold pe-5'>343<span className='fw-normal ps-2'>Posts</span></label>
                                                <label className='fw-bold pe-5'>2.5M<span className='fw-normal ps-2'>Followers</span></label>
                                                <label className='fw-bold'>1648<span className='fw-normal ps-2'>Following</span></label>
                                            </div>

                                            <div className='d-flex flex-column'>
                                                <label className='fs-5 fw-bolder'>Ushna Shah</label>
                                                <label>Model</label>
                                                <label>Lahore <BsFillSuitHeartFill className='text-danger' /></label>
                                            </div>
                                        </div>
                                    </div>

                                    <Stories />

                                    {/* <div className='border rounded px-3 py-5'>
                                    <h3 className='text-center pb-4'><BsInstagram className='me-3 fs-2'/> Instagram</h3>
                                    <input className="form-control mb-3" type="text" placeholder='Username' />
                                    <input className="form-control mb-3" type="password" placeholder='Password' />

                                    <button className='btn btn-primary w-100 fw-bold'>Log In</button>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}