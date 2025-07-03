import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Cookie Policy | Bernof Co',
  description: 'Learn about how Bernof Co uses cookies and similar technologies.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://bernofco.com/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              {/* Add your cookie policy content here */}
              <p>
                This Cookie Policy explains how Bernof Co uses cookies and similar technologies.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}