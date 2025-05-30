'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, LanguageIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/lib/LanguageContext';
import T from '@/components/T';
import { FaGithub } from 'react-icons/fa6';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [showGithubButton, setShowGithubButton] = useState(false);

  // Check if current date is after May 8, 2025, 17:00:01 UTC
  useEffect(() => {
    const releaseDate = new Date('2025-05-08T17:00:01Z');

    const checkReleaseDate = () => {
      const now = new Date();
      setShowGithubButton(now >= releaseDate);
    };

    // Check initially
    checkReleaseDate();

    // Check every hour in case the user keeps the page open for a long time
    const interval = setInterval(checkReleaseDate, 3600000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-100" id="main-header">
        <nav className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto" aria-label="Global" id="main-navigation">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center" id="navbar-logo-link">
              <span className="sr-only">Typhoon Travel</span>
              <Image
                src="/images/logo.svg"
                alt="Typhoon Travel Logo"
                width={32}
                height={32}
                className="mr-2"
                id="navbar-logo-image"
              />
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Typhoon Travel
              </h1>
              <span className="ml-2 px-2 py-1 text-xs font-bold text-amber-700 bg-amber-100 rounded-md">DEMO</span>
            </Link>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            <Link href="/" className="text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors" id="nav-home-link">
              <T translationKey="itineraryGenerator" />
            </Link>
            <Link href="/chat" className="text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors" id="nav-chat-link">
              <T translationKey="aiConsultant" />
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors" id="nav-how-it-works-link">
              <T translationKey="howItWorksNav" />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
              id="mobile-menu-button"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-x-4 lg:flex-1 lg:justify-end">
            {/* GitHub link - only shown after release date */}
            {showGithubButton && (
              <a
                href="https://github.com/scb-10x/typhoon-travel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 mr-4"
                id="github-source-link"
              >
                <FaGithub className="h-5 w-5 mr-1" aria-hidden="true" />
                <span>Source</span>
              </a>
            )}

            {/* Language switcher */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 mr-4"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                id="language-switcher-button"
              >
                <LanguageIcon className="h-5 w-5 mr-1" aria-hidden="true" />
                <span>{language === 'en' ? 'EN' : 'TH'}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-10 ring-1 ring-black ring-opacity-5" id="language-dropdown">
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setLangDropdownOpen(false);
                    }}
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${language === 'en' ? 'bg-gray-100' : ''
                      }`}
                    id="language-option-en"
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('th');
                      setLangDropdownOpen(false);
                    }}
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${language === 'th' ? 'bg-gray-100' : ''
                      }`}
                    id="language-option-th"
                  >
                    ไทย
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu - moved outside of header */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden fixed inset-0 z-50"
          id="mobile-menu-container"
        >
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" id="mobile-menu-panel">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center" onClick={() => setMobileMenuOpen(false)} id="mobile-logo-link">
                <span className="sr-only">Typhoon Travel</span>
                <Image
                  src="/images/logo.svg"
                  alt="Typhoon Travel Logo"
                  width={32}
                  height={32}
                  className="mr-2"
                  id="mobile-logo-image"
                />
                <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  Typhoon Travel
                </h1>
                <span className="ml-2 px-2 py-1 text-xs font-bold text-amber-700 bg-amber-100 rounded-md">DEMO</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
                id="mobile-menu-close"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                    id="mobile-nav-home"
                  >
                    <T translationKey="itineraryGenerator" />
                  </Link>
                  <Link
                    href="/chat"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                    id="mobile-nav-chat"
                  >
                    <T translationKey="aiConsultant" />
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                    id="mobile-nav-how-it-works"
                  >
                    <T translationKey="howItWorksNav" />
                  </Link>

                  {/* GitHub link in mobile menu - only shown after release date */}
                  {showGithubButton && (
                    <a
                      href="https://github.com/scb-10x/typhoon-travel/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      id="mobile-github-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <FaGithub className="h-5 w-5 mr-2" />
                        Source Code
                      </div>
                    </a>
                  )}

                  {/* Language switcher in mobile menu */}
                  <div className="py-2" id="mobile-language-section">
                    <div className="flex items-center -mx-3 px-3">
                      <LanguageIcon className="h-5 w-5 mr-2 text-gray-700" />
                      <span className="text-base font-semibold leading-7 text-gray-900">
                        <T translationKey="language" />
                      </span>
                    </div>
                    <div className="mt-2 space-y-1 pl-7">
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setMobileMenuOpen(false);
                        }}
                        className={`block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-full text-left ${language === 'en' ? 'bg-gray-50 text-indigo-600' : ''
                          }`}
                        id="mobile-language-option-en"
                      >
                        English
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('th');
                          setMobileMenuOpen(false);
                        }}
                        className={`block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-full text-left ${language === 'th' ? 'bg-gray-50 text-indigo-600' : ''
                          }`}
                        id="mobile-language-option-th"
                      >
                        ไทย
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
} 