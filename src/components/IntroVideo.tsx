import React, { useRef } from 'react';
import { motion } from 'motion/react';

interface IntroVideoProps {
  onComplete: () => void;
  onMusicStart?: () => void;
  readyToTransition?: boolean;
}

export function IntroVideo({ onComplete, onMusicStart }: IntroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStart = () => {
    if (onMusicStart) onMusicStart();
    
    // Play video unmuted? Usually browsers require interaction. 
    // If they tap, we can unmute or just skip. Let's just play muted or skip.
    // Actually, intro video usually plays and then proceeds.
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      onClick={() => {
        if (onMusicStart) onMusicStart();
        onComplete();
      }}
    >
      <video
        ref={videoRef}
        src="/WhatsApp Video 2026-10-07 at 03.32.55 (1).mp4"
        autoPlay
        playsInline
        muted
        onEnded={onComplete}
        className="w-full h-full object-cover sm:object-contain"
        onClick={handleStart}
      />
      
      <div className="absolute bottom-12 text-white/50 text-[10px] tracking-[0.3em] uppercase animate-pulse font-sans">
        Tap anywhere to enter
      </div>
    </motion.div>
  );
}
