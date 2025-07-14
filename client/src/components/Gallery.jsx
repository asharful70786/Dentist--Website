import React, { useState, useEffect } from 'react'

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)  
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('gallery-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const categories = [
    { id: 'all', name: 'All Works',  },
   
    { id: 'cosmetic', name: 'Cosmetic', },
    { id: 'implants', name: 'Implants', icon: '🦷' },
    { id: 'orthodontics', name: 'Orthodontics'},
    { id: 'office', name: 'Our Office', icon: '🏥' }
  ]

  // Sample gallery data - replace with your actual images
  const galleryItems = [
    {
      id: 1,
      category: 'before-after',
      title: 'Smile Makeover Transformation',
      description: 'Complete smile transformation with veneers',
      beforeImage: 'https://digitaldenture.com/wp-content/uploads/sites/214/2021/12/broken-tooth-crown-2048x1365.jpg',
      afterImage: 'https://tse2.mm.bing.net/th/id/OIP.zTz7JxhNAkqY2oNqbI3H6QHaFl?pid=Api&P=0&h=180',
      type: 'before-after'
    },
    {
      id: 2,
      category: 'cosmetic',
      title: 'Teeth Whitening Results',
      description: 'Professional whitening treatment results',
      image: 'https://images.pexels.com/photos/3762441/pexels-photo-3762441.jpeg',
      type: 'single'
    },
    {
      id: 3,
      category: 'implants',
      title: 'Dental Implant Success',
      description: 'Single tooth implant restoration',
      beforeImage: 'https://tse1.mm.bing.net/th/id/OIP.yuSVocPbf2Nx2nzEqjGhxAHaDt?pid=Api&P=0&h=180',
      afterImage: 'https://tse1.mm.bing.net/th/id/OIP.XeZ2gTrp5laMYz9lpHJtFQHaEJ?pid=Api&P=0&h=180',
      type: 'before-after'
    },
    {
      id: 4,
      category: 'orthodontics',
      title: 'Invisalign Treatment',
      description: 'Clear aligner treatment progress',
      beforeImage: 'https://images.pexels.com/photos/13207280/pexels-photo-13207280.jpeg',
      afterImage: 'https://images.pexels.com/photos/11887613/pexels-photo-11887613.jpeg',
      type: 'before-after'
    },
    {
      id: 5,
      category: 'office',
      title: 'Modern Treatment Room',
      description: 'State-of-the-art dental equipment',
      image: 'https://images.pexels.com/photos/6812558/pexels-photo-6812558.jpeg',
      type: 'single'
    },
    {
      id: 6,
      category: 'cosmetic',
      title: 'Porcelain Veneers',
      description: 'Beautiful veneer placement',
      beforeImage: 'https://tse1.mm.bing.net/th/id/OIP.yuSVocPbf2Nx2nzEqjGhxAHaDt?pid=Api&P=0&h=180',
      afterImage: 'https://tse3.mm.bing.net/th/id/OIP.inRpzhI8y3bk1CGcLd9dfgHaEK?pid=Api&P=0&h=180',
      type: 'before-after'
    },
    {
      id: 7,
      category: 'office',
      title: 'Reception Area',
      description: 'Comfortable waiting area',
      image: 'https://images.pexels.com/photos/6809668/pexels-photo-6809668.jpeg',
      type: 'single'
    },
    {
      id: 8,
      category: 'implants',
      title: 'Full Mouth Restoration',
      description: 'Complete dental implant restoration',
      beforeImage: 'https://irp-cdn.multiscreensite.com/303c74af/dms3rep/multi/symptoms+of+tooth+decay.jpg',
      afterImage: 'https://tse3.mm.bing.net/th/id/OIP.NOEUNJLGVws0xmPwtQg-gQHaFj?pid=Api&P=0&h=180',
      type: 'before-after'
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const openModal = (item) => {
    setSelectedImage(item)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <section id="gallery-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden w-full">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the transformative power of our dental treatments through real patient results and our modern facility
          </p>
        </div>

        {/* Category Filter */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openModal(item)}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    {item.type === 'before-after' ? (
                      <div className="grid grid-cols-2 gap-0">
                        {/* Before Image */}
                        <div className="relative">
                          <img
                            src={item.beforeImage}
                            alt="Before"
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Before
                          </div>
                        </div>
                        {/* After Image */}
                        <div className="relative">
                          <img
                            src={item.afterImage}
                            alt="After"
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            After
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-center">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Category Badge */}
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Transformation?</h3>
            <p className="text-gray-600 mb-6">
              Schedule a consultation today and let us help you achieve the smile of your dreams
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Book Your Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {selectedImage.type === 'before-after' ? (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">Before</h4>
                    <img
                      src={selectedImage.beforeImage}
                      alt="Before"
                      className="w-full rounded-xl shadow-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">After</h4>
                    <img
                      src={selectedImage.afterImage}
                      alt="After"
                      className="w-full rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              ) : (
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full rounded-xl shadow-lg"
                />
              )}
              
              <div className="mt-6">
                <p className="text-gray-600 leading-relaxed">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
