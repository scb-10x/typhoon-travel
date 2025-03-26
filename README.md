# Typhoon Travel - AI Traval Buddy

A modern web application that generates personalized travel itineraries using AI. Built with Next.js, TypeScript, Tailwind CSS, and Typhoon AI.

## Features

- **AI-Powered Itinerary Generator**: Create personalized travel itineraries based on destination, dates, interests, and budget
- **Travel Consultant**: Chat with our AI travel expert for personalized advice and recommendations
- **Multi-language Support**: Available in English and Thai
- **Typhoon AI Integration**: Leverages powerful typhoon-v2-70b-instruct and typhoon-v2-r1-70b-preview models
- **Interactive UI**: Beautiful, responsive UI with animations and modern design
- **Export Options**: Download and print your generated itineraries
- **Smart Destination Suggestions**: Auto-complete destination search with popular location suggestions
- **Interest Selection**: Preset interest categories to help tailor your itinerary

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Typhoon API key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/typhoon-travel.git
cd typhoon-travel
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

   Copy the `.env.example` file to `.env.local` and add your Typhoon API key:

```bash
cp .env.example .env.local
```

   Then edit `.env.local` to add your API key:

```
TYPHOON_BASE_URL=https://api.opentyphoon.ai/v1
OPENAI_API_KEY=your_actual_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Usage

### Itinerary Generator

1. Enter your destination, start date, end date, interests, and budget
2. Click "Generate Itinerary"
3. View your personalized travel itinerary
4. Print or download your itinerary for offline reference

### Travel Consultant

1. Navigate to the Travel Consultant page
2. Ask questions about destinations, accommodations, local cuisine, or travel tips
3. Receive personalized advice from our AI travel expert
4. Try suggested example questions or ask your own

## Technologies Used

- Next.js 15
- TypeScript
- Tailwind CSS 4
- Framer Motion for animations
- Headless UI for accessible components
- React Markdown for content formatting
- Typhoon AI for intelligent travel recommendations

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Typhoon AI](https://opentyphoon.ai/) for providing the AI models
- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
