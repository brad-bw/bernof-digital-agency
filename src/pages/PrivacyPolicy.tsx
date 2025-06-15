
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12 relative">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/10 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-primary/10 transform rotate-45"></div>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl"></div>
                
                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Introduction
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    At Bernoff Co ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                  </p>
                </section>

                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Information We Collect
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">Personal Information</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Name and contact information (email, phone number)</li>
                        <li>Company information and job title</li>
                        <li>Project requirements and business needs</li>
                        <li>Communication preferences</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">Technical Information</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>IP address and browser information</li>
                        <li>Website usage data and analytics</li>
                        <li>Device and operating system information</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    How We Use Your Information
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Provide and improve our digital development services</li>
                    <li>Communicate about projects and business opportunities</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Analyze website performance and user experience</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>
                </section>

                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Data Sharing and Disclosure
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>With trusted service providers who assist in our operations</li>
                    <li>When required by law or to protect our legal rights</li>
                    <li>In connection with a business transfer or merger</li>
                    <li>With your explicit consent</li>
                  </ul>
                </section>

                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Your Rights
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Depending on your location, you may have the following rights regarding your personal data:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Access and obtain a copy of your personal data</li>
                    <li>Rectify inaccurate or incomplete information</li>
                    <li>Request deletion of your personal data</li>
                    <li>Object to or restrict processing of your data</li>
                    <li>Data portability and withdrawal of consent</li>
                  </ul>
                </section>

                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Contact Us
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                    <br />
                    <strong>Email:</strong> privacy@bernoff.co
                    <br />
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
