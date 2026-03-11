export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16">
      <div className="h-[3px] w-full bg-[#c5f5a2]" />
      <div className="bg-primary-dark text-text-light py-6 px-4">
        <div className="relative w-full">
          <p className="text-center text-sm sm:text-base tracking-wide">
            Radostina Peneva © {currentYear}
          </p>
          <a
            href="#root"
            aria-label="Back to top"
            className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-[#b7d9b8] hover:text-[#c5f5a2]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m6 11 6-6 6 6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}