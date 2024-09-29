import { StarIcon, HomeIcon, ClipboardDocumentCheckIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 opacity-80"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Welcome to REG 44 CONSULTANCY</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white drop-shadow-md">Pioneering excellence in Semi Independent Accommodation and Residential Children's Home care since 2010</p>
            <a href="#" className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-flex items-center">
              Discover Our Approach
              <ChevronRightIcon className="h-5 w-5 ml-2" />
            </a>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: StarIcon, title: "Reg 44 Visits", description: "Expert Regulation 44 visits to residential children's homes" },
              { icon: HomeIcon, title: "House Inspections", description: "Thorough inspections of Semi Independent Accommodation" },
              { icon: ClipboardDocumentCheckIcon, title: "Consultancy Services", description: "Professional guidance for new and existing care provisions" },
            ].map((service, index) => (
              <div key={index} className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
                  <service.icon className="h-16 w-16 text-orange-500 mx-auto relative z-10" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">Why Choose REG 44 CONSULTANCY?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Experienced Team</h3>
                <p>Over 20 years of experience in Local Authorities and care provision to date.</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Comprehensive Services</h3>
                <p>From Reg 44 visits to management coaching and quality assurance</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Tailored Support</h3>
                <p>Customized solutions for diverse care settings and communities anywhere in the UK.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Ready to Elevate Your Care Services?</h2>
            <a href="/contact" className="bg-gradient-to-r from-orange-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-flex items-center">
              Get Started Now
              <ChevronRightIcon className="h-5 w-5 ml-2" />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}