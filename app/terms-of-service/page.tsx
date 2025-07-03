import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Terms of Service | Bernof Co',
  description: 'Read the terms and conditions for using Bernof Co services.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://bernofco.com/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              {/* Add your terms of service content here */}
              <p>
                These Terms of Service govern your use of Bernof Co services and products.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}