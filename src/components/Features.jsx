import { Rocket, Star, Code, Shield } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Ship Faster",
    description:
      "Generate production-ready UIs and APIs in minutes, not weeks.",
  },
  {
    icon: Star,
    title: "Beautiful by Default",
    description:
      "Thoughtful layouts, modern typography, and smooth interactions built-in.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description:
      "Composable components with best practices and clear patterns.",
  },
  {
    icon: Shield,
    title: "Reliable",
    description:
      "Stable foundations you can trust for real projects and clients.",
  },
];

function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Everything you need to build fast
          </h2>
          <p className="mt-4 text-gray-600">
            From idea to shipped product — tools that keep you in flow and out of
            boilerplate.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
