'use client';

import { useTranslation } from "@/lib/LanguageContext";

type TProps = {
  translationKey: string;
};

// A simple component that uses the translation system
export default function T({ translationKey }: TProps) {
  const { t } = useTranslation();
  return <>{t(translationKey)}</>;
} 