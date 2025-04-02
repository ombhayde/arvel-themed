
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message Received",
      description: "S.H.I.E.L.D. will contact you soon!",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="py-20 bg-marvel-gray text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-comic text-5xl text-white inline-block relative">
            S.H.I.E.L.D. CONTACT
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-marvel-red"></div>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            For classified communication with The Code Avenger
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="comic-panel bg-black/50 backdrop-blur-sm relative overflow-hidden">
            {/* Top Secret Stamp */}
            <div className="absolute -right-8 -top-8 rotate-12 bg-marvel-red py-1 px-12 text-white font-comic">
              TOP SECRET
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block font-marvel text-xl mb-2">AGENT NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="comic-border w-full p-3 bg-white/90 text-black border-2 border-black"
                  placeholder="Your codename"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-marvel text-xl mb-2">COMMUNICATION CHANNEL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="comic-border w-full p-3 bg-white/90 text-black border-2 border-black"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-marvel text-xl mb-2">CLASSIFIED MESSAGE</label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="speech-bubble w-full p-3 bg-white/90 text-black border-2 border-black"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-center">
                <button 
                  type="submit" 
                  className="comic-button bg-marvel-red text-xl font-comic"
                >
                  TRANSMIT MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
