import { Heart, MessageCircle, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Portfolio() {
  const works = [
    {
      image: 'https://images.unsplash.com/photo-1711355249709-1733df63e028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHBob3RvZ3JhcGh5JTIwY3JlYXRpdmV8ZW58MXx8fHwxNzY0ODM3MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Luxury Fashion Brand',
      category: 'Photography',
      likes: '45.2K',
      comments: '892',
      views: '125K',
      color: 'from-pink-500 to-rose-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1673767297196-ce9739933932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY0NzI2MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Tech Product Launch',
      category: 'Video Production',
      likes: '67.8K',
      comments: '1.2K',
      views: '250K',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1572814392266-1620040c58be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NjQ3NzY2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Restaurant Social Campaign',
      category: 'Social Media',
      likes: '89.5K',
      comments: '2.1K',
      views: '320K',
      color: 'from-amber-500 to-orange-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1704208316515-a32f81e373ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY0NzQ3Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Streetwear Editorial',
      category: 'Photography',
      likes: '52.3K',
      comments: '743',
      views: '180K',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ4MTY4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Creative Agency Rebrand',
      category: 'Branding',
      likes: '38.7K',
      comments: '654',
      views: '95K',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2NDc2MzMxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Corporate B2B Campaign',
      category: 'Content Creation',
      likes: '42.1K',
      comments: '821',
      views: '140K',
      color: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
            <span className="text-purple-600">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6">
            Work That <span className="italic">Speaks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every project is a testament to our creativity and commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Engagement Metrics */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-4 h-4 text-purple-600" />
                  <span className="text-xs">{work.views}</span>
                </div>
              </div>

              <div className="p-6">
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${work.color} text-white rounded-full text-xs mb-3`}>
                  {work.category}
                </div>
                <h3 className="text-2xl mb-4">{work.title}</h3>

                <div className="flex items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-sm">{work.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-sm">{work.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
