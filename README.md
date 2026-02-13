# Typhoon Travel

**This repository is archived and released as-is. If you’re interested in this work, please contact us.**

---

## Introduction

[Typhoon Travel](https://travel.apps.opentyphoon.ai) is an AI-powered travel assistant that helps you plan your trips, create personalized itineraries, and get expert travel advice. The application streamlines travel planning by generating custom itineraries based on your preferences and providing conversational travel consultation.

This project is part of [Typhoon Application Week](https://apps.opentyphoon.ai), showcasing the capabilities of the [Typhoon platform](https://opentyphoon.ai). Please note that this application is not maintained for production use and is not production-ready. Use at your own risk.

## Highlighted Features + Typhoon Integration

- **AI-Powered Itinerary Generator**: Typhoon creates personalized travel plans based on destination, dates, interests, and budget, utilizing its knowledge of global destinations and planning capabilities.

- **Travel Consultant**: Chat with an AI travel expert powered by Typhoon's conversational abilities to get personalized advice and recommendations about destinations, accommodations, and local experiences.

- **Multi-language Support**: Typhoon's multilingual capabilities enable the application to provide travel assistance in both English and Thai.

- **Smart Destination Suggestions**: Leverages Typhoon's knowledge base to offer intelligent auto-complete for destinations with popular location suggestions.

- **Interest-Based Recommendations**: Typhoon analyzes your selected interests to tailor attractions, activities, and experiences in your generated itineraries.

## Getting Started (Local Development)

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
TYPHOON_API_KEY=your_actual_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the LICENSE file for details.

## Connect With Us

- Website: [Typhoon](https://opentyphoon.ai)
- GitHub: [SCB 10X](https://github.com/scb-10x)
- Hugging Face: [SCB 10X](https://huggingface.co/scb10x)
- Discord: [Join our community](https://discord.com/invite/9F6nrFXyNt)
- X (formerly Twitter): [Typhoon](https://x.com/opentyphoon)
