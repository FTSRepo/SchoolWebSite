import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { Navigate } from 'react-router-dom';

import Academic from '../components/Academic/Academic';
import Branches from '../components/Branches/Branches';
import Contact from '../components/Contact/Contact';
import Gallery from '../components/Gallery/Gallery';
import Home from '../components/Home/Home';
import Payment from '../components/Payment/Payment';
import Receipt from '../components/Receipt/Receipt';
import Registration from '../components/Registration/Registration';

{/* About Page Import */ }
import About from '../components/About/About';
import AboutSchool from '../components/About/AboutSchool';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Layout />}>
                <Route path='' element={<Home />} />
                {/* About Route with nested pages */}
                <Route path="/about" element={<About />}>
                    <Route path="about-school" element={<AboutSchool />} />
                    <Route path="gallery" element={<Gallery />} />
                </Route>
                <Route path='/academic' element={<Academic />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/branches' element={<Branches />} />
                <Route path='/registration' element={<Registration />} />
            </Route>

            {/* Route without Layout (No Header/Footer)
            < Route path="/payment" element={< Payment />} />
            < Route path="/receiving" element={< Receipt />} /> */}
        </>
    )
)
function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}
export default AppRouter
