import * as React from "react";
import type {PageProps} from "gatsby";
import Header from "@/components/Header/Header";
import MainPagePosts from "@/components/MainPagePosts/MainPagePosts";
import LatestPosts from "@/components/LatestPosts/LatestPosts";
import OurValues from "@/components/OurValues/OurValues";
import BlogCarousel from "@/components/BlogCarousel/BlogCarousel";
import Footer from "@/components/Footer/Footer";
import {Provider} from "react-redux";
import {RootState, store} from "@/app/store";
import {ReactComponent as FirstBackground} from "@/images/Backgrounds/FirstBackground.svg";
import {ReactComponent as SecondBackground} from "@/images/Backgrounds/SecondBackground.svg";
import {ReactComponent as ThirdBackground} from "@/images/Backgrounds/ThirdBackground.svg";
import {Store} from "@reduxjs/toolkit";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Provider store={store as Store<RootState, RootState>}>
            <div className="relative bg-white min-h-screen">
                <FirstBackground className="absolute top-0 left-0 w-full h-[40%]"/>
                <SecondBackground className="absolute top-1/8 w-full h-[80%]"/>
                <ThirdBackground className="absolute top-[60%] w-full h-[40%]"/>

                <div className="relative z-10">
                    <Header/>
                    <MainPagePosts/>
                    <LatestPosts/>
                    <OurValues/>
                    <BlogCarousel/>
                    <Footer/>
                </div>
            </div>
        </Provider>
    );
};

export default IndexPage;
