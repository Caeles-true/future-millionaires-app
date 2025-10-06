export default function PromoSection() {
  return (
    <section className="bg-teal-900 text-white py-16 px-4 text-center rounded-2xl mx-4 mb-16">
      <h2 className="text-4xl font-bold mb-4">
        Learn Frontend Web Development
      </h2>
      <p className="text-lg opacity-90 mb-8">
        Visit <a href="https://www.pixelrocket.store" className="underline hover:text-lime-400">www.pixelrocket.store</a> and learn how to build sites like this.
      </p>
      <a
        href="#!"
        className="inline-flex py-3 px-6 bg-lime-500 text-teal-900 font-medium rounded-full hover:bg-white transition"
      >
        Get Started
      </a>
    </section>
  );
}
