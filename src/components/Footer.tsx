'use client';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-center lg:px-8">
        
        <div className="mt-4 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            Built with <a href="https://opentyphoon.ai/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Typhoon</a>
          </p>
        </div>
      </div>
    </footer>
  );
} 