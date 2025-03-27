"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  MapPinIcon,
  CalendarIcon,
  SparklesIcon,
  PrinterIcon,
  ArrowDownTrayIcon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ClockIcon,
  CurrencyDollarIcon,
  TagIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "@/lib/LanguageContext";
import T from "@/components/T";

// Popular destinations for autocomplete - language specific
const getPopularDestinations = (language: string) => {
  // Mixed destinations for English (global) users - 60% global, 40% Thai
  if (language === "en") {
    return [
      // Global destinations (60%)
      "Paris, France",
      "Tokyo, Japan",
      "New York, USA",
      "Rome, Italy",
      "London, UK",
      "Barcelona, Spain",
      "Sydney, Australia",
      "Dubai, UAE",
      "Amsterdam, Netherlands",
      "Singapore",
      "San Francisco, USA",
      "Bali, Indonesia",

      // Thai destinations (40%)
      "Bangkok, Thailand",
      "Chiang Mai, Thailand",
      "Phuket, Thailand",
      "Koh Samui, Thailand",
      "Ayutthaya, Thailand",
      "Krabi, Thailand",
      "Pai, Thailand",
      "Koh Phi Phi, Thailand",
    ];
  }
  // Global destinations for Thai users (popular with Thai travelers)
  else {
    return [
      "ญี่ปุ่น, โตเกียว",
      "เกาหลีใต้, โซล",
      "ฮ่องกง",
      "สิงคโปร์",
      "ลอนดอน, อังกฤษ",
      "ปารีส, ฝรั่งเศส",
      "นิวยอร์ก, สหรัฐอเมริกา",
      "ซิดนีย์, ออสเตรเลีย",
      "ไต้หวัน, ไทเป",
      "เวียดนาม, ฮานอย",
      "มัลดีฟส์",
      "ดูไบ, สหรัฐอาหรับเอมิเรตส์",
      "เซี่ยงไฮ้, จีน",
      "อัมสเตอร์ดัม, เนเธอร์แลนด์",
      "มิลาน, อิตาลี",
      "ฟุกุโอกะ, ญี่ปุ่น",
      "โอซาก้า, ญี่ปุ่น",
      "บาหลี, อินโดนีเซีย",
      "ซานฟรานซิสโก, สหรัฐอเมริกา",
      "โรม, อิตาลี",
    ];
  }
};

// Interest presets - these will use the translation system
const INTEREST_PRESETS = [
  { id: "museums", label: "museumsAndCulture" },
  { id: "food", label: "foodAndDining" },
  { id: "outdoors", label: "outdoorActivities" },
  { id: "history", label: "historicalSites" },
  { id: "shopping", label: "shopping" },
  { id: "nightlife", label: "nightlife" },
  { id: "beaches", label: "beachesAndRelaxation" },
  { id: "adventure", label: "adventureSports" },
  { id: "architecture", label: "architecture" },
  { id: "photography", label: "photographySpots" },
  { id: "nature", label: "natureAndWildlife" },
  { id: "local", label: "localExperiences" },
];

