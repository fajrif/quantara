'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TextEffect } from '@/components/ui/text-effect';

interface ImageHeroContentProps {
  image: string;
  text: string;
}

export function ImageHeroContent({ image, text }: ImageHeroContentProps) {
  return (
    <div className="container mx-auto px-0 sm:px-4 pt-20">
      {/* Image container */}
      <div className="relative h-[calc(100vh-5rem)] overflow-hidden">
        {/* Background Image — painted immediately at full opacity so it counts as LCP */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={text}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dark overlay for text readability — eases in for a subtle entrance */}
          <motion.div
            className="absolute inset-0 bg-black/30"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </div>

        {/* Centered text */}
        <div className="relative z-10 flex h-full items-center justify-center px-8 text-center">
          <TextEffect
            per="word"
            preset="blur"
            delay={0.6}
            as="h1"
            className="max-w-5xl text-3xl font-light uppercase leading-tight tracking-widest text-white sm:text-4xl md:text-4xl lg:text-4xl"
          >
            {text}
          </TextEffect>
        </div>
      </div>
    </div>
  );
}
