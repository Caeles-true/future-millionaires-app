export default function AboutSection() {
  return (
    <section className="py-24 bg-orange-50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-teal-900 mb-6">
            Our Commitment to Success
          </h2>
          <p className="text-gray-700 mb-6">
            We&apos;re dedicated to delivering exceptional results for our clients.
          </p>
          <a
            href="/about"
            className="inline-flex py-3 px-6 border border-teal-900 text-teal-900 rounded-full hover:bg-teal-900 hover:text-white transition"
          >
            Learn More
          </a>
        </div>

        <div className="lg:w-1/2">
          <img src="/Landing/swimming.webp" alt="About" className="rounded-2xl shadow-lg h-10" />
        </div>
      </div>
    </section>
  );
}
