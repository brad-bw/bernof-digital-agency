import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Global Services - Digital Solutions Worldwide | Bernof Co',
  description: 'Bernof Co offers comprehensive digital services across Europe and USA. Web development, software development, and startup services tailored to local markets.',
  keywords: 'global digital services, international web development, worldwide software development, global startup services',
  openGraph: {
    title: 'Global Services - Digital Solutions Worldwide | Bernof Co',
    description: 'Bernof Co offers comprehensive digital services across Europe and USA. Web development, software development, and startup services tailored to local markets.',
    url: 'https://bernofco.com/global-services',
    siteName: 'Bernof Co',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bernofco.com/global-services',
  },
};

export default function GlobalServicesPage() {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Global Digital Services
              </h1>
              <p className="text-xl text-gray-600 mb-12">
                Comprehensive digital solutions across Europe and USA, tailored to local markets and regulations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                <a 
                  href="/global-services/ch"
                  className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="text-2xl mb-4">🇨🇭</div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    Switzerland
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Premium digital services in Switzerland
                  </p>
                </a>
                
                <a 
                  href="/global-services/uk"
                  className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="text-2xl mb-4">🇬🇧</div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    United Kingdom
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Digital solutions for UK businesses
                  </p>
                </a>
                
                <a 
                  href="/global-services/us"
                  className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="text-2xl mb-4">🇺🇸</div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    United States
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    American market digital services
                  </p>
                </a>
                
                <a 
                  href="/global-services/it"
                  className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="text-2xl mb-4">🇮🇹</div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    Italy
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Italian market digital expertise
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}