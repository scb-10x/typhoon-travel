'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  ServerIcon,
  CommandLineIcon,
  CpuChipIcon,
  LightBulbIcon,
  ChatBubbleLeftRightIcon,
  MapIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from '@/lib/LanguageContext';
import T from '@/components/T';

export default function HowItWorksPage() {
  const { t } = useTranslation();
  
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <div className="relative isolate px-6 lg:px-8 pt-32 pb-24">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <T translationKey="howTyphoonAIWorks" />
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <T translationKey="exploreAITechnology" />
            </motion.p>
          </div>

          <motion.div 
            className="mt-16 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6"><T translationKey="ourAITechnology" /></h2>
              <p className="text-gray-600 mb-4">
                <T translationKey="aiTechnologyDesc1" />
              </p>
              <p className="text-gray-600">
                <T translationKey="aiTechnologyDesc2" />
              </p>
            </div>
          </motion.div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12"><T translationKey="howAIAlgorithmWorks" /></h2>
            
            <div className="relative">
              <div className="absolute left-1/2 h-full w-px bg-gradient-to-b from-indigo-100 to-indigo-500"></div>
              
              <div className="space-y-16 relative">
                <motion.div 
                  className="flex items-start gap-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 pt-1">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 z-10">
                      <CommandLineIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2"><T translationKey="requestProcessing" /></h3>
                    <p className="text-gray-600">
                      <T translationKey="requestProcessingDesc" />
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-8"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100 order-1 sm:order-none">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2"><T translationKey="promptEngineering" /></h3>
                    <p className="text-gray-600">
                      <T translationKey="promptEngineeringDesc" />
                    </p>
                  </div>
                  <div className="flex-shrink-0 pt-1 order-none sm:order-1">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 z-10">
                      <LightBulbIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 pt-1">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 z-10">
                      <CpuChipIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2"><T translationKey="aiTextGeneration" /></h3>
                    <p className="text-gray-600">
                      <T translationKey="aiTextGenerationDesc" />
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-8"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100 order-1 sm:order-none">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2"><T translationKey="responseProcessing" /></h3>
                    <p className="text-gray-600">
                      <T translationKey="responseProcessingDesc" />
                    </p>
                  </div>
                  <div className="flex-shrink-0 pt-1 order-none sm:order-1">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 z-10">
                      <ServerIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12"><T translationKey="ourAIPoweredTools" /></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="h-12 w-12 rounded-lg bg-indigo-600/10 flex items-center justify-center mb-4">
                  <MapIcon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2"><T translationKey="itineraryGeneratorTitle" /></h3>
                <p className="text-gray-600">
                  <T translationKey="itineraryGeneratorDesc2" />
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="h-12 w-12 rounded-lg bg-indigo-600/10 flex items-center justify-center mb-4">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2"><T translationKey="aiTravelConsultantTitle" /></h3>
                <p className="text-gray-600">
                  <T translationKey="aiTravelConsultantDesc2" />
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12"><T translationKey="typhoonAIProcessFlow" /></h2>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex justify-center">
                <svg width="700" height="400" viewBox="0 0 700 400">
                  {/* Background Grid */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(79, 70, 229, 0.1)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="700" height="400" fill="url(#grid)" />
                  
                  {/* Client Request */}
                  <rect x="50" y="170" width="120" height="60" rx="10" fill="#f0f9ff" stroke="#4f46e5" strokeWidth="2" />
                  <text x="110" y="195" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#4f46e5">Client</text>
                  <text x="110" y="215" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill="#4f46e5">Request</text>
                  
                  {/* API Processing */}
                  <rect x="220" y="170" width="120" height="60" rx="10" fill="#eef2ff" stroke="#4f46e5" strokeWidth="2" />
                  <text x="280" y="195" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#4f46e5">API</text>
                  <text x="280" y="215" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill="#4f46e5">Processing</text>
                  
                  {/* Prompt Engineering */}
                  <rect x="220" y="60" width="120" height="60" rx="10" fill="#eef2ff" stroke="#4f46e5" strokeWidth="2" />
                  <text x="280" y="85" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#4f46e5">Prompt</text>
                  <text x="280" y="105" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill="#4f46e5">Engineering</text>
                  
                  {/* Typhoon AI */}
                  <rect x="390" y="110" width="120" height="180" rx="10" fill="#f0fdfa" stroke="#4f46e5" strokeWidth="2" />
                  <text x="450" y="130" textAnchor="middle" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#4f46e5">Typhoon AI</text>
                  
                  {/* Model Selection Title - No box */}
                  <text x="450" y="155" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#4f46e5">Model Selection</text>
                  
                  {/* Left Model - Reasoning */}
                  <rect x="400" y="170" width="40" height="70" rx="4" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1" />
                  <text x="420" y="185" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#4f46e5">R1</text>
                  <text x="420" y="198" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#4f46e5">Planning</text>
                  <text x="420" y="210" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#4f46e5">--</text>
                  
                  {/* Right Model - Instruct */}
                  <rect x="460" y="170" width="40" height="70" rx="4" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1" />
                  <text x="480" y="185" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#4f46e5">Instruct</text>
                  <text x="480" y="198" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#4f46e5">General</text>
                  <text x="480" y="210" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#4f46e5">--</text>
                  
                  {/* Task Examples */}
                  <text x="420" y="225" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="#4f46e5">Itineraries</text>
                  <text x="480" y="225" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fontWeight="bold"fill="#4f46e5">Chat</text>
                  
                  {/* Response Processing */}
                  <rect x="560" y="170" width="120" height="60" rx="10" fill="#eef2ff" stroke="#4f46e5" strokeWidth="2" />
                  <text x="620" y="195" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#4f46e5">Response</text>
                  <text x="620" y="215" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill="#4f46e5">Processing</text>
                  
                  {/* User */}
                  <rect x="560" y="280" width="120" height="60" rx="10" fill="#f0f9ff" stroke="#4f46e5" strokeWidth="2" />
                  <text x="620" y="305" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#4f46e5">Client</text>
                  <text x="620" y="325" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill="#4f46e5">Response</text>
                  
                  {/* Flow Arrows */}
                  <path d="M 170 200 L 210 200" fill="none" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <path d="M 280 170 L 280 130" fill="none" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <path d="M 340 90 L 380 150" fill="none" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <path d="M 340 200 L 380 200" fill="none" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <path d="M 510 200 L 550 200" fill="none" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <path d="M 620 230 L 620 270" fill="none" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  
                  {/* Arrow Markers */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#4f46e5" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-8"><T translationKey="modelSelectionStrategy" /></h2>
            <p className="text-gray-600 text-center mb-10">
              <T translationKey="modelSelectionDesc" />
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100 border-l-4 border-l-indigo-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <T translationKey="reasoningModelTitle" />
                </h3>
                <p className="text-gray-600">
                  <T translationKey="reasoningModelDesc" />
                </p>
                <div className="mt-4 bg-indigo-50 rounded-lg p-3">
                  <h4 className="text-sm font-medium text-indigo-700 mb-2">
                    <T translationKey="itineraryPlanning" />
                  </h4>
                  <div className="flex items-center">
                    <MapIcon className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="text-sm text-indigo-700">
                      <T translationKey="itineraryGeneratorTitle" />
                    </span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 border-l-4 border-l-purple-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <T translationKey="instructModelTitle" />
                </h3>
                <p className="text-gray-600">
                  <T translationKey="instructModelDesc" />
                </p>
                <div className="mt-4 bg-purple-50 rounded-lg p-3">
                  <h4 className="text-sm font-medium text-purple-700 mb-2">
                    <T translationKey="conversationalChat" />
                  </h4>
                  <div className="flex items-center">
                    <ChatBubbleLeftRightIcon className="h-5 w-5 text-purple-500 mr-2" />
                    <span className="text-sm text-purple-700">
                      <T translationKey="aiTravelConsultantTitle" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-24">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl overflow-hidden">
              <div className="px-6 py-12 sm:px-12">
                <div className="text-center">
                  <h2 className="text-2xl font-bold tracking-tight text-white">
                    <T translationKey="readyToExperience" />
                  </h2>
                  <p className="mt-4 text-indigo-100">
                    <T translationKey="tryOurIntelligent" />
                  </p>
                  <div className="mt-8">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="/"
                      className="inline-block rounded-lg bg-white px-5 py-3 text-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                    >
                      <T translationKey="getStartedForFree" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 