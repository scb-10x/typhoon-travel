type Translations = {
  [key: string]: {
    en: string;
    th: string;
  };
};

const translations: Translations = {
  // Navbar
  itineraryGenerator: {
    en: 'Itinerary Generator',
    th: 'สร้างแผนการเดินทาง',
  },
  aiConsultant: {
    en: 'AI Consultant',
    th: 'ที่ปรึกษา AI',
  },
  about: {
    en: 'About',
    th: 'เกี่ยวกับเรา',
  },
  howItWorksNav: {
    en: 'How It Works',
    th: 'วิธีการทำงาน',
  },
  getStartedFree: {
    en: 'Get started free',
    th: 'เริ่มต้นฟรี',
  },
  
  // Main Page
  createItinerary: {
    en: 'Create your personalized travel itinerary',
    th: 'สร้างแผนการเดินทางที่เหมาะกับคุณ',
  },
  tellUsWhere: {
    en: 'Tell us where you want to go, for how long, and what you enjoy doing. Our AI will craft a personalized itinerary for you — completely free.',
    th: 'บอกเราว่าคุณต้องการไปที่ไหน นานแค่ไหน และคุณชอบทำอะไร AI ของเราจะสร้างแผนการเดินทางที่เหมาะกับคุณ — ฟรี',
  },
  whatsYourNextDestination: {
    en: 'What\'s your next destination?',
    th: 'จุดหมายปลายทางต่อไปของคุณคืออะไร?',
  },
  destinationPlaceholder: {
    en: 'Paris, Bangkok, Tokyo, Chiang Mai...',
    th: 'โตเกียว, โซล, ลอนดอน...',
  },
  noDestinationsFound: {
    en: 'No destinations found',
    th: 'ไม่พบจุดหมายปลายทาง',
  },
  whatAreYouInterestedIn: {
    en: 'What are you interested in?',
    th: 'คุณสนใจอะไร?',
  },
  pleaseSelectInterest: {
    en: 'Please select at least one interest',
    th: 'กรุณาเลือกความสนใจอย่างน้อยหนึ่งอย่าง',
  },
  additionalInterestsPlaceholder: {
    en: 'E.g., Vegetarian restaurants, accessible attractions, photography spots...',
    th: 'เช่น ร้านอาหารมังสวิรัติ, สถานที่ท่องเที่ยวที่เข้าถึงได้, จุดถ่ายภาพ...',
  },
  creatingYourPlan: {
    en: 'Creating your plan...',
    th: 'กำลังสร้างแผนการเดินทางของคุณ...',
  },
  yourItinerary: {
    en: 'Your Itinerary',
    th: 'แผนการเดินทางของคุณ',
  },
  travelItineraryFor: {
    en: 'Travel Itinerary for',
    th: 'แผนการเดินทางสำหรับ',
  },
  itineraryCopied: {
    en: 'Itinerary copied to clipboard!',
    th: 'คัดลอกแผนการเดินทางไปยังคลิปบอร์ดแล้ว!',
  },
  itinerary: {
    en: 'Itinerary',
    th: 'แผนการเดินทาง',
  },
  travel: {
    en: 'Travel',
    th: 'การเดินทาง',
  },
  fillInTheForm: {
    en: 'Fill in the form and our AI will create your personalized travel plan.',
    th: 'กรอกแบบฟอร์มและ AI ของเราจะสร้างแผนการเดินทางที่เหมาะกับคุณ',
  },
  howItWorks: {
    en: 'How it works',
    th: 'วิธีการทำงาน',
  },
  chooseYourDestination: {
    en: 'Choose your destination',
    th: 'เลือกจุดหมายปลายทางของคุณ',
  },
  tellUsWhereShort: {
    en: 'Tell us where you want to go and when you\'re planning to travel.',
    th: 'บอกเราว่าคุณต้องการไปที่ไหนและเมื่อไหร่ที่คุณวางแผนจะเดินทาง',
  },
  shareYourInterests: {
    en: 'Share your interests',
    th: 'แบ่งปันความสนใจของคุณ',
  },
  letUsKnow: {
    en: 'Let us know what you enjoy - food, art, outdoors, shopping, or history.',
    th: 'บอกเราว่าคุณชอบอะไร - อาหาร, ศิลปะ, กิจกรรมกลางแจ้ง, ช้อปปิ้ง หรือประวัติศาสตร์',
  },
  getYourItinerary: {
    en: 'Get your itinerary',
    th: 'รับแผนการเดินทางของคุณ',
  },
  receiveADayByDay: {
    en: 'Receive a day-by-day travel plan optimized for your preferences.',
    th: 'รับแผนการเดินทางแบบวันต่อวันที่ปรับให้เหมาะกับความชอบของคุณ',
  },
  needPersonalizedTravelAdvice: {
    en: 'Need personalized travel advice?',
    th: 'ต้องการคำแนะนำการเดินทางส่วนตัวหรือไม่?',
  },
  chatWithOurAI: {
    en: 'Chat with our AI travel consultant for recommendations and answers to your travel questions.',
    th: 'แชทกับที่ปรึกษาการเดินทาง AI ของเราเพื่อรับคำแนะนำและคำตอบสำหรับคำถามเกี่ยวกับการเดินทางของคุณ',
  },
  chatNow: {
    en: 'Chat now',
    th: 'แชทตอนนี้',
  },
  chatExample: {
    en: 'Chat example',
    th: 'ตัวอย่างการแชท',
  },
  whatShouldIPack: {
    en: 'What should I pack for Tokyo in spring?',
    th: 'ฉันควรเตรียมอะไรไปโอซาก้าในฤดูใบไม้ร่วง?',
  },
  isThreeDaysEnough: {
    en: 'Is 3 days enough for Chiang Mai?',
    th: 'เที่ยวโซล 4 วันเพียงพอไหม?',
  },
  bestRestaurants: {
    en: 'Best restaurants in Paris?',
    th: 'ร้านอาหารที่ดีที่สุดในลอนดอน?',
  },
  
  destination: {
    en: 'Destination',
    th: 'จุดหมายปลายทาง',
  },
  startDate: {
    en: 'Start Date',
    th: 'วันที่เริ่มต้น',
  },
  endDate: {
    en: 'End Date',
    th: 'วันที่สิ้นสุด',
  },
  interests: {
    en: 'Interests',
    th: 'ความสนใจ',
  },
  additionalInterests: {
    en: 'Additional interests (optional)',
    th: 'ความสนใจเพิ่มเติม (ไม่บังคับ)',
  },
  budget: {
    en: 'Budget',
    th: 'งบประมาณ',
  },
  low: {
    en: 'Budget-friendly',
    th: 'ราคาประหยัด',
  },
  medium: {
    en: 'Medium',
    th: 'ปานกลาง',
  },
  high: {
    en: 'Luxury',
    th: 'หรูหรา',
  },
  generateItinerary: {
    en: 'Generate Itinerary',
    th: 'สร้างแผนการเดินทาง',
  },
  
  // Interest Presets
  museumsAndCulture: {
    en: 'Museums & Culture',
    th: 'พิพิธภัณฑ์และวัฒนธรรม',
  },
  foodAndDining: {
    en: 'Food & Dining',
    th: 'อาหารและร้านอาหาร',
  },
  outdoorActivities: {
    en: 'Outdoor Activities',
    th: 'กิจกรรมกลางแจ้ง',
  },
  historicalSites: {
    en: 'Historical Sites',
    th: 'สถานที่ทางประวัติศาสตร์',
  },
  shopping: {
    en: 'Shopping',
    th: 'ช้อปปิ้ง',
  },
  nightlife: {
    en: 'Nightlife',
    th: 'ชีวิตกลางคืน',
  },
  beachesAndRelaxation: {
    en: 'Beaches & Relaxation',
    th: 'ชายหาดและการพักผ่อน',
  },
  adventureSports: {
    en: 'Adventure Sports',
    th: 'กีฬาผจญภัย',
  },
  architecture: {
    en: 'Architecture',
    th: 'สถาปัตยกรรม',
  },
  photographySpots: {
    en: 'Photography Spots',
    th: 'จุดถ่ายภาพ',
  },
  natureAndWildlife: {
    en: 'Nature & Wildlife',
    th: 'ธรรมชาติและสัตว์ป่า',
  },
  localExperiences: {
    en: 'Local Experiences',
    th: 'ประสบการณ์ท้องถิ่น',
  },
  
  // Loading States
  generatingItinerary: {
    en: 'Generating your personalized itinerary...',
    th: 'กำลังสร้างแผนการเดินทางที่เหมาะกับคุณ...',
  },
  ourAiIsWorkingOnYourPerfectTrip: {
    en: 'Our AI is working on your perfect trip',
    th: 'AI ของเรากำลังทำงานบนทริปที่สมบูรณ์แบบของคุณ',
  },
  
  // Itinerary View
  printItinerary: {
    en: 'Print Itinerary',
    th: 'พิมพ์แผนการเดินทาง',
  },
  downloadItinerary: {
    en: 'Download Itinerary',
    th: 'ดาวน์โหลดแผนการเดินทาง',
  },
  shareItinerary: {
    en: 'Share Itinerary',
    th: 'แชร์แผนการเดินทาง',
  },
  
  // Language Switcher
  language: {
    en: 'Language',
    th: 'ภาษา',
  },
  english: {
    en: 'English',
    th: 'อังกฤษ',
  },
  thai: {
    en: 'Thai',
    th: 'ไทย',
  },
  
  // Chat Page
  travelAIConsultant: {
    en: 'Travel AI Consultant',
    th: 'ที่ปรึกษาการท่องเที่ยว AI',
  },
  travelConsultant: {
    en: 'Travel Consultant',
    th: 'ที่ปรึกษาการท่องเที่ยว',
  },
  askMeAnything: {
    en: 'Ask me anything about travel planning, destinations, accommodations, or activities. I\'m here to help you plan your perfect trip.',
    th: 'ถามฉันได้ทุกอย่างเกี่ยวกับการวางแผนการเดินทาง สถานที่ท่องเที่ยว ที่พัก หรือกิจกรรมต่างๆ ฉันพร้อมช่วยคุณวางแผนการเดินทางที่สมบูรณ์แบบ',
  },
  newConversation: {
    en: 'New conversation',
    th: 'การสนทนาใหม่',
  },
  features: {
    en: 'Features',
    th: 'คุณสมบัติ',
  },
  personalizedRecommendations: {
    en: 'Personalized recommendations',
    th: 'คำแนะนำส่วนบุคคล',
  },
  destinationExpertise: {
    en: 'Destination expertise',
    th: 'ความเชี่ยวชาญด้านจุดหมายปลายทาง',
  },
  budgetFriendlySuggestions: {
    en: 'Budget-friendly suggestions',
    th: 'คำแนะนำที่เหมาะกับงบประมาณ',
  },
  localInsightsAndTips: {
    en: 'Local insights and tips',
    th: 'ข้อมูลเชิงลึกและเคล็ดลับจากคนท้องถิ่น',
  },
  howCanIHelpPlanYourTrip: {
    en: 'How can I help plan your trip?',
    th: 'ฉันจะช่วยวางแผนการเดินทางของคุณได้อย่างไร?',
  },
  askAboutDestinations: {
    en: 'Ask me anything about destinations, accommodations, activities, transportation, or local cuisine.',
    th: 'ถามฉันได้ทุกอย่างเกี่ยวกับสถานที่ท่องเที่ยว ที่พัก กิจกรรม การเดินทาง หรืออาหารท้องถิ่น',
  },
  askAboutYourTravelPlans: {
    en: 'Ask about your travel plans...',
    th: 'ถามเกี่ยวกับแผนการเดินทางของคุณ...',
  },
  exampleQuestion1: {
    en: 'What are the best places to visit in Thailand during rainy season?',
    th: 'สถานที่ท่องเที่ยวยอดนิยมในยุโรปสำหรับครอบครัวมีที่ไหนบ้าง?',
  },
  exampleQuestion2: {
    en: 'I have 3 days in Rome, what should I see?',
    th: 'ฉันมีเวลา 3 วันในนิวยอร์ก ควรไปเที่ยวที่ไหนบ้าง?',
  },
  exampleQuestion3: {
    en: 'What\'s the best time to visit Bali?',
    th: 'ช่วงเวลาที่ดีที่สุดในการไปญี่ปุ่นคือเมื่อไร?',
  },
  exampleQuestion4: {
    en: 'Can you recommend local food to try in Chiang Mai?',
    th: 'แนะนำกิจกรรมประหยัดงบประมาณในลอนดอนหน่อยได้ไหม?',
  },
  exampleQuestion5: {
    en: 'What should I pack for a trip to London in winter?',
    th: 'ฉันควรเตรียมอะไรบ้างสำหรับการเดินทางไปสวิตเซอร์แลนด์ในฤดูหนาว?',
  },
  errorMessage: {
    en: 'Sorry, I encountered an error. Please try again.',
    th: 'ขออภัย ฉันพบข้อผิดพลาด โปรดลองอีกครั้ง',
  },
  
  // About Page
  aboutTyphoonTravel: {
    en: 'About Typhoon Travel',
    th: 'เกี่ยวกับ Typhoon Travel',
  },
  aiPoweredTravelPlanning: {
    en: 'AI-powered travel planning that makes creating your perfect itinerary simple and enjoyable',
    th: 'การวางแผนการเดินทางด้วย AI ที่ทำให้การสร้างแผนการเดินทางที่สมบูรณ์แบบของคุณง่ายและสนุก',
  },
  ourMission: {
    en: 'Our mission',
    th: 'พันธกิจของเรา',
  },
  missionText1: {
    en: 'We\'re on a mission to transform travel planning through artificial intelligence, making it accessible, personalized, and stress-free for everyone.',
    th: 'เรามีพันธกิจที่จะเปลี่ยนแปลงการวางแผนการเดินทางผ่านปัญญาประดิษฐ์ ทำให้เข้าถึงได้ง่าย เป็นส่วนตัว และปราศจากความเครียดสำหรับทุกคน',
  },
  missionText2: {
    en: 'Our platform eliminates the time-consuming nature of travel planning, providing personalized recommendations based on your preferences and helping you discover the perfect experiences for your journey.',
    th: 'แพลตฟอร์มของเราช่วยลดเวลาในการวางแผนการเดินทาง ให้คำแนะนำที่เหมาะกับคุณตามความชอบของคุณ และช่วยคุณค้นพบประสบการณ์ที่สมบูรณ์แบบสำหรับการเดินทางของคุณ',
  },
  ourTools: {
    en: 'Our tools',
    th: 'เครื่องมือของเรา',
  },
  itineraryGeneratorTitle: {
    en: 'Itinerary Generator',
    th: 'เครื่องมือสร้างแผนการเดินทาง',
  },
  itineraryGeneratorDesc: {
    en: 'Create detailed day-by-day travel plans optimized for your preferences, dates, and budget.',
    th: 'สร้างแผนการเดินทางรายวันที่ละเอียดและปรับให้เหมาะกับความชอบ วันที่ และงบประมาณของคุณ',
  },
  aiTravelConsultantTitle: {
    en: 'AI Travel Consultant',
    th: 'ที่ปรึกษาการท่องเที่ยว AI',
  },
  aiTravelConsultantDesc: {
    en: 'Chat with our AI for personalized travel advice, recommendations, and answers to your questions.',
    th: 'แชทกับ AI ของเราเพื่อรับคำแนะนำการเดินทางส่วนตัว คำแนะนำ และคำตอบสำหรับคำถามของคุณ',
  },
  personalizationTitle: {
    en: 'Personalization',
    th: 'การปรับแต่งให้เหมาะกับคุณ',
  },
  personalizationDesc: {
    en: 'Our AI learns your preferences to deliver travel recommendations tailored specifically to you.',
    th: 'AI ของเราเรียนรู้ความชอบของคุณเพื่อให้คำแนะนำการเดินทางที่ปรับให้เหมาะกับคุณโดยเฉพาะ',
  },
  readyToStartPlanning: {
    en: 'Ready to start planning your next adventure?',
    th: 'พร้อมที่จะเริ่มวางแผนการผจญภัยครั้งต่อไปของคุณหรือไม่?',
  },
  tryOurAIPoweredItinerary: {
    en: 'Try our AI-powered itinerary generator today. It\'s completely free!',
    th: 'ลองใช้เครื่องมือสร้างแผนการเดินทางด้วย AI ของเราวันนี้ ฟรี!',
  },
  getStartedForFree: {
    en: 'Get started for free',
    th: 'เริ่มต้นใช้งานฟรี',
  },
  
  // How It Works Page
  howTyphoonAIWorks: {
    en: 'How Typhoon Travel Works',
    th: 'วิธีการทำงานของ Typhoon Travel',
  },
  exploreAITechnology: {
    en: 'Explore the advanced AI technology powering your personalized travel experiences',
    th: 'สำรวจเทคโนโลยี AI ขั้นสูงที่ขับเคลื่อนประสบการณ์การเดินทางที่เหมาะกับคุณ',
  },
  ourAITechnology: {
    en: 'Our AI Technology',
    th: 'เทคโนโลยี AI ของเรา',
  },
  aiTechnologyDesc1: {
    en: 'Typhoon Travel utilizes state-of-the-art large language models to understand your travel preferences and generate personalized recommendations. Our AI processes your inputs through a sophisticated pipeline, extracting key information and creating tailored travel content.',
    th: 'Typhoon Travel ใช้โมเดลภาษาขั้นสูงเพื่อเข้าใจความชอบในการเดินทางของคุณและสร้างคำแนะนำที่เหมาะกับความต้องการ AI ของเราประมวลผลข้อมูลของคุณผ่านกระบวนการที่ซับซ้อน โดยดึงข้อมูลสำคัญและสร้างเนื้อหาการเดินทางที่ปรับให้เหมาะกับคุณ',
  },
  aiTechnologyDesc2: {
    en: 'We leverage the powerful typhoon-v2-70b-instruct and typhoon-v2-r1-70b-preview models, optimized specifically for travel planning and conversation. These models are trained on diverse travel data to provide accurate, helpful, and contextually relevant information.',
    th: 'เราใช้โมเดล typhoon-v2-70b-instruct และ typhoon-v2-r1-70b-preview ที่ทรงพลัง ซึ่งได้รับการปรับแต่งโดยเฉพาะสำหรับการวางแผนการเดินทางและการสนทนา โมเดลเหล่านี้ได้รับการฝึกฝนด้วยข้อมูลการเดินทางที่หลากหลายเพื่อให้ข้อมูลที่ถูกต้อง มีประโยชน์ และเกี่ยวข้องกับบริบท',
  },
  howAIAlgorithmWorks: {
    en: 'How Our AI Algorithm Works',
    th: 'วิธีการทำงานของอัลกอริทึม AI ของเรา',
  },
  requestProcessing: {
    en: '1. Request Processing',
    th: '1. การประมวลผลคำขอ',
  },
  requestProcessingDesc: {
    en: 'When you submit a request, our API processes your inputs (destination, dates, interests, budget) and validates all required fields. For chat interactions, we maintain conversation context through message history.',
    th: 'เมื่อคุณส่งคำขอ API ของเราประมวลผลข้อมูลของคุณ (จุดหมายปลายทาง วันที่ ความสนใจ งบประมาณ) และตรวจสอบความถูกต้องของข้อมูลที่จำเป็นทั้งหมด สำหรับการโต้ตอบแบบแชท เรารักษาบริบทการสนทนาผ่านประวัติข้อความ',
  },
  promptEngineering: {
    en: '2. Prompt Engineering',
    th: '2. Prompt Engineering',
  },
  promptEngineeringDesc: {
    en: 'We construct specialized prompts with carefully crafted instructions that guide the AI to generate high-quality travel content. For itineraries, we include day-by-day structure, timing guidelines, and budget considerations.',
    th: 'เราเขียน Prompt อย่างรอบคอบซึ่งชี้นำให้ AI สร้างเนื้อหาท่องเที่ยวคุณภาพสูง สำหรับแผนการเดินทาง เรารวมโครงสร้างแบบวันต่อวัน แนวทางเวลา และการพิจารณางบประมาณ',
  },
  aiTextGeneration: {
    en: '3. AI Model Selection & Generation',
    th: '3. การเลือกโมเดล AI และการสร้างเนื้อหา',
  },
  aiTextGenerationDesc: {
    en: 'Our system selects the appropriate AI model based on task complexity. For complex planning tasks like itinerary generation, we use the powerful typhoon-v2-r1-70b reasoning model, while for general chat interactions, we utilize the typhoon-v2-70b-instruct model optimized for conversational responses.',
    th: 'ระบบของเราเลือกโมเดล AI ที่เหมาะสมตามความซับซ้อนของงาน สำหรับงานวางแผนที่ซับซ้อนเช่นการสร้างแผนการเดินทาง เราใช้โมเดลการให้เหตุผล typhoon-v2-r1-70b ที่ทรงพลัง ในขณะที่สำหรับการโต้ตอบแชททั่วไป เราใช้โมเดล typhoon-v2-70b-instruct ที่ปรับให้เหมาะกับการตอบกลับในรูปแบบสนทนา',
  },
  modelSelection: {
    en: 'Model Selection',
    th: 'การเลือกโมเดล',
  },
  reasoningModel: {
    en: 'Reasoning Model',
    th: 'โมเดลการให้เหตุผล',
  },
  instructModel: {
    en: 'Instruct Model',
    th: 'โมเดลทั่วไป',
  },
  complexTasks: {
    en: 'Complex Tasks',
    th: 'งานที่ซับซ้อน',
  },
  generalTasks: {
    en: 'General Tasks',
    th: 'งานทั่วไป',
  },
  itineraryPlanning: {
    en: 'Itinerary Planning',
    th: 'การวางแผนเส้นทาง',
  },
  conversationalChat: {
    en: 'Conversational Chat',
    th: 'การสนทนาโต้ตอบ',
  },
  responseProcessing: {
    en: '4. Response Processing',
    th: '4. การประมวลผลการตอบสนอง',
  },
  responseProcessingDesc: {
    en: 'The raw AI output is processed through utility functions that extract and format the final content. We clean up any model thinking process and ensure proper formatting before sending the response back to you.',
    th: 'ผลลัพธ์ AI ดิบได้รับการประมวลผลผ่านฟังก์ชันยูทิลิตี้ที่แยกและจัดรูปแบบเนื้อหาสุดท้าย เราทำความสะอาดกระบวนการคิดของโมเดลและรับรองการจัดรูปแบบที่เหมาะสมก่อนที่จะส่งการตอบสนองกลับไปยังคุณ',
  },
  ourAIPoweredTools: {
    en: 'Our AI-Powered Tools',
    th: 'เครื่องมือที่ขับเคลื่อนด้วย AI ของเรา',
  },
  itineraryGeneratorDesc2: {
    en: 'Creates comprehensive day-by-day travel plans optimized for your destination, dates, interests, and budget constraints. Each itinerary includes attractions, restaurants, and activities with timing information.',
    th: 'สร้างแผนการเดินทางวันต่อวันที่ครอบคลุมและเหมาะสมกับจุดหมายปลายทาง วันที่ ความสนใจ และข้อจำกัดด้านงบประมาณของคุณ แต่ละแผนการเดินทางรวมถึงสถานที่ท่องเที่ยว ร้านอาหาร และกิจกรรมพร้อมข้อมูลเวลา',
  },
  aiTravelConsultantDesc2: {
    en: 'An interactive chat interface that provides personalized travel advice, answers questions about destinations, accommodations, activities, and delivers information in a conversational format with Markdown formatting.',
    th: 'อินเทอร์เฟซแชทแบบโต้ตอบที่ให้คำแนะนำการเดินทางส่วนบุคคล ตอบคำถามเกี่ยวกับจุดหมายปลายทาง ที่พัก กิจกรรม และให้ข้อมูลในรูปแบบการสนทนาด้วยการจัดรูปแบบ Markdown',
  },
  typhoonAIProcessFlow: {
    en: 'Typhoon Travel Process Flow',
    th: 'กระบวนการทำงานของ Typhoon Travel',
  },
  readyToExperience: {
    en: 'Ready to experience AI-powered travel planning?',
    th: 'พร้อมที่จะสัมผัสประสบการณ์การวางแผนการเดินทางด้วย AI หรือไม่?',
  },
  tryOurIntelligent: {
    en: 'Try our intelligent itinerary generator or chat with our AI travel consultant today.',
    th: 'ลองใช้เครื่องมือสร้างแผนการเดินทางอัจฉริยะหรือแชทกับที่ปรึกษาการท่องเที่ยว AI ของเราวันนี้',
  },
  modelSelectionStrategy: {
    en: 'Our Model Selection Strategy',
    th: 'กลยุทธ์การเลือกโมเดลของเรา',
  },
  modelSelectionDesc: {
    en: 'We strategically deploy different AI models based on the task complexity to deliver optimal results:',
    th: 'เราใช้โมเดล AI ที่แตกต่างกันตามความซับซ้อนของงานเพื่อส่งมอบผลลัพธ์ที่ดีที่สุด:',
  },
  reasoningModelTitle: {
    en: 'Reasoning Model (typhoon-v2-r1-70b)',
    th: 'โมเดลการให้เหตุผล (typhoon-v2-r1-70b)',
  },
  reasoningModelDesc: {
    en: 'Our most powerful model, optimized for complex planning tasks that require structured thinking and reasoning. This model excels at creating detailed multi-day itineraries, considering multiple factors like timing, locations, and preferences simultaneously.',
    th: 'โมเดลที่ทรงพลังที่สุดของเรา ที่ปรับให้เหมาะกับงานวางแผนที่ซับซ้อนซึ่งต้องการความคิดและการให้เหตุผลที่มีโครงสร้าง โมเดลนี้เก่งในการสร้างแผนการเดินทางหลายวันที่มีรายละเอียด โดยพิจารณาปัจจัยหลายอย่างเช่น เวลา สถานที่ และความชอบพร้อมกัน',
  },
  instructModelTitle: {
    en: 'Instruct Model (typhoon-v2-70b-instruct)',
    th: 'โมเดลทั่วไป(typhoon-v2-70b-instruct)',
  },
  instructModelDesc: {
    en: 'Optimized for conversational interactions, this model provides quick, relevant, and helpful responses to general travel questions. It\'s perfect for the chat interface where responsive and accurate information delivery is key.',
    th: 'ปรับให้เหมาะกับการโต้ตอบแบบสนทนา โมเดลนี้ให้การตอบสนองที่รวดเร็ว ตรงประเด็น และมีประโยชน์ต่อคำถามเกี่ยวกับการเดินทางทั่วไป เหมาะสำหรับอินเทอร์เฟซแชทที่การส่งมอบข้อมูลที่ตอบสนองและแม่นยำเป็นสิ่งสำคัญ',
  },
};

export default translations;