import React from 'react';
import './App.scss';
import NavigationBar from './NavigationBar';

function App() {
  return (
    <main>
      <NavigationBar />
      <section className='title-section'>
        <p>Hello, my name is</p>
        <h1>Edwin Del Bosque.</h1>
        <h1 className='sub-header-title'>I build things for the web.</h1>
        <p className='description-title'>I'm a frontend software engineer based in Denver, CO specializing in building (and occasionally designing) exceptional, high-quality websites and applications.</p>
        <a href='mailto:edwinbosq@gmail.com'><button className='contact-button'>Get In Touch</button></a>
      </section>
    </main >
  );
}

export default App;
