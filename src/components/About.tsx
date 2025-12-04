import { Zap, Award, Users, TrendingUp, Heart, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We stay ahead of trends and platform updates to keep your brand cutting-edge.',
    },
    {
      icon: Award,
      title: 'Quality Obsessed',
      description: 'Every pixel, word, and frame is crafted to perfection. We never compromise.',
    },
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'Your success is our success. We build partnerships, not just client relationships.',
    },
    {
      icon: TrendingUp,
      title: 'Results Driven',
      description: 'Beautiful content that converts. We focus on metrics that matter to your business.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
            <span className="text-purple-600">About Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6">
            Meet the <span className="italic">Creatives</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not just another agency. We're your creative partners in the digital age.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2NDc2MzMxOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Team"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border-2 border-pink-200">
              <Sparkles className="w-8 h-8 text-pink-500" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 shadow-xl text-white">
              <div className="text-2xl">5+ Years</div>
              <div className="text-sm">of Excellence</div>
            </div>
          </div>

          <div>
            <h3 className="text-4xl mb-6">
              Creating Magic Since 2019
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We started with a simple mission: make social media work for businesses of all sizes. 
              Today, we're a full-service creative agency with a team of passionate designers, strategists, 
              photographers, and video producers.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our approach combines data-driven strategy with scroll-stopping creativity. We don't just 
              create content—we create experiences that turn followers into customers and customers into 
              brand advocates.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              From startups to established brands, we've helped hundreds of businesses build their digital 
              presence and achieve real, measurable growth on social media.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-purple-200">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-sm">20+ Team Members</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-pink-200">
                <Award className="w-5 h-5 text-pink-600" />
                <span className="text-sm">15+ Awards Won</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 mb-4">
                <value.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl mb-3">{value.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
