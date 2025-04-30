'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PaperAirplaneIcon, UserIcon, ArrowPathIcon, StarIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '@/lib/LanguageContext';
import T from '@/components/T';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatPage() {
  const { t, language } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const exampleQuestions = [
    t('exampleQuestion1'),
    t('exampleQuestion2'),
    t('exampleQuestion3'),
    t('exampleQuestion4'),
    t('exampleQuestion5')
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setShowSuggestions(false);

    try {
      const systemPrompt = language === 'th'
        ? 'คุณเป็นที่ปรึกษาการท่องเที่ยวที่มีความรู้ ให้คำแนะนำที่เป็นประโยชน์เกี่ยวกับจุดหมายปลายทาง ที่พัก กิจกรรม และอาหารท้องถิ่น คำตอบของคุณควรกระชับและนำไปใช้ได้จริง กรุณาตอบเป็นภาษาไทย'
        : 'You are a knowledgeable travel consultant. Provide helpful advice about destinations, accommodations, activities, and local cuisine. Be concise and practical in your responses.';

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            ...messages.map(msg => ({ role: msg.role, content: msg.content })),
            { role: userMessage.role, content: userMessage.content },
          ],
          language: language === 'th' ? 'Thai' : 'English',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const result = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: result.response,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error in chat:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: t('errorMessage'),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (question: string) => {
    setInput(question);
    setShowSuggestions(false);
  };

  const handleReset = () => {
    setMessages([]);
    setShowSuggestions(true);
  };

  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            className="hidden lg:block lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4"><T translationKey="travelAIConsultant" /></h2>
              <p className="text-sm text-gray-600 mb-6">
                <T translationKey="askMeAnything" />
              </p>

              <div className="space-y-4">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  <ArrowPathIcon className="h-4 w-4" />
                  <span><T translationKey="newConversation" /></span>
                </button>
                <div className="h-px bg-gray-100" />
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2"><T translationKey="features" /></h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <StarIcon className="h-4 w-4 text-amber-500" />
                      <span><T translationKey="personalizedRecommendations" /></span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <StarIcon className="h-4 w-4 text-amber-500" />
                      <span><T translationKey="destinationExpertise" /></span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <StarIcon className="h-4 w-4 text-amber-500" />
                      <span><T translationKey="budgetFriendlySuggestions" /></span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <StarIcon className="h-4 w-4 text-amber-500" />
                      <span><T translationKey="localInsightsAndTips" /></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main chat area */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col h-[calc(100vh-11rem)] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="border-b border-gray-100 p-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-lg font-semibold text-gray-900"><T translationKey="travelConsultant" /></h1>
                  <button
                    onClick={handleReset}
                    className="p-2 rounded-full text-gray-500 hover:text-indigo-600 hover:bg-gray-50 transition-colors lg:hidden"
                  >
                    <ArrowPathIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {messages.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100">
                      <QuestionMarkCircleIcon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <div className="text-center">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2"><T translationKey="howCanIHelpPlanYourTrip" /></h2>
                      <p className="text-gray-600 max-w-md">
                        <T translationKey="askAboutDestinations" />
                      </p>
                    </div>
                    {showSuggestions && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-lg">
                        {exampleQuestions.map((question, index) => (
                          <motion.button
                            key={index}
                            className="text-sm text-left px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleExampleClick(question)}
                          >
                            {question}
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`flex items-start max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                      <div className={`flex-shrink-0 ${message.role === 'user' ? 'ml-3' : 'mr-3'}`}>
                        {message.role === 'user' ? (
                          <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                            <UserIcon className="h-5 w-5 text-white" />
                          </div>
                        ) : (
                          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
                            <span className="text-white font-bold">AI</span>
                          </div>
                        )}
                      </div>
                      <div
                        className={`rounded-xl px-4 py-3 ${message.role === 'user'
                            ? 'bg-indigo-600 text-white rounded-tr-none'
                            : 'bg-gray-100 text-gray-900 rounded-tl-none'
                          }`}
                      >
                        {message.role === 'user' ? (
                          <p className="whitespace-pre-wrap text-sm">{message.content}</p>
                        ) : (
                          <div className="text-sm prose prose-indigo max-w-none 
                            prose-p:my-1 
                            prose-headings:mb-1 prose-headings:mt-2 first:prose-headings:mt-0
                            prose-h1:text-lg prose-h2:text-base prose-h3:text-sm
                            prose-li:my-0.5 
                            prose-ol:my-1 prose-ul:my-1 
                            prose-img:rounded-md
                            prose-code:text-xs prose-code:bg-gray-200 prose-code:py-0.5 prose-code:px-1 prose-code:rounded
                            prose-pre:bg-gray-800 prose-pre:text-gray-100 prose-pre:p-2 prose-pre:rounded-md
                            prose-table:border prose-table:border-collapse prose-table:text-xs
                            prose-th:bg-gray-100 prose-th:p-1.5 prose-th:border prose-th:border-gray-300
                            prose-td:p-1.5 prose-td:border prose-td:border-gray-300">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                              {message.content}
                            </ReactMarkdown>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-start max-w-[85%]">
                      <div className="flex-shrink-0 mr-3">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
                          <span className="text-white font-bold">AI</span>
                        </div>
                      </div>
                      <div className="bg-gray-100 text-gray-900 rounded-xl rounded-tl-none px-4 py-3">
                        <div className="flex space-x-2 items-center h-5">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="border-t border-gray-100 p-4">
                <form onSubmit={handleSubmit} className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={t('askAboutYourTravelPlans')}
                    className="w-full py-3 pl-4 pr-12 border border-gray-300 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    disabled={isLoading}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <PaperAirplaneIcon className="h-4 w-4" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 