import { IoMdHome } from 'react-icons/io'
import { BiSearch } from 'react-icons/bi'
import { MdOutlineExplore } from 'react-icons/md'
import { BiMessageRoundedDetail } from 'react-icons/bi'
import { FaRegHeart } from 'react-icons/fa'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'
import customStyle from './../styles/style.module.css'

export default function Sidebar() {
    return (
        <div>
            <h2 className={`py-5 ${customStyle.logo}`}></h2>

            <Link className='text-decoration-none text-dark' href="/">
                <div className='pb-3 d-flex align-items-center'><IoMdHome className='fs-2 me-3' /><a className='text-decoration-none text-dark fs-4' href='#'>Home</a></div>
            </Link>
            <div className='pb-3 d-flex align-items-center'><BiSearch className='fs-2 me-3' /><a className='text-decoration-none text-dark fs-4' href='#'>Search</a></div>
            <div className='pb-3 d-flex align-items-center'><MdOutlineExplore className='fs-2 me-3' /><a className='text-decoration-none text-dark fs-4' href='#'>Explore</a></div>
            <div className='pb-3 d-flex align-items-center'><BiMessageRoundedDetail className='fs-2 me-3' /><a className='text-decoration-none text-dark fs-4' href='#'>Messages</a></div>
            <div className='pb-3 d-flex align-items-center'><FaRegHeart className='fs-2 me-3' /><a className='text-decoration-none text-dark fs-4' href='#'>Notification</a></div>
            <div className='pb-3 d-flex align-items-center'><BiMessageSquareAdd className='fs-2 me-3' /><a className='text-decoration-none text-dark fs-4' href='#'>Create</a></div>
            <Link className='text-decoration-none text-dark' href="/profile"><div className='pb-3 d-flex align-items-center'><CgProfile className='fs-2 me-3' /><a className='text-decoration-none text-dark fs-4' href='#'>Profile</a></div></Link>
            <div className='pb-3 d-flex align-items-center'><AiOutlineMenu className='fs-2 me-3' /><a className='text-decoration-none text-dark fs-4' href='#'>More</a></div>
        </div>
    )
}