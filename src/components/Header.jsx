import { For, createSignal } from 'solid-js'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Events', href: '#events' },
  { name: 'About', href: '#about' }
]

export function Header() {
  const [menuOpen, setMenuOpen] = createSignal(false)

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-sm dark:bg-black/90">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex flex-1">
          <div class="hidden lg:flex lg:gap-x-12">
            <For each={navItems}>
              {(item) => (
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  class="text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-400 hover:text-teal-500 transition"
                >
                  {item.name}
                </a>
              )}
            </For>
          </div>
          <div class="flex lg:hidden">
            <button
              type="button"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-zinc-400"
              onClick={() => setMenuOpen(true)}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          class="-m-1.5 p-1.5"
        >
          <span class="sr-only">Cyprus Developer Community</span>
          <img
            src="/assets/cdc-logo.svg"
            width="96"
            height="96"
            alt="CDC Logo"
            class="w-24 h-24"
          />
        </a>
        <div class="flex flex-1 justify-end" />
      </nav>
      {menuOpen() && (
        <div class="lg:hidden" role="dialog" aria-modal="true">
          <div
            class="fixed inset-0 z-10 bg-black/20"
            onClick={() => setMenuOpen(false)}
          />
          <div class="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white dark:bg-zinc-900 px-6 py-6">
            <div class="flex items-center justify-between">
              <div class="flex flex-1">
                <button
                  type="button"
                  class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-zinc-400"
                  onClick={() => setMenuOpen(false)}
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-6 space-y-2">
              <For each={navItems}>
                {(item) => (
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-zinc-400 dark:hover:bg-zinc-800"
                  >
                    {item.name}
                  </a>
                )}
              </For>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
