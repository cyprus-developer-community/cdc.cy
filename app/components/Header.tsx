export default function Header() {
  return (
    <header>
      <div className="relative bg-white">
        <nav className="hidden md:flex space-x-10">
          <a
            href="/"
            className="text-lg font-bold text-gray-500 hover:text-gray-900"
          >
            Home
          </a>
          <a
            href="/events"
            className="text-lg font-bold text-gray-500 hover:text-gray-900"
          >
            Events
          </a>
        </nav>
      </div>
    </header>
  )
}
