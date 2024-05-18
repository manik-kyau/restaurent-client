
import { Helmet } from 'react-helmet-async';
import BistroBoss from '../../BistroBoss/BistroBoss';
import Contact from '../../Contact/Contact';
import Foods from '../../Foods/Foods';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Tesrimonial from '../Testimonial/Tesrimonial';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BistroBoss | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <Category></Category>
                <BistroBoss></BistroBoss>
                <PopularMenu></PopularMenu>
                <Contact></Contact>
                <Foods></Foods>
                <Featured></Featured>
                <Tesrimonial></Tesrimonial>
            </div>
        </div>
    );
};

export default Home;