export default function Footer() {
  return (
    <footer className="py-16 bg-orange-50">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div>
          <img src="/Landing/money.png" alt="Logo" className="h-8 mb-6" />
          <p className="text-gray-600">
            Powering the world with sustainable energy solutions.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/about" className="hover:text-lime-500">About</a></li>
            <li><a href="/careers" className="hover:text-lime-500">Careers</a></li>
            <li><a href="/contact" className="hover:text-lime-500">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Newsletter</h3>
          <p className="text-gray-600 mb-4">
            Stay in the loop with our Green Horizon newsletter.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-2 rounded-l-full border border-gray-300 outline-none focus:ring-2 focus:ring-lime-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-lime-500 text-teal-900 rounded-r-full font-medium hover:bg-white border border-lime-500 transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-12 text-sm text-gray-500">
        © 2024 Flow. All rights reserved. Designed by{" "}
        <a href="https://www.pixelrocket.store" target="_blank" className="hover:text-lime-500">
          Pixelrocket
        </a>
        .
      </div>
    </footer>
  );
}
