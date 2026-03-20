import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export function Lightbox({ src, alt, onClose }: { src: string | null; alt: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] bg-[#0f2320]/98 flex flex-col items-center justify-center backdrop-blur-xl"
        >
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-50 p-2"
          >
            <X className="w-10 h-10" />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            src={src}
            alt={alt}
            className="max-w-[85vw] max-h-[85vh] rounded-lg shadow-[0_40px_100px_rgba(0,0,0,0.6)] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
