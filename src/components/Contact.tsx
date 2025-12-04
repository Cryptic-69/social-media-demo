import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook, Send } from 'lucide-react';

interface ContactProps {
  onBookMeeting: () => void;
}

export function Contact({ onBookMeeting }: ContactProps) {
  const socialLinks = [
    { icon: Instagram, label: '@ohsocreative', color: 'from-purple-600 to-pink-600', followers: '125K' },
    { icon: Linkedin, label: 'Oh So Creative', color: 'from-blue-600 to-cyan-600', followers: '45K' },
    { icon: Twitter, label: '@ohsocreative', color: 'from-blue-400 to-blue-600', followers: '67K' },
    { icon: Facebook, label: 'Oh So Creative Agency', color: 'from-blue-600 to-indigo-600', followers: '89K' },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-gray-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="text-pink-300">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6">
            Let's Create <span className="italic">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to take your social media to the next level? Let's talk about your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl mb-8">Ready to Go Viral?</h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                  <Mail className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Email</div>
                  <div className="text-lg">hello@ohsocreative.agency</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Phone</div>
                  <div className="text-lg">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                  <MapPin className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Office</div>
                  <div className="text-lg">123 Creative Street, Design District<br />Los Angeles, CA 90028</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl mb-6">Follow Our Journey</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                  >
                    <social.icon className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-sm mb-1">{social.label}</div>
                    <div className="text-xs text-gray-400">{social.followers} followers</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                !
              </div>
              <h3 className="text-3xl mb-4">Book Your Free Consultation</h3>
              <p className="text-gray-600">
                Let's discuss your brand goals and create a custom strategy that drives real results.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>30-minute strategy session</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Custom social media audit</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Personalized growth plan</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No obligations, just insights</span>
              </div>
            </div>

            <button
              onClick={onBookMeeting}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Book Your Free Call Now</span>
              <Send className="w-5 h-5" />
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Usually responds within 2 hours • Available Mon-Fri, 9AM-6PM PST
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© 2024 Oh So Creative Agency. All rights reserved. Made with ❤️ in Los Angeles.</p>
        </div>
      </div>
    </section>
  );
}
