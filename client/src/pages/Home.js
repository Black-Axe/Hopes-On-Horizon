import React from 'react'
import Banner from '../components/sections/Banner'
import AboutSection from '../components/sections/AboutSection'
import SectionGallery from '../components/sections/SectionGallery'
import SectionGalleryTwo from '../components/sections/SectionGalleryTwo'
import ContactSection from '../components/sections/ContactSection'
import Footer from '../components/sections/Footer'



export default function Home() {
    return (
        <>
        <Banner />
        <AboutSection />
        <SectionGallery />
        <SectionGalleryTwo />
        <Footer />
        </>
    )
}
