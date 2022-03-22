import Header from './components/Header'

function App() {
  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <main class="max-w-3xl mx-auto">
        <section>
          We're just starting up. There will be more content and events soon.
          Stay tuned.
        </section>
        <section class="my-16">
          <h3 class="my-2 text-lg leading-6 font-medium text-cyan-900">
            Participating Groups
          </h3>
          <div class="grid grid-cols-2 gap-8">
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                class="h-32"
                src="https://raw.githubusercontent.com/cyprus-developer-community/home/main/assets/cyprusjs.jpeg"
                alt="CyprusJS"
              />
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                class="h-32"
                src="https://raw.githubusercontent.com/cyprus-developer-community/home/main/assets/aws-user-group-cyprus.jpg"
                alt="AWS User Group Cyprus"
              />
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                class="h-32"
                src="https://raw.githubusercontent.com/cyprus-developer-community/home/main/assets/gdgcyprus.png"
                alt="GCG Cyprus"
              />
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                class="h-32"
                src="https://raw.githubusercontent.com/cyprus-developer-community/home/main/assets/pydata-cyprus.jpeg"
                alt="PyData Cyprus"
              />
            </div>
          </div>
          <p>
            Reach out on{' '}
            <a class="text-cyan-400" href="https://chat.cdc.cy" target="_blank">
              Discord
            </a>{' '}
            if you want to join us.
          </p>
        </section>
        <section class="my-16">
          <h3 class="my-2 text-lg leading-6 font-medium text-cyan-900">Chat</h3>

          <p>
            Join us on{' '}
            <a class="text-cyan-400" href="https://chat.cdc.cy" target="_blank">
              Discord
            </a>{' '}
            or follow our{' '}
            <a
              class="text-cyan-400"
              href="https://github.com/cyprus-developer-community/home/discussions"
              target="_blank"
            >
              discussions on GitHub.
            </a>
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
