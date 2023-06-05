import './Body.css'
import Activity from './Activity/Activity'
import Listings from './Listings/Listings'
import Top from './TopSection/Top'

const Body = () => {
    return (
        <div className='body'>
            <Top />
            <div className='bottom'>
                <Listings />
                <Activity />
            </div>
        </div>
    )
}

export default Body
