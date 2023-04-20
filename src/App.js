import React from 'react';
import Header from './components/Header';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router } from "react-router-dom";
// import HeroSection from './components/Hero';
import Features from './components/Feature';
// import Footer from './components/Footer';
import Highlight from "./components/Highlight";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  return (
    <Router basename="/">
      <Helmet>
        <title>A new way to read with AI bot - myGPTReader</title>
        <meta name="description" content="myGPTReader is a Slack bot that can read and summarize any webpage, documents including ebooks, or even videos from YouTube. It also can communicate with you via voice." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel='canonical' href='https://www.myreader.io/' />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="A community-driven way to read and chat with AI bots - myGPTReader" />
        <meta property="og:description" content="myGPTReader is a Slack bot that can read and summarize any webpage, documents including ebooks, or even videos from YouTube. It also can communicate with you via voice." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.myreader.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="myGPTReader" />
      </Helmet>
        <Header />
        <Features />
        <Highlight />
      <FAQ />
      <Pricing />
      <Footer />
    </Router>
  );
};

export default App;
