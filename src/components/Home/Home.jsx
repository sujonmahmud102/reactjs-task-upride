import Bookings from "../Bookings/Bookings";
import phoneIcon from '../../assets/images/Group.png'
import rectangle from '../../assets/images/Rectangle 146.png'


const Home = () => {
    return (
        <div className='mt-8 lg:mx-16 w-3/4'>
            <h2 className="flex items-end gap-8 text-3xl font-bold">View Bookings <img src={phoneIcon} alt="" /></h2>
            <div>
                <img src={rectangle} alt="" className="mx-auto" />
            </div>
            <Bookings />
        </div>
    );
};

export default Home;