import Spline from "@splinetool/react-spline";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6jFChR-PlaceholderScene/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Build beautiful apps faster with AI
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Design, code, and ship modern experiences in minutes. Your AI pair-programmer for web and mobile.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#features" className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800">
                Explore Features
              </a>
              <a href="#contact" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
