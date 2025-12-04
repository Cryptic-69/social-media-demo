import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { BookingForm } from './components/BookingForm';

export default function App() {
  const [showBooking, setShowBooking] = useState(false);

  if (showBooking) {
    return <BookingForm onBack={() => setShowBooking(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero onBookMeeting={() => setShowBooking(true)} />
      <Services />
      <Portfolio />
      <Testimonials />
      <About />
      <Contact onBookMeeting={() => setShowBooking(true)} />
    </div>
  );
}
