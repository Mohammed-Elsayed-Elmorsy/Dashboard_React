import './listings.css'
import { FiHeart } from 'react-icons/fi'
import img_1 from '../../../images/1.jpeg'
import img_2 from '../../../images/2.jpeg'
import img_3 from '../../../images/3.jpeg'
import img_4 from '../../../images/4.jpeg'
const Listings = () => {
    return (
        <div className='listings'>
            <h2>My Listings</h2>
            <div className="listings-content">
                <div className='listings-content-item'>
                    <FiHeart className='listings-content-item-icon' />
                    <img src={img_1} alt="alt text" className='listings-content-item-image' />
                    <h5>Annual Vince</h5>
                </div>
                <div className='listings-content-item'>
                    <FiHeart className='listings-content-item-icon' />
                    <img src={img_2} alt="alt text" className='listings-content-item-image' />
                    <h5>coffe </h5>
                </div>
                <div className='listings-content-item'>
                    <FiHeart className='listings-content-item-icon' />
                    <img src={img_3} alt="alt text" className='listings-content-item-image' />
                    <h5>button Fern</h5>
                </div>
                <div className='listings-content-item'>
                    <FiHeart className='listings-content-item-icon' />
                    <img src={img_4} alt="alt text" className='listings-content-item-image' />
                    <h5>Annual Vince</h5>
                </div>
            </div>
            <div className='listings-details'>
                <div className='top-seller'>
                    <div className='images'>
                        <img src={img_1} alt="alt1" />
                        <img src={img_2} alt="alt2" />
                        <img src={img_3} alt="alt3" />
                        <img src={img_4} alt="alt4" />
                    </div>
                    <div className='info'>
                        <h4>14.000 plant sold</h4>
                        <div>
                            <span>21 Sellers</span>
                            <span>7 days ago</span>
                        </div>
                    </div>
                </div>
                <div className='feattured-seller'>
                    <div className='images'>
                        <img src={img_1} alt="alt1" />
                        <img src={img_2} alt="alt2" />
                        <img src={img_3} alt="alt3" />
                        <img src={img_4} alt="alt4" />
                    </div>
                    <div className='info'>
                        <h4>74.000 plant sold</h4>
                        <div>
                            <span>27 Sellers</span>
                            <span>35 days ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listings
