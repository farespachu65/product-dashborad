export function Footer() {
  return (
    <footer className="bg-aletheia-sidebar text-zinc-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* download/app column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Download our App</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 bg-white text-aletheia-sidebar rounded-md shadow-sm hover:bg-zinc-100"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M3 4a2 2 0 012-2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4z" />
                </svg>
                Google Play
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 bg-white text-aletheia-sidebar rounded-md shadow-sm hover:bg-zinc-100"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z" />
                </svg>
                App Store
              </a>
            </div>
            <p className="mt-4 text-sm">
              For any help, call us at <strong>1800-266-3333</strong>
            </p>
            <p className="text-xs text-zinc-500">
              Mon–Sat: 10 am–10 pm, Sun: 10 am–7 pm
            </p>
          </div>

          {/* who/ help column*/}
          <div>
            <h3 className="text-white font-semibold mb-4">Who are we</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
            </ul>
            <h3 className="text-white font-semibold mb-4 mt-8">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* quicklinks column*/}
          <div>
            <h3 className="text-white font-semibold mb-4">Quicklinks</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Settings
                </a>
              </li>
            </ul>
          </div>

          {/* follow us column*/}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* placeholder social icons */}
              <a href="#" className="text-zinc-400 hover:text-zinc-200">
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0022 12z" />
                </svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-zinc-200">
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 19c7.5 0 11.6-6.2 11.6-11.6 0-.2 0-.3 0-.5A8.3 8.3 0 0022 4.6a8.2 8.2 0 01-2.4.7 4.1 4.1 0 001.8-2.3 8.2 8.2 0 01-2.6 1 4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.9a4.1 4.1 0 001.3 5.5 4.1 4.1 0 01-1.9-.5v.1a4.1 4.1 0 003.3 4 4.1 4.1 0 01-1.8.1 4.1 4.1 0 003.8 2.8A8.3 8.3 0 012 17.6a11.6 11.6 0 006.3 1.8" />
                </svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-zinc-200">
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-aletheia-border pt-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Product Dashboard Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
