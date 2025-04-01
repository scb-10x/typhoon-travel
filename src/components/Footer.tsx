'use client';

import {
  FaGithub,
  FaDiscord,
  FaXTwitter
} from 'react-icons/fa6'
import { SiHuggingface } from 'react-icons/si';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Section: Links */}
          <div className="flex flex-col items-center md:items-end md:flex-row md:space-x-6 gap-4 md:gap-0">
            <motion.a
              href="https://opentyphoon.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                #BuiltWithTyphoon
              </span>
              <span className="absolute -bottom-px left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>

            <motion.a
              href="https://opentyphoon.ai/tac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Terms and Conditions
            </motion.a>
          </div>

          {/* Right Section: Social Links & Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex space-x-6 gap-4">
              <motion.a
                href="https://github.com/scb-10x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </motion.a>

              <motion.a
                href="https://discord.gg/9F6nrFXyNt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Discord"
              >
                <FaDiscord className="h-6 w-6" />
                <span className="sr-only">Discord</span>
              </motion.a>

              <motion.a
                href="https://huggingface.co/scb10x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-yellow-500 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Hugging Face"
              >
                <SiHuggingface className="h-6 w-6" />
                <span className="sr-only">Hugging Face</span>
              </motion.a>

              <motion.a
                href="https://x.com/opentyphoon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="X (formerly Twitter)"
              >
                <FaXTwitter className="h-6 w-6" />
                <span className="sr-only">X</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 