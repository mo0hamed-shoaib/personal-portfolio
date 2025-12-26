"use client";

import { useState } from "react";
import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
}

export function Avatar({ src, alt }: AvatarProps) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="relative h-36 w-36 flex-shrink-0 border border-border">
      <div className="relative h-full w-full overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="h-8 w-8 animate-pulse rounded border border-border bg-card" />
          </div>
        )}
        <Image
          src={src}
          alt={alt}
          fill
          quality={95}
          sizes="192px"
          fetchPriority="high"
          className={`object-cover transition-opacity duration-300 ${
            imageLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setImageLoading(false)}
          onError={() => setImageLoading(false)}
          priority
        />
      </div>
    </div>
  );
}
