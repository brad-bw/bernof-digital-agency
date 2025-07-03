import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="/images/1ae84dd7-47db-491c-9099-013be249fce1.png" 
              alt="Bernof Co Logo" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-400">
              Premier digital solutions & growth services
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/startup-development" className="hover:text-white">Startup Development</Link></li>
              <li><Link href="/global-services" className="hover:text-white">Global Services</Link></li>
              <li><Link href="/vibe-coding" className="hover:text-white">Vibe Coding</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white">Terms</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">info@bernofco.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Bernof Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}