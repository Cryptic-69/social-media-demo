import { ArrowLeft, Send, Check } from 'lucide-react';
import { useState } from 'react';

interface BookingFormProps {
  onBack: () => void;
}

export function BookingForm({ onBack }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    industry: '',
    currentFollowers: '',
    goals: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full bg-white rounded-3xl p-12 shadow-2xl text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">You're All Set!</h2>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for booking a consultation with us. We'll review your information and send you a calendar invite within 24 hours.
          </p>
          <div className="bg-purple-50 rounded-2xl p-6 mb-8">
            <p className="text-gray-700">
              <strong>What happens next?</strong><br />
              1. We'll send you a confirmation email<br />
              2. Our team will review your goals<br />
              3. You'll receive a calendar invite for your strategy call<br />
              4. We'll prepare a custom audit for your brand
            </p>
          </div>
          <button
            onClick={onBack}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-700 hover:text-purple-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Homepage</span>
        </button>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 text-2xl">
                !
              </div>
              <span className="text-xl">oh so <span className="italic">creative</span></span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-4">Book Your Free Strategy Call</h1>
            <p className="text-lg text-purple-100">
              Tell us about your business and goals. We'll create a custom plan just for you.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="Your Company Inc."
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Business Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-colors"
                >
                  <option value="">Select type</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="saas">SaaS/Tech</option>
                  <option value="restaurant">Restaurant/Food</option>
                  <option value="fashion">Fashion/Beauty</option>
                  <option value="fitness">Fitness/Wellness</option>
                  <option value="agency">Agency/Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Industry <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="e.g., Fashion, Tech, Food"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Current Social Media Followers
                </label>
                <select
                  name="currentFollowers"
                  value={formData.currentFollowers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-colors"
                >
                  <option value="">Select range</option>
                  <option value="0-1k">0 - 1K</option>
                  <option value="1k-10k">1K - 10K</option>
                  <option value="10k-50k">10K - 50K</option>
                  <option value="50k-100k">50K - 100K</option>
                  <option value="100k+">100K+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Monthly Budget <span className="text-red-500">*</span>
                </label>
                <select
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-colors"
                >
                  <option value="">Select budget</option>
                  <option value="1k-3k">$1,000 - $3,000</option>
                  <option value="3k-5k">$3,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-20k">$10,000 - $20,000</option>
                  <option value="20k+">$20,000+</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-2 text-gray-700">
                Primary Goals <span className="text-red-500">*</span>
              </label>
              <select
                name="goals"
                required
                value={formData.goals}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-colors"
              >
                <option value="">Select your main goal</option>
                <option value="awareness">Brand Awareness</option>
                <option value="engagement">Increase Engagement</option>
                <option value="followers">Grow Followers</option>
                <option value="sales">Drive Sales</option>
                <option value="leads">Generate Leads</option>
                <option value="all">All of the Above</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-2 text-gray-700">
                When do you want to start? <span className="text-red-500">*</span>
              </label>
              <select
                name="timeline"
                required
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-colors"
              >
                <option value="">Select timeline</option>
                <option value="asap">As soon as possible</option>
                <option value="1month">Within 1 month</option>
                <option value="2-3months">2-3 months</option>
                <option value="exploring">Just exploring options</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm mb-2 text-gray-700">
                Tell us more about your project
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                placeholder="What are your biggest challenges? What kind of content are you looking for? Any specific platforms you want to focus on?"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Submit & Book Your Call</span>
              <Send className="w-5 h-5" />
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting this form, you agree to our Privacy Policy. We'll never share your information.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
