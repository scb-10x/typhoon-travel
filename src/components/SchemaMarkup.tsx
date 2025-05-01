'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

// Schema.org structured data for better SEO and rich results in search engines
export default function SchemaMarkup() {
    const pathname = usePathname();

    // Create base URL from the domain
    const baseUrl = 'https://travel.apps.opentyphoon.ai';

    // Basic website schema
    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Typhoon Travel Demo',
        description: 'Experience the capabilities of Typhoon AI in this demo travel planner that creates personalized travel itineraries with intelligent recommendations based on your preferences.',
        url: baseUrl,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${baseUrl}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
        }
    };

    // Organization schema
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'OpenTyphoon',
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        sameAs: [
            'https://github.com/scb-10x',
            'https://x.com/opentyphoon',
            'https://huggingface.co/scb10x',
            'https://discord.gg/9F6nrFXyNt'
        ]
    };

    // Software application schema for Typhoon
    const softwareSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Typhoon AI',
        applicationCategory: 'AIApplication',
        operatingSystem: 'All',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/OnlineOnly'
        },
        description: 'An advanced AI system for generating personalized travel itineraries and providing travel recommendations.',
        url: baseUrl
    };

    // Homepage specific schema - SoftwareApplication + WebApplication
    const homepageSchema = pathname === '/' ? {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Typhoon Travel Planner',
        applicationCategory: 'TravelApplication',
        operatingSystem: 'All',
        description: 'Generate personalized travel itineraries based on your preferences, dates, and interests.',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
        },
        featureList: [
            'AI-powered travel itinerary generation',
            'Personalized travel recommendations',
            'Multi-language support',
            'Budget-conscious planning'
        ],
        screenshot: `${baseUrl}/screenshot.jpg`,
        url: baseUrl
    } : null;

    // Breadcrumb schema for navigation
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: baseUrl
            }
        ]
    };

    // Add path-specific breadcrumb items
    if (pathname === '/how-it-works') {
        breadcrumbSchema.itemListElement.push({
            '@type': 'ListItem',
            position: 2,
            name: 'How It Works',
            item: `${baseUrl}/how-it-works`
        });
    } else if (pathname === '/chat') {
        breadcrumbSchema.itemListElement.push({
            '@type': 'ListItem',
            position: 2,
            name: 'AI Travel Chat',
            item: `${baseUrl}/chat`
        });
    }

    return (
        <>
            <Script
                id="schema-website"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <Script
                id="schema-organization"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="schema-software"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <Script
                id="schema-breadcrumb"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {homepageSchema && (
                <Script
                    id="schema-homepage"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
                />
            )}
        </>
    );
} 