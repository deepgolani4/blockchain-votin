import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/navbar';
import  Head from './components/HeadSection';

export default function HomePage() {
    return (
        <>
        <NavBar />
        <Head />
        <Footer />
        </>
    );
}