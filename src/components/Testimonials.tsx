import { Star, Quote, ThumbsUp, Share2 } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TrendyThreads',
      image: '👩‍💼',
      content: "Oh So Creative transformed our Instagram from 2K to 150K followers in just 6 months! Their content strategy is unmatched.",
      rating: 5,
      likes: '2.3K',
      platform: 'Instagram',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, TechStart',
      image: '👨‍💻',
      content: "The video content they produced went viral and brought us 10x more engagement. Absolutely worth every penny!",
      rating: 5,
      likes: '1.8K',
      platform: 'LinkedIn',
    },
    {
      name: 'Emma Williams',
      role: 'Marketing Director, FoodieHub',
      image: '👩‍🍳',
      content: "From branding to daily posts, they handle everything. Our sales increased by 300% thanks to their campaigns!",
      rating: 5,
      likes: '3.1K',
      platform: 'Facebook',
    },
    {
      name: 'David Rodriguez',
      role: 'Owner, Urban Fitness',
      image: '💪',
      content: "Professional, creative, and results-driven. They understand social media like no other agency. Highly recommend!",
      rating: 5,
      likes: '1.5K',
      platform: 'Twitter',
    },
    {
      name: 'Lisa Anderson',
      role: 'Influencer & Content Creator',
      image: '✨',
      content: "Their photography and editing skills are top-tier. Every shoot feels like a high-fashion magazine spread!",
      rating: 5,
      likes: '4.2K',
      platform: 'Instagram',
    },
    {
      name: 'James Park',
      role: 'Brand Manager, StyleCo',
      image: '🎨',
      content: "The branding package they created elevated our entire business. We look like a Fortune 500 company now!",
      rating: 5,
      likes: '2.7K',
      platform: 'LinkedIn',
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
            <span className="text-purple-600">Reviews</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6">
            What Clients <span className="italic">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Social Platform Badge */}
              <div className="absolute top-6 right-6 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs">
                {testimonial.platform}
              </div>

              <Quote className="w-10 h-10 text-purple-200 mb-4" />

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>

              {/* Social Engagement */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-1 text-gray-500">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-xs">{testimonial.likes}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 cursor-pointer hover:text-purple-600 transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span className="text-xs">Share</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              2M+
            </div>
            <div className="text-gray-600">Followers Gained</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              50M+
            </div>
            <div className="text-gray-600">Total Reach</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
