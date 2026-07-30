export default function About() {
  return (
    <main className="bg-gradient-to-br from-red-700 via-zinc-900 py-24 mx-auto max-w-6xl px-6 py-12 text-white">
      {/* Heading */}
      <section className="text-center">
        <h1 className="text-5xl font-bold">
          About <span className="text-blue-500">Fake News Detection</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
          Fake news spreads misinformation rapidly across digital platforms.
          This project leverages Machine Learning to classify news articles as
          <span className="font-semibold text-green-400"> Real</span> or
          <span className="font-semibold text-red-400"> Fake</span> with
          confidence scores, helping users verify online content instantly.
        </p>
      </section>

      {/* Project Overview */}
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-semibold">Project Overview</h2>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-xl">
          <p className="leading-8 text-zinc-300">
            This application is a full-stack Machine Learning project designed
            to detect fake news articles using Natural Language Processing
            (NLP). The user submits a news article, selects a Machine Learning
            model, and receives an instant prediction along with a confidence
            score through a FastAPI backend.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-semibold">Features</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">📰 News Classification</h3>
            <p className="mt-3 text-zinc-400">
              Predict whether a news article is Real or Fake in real time.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">🤖 Multiple ML Models</h3>
            <p className="mt-3 text-zinc-400">
              Compare predictions from Logistic Regression, Decision Tree,
              Random Forest, and Gradient Boosting.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">📊 Confidence Score</h3>
            <p className="mt-3 text-zinc-400">
              View the confidence percentage returned by the selected model.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">⚡ Fast API Response</h3>
            <p className="mt-3 text-zinc-400">
              Built with FastAPI for high-performance prediction requests.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-semibold">Technology Stack</h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-blue-600 p-5 text-center font-semibold">
            Next.js
          </div>

          <div className="rounded-xl bg-green-600 p-5 text-center font-semibold">
            FastAPI
          </div>

          <div className="rounded-xl bg-yellow-600 p-5 text-center font-semibold">
            Scikit-learn
          </div>

          <div className="rounded-xl bg-purple-600 p-5 text-center font-semibold">
            Python
          </div>

          <div className="rounded-xl bg-cyan-600 p-5 text-center font-semibold">
            Tailwind CSS
          </div>

          <div className="rounded-xl bg-red-600 p-5 text-center font-semibold">
            Machine Learning
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-semibold">
          Machine Learning Models
        </h2>

        <ul className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
          <li>✅ Logistic Regression</li>
          <li>✅ Decision Tree</li>
          <li>✅ Random Forest</li>
          <li>✅ Gradient Boosting</li>
        </ul>
      </section>

      {/* Footer */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold">
          AI-Powered Fake News Detection System
        </h2>

        <p className="mt-4 text-zinc-400">
          Built using Next.js, FastAPI, Python, Scikit-learn, and Tailwind CSS
          to demonstrate the integration of Machine Learning with modern web
          development.
        </p>
      </section>
    </main>
  );
}