export default function RateShieldProjectPage() {
  const algorithms = [
    {
      name: "Fixed Window",
      description:
        "Counts requests inside a fixed time window. Simple, fast, and memory-efficient.",
    },
    {
      name: "Sliding Window",
      description:
        "Tracks request timestamps to provide smoother and more accurate rate limiting.",
    },
    {
      name: "Token Bucket",
      description:
        "Allows controlled bursts while continuously refilling tokens at a configured rate.",
    },
    {
      name: "Leaky Bucket",
      description:
        "Controls request flow by leaking queued capacity at a steady rate.",
    },
  ];

  const features = [
    "Four Redis-backed rate limiting algorithms",
    "Runtime algorithm switching without restarting the server",
    "Live request counters and blocked-request metrics",
    "Recent request logging with request status and algorithm",
    "Redis connection, key count, and memory monitoring",
    "Live request traffic analytics",
    "Automatic dashboard refresh",
    "REST APIs built with Express.js",
    "Responsive dark monitoring dashboard",
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white mb-20">

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Backend • Redis • System Design
          </p>

          <h1 className="text-6xl font-bold mt-5">
            RateShield
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-neutral-300">
            A Redis-powered rate limiting platform with a real-time monitoring
            dashboard and runtime switching between multiple rate limiting
            algorithms.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "Next.js",
              "Express.js",
              "Redis",
              "Node.js",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>


      {/* PROJECT PREVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Project Preview
        </p>

        <h2 className="text-3xl font-bold mt-3">
          Real-time Rate Limiting Dashboard
        </h2>

        <p className="text-neutral-400 mt-4 max-w-3xl leading-7">
          RateShield provides a centralized dashboard for monitoring API
          traffic, rate limiting decisions, Redis health, and the currently
          active rate limiting strategy.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          <img
            src="/items/dashboard2.jpeg"
            alt="RateShield Dashboard"
            className="w-full"
          />
        </div>

      </section>


      {/* PROBLEM / SOLUTION */}
      <section className="border-y border-white/10 bg-neutral-950">

        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">

          <div>
            <p className="text-sm uppercase tracking-widest text-blue-400">
              The Problem
            </p>

            <h2 className="text-3xl font-bold mt-3">
              APIs need protection from excessive traffic.
            </h2>

            <p className="mt-5 text-neutral-400 leading-7">
              Uncontrolled API traffic can cause resource exhaustion,
              abusive usage, brute-force attempts and unstable application
              performance.
            </p>
          </div>


          <div>
            <p className="text-sm uppercase tracking-widest text-blue-400">
              The Solution
            </p>

            <h2 className="text-3xl font-bold mt-3">
              A configurable Redis-backed rate limiting system.
            </h2>

            <p className="mt-5 text-neutral-400 leading-7">
              RateShield implements multiple rate limiting strategies behind
              a common middleware architecture. Redis stores the distributed
              rate limiting state while the dashboard visualizes the system
              in real time.
            </p>
          </div>

        </div>

      </section>


      {/* ARCHITECTURE */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <p className="text-sm uppercase tracking-widest text-blue-400">
          Architecture
        </p>

        <h2 className="text-3xl font-bold mt-3">
          How RateShield works
        </h2>

        <div className="mt-10 grid md:grid-cols-5 gap-4">

          {[
            ["01", "Client", "Sends API requests"],
            ["02", "Rate Limiter", "Applies selected algorithm"],
            ["03", "Redis", "Stores rate limit state"],
            ["04", "Express API", "Processes requests and metrics"],
            ["05", "Next.js", "Visualizes live system data"],
          ].map(([number, title, description]) => (

            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-neutral-900 p-5"
            >

              <span className="text-blue-400 text-sm font-bold">
                {number}
              </span>

              <h3 className="font-semibold text-lg mt-4">
                {title}
              </h3>

              <p className="text-sm text-neutral-400 mt-2 leading-6">
                {description}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ALGORITHMS */}
      <section className="border-y border-white/10 bg-neutral-950">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <p className="text-sm uppercase tracking-widest text-blue-400">
            Rate Limiting Algorithms
          </p>

          <h2 className="text-3xl font-bold mt-3">
            Four strategies, one system
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mt-10">

            {algorithms.map((algorithm, index) => (

              <div
                key={algorithm.name}
                className="rounded-2xl border border-white/10 bg-neutral-900 p-6 hover:border-blue-500/50 transition"
              >

                <div className="flex items-center gap-4">

                  <span className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold">
                    0{index + 1}
                  </span>

                  <h3 className="text-xl font-semibold">
                    {algorithm.name}
                  </h3>

                </div>

                <p className="mt-5 text-neutral-400 leading-7">
                  {algorithm.description}
                </p>

              </div>

            ))}

          </div>


          <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

            <h3 className="font-semibold text-blue-300">
              Runtime Algorithm Switching
            </h3>

            <p className="mt-2 text-neutral-300 leading-7">
              Administrators can switch between Fixed Window, Sliding Window,
              Token Bucket and Leaky Bucket directly from the dashboard.
              The selected algorithm is applied by the backend without
              restarting the server.
            </p>

          </div>

        </div>

      </section>


      {/* LIVE TRAFFIC */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <p className="text-sm uppercase tracking-widest text-blue-400">
          Live Analytics
        </p>

        <h2 className="text-3xl font-bold mt-3">
          Monitor API traffic in real time
        </h2>

        <p className="text-neutral-400 mt-4 max-w-3xl leading-7">
          Backend analytics are exposed through REST APIs and visualized in
          the dashboard to monitor incoming request traffic and rate limiting
          behavior.
        </p>

        <div className="mt-10 rounded-2xl overflow-hidden border border-white/10">
          <img
            src="/items/traffic.jpeg"
            alt="RateShield Live Request Traffic"
            className="w-full"
          />
        </div>

      </section>


      {/* REQUEST LOGS */}
      <section className="border-y border-white/10 bg-neutral-950">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <p className="text-sm uppercase tracking-widest text-blue-400">
            Request Monitoring
          </p>

          <h2 className="text-3xl font-bold mt-3">
            Every request is observable
          </h2>

          <p className="text-neutral-400 mt-4 max-w-3xl leading-7">
            RateShield stores recent request activity in Redis and exposes it
            through an API. The dashboard displays the client IP, HTTP method,
            request status, active algorithm and timestamp.
          </p>

          <div className="mt-10 rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/items/requests.jpeg"
              alt="RateShield Recent Requests"
              className="w-full"
            />
          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <p className="text-sm uppercase tracking-widest text-blue-400">
          Key Features
        </p>

        <h2 className="text-3xl font-bold mt-3">
          What I built
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">

          {features.map((feature) => (

            <div
              key={feature}
              className="rounded-xl border border-white/10 bg-neutral-900 p-5"
            >

              <span className="text-blue-400">
                ✓
              </span>

              <span className="ml-3 text-sm text-neutral-300">
                {feature}
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* TECHNICAL DETAILS */}
      <section className="border-y border-white/10 bg-neutral-950">

        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">

          <div>

            <p className="text-sm uppercase tracking-widest text-blue-400">
              Technical Implementation
            </p>

            <h2 className="text-3xl font-bold mt-3">
              Redis is the state layer.
            </h2>

            <p className="mt-5 text-neutral-400 leading-7">
              Different Redis data structures are used depending on the
              algorithm. This keeps rate limiting state centralized and
              suitable for a distributed backend.
            </p>

            <ul className="mt-6 space-y-3 text-neutral-300">

              <li>
                • Fixed Window → Redis counters + TTL
              </li>

              <li>
                • Sliding Window → Redis Sorted Sets
              </li>

              <li>
                • Token Bucket → Redis Hash state
              </li>

              <li>
                • Leaky Bucket → Redis Hash state
              </li>

              <li>
                • Request history → Redis Lists
              </li>

            </ul>

          </div>


          <div className="rounded-2xl border border-white/10 bg-black p-6">

            <p className="text-sm text-neutral-500">
              Request Lifecycle
            </p>

            <pre className="mt-5 text-sm leading-8 text-neutral-300 overflow-x-auto">
{`Client
   ↓
Express Middleware
   ↓
Current Algorithm
   ↓
Redis State
   ↓
Allow / Block
   ↓
Request Logger
   ↓
Metrics & Analytics
   ↓
Next.js Dashboard`}
            </pre>

          </div>

        </div>

      </section>


      {/* LEARNING */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <p className="text-sm uppercase tracking-widest text-blue-400">
          What I Learned
        </p>

        <h2 className="text-3xl font-bold mt-3">
          Building beyond a basic CRUD application
        </h2>

        <div className="max-w-3xl mt-8 space-y-5 text-neutral-400 leading-7">

          <p>
            Building RateShield helped me understand rate limiting at the
            middleware and infrastructure level rather than treating it as
            a simple API feature.
          </p>

          <p>
            I worked with Redis counters, TTL-based expiration, Sorted Sets,
            Redis Hashes, request logging, REST APIs, runtime configuration
            and real-time dashboard integration.
          </p>

          <p>
            The project also gave me practical experience connecting a
            Next.js frontend with an Express backend and converting backend
            infrastructure data into an operational monitoring dashboard.
          </p>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10">

        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between gap-4">

          <div>

            <p className="font-semibold">
              RateShield
            </p>

            <p className="text-sm text-neutral-500 mt-1">
              Redis-powered rate limiting and monitoring dashboard.
            </p>

          </div>

          <p className="text-sm text-neutral-500">
            Next.js • Express.js • Redis • Node.js
          </p>

        </div>

      </footer>

    </main>
  );
}