'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { useEffect } from 'react';
import SchemaMarkup from './SchemaMarkup';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useLanguage();

  useEffect(() => {
    // Update the HTML lang attribute when language changes
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <SchemaMarkup />
      {children}
    </>
  );
} 