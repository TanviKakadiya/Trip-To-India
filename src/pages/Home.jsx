import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Star, Map, Landmark, Gem, Heart, Quote } from 'lucide-react';
import { statesData, heroSlides } from '../data/statesData';
import './Home.css';

export default function Home({ onNavigateToState }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  const popularStates = statesData.filter(s => s.isPopular);

  const hiddenGems = [
    { id: 'ziro', name: 'Ziro Valley, Arunachal', image: '/C:/Users/tanvi/.gemini/antigravity/brain/f89c592c-4647-4f5f-9556-99532ed1b645/ziro_valley_1775116764359.png', desc: 'Lush green valleys and unique tribal heritage' },
    { id: 'mawlynnong', name: 'Mawlynnong, Meghalaya', image: '/C:/Users/tanvi/.gemini/antigravity/brain/f89c592c-4647-4f5f-9556-99532ed1b645/mawlynnong_1775116788439.png', desc: "Asia's cleanest village with living root bridges" },
    { id: 'khajjiar', name: 'Khajjiar, Himachal', image: '/C:/Users/tanvi/.gemini/antigravity/brain/f89c592c-4647-4f5f-9556-99532ed1b645/khajjiar_1775116818256.png', desc: "The 'Mini Switzerland' of India" },
    { id: 'dhanushkodi', name: 'Dhanushkodi, Tamil Nadu', image: '/C:/Users/tanvi/.gemini/antigravity/brain/f89c592c-4647-4f5f-9556-99532ed1b645/dhanushkodi_1775116845215.png', desc: 'A mystical ghost town at the edge of the ocean' }
  ];

  const luxuryTravel = [
    { id: 'maharaja', name: 'Maharaja Express', image: '/C:/Users/tanvi/.gemini/antigravity/brain/f89c592c-4647-4f5f-9556-99532ed1b645/maharaja_express_int_1775116882414.png', desc: 'Journey through royal India in ultimate luxury' },
    { id: 'palace', name: 'Palace Hotels', image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=1200', desc: 'Stay in converted palaces and experience royalty' }
  ];

  const culturalIndia = [
    { id: 'wagah', name: 'Wagah Border Ceremony', category: 'Patriotism', image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=1200', desc: 'Experience the patriotic fervor at the border' },
    { id: 'spiritual', name: 'Spiritual India', category: 'Spiritual', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=1200', desc: 'Varanasi Ghats - Connect with ancient spirituality' },
    { id: 'festivals', name: 'Festival of Colors', category: 'Festivals', image: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&q=80&w=1200', desc: 'Diwali - The festival of lights and joy' }
  ];

  const travelerStories = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "London, UK",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      rating: 5,
      tag: "Family Trip",
      text: "Our trip to Rajasthan was magical. The heritage hotels and the warm hospitality exceeded our expectations. TripToIndia made planning so easy!"
    },
    {
      id: 2,
      name: "Amit Sharma",
      location: "Mumbai, India",
      avatar: "https://i.pravatar.cc/150?u=amit",
      rating: 5,
      tag: "Solo Traveler",
      text: "Exploring the hidden gems of Meghalaya was a soul-stirring experience. The root bridges and the crystal clear rivers are a must-see."
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      location: "Madrid, Spain",
      avatar: "https://i.pravatar.cc/150?u=elena",
      rating: 5,
      tag: "Luxury Travel",
      text: "The Maharaja Express was the highlight of my life. Living like royalty while traveling through the heart of India is something I'll never forget."
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Carousel */}
      <section className="hero-section">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className="hero-background"
            style={{
              backgroundImage: `url(${slide.image})`,
              opacity: index === currentSlide ? 1 : 0
            }}
          />
        ))}
        <div className="hero-overlay" />
        
        <button className="hero-arrow left" onClick={prevSlide}><ChevronLeft size={24} /></button>
        
        <div className="hero-content">
          <h1 className="hero-title">{heroSlides[currentSlide].title}</h1>
          <p className="hero-subtitle">{heroSlides[currentSlide].subtitle}</p>
          <button className="explore-btn" onClick={() => onNavigateToState(heroSlides[currentSlide].stateId)}>
            Explore India
          </button>
        </div>

        <button className="hero-arrow right" onClick={nextSlide}><ChevronRight size={24} /></button>

        <div className="hero-dots">
          {heroSlides.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="section-wrapper">
        <div className="section-header">
          <div className="section-tag"><Star size={14} fill="currentColor" /> TOP PICKS</div>
          <h2 className="section-title">Popular Destinations</h2>
          <p className="section-subtitle">Discover the most visited and loved destinations across India</p>
        </div>

        <div className="states-grid popular">
          {popularStates.map(state => (
            <div key={state.id} className="state-card" onClick={() => onNavigateToState(state.id)}>
              <img src={state.thumbnail} alt={state.name} className="card-image" />
              <div className="card-overlay">
                <div className="card-tag">
                  <MapPin size={12} fill="currentColor" /> {state.tagTitle}
                </div>
                <h3 className="card-title">{state.name}</h3>
                <p className="card-desc">{state.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hidden Gems Section */}
      <section className="section-wrapper">
        <div className="section-header">
          <div className="section-tag"><Landmark size={14} /> OFF THE BEATEN PATH</div>
          <h2 className="section-title">Hidden Gems</h2>
          <p className="section-subtitle">Discover lesser-known treasures waiting to be explored</p>
        </div>

        <div className="states-grid gem-grid">
          {hiddenGems.map(gem => (
            <div key={gem.id} className="state-card gem-card">
              <img src={gem.image} alt={gem.name} className="card-image" />
              <div className="card-overlay">
                <h3 className="card-title" style={{ fontSize: '20px' }}>{gem.name}</h3>
                <p className="card-desc">{gem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Luxury Travel Section */}
      <section className="section-wrapper grey-bg">
        <div className="section-header">
          <div className="section-tag" style={{ color: '#2b6cb0' }}><Gem size={14} /> PREMIUM EXPERIENCE</div>
          <h2 className="section-title">Luxury Travel</h2>
          <p className="section-subtitle">Experience India in regal comfort and style</p>
        </div>

        <div className="states-grid luxury-grid">
          {luxuryTravel.map(item => (
            <div key={item.id} className="state-card luxury-card">
              <img src={item.image} alt={item.name} className="card-image" />
              <div className="card-overlay">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cultural India Section */}
      <section className="section-wrapper">
        <div className="section-header">
          <div className="section-tag" style={{ color: '#e53e3e' }}><Heart size={14} /> HEART & SOUL</div>
          <h2 className="section-title">Cultural India</h2>
          <p className="section-subtitle">Experience the emotions, traditions, and heritage that define our nation</p>
        </div>

        <div className="states-grid culture-grid">
          {culturalIndia.map(item => (
            <div key={item.id} className="state-card culture-card">
              <img src={item.image} alt={item.name} className="card-image" />
              <div className="card-overlay">
                <span className={`category-badge ${item.category.toLowerCase()}`}>
                  {item.category}
                </span>
                <h3 className="card-title" style={{ fontSize: '22px' }}>{item.name}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Traveler Stories Section */}
      <section className="section-wrapper grey-bg stories-section">
        <div className="section-header">
          <div className="section-tag" style={{ color: '#8a5cf5' }}><Quote size={14} /> HEAR FROM OUR TRAVELERS</div>
          <h2 className="section-title">Traveler Stories</h2>
          <p className="section-subtitle">Real experiences from people who explored India with us</p>
        </div>

        <div className="stories-grid">
          {travelerStories.map(story => (
            <div key={story.id} className="story-card">
              <div className="story-header">
                <div className="user-info">
                  <img src={story.avatar} alt={story.name} className="user-avatar" />
                  <div>
                    <h4 className="user-name">{story.name}</h4>
                    <p className="user-location">{story.location}</p>
                  </div>
                </div>
                <span className="story-tag">{story.tag}</span>
              </div>
              
              <div className="star-rating">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#f6ad55" color="#f6ad55" />
                ))}
              </div>

              <p className="story-text">"{story.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* All 28 States */}
      <section id="all-states" className="section-wrapper" style={{ paddingTop: '40px', paddingBottom: '120px' }}>
        <div className="section-header">
          <div className="section-tag" style={{ color: '#276749' }}><Map size={14} /> COMPLETE INDIA</div>
          <h2 className="section-title">Explore All 28 States</h2>
          <p className="section-subtitle">From Kashmir to Kanyakumari, every state has a unique story to tell</p>
        </div>

        <div className="states-grid all-states">
          {statesData.map(state => (
            <div key={state.id} className="state-card" style={{ height: '320px' }} onClick={() => onNavigateToState(state.id)}>
              <img src={state.thumbnail} alt={state.name} className="card-image" />
              <div className="card-overlay" style={{ padding: '20px' }}>
                <div className="card-tag">
                  <MapPin size={12} fill="currentColor" /> {state.tagTitle}
                </div>
                <h3 className="card-title" style={{ fontSize: '24px' }}>{state.name}</h3>
                <p className="card-desc" style={{ fontSize: '12px' }}>{state.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
