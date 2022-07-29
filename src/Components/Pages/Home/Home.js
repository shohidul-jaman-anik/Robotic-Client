import React from 'react';
import Book from '../Book/Book';
import Banner from './Banner/Banner';
import Benifit from './Benifit/Benifit';
import BussinessSummery from './BussinessSummery/BussinessSummery';
import GetReview from './GetReview/GetReview';
import Jobarea from './Jobarea/Jobarea';
import LogoArea from './LogoArea/LogoArea';
import Product from './Product/Product';
import Social from './Social/Social';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LogoArea></LogoArea>
            <Product></Product>
            <BussinessSummery></BussinessSummery>
            <Jobarea></Jobarea>
            <Benifit></Benifit>
            <Social></Social>
            <GetReview></GetReview>
            <Book></Book>
        </div>
    );
};

export default Home;