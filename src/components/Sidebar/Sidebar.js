import React from 'react'
import './sidebar.css'
import img from '../../images/1.jpeg'
import { FaArrowUp, FaBuilding, FaChartPie, FaClock, FaCompass, FaFacebook, FaMagic, FaQuestionCircle, FaTrophy, FaUser } from 'react-icons/fa'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='logoDiv flex' >
                <img src={img} alt="Alt Image" />
                <h2>Plant</h2>
            </div>

            <div className='quick-menu'>
                <h3>Quick Menu</h3>
                <ul>
                    <li className='flex'>
                        <a href="#">
                            <FaClock className='icon' />
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaMagic className='icon' />
                            My Orders
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaCompass className='icon' />
                            Explore
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaTrophy className='icon' />
                            Proucts
                        </a>
                    </li>
                </ul>
            </div>

            <div className='settings'>
                <h3>
                    Settings
                </h3>
                <ul>
                    <li>
                        <a href="#">
                            <FaChartPie className='icon' />
                            Charts
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <FaArrowUp className='icon' />
                            Trends
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaUser className='icon' />
                            Contacts
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaBuilding className='icon' />
                            Billing
                        </a>
                    </li>
                </ul>
            </div>

            <div className='sidebar-card'>
                <FaQuestionCircle className='card-icon' />
                <h3>Help Center</h3>
                <p>Just add your desired image size (width & height) after our U
                    RL, and you'll get a random image.</p>
                <button className='btn'>Go To Help Center</button>
                <div className='circle1'></div>
                <div className='circle2'></div>
            </div>
        </div>
    )
}

export default Sidebar
