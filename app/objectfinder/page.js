export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Hero */}
        <section className="text-center">
          <h1 className="text-5xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Object Finder AI
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Object Finder AI is an intelligent computer vision application that
            detects and localizes objects in images using the powerful
            Grounding DINO model. Simply upload an image, enter the object name,
            and the system instantly highlights the detected objects with
            bounding boxes.
          </p>
        </section>

        {/* Overview */}
        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold">
            Project Overview
          </h2>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8">
            <p className="leading-8 text-zinc-300">
              Unlike traditional object detection models that recognize only a
              fixed set of predefined categories, Grounding DINO enables
              open-vocabulary object detection. This means users can search for
              almost any object using natural language prompts without requiring
              additional model training.
            </p>
          </div>
        </section>

        {/* Features */}

        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold">
            Key Features
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-xl font-semibold">
                🔍 Open-Vocabulary Detection
              </h3>

              <p className="mt-3 text-zinc-400">
                Detect almost any object by simply typing its name.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-xl font-semibold">
                🖼 Image Upload
              </h3>

              <p className="mt-3 text-zinc-400">
                Upload your own image and perform object detection instantly.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-xl font-semibold">
                📦 Bounding Boxes
              </h3>

              <p className="mt-3 text-zinc-400">
                Detected objects are highlighted with accurate bounding boxes.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-xl font-semibold">
                ⚡ Fast Inference
              </h3>

              <p className="mt-3 text-zinc-400">
                Optimized inference pipeline for quick object localization.
              </p>
            </div>

          </div>
        </section>

        {/* Technology */}

        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold">
            Technology Stack
          </h2>

          <div className="grid gap-4 md:grid-cols-3">

            <div className="rounded-xl bg-blue-600 p-5 text-center font-semibold">
              Next.js
            </div>

            <div className="rounded-xl bg-cyan-600 p-5 text-center font-semibold">
              Tailwind CSS
            </div>

            <div className="rounded-xl bg-green-600 p-5 text-center font-semibold">
              Python
            </div>

            <div className="rounded-xl bg-purple-600 p-5 text-center font-semibold">
              Streamlit
            </div>

            <div className="rounded-xl bg-orange-600 p-5 text-center font-semibold">
              PyTorch
            </div>

            <div className="rounded-xl bg-red-600 p-5 text-center font-semibold">
              Grounding DINO
            </div>

          </div>
        </section>

        {/* Workflow */}

        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold">
            How It Works
          </h2>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <ol className="list-decimal space-y-4 pl-6 text-zinc-300">
              <li>Upload an image.</li>
              <li>Enter the object name to search.</li>
              <li>Grounding DINO processes the image.</li>
              <li>Detected objects are highlighted with bounding boxes.</li>
              <li>Download or view the final result.</li>
            </ol>

          </div>
        </section>

        {/* Footer */}

        <section className="mt-20 text-center">

          <h2 className="text-3xl font-bold">
            Object Finder AI
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-zinc-400">
            Built using Grounding DINO, PyTorch, Python, Streamlit, Next.js,
            and Tailwind CSS to demonstrate modern open-vocabulary object
            detection powered by Artificial Intelligence.
          </p>

        </section>

      </div>
    </main>
  );
}