export default function Home() {
  const { t, language } = useTranslation();
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    interests: "",
    additionalInterests: "",
    budget: "medium",
  });
  const [loading, setLoading] = useState(false);

  const [thinkingContent, setThinkingContent] = useState<string>("");
  const [responseContent, setResponseContent] = useState<string>("");
  // Add state for showing/hiding thinking content
  const [showThinking, setShowThinking] = useState(false);

  // Autocomplete state
  const [showDestinations, setShowDestinations] = useState(false);
  const [filteredDestinations, setFilteredDestinations] = useState<string[]>(
    []
  );
  const autocompleteRef = useRef<HTMLDivElement>(null);

  // Selected interests state
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  // Expanded days state
  const [expandedDays, setExpandedDays] = useState<Record<string, boolean>>({});

  // Streaming response reference
  const responseRef = useRef<string>("");
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // Handle click outside autocomplete
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target as Node)
      ) {
        setShowDestinations(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter destinations based on input
  useEffect(() => {
    if (formData.destination) {
      const filtered = getPopularDestinations(language).filter((dest) =>
        dest.toLowerCase().includes(formData.destination.toLowerCase())
      );
      setFilteredDestinations(filtered.slice(0, 5)); // Limit to 5 results
    } else {
      setFilteredDestinations(getPopularDestinations(language).slice(0, 5));
    }
  }, [formData.destination, language]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Show destinations dropdown when typing in destination field
    if (name === "destination") {
      setShowDestinations(true);
    }
  };

  const handleDestinationSelect = (destination: string) => {
    setFormData((prev) => ({ ...prev, destination }));
    setShowDestinations(false);
  };

  const handleInterestToggle = (interestId: string) => {
    setSelectedInterests((prev) => {
      const newInterests = prev.includes(interestId)
        ? prev.filter((id) => id !== interestId)
        : [...prev, interestId];

      // Update the form data with the interest labels
      const interestLabels = newInterests
        .map((id) => {
          const preset = INTEREST_PRESETS.find((preset) => preset.id === id);
          return preset ? t(preset.label) : "";
        })
        .filter(Boolean)
        .join(", ");

      setFormData((prev) => ({ ...prev, interests: interestLabels }));
      return newInterests;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.destination ||
      !formData.startDate ||
      !formData.endDate ||
      !formData.interests
    ) {
      return; // Form validation is handled by HTML required attributes
    }

    setLoading(true);
    setThinkingContent("");
    setResponseContent("");
    setShowThinking(true);
    responseRef.current = "";

    // delay 1 second to hack race condition
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      // Combine interests and additional interests if any
      const combinedFormData = { ...formData };
      if (formData.additionalInterests) {
        combinedFormData.interests = `${formData.interests}${
          formData.additionalInterests
            ? ", " + formData.additionalInterests
            : ""
        }`;
      }

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...combinedFormData,
          language: language === "th" ? "Thai" : "English",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate itinerary");
      }

      // Handle SSE (Server-Sent Events) streaming with proper event parsing
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("Response body is not readable");
      }      

      
      // Inactivity detection
      let lastActivityTimestamp = Date.now();
      const inactivityInterval = setInterval(() => {
        const now = Date.now();
        const timeSinceLastActivity = now - lastActivityTimestamp;
        
        // If no activity for 10 seconds after we've received some data, assume stream is done
        if (timeSinceLastActivity > 10000 && responseRef.current.length > 0) {
          console.log("Inactivity timeout reached - ending stream");
          clearInterval(inactivityInterval);
          reader.cancel().catch(e => console.log("Error cancelling inactive reader:", e));
        }
      }, 2000);
      
      setShowThinking(false);
      try {
        while (true) {
          try {
            const { done, value } = await reader.read();
            if (done) {
              break;
            }

            // Update last activity timestamp whenever we receive data
            lastActivityTimestamp = Date.now();
            
            const chunk = decoder.decode(value, { stream: true });

            // Add the new chunk to the accumulated response
            responseRef.current += chunk;

            // Check if we've transitioned from thinking to response
            if (responseRef.current.includes("</think>")) {
              // Split the accumulated response at the </think> tag
              const parts = responseRef.current.split("</think>");

              // First part is thinking
              setThinkingContent(parts[0].replace("<think>", "").trim());

              // Second part (if it exists) is the start of the response
              if (parts.length > 1 && parts[1]) {
                setResponseContent(parts[1].trim());
              } else {
                setResponseContent("");
              }
            } else {
              setThinkingContent(responseRef.current.replace("<think>", "").trim());
            }
          } catch (error) {
            console.error("Error reading stream:", error);
            break;
          }
        }
      } finally {
        // Clear all timers and ensure loading state is set to false
        clearInterval(inactivityInterval);
        
        // Attempt to cancel the reader if needed
        try {
          reader.cancel();
        } catch (e) {
          console.log("Error cancelling reader:", e);
        }
        
        setLoading(false);
      }
    } catch (error) {
      console.error("Error generating itinerary:", error);
    }
  };

  // Function to toggle expanded state of a day section
  const toggleDayExpansion = (dayId: string) => {
    setExpandedDays((prev) => ({
      ...prev,
      [dayId]: !prev[dayId],
    }));
  };

  // Custom renderer components for markdown elements
  const MarkdownComponents: Record<
    string,
    React.ComponentType<React.PropsWithChildren<unknown>>
  > = {
    // Render h2 headings (usually day headers) as collapsible sections
    h2: ({ children }) => {
      const headingText = children?.toString() || "";
      const dayId = headingText.replace(/\s+/g, "-").toLowerCase();
      const isExpanded = expandedDays[dayId] !== false; // Default to expanded

      return (
        <div className="mb-4 border-b border-gray-100 pb-2">
          <button
            onClick={() => toggleDayExpansion(dayId)}
            className="flex w-full items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-50 p-3 rounded-lg group"
          >
            <h2 className="text-lg font-bold text-gray-900 flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2 text-indigo-600" />
              {children}
            </h2>
            <span className="text-indigo-600">
              {isExpanded ? (
                <ChevronUpIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
              )}
            </span>
          </button>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-2 pl-4 border-l-2 border-indigo-100"
              >
                {/* Content will be nested inside */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    },

    // Render h3 headings (activity titles) with icon and styling
    h3: ({ children }) => (
      <h3 className="text-base font-semibold text-indigo-800 mt-4 mb-2 flex items-center">
        <SparklesIcon className="h-4 w-4 mr-1 text-indigo-500" />
        {children}
      </h3>
    ),

    // Render paragraphs with better spacing and text sizing
    p: ({ children }) => {
      const text = children?.toString() || "";

      // Handle special cases for time, cost indicators
      if (text.includes("Time:") || text.includes("Duration:")) {
        return (
          <p className="my-1 flex items-center text-sm text-gray-700">
            <ClockIcon className="h-4 w-4 mr-1 text-gray-500" />
            {children}
          </p>
        );
      }

      if (
        text.includes("Cost:") ||
        text.includes("Price:") ||
        text.includes("€") ||
        text.includes("$") ||
        text.includes("¥")
      ) {
        return (
          <p className="my-1 flex items-center text-sm text-gray-700">
            <CurrencyDollarIcon className="h-4 w-4 mr-1 text-gray-500" />
            {children}
          </p>
        );
      }

      if (text.includes("Tip:") || text.includes("Note:")) {
        return (
          <div className="my-2 p-2 bg-amber-50 rounded-md border border-amber-100">
            <p className="text-sm text-amber-800 flex items-start">
              <TagIcon className="h-4 w-4 mr-1 text-amber-600 mt-0.5 flex-shrink-0" />
              {children}
            </p>
          </div>
        );
      }

      return <p className="my-1 text-sm text-gray-700">{children}</p>;
    },

    // Render lists with better spacing and bullets
    ul: ({ children }) => (
      <ul className="my-2 space-y-1 list-none pl-5">{children}</ul>
    ),

    li: ({ children }) => (
      <li className="text-sm text-gray-700 flex items-start">
        <span className="h-2 w-2 rounded-full bg-indigo-400 mt-1.5 mr-2 flex-shrink-0"></span>
        <span>{children}</span>
      </li>
    ),
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Hero section */}
      <div className="relative isolate px-6 pt-24 pb-12 lg:px-8 sm:pt-32 sm:pb-16">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <T translationKey="createItinerary" />
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("tellUsWhere")}
          </motion.p>
        </div>
      </div>

      {/* Main content area */}
      <div className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <motion.h3
                className="text-xl font-semibold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {t("whatsYourNextDestination")}
              </motion.h3>
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div>
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <T translationKey="destination" />
                  </label>
                  <div
                    className="mt-1 relative rounded-md shadow-sm"
                    ref={autocompleteRef}
                  >
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPinIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="text"
                      name="destination"
                      id="destination"
                      required
                      value={formData.destination}
                      onChange={handleChange}
                      onFocus={() => setShowDestinations(true)}
                      placeholder={t("destinationPlaceholder")}
                      className="block w-full pl-10 pr-3 py-3 border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {/* Autocomplete dropdown */}
                    {showDestinations && (
                      <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-60 overflow-auto">
                        <ul className="py-1">
                          {filteredDestinations.length > 0 ? (
                            filteredDestinations.map((destination, index) => (
                              <li
                                key={index}
                                onClick={() =>
                                  handleDestinationSelect(destination)
                                }
                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm text-gray-700"
                              >
                                <MapPinIcon className="h-4 w-4 text-gray-400 mr-2" />
                                {destination}
                              </li>
                            ))
                          ) : (
                            <li className="px-3 py-2 text-sm text-gray-500">
                              {t("noDestinationsFound")}
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="startDate"
                      className="block text-sm font-medium text-gray-700"
                    >
                      <T translationKey="startDate" />
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CalendarIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        type="date"
                        name="startDate"
                        id="startDate"
                        required
                        value={formData.startDate}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-3 border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="endDate"
                      className="block text-sm font-medium text-gray-700"
                    >
                      <T translationKey="endDate" />
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CalendarIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        type="date"
                        name="endDate"
                        id="endDate"
                        required
                        value={formData.endDate}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-3 border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="interests"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <T translationKey="whatAreYouInterestedIn" />
                  </label>
                  <input
                    type="hidden"
                    name="interests"
                    id="interests"
                    required
                    value={formData.interests}
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {INTEREST_PRESETS.map((interest) => (
                      <div
                        key={interest.id}
                        onClick={() => handleInterestToggle(interest.id)}
                        className={`
                          rounded-lg px-3 py-2 cursor-pointer text-sm flex items-center gap-2
                          ${
                            selectedInterests.includes(interest.id)
                              ? "bg-indigo-100 border-indigo-200 text-indigo-800 border"
                              : "bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100"
                          }
                        `}
                      >
                        <span className="flex-1">
                          <T translationKey={interest.label} />
                        </span>
                        {selectedInterests.includes(interest.id) && (
                          <XMarkIcon className="h-4 w-4 text-indigo-600" />
                        )}
                      </div>
                    ))}
                  </div>
                  {selectedInterests.length === 0 && (
                    <p className="text-xs text-red-500 mt-1">
                      {t("pleaseSelectInterest")}
                    </p>
                  )}

                  <div className="mt-3">
                    <label
                      htmlFor="additionalInterests"
                      className="block text-sm font-medium text-gray-700"
                    >
                      <T translationKey="additionalInterests" />
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SparklesIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <textarea
                        name="additionalInterests"
                        id="additionalInterests"
                        value={formData.additionalInterests}
                        onChange={handleChange}
                        placeholder={t("additionalInterestsPlaceholder")}
                        className="block w-full pl-10 pr-3 py-3 border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        rows={2}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <T translationKey="budget" />
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-3 border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="budget">{t("low")}</option>
                    <option value="medium">{t("medium")}</option>
                    <option value="luxury">{t("high")}</option>
                  </select>
                </div>

                <div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading || selectedInterests.length === 0}
                    className="w-full inline-flex justify-center items-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <T translationKey="creatingYourPlan" />
                      </>
                    ) : (
                      <T translationKey="generateItinerary" />
                    )}
                  </motion.button>
                </div>
              </motion.form>
            </div>

            <div className="bg-gray-50 p-8 flex items-center justify-center">
              <div className="w-full">
                {responseContent || loading ? (
                  <div className="text-left max-w-full">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        <T translationKey="yourItinerary" />
                      </h3>
                      <div className="flex space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.print()}
                          className="flex items-center justify-center rounded-md bg-gray-200 p-2 text-gray-700 hover:bg-gray-300"
                          title={t("printItinerary")}
                        >
                          <PrinterIcon className="h-5 w-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            const blob = new Blob(
                              [responseContent || ""],
                              { type: "text/markdown" }
                            );
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement("a");
                            a.href = url;
                            a.download = "travel-itinerary.md";
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                            URL.revokeObjectURL(url);
                          }}
                          className="flex items-center justify-center rounded-md bg-gray-200 p-2 text-gray-700 hover:bg-gray-300"
                          title={t("downloadItinerary")}
                        >
                          <ArrowDownTrayIcon className="h-5 w-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            if (navigator.share) {
                              navigator
                                .share({
                                  title: `${t("travelItineraryFor")} ${
                                    formData.destination
                                  }`,
                                  text: responseContent || "",
                                })
                                .catch(console.error);
                            } else {
                              navigator.clipboard.writeText(
                                responseContent || ""
                              );
                              alert(t("itineraryCopied"));
                            }
                          }}
                          className="flex items-center justify-center rounded-md bg-gray-200 p-2 text-gray-700 hover:bg-gray-300"
                          title={t("shareItinerary")}
                        >
                          <ShareIcon className="h-5 w-5" />
                        </motion.button>
                      </div>
                    </div>
                    <div
                      className="bg-white border border-gray-200 rounded-lg shadow-sm max-h-[500px] overflow-y-auto"
                      ref={resultsContainerRef}
                    >
                      <div className="p-5">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 -mx-5 mt-[-1.25rem] mb-4 p-4 text-white rounded-t-lg shadow-sm">
                          <h1 className="text-xl font-bold">
                            {formData.destination} {t("itinerary")}
                          </h1>
                          <p className="text-sm opacity-90 mt-1">
                            {new Date(formData.startDate).toLocaleDateString(
                              language === "th" ? "th-TH" : "en-US",
                              { month: "long", day: "numeric" }
                            )}{" "}
                            -{" "}
                            {new Date(formData.endDate).toLocaleDateString(
                              language === "th" ? "th-TH" : "en-US",
                              { month: "long", day: "numeric", year: "numeric" }
                            )}
                          </p>
                        </div>
                        <div className="prose prose-indigo max-w-none">
                          {loading && (
                            <div className="flex items-center mb-3 text-sm text-gray-600">
                              <div className="mr-2 flex space-x-1">
                                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce delay-100"></div>
                                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce delay-200"></div>
                              </div>
                              <span>{t("generatingItinerary")}</span>
                            </div>
                          )}

                          {/* Show thinking toggle button if thinking content exists */}
                          {thinkingContent && (
                            <div className="mb-3">
                              <button
                                onClick={() => setShowThinking(!showThinking)}
                                className="text-xs px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center space-x-1"
                              >
                                {showThinking ? (
                                  <>
                                    <span>
                                      <T translationKey="hideAIThinking" />
                                    </span>
                                    <ChevronUpIcon className="h-3 w-3" />
                                  </>
                                ) : (
                                  <>
                                    <span>
                                      <T translationKey="showAIThinking" />
                                    </span>
                                    <ChevronDownIcon className="h-3 w-3" />
                                  </>
                                )}
                              </button>
                            </div>
                          )}

                          {/* Thinking content - rendered as plain text */}
                          {showThinking && thinkingContent && (
                            <div className="font-mono text-xs bg-gray-50 p-3 rounded-md border border-gray-200 mb-4 overflow-auto whitespace-pre-wrap">
                              <div className="mb-2 pb-1 border-b border-gray-200 flex items-center">
                                <span className="mr-2 px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-md">
                                  <T translationKey="thinking" />
                                  ...
                                </span>
                                <span className="text-gray-500 text-xs">
                                  (<T translationKey="aiIsBrainstorming" />)
                                </span>
                              </div>
                              {thinkingContent}
                            </div>
                          )}

                          {/* Final response - rendered as markdown */}
                          {responseContent && (
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              components={MarkdownComponents}
                            >
                              {responseContent}
                            </ReactMarkdown>
                          )}

                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <img
                      src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80"
                      alt={t("travel")}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <p className="text-gray-600">{t("fillInTheForm")}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              <T translationKey="howItWorks" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="h-12 w-12 rounded-lg bg-indigo-600/10 text-indigo-600 flex items-center justify-center mb-4">
                <MapPinIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                <T translationKey="chooseYourDestination" />
              </h3>
              <p className="text-gray-600">{t("tellUsWhereShort")}</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="h-12 w-12 rounded-lg bg-indigo-600/10 text-indigo-600 flex items-center justify-center mb-4">
                <SparklesIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                <T translationKey="shareYourInterests" />
              </h3>
              <p className="text-gray-600">{t("letUsKnow")}</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="h-12 w-12 rounded-lg bg-indigo-600/10 text-indigo-600 flex items-center justify-center mb-4">
                <CalendarIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                <T translationKey="getYourItinerary" />
              </h3>
              <p className="text-gray-600">{t("receiveADayByDay")}</p>
            </motion.div>
          </div>
        </div>

        {/* Chat option section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">
                <T translationKey="needPersonalizedTravelAdvice" />
              </h2>
              <p className="mb-6">{t("chatWithOurAI")}</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/chat"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white text-indigo-600 font-medium shadow-sm hover:bg-indigo-50"
              >
                <T translationKey="chatNow" />
              </motion.a>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-indigo-500/30 p-4 rounded-lg w-full max-w-xs">
                <div className="text-sm font-medium mb-3">
                  <T translationKey="chatExample" />:
                </div>
                <div className="bg-white/10 p-3 rounded-lg text-sm mb-2">
                  "{t("whatShouldIPack")}"
                </div>
                <div className="bg-white/10 p-3 rounded-lg text-sm mb-2">
                  "{t("isThreeDaysEnough")}"
                </div>
                <div className="bg-white/10 p-3 rounded-lg text-sm">
                  "{t("bestRestaurants")}"
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
