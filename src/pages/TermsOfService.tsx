
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/10 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 -right-6 w-6 h-6 bg-accent/10 transform rotate-45"></div>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-600">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
                
                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Agreement to Terms
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing and using Bernof Co's website and services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service govern your use of our digital development, creative design, and strategic marketing services.
                  </p>
                </section>

                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Services Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Bernof Co provides comprehensive digital solutions including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Web development and application development</li>
                    <li>Creative design services and brand identity</li>
                    <li>Strategic marketing and digital growth solutions</li>
                    <li>Consulting and project management services</li>
                  </ul>
                </section>

                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Client Responsibilities
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Provide accurate and complete project requirements</li>
                    <li>Supply necessary content, materials, and assets in a timely manner</li>
                    <li>Respond to communications and feedback requests promptly</li>
                    <li>Make payments according to agreed terms and schedules</li>
                    <li>Respect intellectual property rights and usage guidelines</li>
                  </ul>
                </section>

                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Intellectual Property
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">Client-Owned Materials</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Clients retain ownership of all materials, content, and intellectual property provided to Bernoff Co for project completion.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">Work Product</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Upon full payment, clients receive ownership rights to custom work products created specifically for their project, excluding proprietary methodologies and frameworks.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Payment Terms
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Project costs and payment schedules are outlined in individual contracts</li>
                    <li>Invoices are due within 30 days of receipt unless otherwise specified</li>
                    <li>Late payments may incur additional fees and project delays</li>
                    <li>All payments are non-refundable once work has commenced</li>
                    <li>Additional work beyond original scope requires separate agreement</li>
                  </ul>
                </section>

                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Limitation of Liability
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Bernoff Co's liability is limited to the total amount paid for services. We are not liable for indirect, incidental, or consequential damages. Our responsibility is limited to providing services with professional competence according to industry standards.
                  </p>
                </section>

                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Termination
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Either party may terminate services with written notice. Upon termination, clients are responsible for payment of all work completed to date. Bernoff Co will provide all completed work and transfer relevant files upon final payment.
                  </p>
                </section>

                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Contact Information
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    For questions regarding these Terms of Service, please contact us at:
                    <br />
                    <strong>Email:</strong> info@bernofco.com
                    <br />
                    <strong>Phone:</strong> +44 20 3000 0000
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

export default TermsOfService;
