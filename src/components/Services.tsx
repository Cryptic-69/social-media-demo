import { Palette, Instagram, Camera, Video, TrendingUp, Users, Sparkles, Target } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Branding',
      description: 'Build a powerful brand identity that resonates with your audience and stands out in the digital landscape.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Color Psychology'],
      color: 'from-purple-500 to-indigo-500',
      likes: '15.2K',
    },
    {
      icon: Instagram,
      title: 'Social Media Management',
      description: 'Let us handle your social presence with strategic content planning, posting, and community engagement.',
      features: ['Content Calendar', 'Daily Posting', 'Community Management', 'Analytics & Reports'],
      color: 'from-pink-500 to-rose-500',
      likes: '23.8K',
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional photography that captures your brand essence and creates stunning visual stories.',
      features: ['Product Photography', 'Lifestyle Shots', 'Event Coverage', 'Editorial Shoots'],
      color: 'from-amber-500 to-orange-500',
      likes: '18.5K',
    },
    {
      icon: Video,
      title: 'Creative Videos',
      description: 'Engaging video content that stops the scroll and drives engagement across all platforms.',
      features: ['Reels & TikToks', 'Brand Videos', 'Promotional Content', 'Motion Graphics'],
      color: 'from-cyan-500 to-blue-500',
      likes: '31.4K',
    },
  ];

  const additionalServices = [
    { icon: TrendingUp, label: 'Growth Strategy' },
    { icon: Users, label: 'Influencer Marketing' },
    { icon: Sparkles, label: 'Content Creation' },
    { icon: Target, label: 'Ad Campaigns' },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
            <span className="text-purple-600">What We Do</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6">
            Our <span className="italic">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to creation, we deliver comprehensive social media solutions that drive results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Social Media Like Badge */}
              <div className="absolute top-6 right-6 bg-white rounded-full px-3 py-1 shadow-lg border border-gray-200 flex items-center gap-1">
                <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
                <span className="text-xs">{service.likes}</span>
              </div>

              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Comment Icon */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2">
                  <span className="text-white text-xs">View More</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
            >
              <service.icon className="w-10 h-10 mx-auto mb-3 text-purple-600" />
              <div className="text-sm">{service.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
