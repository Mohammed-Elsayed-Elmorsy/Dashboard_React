import './top.css'
import { FiBell, FiCommand, FiMessageCircle, FiSearch } from 'react-icons/fi'
import { FaComment, FaEllipsisV } from 'react-icons/fa'
import img from '../../../images/2.jpeg'
import video from '../../../images/garden_-_18230 (1080p).mp4'
import { useState } from 'react'
const Top = () => {
    const [profile, setProfile] = useState(false)
    return (
        <>
            <header>
                <div className='welcome'>
                    <h3>Welcome to Planti</h3>
                    <p>Hello <span style={{ color: 'orangered' }}>Mohammed</span> Welcome Back!</p>
                </div>

                <div className='input-container'>
                    <input type="text" placeholder='Search Here' />
                    <FiSearch className='search-icon' />
                </div>

                <div className='profile'>
                    <div className='top-icon'>
                        <FiMessageCircle />
                    </div>
                    <div className='top-icon'>
                        <FiBell />
                    </div>
                    <div className='profile-image'>
                        <img src={img} alt="profile image" />
                    </div>
                </div>

                <div className={profile ? 'profile-mobile show' : 'profile-mobile'}>
                    <div className='top-icon'>
                        <FiMessageCircle />
                        <span style={{ color: 'black', fontSize: '15px', marginLeft: '5px' }}>Messages</span>
                    </div>
                    <div className='top-icon'>
                        <FiBell />
                        <span style={{ color: 'black', fontSize: '15px', marginLeft: '5px' }}>Notification</span>

                    </div>
                    <div className='profile-image flex'>
                        <img src={img} alt="profile image" />

                        profile
                    </div>
                </div>
                <FaEllipsisV className='ellipsis' onClick={() => setProfile(!profile)} />
            </header>
            <div className='landing flex'>
                <div className='overlay'></div>
                <video src={video} autoPlay muted loop></video>
                <div className='landing-title'>
                    <h3>Create And Explore Extraordinary Products</h3>
                    <p>the world fastgrowing today keep up with Updates and keep optimistic</p>
                </div>
                <div className='control'>
                    <button className='btn'>Explore more </button>
                    <button className='btn'>Top Seller</button>
                </div>
            </div>
        </>
    )
}

export default Top
