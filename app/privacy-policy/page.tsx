import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Privacy Policy | Bernof Co',
  description: 'Learn how Bernof Co collects, uses, and protects your personal information.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://bernofco.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              {/* Add your privacy policy content here */}
              <p>
                This Privacy Policy describes how Bernof Co collects, uses, and protects your personal information when you use our services.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}