
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shieldLogoClicked, setShieldLogoClicked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message Received",
        description: "Director Fury will review your message shortly!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  const handleShieldClick = () => {
    setShieldLogoClicked(true);
    
    // Reset the animation after 3 seconds
    setTimeout(() => {
      setShieldLogoClicked(false);
    }, 3000);
    
    toast({
      title: "Easter Egg Found!",
      description: "You've discovered a S.H.I.E.L.D. secret. Welcome, Agent.",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-marvel-black text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="animate-pulse-grow inline-block bg-marvel-red px-8 py-2 transform -rotate-2 mb-6">
                <h1 className="font-marvel text-white text-3xl">CLASSIFIED</h1>
              </div>
              <h2 className="font-comic text-6xl mb-8">S.H.I.E.L.D. CONTACT</h2>
              <div className="speech-bubble relative inline-block animate-float">
                <p className="font-comic text-black text-xl">Secure channel for mission requests!</p>
              </div>
            </div>
          </div>
          
          {/* Neon Animation */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-marvel-red via-transparent to-marvel-red neon-scan"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-marvel-blue via-transparent to-marvel-blue neon-scan-reverse"></div>
          
          {/* Background Light Beams */}
          <div className="absolute inset-0 light-beam-container">
            <div className="light-beam light-beam-1"></div>
            <div className="light-beam light-beam-2"></div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="comic-panel bg-marvel-black text-white h-full flex flex-col justify-between">
                  {/* S.H.I.E.L.D. Logo (Easter Egg) */}
                  <div 
                    className={`mx-auto w-32 h-32 mb-6 cursor-pointer transition-transform hover:scale-110 ${shieldLogoClicked ? 'animate-spin' : ''}`}
                    onClick={handleShieldClick}
                  >
                    <Shield size={128} className="text-marvel-red" />
                  </div>
                  
                  <h3 className="font-marvel text-2xl mb-6">COMMUNICATION CHANNELS</h3>
                  
                  <div className="space-y-6 mb-auto">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-marvel-red rounded-full flex-shrink-0">
                        <Mail size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-comic text-marvel-red mb-1">Email</h4>
                        <p className="text-marvel-silver">codeavenger@shield.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-marvel-blue rounded-full flex-shrink-0">
                        <Phone size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-comic text-marvel-blue mb-1">Phone</h4>
                        <p className="text-marvel-silver">+1 (123) 456-7890</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-marvel-gold rounded-full flex-shrink-0">
                        <MapPin size={20} className="text-black" />
                      </div>
                      <div>
                        <h4 className="font-comic text-marvel-gold mb-1">Location</h4>
                        <p className="text-marvel-silver">Avengers Tower, New York</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-marvel-gray/30">
                    <h4 className="font-comic text-lg mb-4">FOLLOW THE MISSION</h4>
                    <div className="flex gap-4">
                      <a href="#" className="p-3 bg-marvel-gray rounded-full hover:bg-marvel-red transition-colors">
                        <Github size={20} className="text-white" />
                      </a>
                      <a href="#" className="p-3 bg-marvel-gray rounded-full hover:bg-marvel-blue transition-colors">
                        <Linkedin size={20} className="text-white" />
                      </a>
                      <a href="#" className="p-3 bg-marvel-gray rounded-full hover:bg-marvel-gold transition-colors">
                        <Twitter size={20} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="comic-panel bg-marvel-blue/10 relative">
                  {/* Top Secret Stamp */}
                  <div className="absolute -right-6 -top-6 rotate-12 bg-marvel-red py-1 px-8 text-white font-comic text-sm border-2 border-black z-10">
                    TOP SECRET
                  </div>
                  
                  <h3 className="font-marvel text-3xl mb-6 text-marvel-black">MISSION REQUEST FORM</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block font-comic text-marvel-black mb-2">CODENAME</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full p-3 bg-white border-2 border-black focus:outline-none focus:ring-2 focus:ring-marvel-red"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block font-comic text-marvel-black mb-2">COMMUNICATION CHANNEL</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full p-3 bg-white border-2 border-black focus:outline-none focus:ring-2 focus:ring-marvel-red"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block font-comic text-marvel-black mb-2">MISSION TYPE</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-white border-2 border-black focus:outline-none focus:ring-2 focus:ring-marvel-red"
                      >
                        <option value="">Select mission type</option>
                        <option value="Job Opportunity">Job Opportunity</option>
                        <option value="Project Collaboration">Project Collaboration</option>
                        <option value="Consulting">Consulting</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block font-comic text-marvel-black mb-2">MISSION DETAILS</label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="speech-bubble w-full p-4 bg-white border-2 border-black focus:outline-none focus:ring-2 focus:ring-marvel-red"
                          placeholder="Describe your mission here..."
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`comic-button bg-marvel-red text-xl font-comic flex items-center gap-2 ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                            <span>SENDING...</span>
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            <span>TRANSMIT MESSAGE</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-10 bg-marvel-gray text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="font-marvel text-3xl">HEADQUARTERS LOCATION</h3>
              <p className="text-marvel-silver">Find The Code Avenger here</p>
            </div>
            
            <div className="comic-panel p-0 h-96 relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155278150885!2d-73.98784532352496!3d40.74844613539341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1655999525174!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
              
              {/* Comic Overlay Elements */}
              <div className="absolute top-4 left-4 comic-panel bg-marvel-red px-3 py-2 transform -rotate-6 z-10">
                <span className="font-comic text-white text-sm">YOU ARE HERE</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
