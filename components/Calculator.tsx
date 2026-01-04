import React, { useState } from 'react';
import { BookingType } from '../types';

const Calculator: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    bookingType: BookingType.PRIVATE_1,
    date: '',
    message: '',
    isNonprofit: false,
    isStudent: false,
  });

  const handleTypeChange = (type: BookingType) => {
    setFormData({ ...formData, bookingType: type });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const myForm = e.currentTarget;
    const data = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as any).toString(),
    })
      .then(() => {
        alert("Thank you. Your booking request has been received.");
        // Optional: Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          bookingType: BookingType.PRIVATE_1,
          date: '',
          message: '',
          isNonprofit: false,
          isStudent: false,
        });
      })
      .catch((error) => alert(error));
  };

  return (
    <section id="calculator" className="py-16 px-8 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <form 
          name="booking" 
          method="POST" 
          data-netlify="true" 
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-2 bg-deep/20 rounded-sm overflow-hidden border border-white/5 backdrop-blur-xl shadow-2xl"
        >
          {/* Netlify Hidden Fields */}
          <input type="hidden" name="form-name" value="booking" />
          <input type="hidden" name="offering" value={formData.bookingType} />
          <input type="hidden" name="discount" value={formData.isNonprofit ? 'Nonprofit' : formData.isStudent ? 'Student' : 'None'} />

          <div className="p-10 md:p-14 space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-serif italic font-light">Inquire for Bookings.</h2>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.4em] opacity-50 font-bold">Name</label>
                  <input 
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-dark/30 border border-white/10 rounded-sm p-4 text-sm font-light text-cream focus:border-sage outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.4em] opacity-50 font-bold">Email</label>
                  <input 
                    type="email"
                    name="email"
                    required
                    placeholder="hello@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-dark/30 border border-white/10 rounded-sm p-4 text-sm font-light text-cream focus:border-sage outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.4em] opacity-50 font-bold">Company / Org</label>
                  <input 
                    type="text"
                    name="company"
                    placeholder="Optional"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-dark/30 border border-white/10 rounded-sm p-4 text-sm font-light text-cream focus:border-sage outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.4em] opacity-50 font-bold">Requested Date</label>
                  <input 
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-dark/30 border border-white/10 rounded-sm p-4 text-sm font-light text-cream focus:border-sage outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] opacity-50 font-bold">Offering Selection</label>
                <div className="grid grid-cols-1 gap-2">
                  {Object.values(BookingType).map(type => (
                    <button 
                      key={type}
                      type="button"
                      onClick={() => handleTypeChange(type as BookingType)}
                      className={`px-5 py-3 text-left text-[10px] uppercase tracking-[0.4em] border transition-all duration-700 rounded-sm flex justify-between items-center group ${formData.bookingType === type ? 'border-sage bg-sage/10 text-sage' : 'border-white/5 hover:border-white/20 opacity-60'}`}
                    >
                      <span>{type}</span>
                      <div className={`w-1.5 h-1.5 rounded-full bg-sage ${formData.bookingType === type ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} transition-all`}></div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/5">
                <label className="text-[10px] uppercase tracking-[0.4em] opacity-50 font-bold">Community Support</label>
                <div className="grid md:grid-cols-2 gap-2">
                  <button 
                    type="button"
                    onClick={() => setFormData({...formData, isNonprofit: !formData.isNonprofit, isStudent: false})}
                    className={`flex items-center gap-4 p-3 border rounded-sm transition-all duration-700 ${formData.isNonprofit ? 'border-sage bg-sage/5' : 'border-white/5 opacity-40'}`}
                  >
                    <div className={`w-3 h-3 rounded-full border border-sage flex items-center justify-center flex-shrink-0`}>
                      {formData.isNonprofit && <div className="w-1.5 h-1.5 bg-sage rounded-full"></div>}
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-left">Nonprofit Discount Request</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setFormData({...formData, isStudent: !formData.isStudent, isNonprofit: false})}
                    className={`flex items-center gap-4 p-3 border rounded-sm transition-all duration-700 ${formData.isStudent ? 'border-sage bg-sage/5' : 'border-white/5 opacity-40'}`}
                  >
                    <div className={`w-3 h-3 rounded-full border border-sage flex items-center justify-center flex-shrink-0`}>
                      {formData.isStudent && <div className="w-1.5 h-1.5 bg-sage rounded-full"></div>}
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-left">Student Discount Request</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 md:p-14 bg-cream/5 border-l border-white/5 flex flex-col justify-end relative">
            <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center overflow-hidden">
               <img 
                 src="/logo.png" 
                 className="w-96 h-auto grayscale brightness-[2.0]" 
                 alt="" 
                 onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
               />
            </div>

            <div className="space-y-8 relative z-10">
               <div className="space-y-3 pt-2">
                  <label className="text-[10px] uppercase tracking-[0.4em] opacity-50 font-bold">Your Intention</label>
                  <textarea 
                    name="intention"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your container. What intention are you holding for this session?"
                    className="w-full h-48 bg-dark/30 border border-white/10 rounded-sm p-4 text-sm font-light text-cream placeholder:text-cream/80 focus:border-sage outline-none transition-colors resize-none"
                  />
               </div>

               <button 
                type="submit"
                className="block w-full py-6 bg-cream text-dark text-center text-[10px] font-bold uppercase tracking-[0.6em] hover:bg-white transition-all duration-700 shadow-2xl"
               >
                 Submit Booking Request
               </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Calculator;