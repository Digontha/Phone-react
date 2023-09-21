
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='flex items-center justify-between px-10 p-5 shadow-lg'>

                <div>
                      <h1 className='text-5xl font-medium text-red-400'>PhoneClub</h1>
                </div>

                <div>
                       <Link to='/' className='m-5 font-semibold'>Home</Link>
                       <Link to='/iphone' className='m-5 font-semibold'>Iphone</Link>
                       <Link  to='/samsung' className='m-5 font-semibold'>Samsung</Link>
                       <Link  to='/profile' className='m-5 font-semibold'>Profile</Link>
                </div>

            </div>

            <div>
                <Outlet></Outlet>
            </div>

        </>
    );
};

export default Navbar;