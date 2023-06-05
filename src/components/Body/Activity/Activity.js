import './activity.css'
import img from '../../../images/1.jpeg'
import img2 from '../../../images/2.jpeg'
import img3 from '../../../images/3.jpeg'
import img4 from '../../../images/4.jpeg'
const Activity = () => {
    return (
        <div className='recent'>
            <h2>Recent Activity</h2>
            <div className='recent-content'>
                <div className='recent-item'>
                    <div className='recent-item-content'>
                        <img src={img} alt="alt" />
                        <div className='recent-item-info'>
                            <h4>Mohammed</h4>
                            <p>Front End Developer</p>
                        </div>

                    </div>
                    <span className='recent-time'>1 min ago</span>
                </div>
                <div className='recent-item'>
                    <div className='recent-item-content'>
                        <img src={img4} alt="alt" />
                        <div className='recent-item-info'>
                            <h4>Osama</h4>
                            <p>FullStack Developer</p>
                        </div>

                    </div>
                    <span className='recent-time'>4 days ago</span>
                </div>
                <div className='recent-item'>
                    <div className='recent-item-content'>
                        <img src={img2} alt="alt" />
                        <div className='recent-item-info'>
                            <h4>Ahmed</h4>
                            <p>Ux Designer</p>
                        </div>

                    </div>
                    <span className='recent-time'>5 min ago</span>
                </div>
                <div className='recent-item'>
                    <div className='recent-item-content'>
                        <img src={img3} alt="alt" />
                        <div className='recent-item-info'>
                            <h4>Mohammed</h4>
                            <p>Front End Developer</p>
                        </div>

                    </div>
                    <span className='recent-time'>10 min ago</span>
                </div>
            </div>
        </div>
    )
}

export default Activity
