
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
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
                Cookie Policy
              </h1>
              <p className="text-lg text-gray-600">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
                
                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    What Are Cookies
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and enabling certain functionalities.
                  </p>
                </section>

                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Types of Cookies We Use
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-6 relative">
                      <div className="absolute top-2 right-2 w-3 h-3 bg-accent/20 rounded-full"></div>
                      <h3 className="text-xl font-medium text-gray-800 mb-3">Essential Cookies</h3>
                      <p className="text-gray-700 leading-relaxed mb-2">
                        These cookies are necessary for the website to function properly and cannot be disabled.
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Session management and security</li>
                        <li>Form submission and user preferences</li>
                        <li>Load balancing and technical functionality</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 relative">
                      <div className="absolute top-2 right-2 w-3 h-3 bg-primary/20 rounded-full"></div>
                      <h3 className="text-xl font-medium text-gray-800 mb-3">Analytics Cookies</h3>
                      <p className="text-gray-700 leading-relaxed mb-2">
                        These cookies help us understand how visitors interact with our website.
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Google Analytics for website performance</li>
                        <li>User behavior and navigation patterns</li>
                        <li>Page views and engagement metrics</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 relative">
                      <div className="absolute top-2 right-2 w-3 h-3 bg-accent/20 rounded-full"></div>
                      <h3 className="text-xl font-medium text-gray-800 mb-3">Marketing Cookies</h3>
                      <p className="text-gray-700 leading-relaxed mb-2">
                        These cookies are used to deliver relevant advertisements and track campaign effectiveness.
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Social media integration and sharing</li>
                        <li>Targeted advertising and retargeting</li>
                        <li>Campaign performance tracking</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 relative">
                      <div className="absolute top-2 right-2 w-3 h-3 bg-primary/20 rounded-full"></div>
                      <h3 className="text-xl font-medium text-gray-800 mb-3">Functional Cookies</h3>
                      <p className="text-gray-700 leading-relaxed mb-2">
                        These cookies enhance functionality and personalization.
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Remember user preferences and settings</li>
                        <li>Language and region preferences</li>
                        <li>Chat and communication features</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Third-Party Cookies
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may use third-party services that place cookies on your device:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Google Analytics:</strong> Website analytics and performance tracking</li>
                    <li><strong>Social Media Platforms:</strong> Sharing and integration features</li>
                    <li><strong>Marketing Tools:</strong> Campaign tracking and conversion optimization</li>
                    <li><strong>Communication Tools:</strong> Live chat and support features</li>
                  </ul>
                </section>

                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Managing Your Cookie Preferences
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">Browser Settings</h3>
                      <p className="text-gray-700 leading-relaxed">
                        You can control cookies through your browser settings. Most browsers allow you to block or delete cookies, though this may affect website functionality.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">Opt-Out Options</h3>
                      <p className="text-gray-700 leading-relaxed">
                        You can opt out of analytics tracking through Google Analytics Opt-out Browser Add-on and adjust advertising preferences through industry opt-out pages.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Cookie Retention
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Different cookies have different retention periods:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-4">
                    <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                    <li><strong>Persistent Cookies:</strong> Remain for a set period (typically 1-24 months)</li>
                    <li><strong>Analytics Cookies:</strong> Usually retained for 24 months</li>
                    <li><strong>Marketing Cookies:</strong> Retention varies by third-party service</li>
                  </ul>
                </section>

                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Updates to This Policy
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Cookie Policy periodically to reflect changes in our practices or for legal compliance. We encourage you to review this policy regularly for any updates.
                  </p>
                </section>

                <section className="mb-8 relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Contact Us
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have questions about our use of cookies, please contact us at:
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

export default CookiePolicy;
