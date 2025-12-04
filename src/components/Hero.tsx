import { Heart, MessageCircle, Share2, Bookmark, Send } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onBookMeeting: () => void;
}

export function Hero({ onBookMeeting }: HeroProps) {
  return (
    <section id="home" className="pt-24 pb-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      {/* Floating Social Elements */}
      <div className="absolute top-32 left-10 bg-white rounded-2xl p-4 shadow-xl border-2 border-pink-200 transform -rotate-6">
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-red-500 fill-red-500" />
          <span className="text-sm">12.5K</span>
        </div>
      </div>

      <div className="absolute top-48 right-16 bg-white rounded-full p-3 shadow-xl border-2 border-purple-200 transform rotate-12">
        <MessageCircle className="w-7 h-7 text-purple-600" />
      </div>

      <div className="absolute bottom-32 left-20 bg-white rounded-2xl p-3 shadow-xl border-2 border-indigo-200">
        <Share2 className="w-6 h-6 text-indigo-600" />
      </div>

      <div className="absolute top-64 right-32 bg-white rounded-full p-3 shadow-xl border-2 border-pink-300 transform -rotate-12">
        <Bookmark className="w-6 h-6 text-pink-600" />
      </div>

      <div className="absolute bottom-48 right-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3 shadow-xl transform rotate-6">
        <Send className="w-6 h-6 text-white" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full border-2 border-purple-300 shadow-lg">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            #1 Social Media Agency
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl mb-8 max-w-5xl mx-auto">
          We Create Content That{' '}
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
            Goes Viral
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Transform your brand with scroll-stopping content. We make social media magic happen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={onBookMeeting}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Book a Free Strategy Call
          </button>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-full shadow-lg hover:shadow-xl border-2 border-purple-200 hover:scale-105 transition-all duration-300">
            View Our Work
          </button>
        </div>

        {/* Instagram Post Card */}
        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="p-4 flex items-center gap-3 border-b border-gray-200">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white">
              !
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm">ohsocreative.agency</div>
              <div className="text-xs text-gray-500">Sponsored</div>
            </div>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
            </div>
          </div>

          <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1572814392266-1620040c58be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NjQ3NzY2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Social Media Content"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-4">
                <Heart className="w-7 h-7 hover:text-red-500 cursor-pointer transition-colors" />
                <MessageCircle className="w-7 h-7 hover:text-purple-500 cursor-pointer transition-colors" />
                <Share2 className="w-7 h-7 hover:text-indigo-500 cursor-pointer transition-colors" />
              </div>
              <Bookmark className="w-7 h-7 hover:text-pink-500 cursor-pointer transition-colors" />
            </div>
            <div className="text-sm text-left">
              <span>Liked by </span>
              <span>brandsthatgrow</span>
              <span> and </span>
              <span>others</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
