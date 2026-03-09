'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary text-textPrimary">
      <motion.main 
        className="flex flex-col items-center justify-center min-h-screen px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-center mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Auralex Studio
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-textSecondary text-center mb-8 max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Professional Creative Services & Digital Solutions
        </motion.p>

        <motion.div 
          className="flex gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button className="px-8 py-3 bg-white text-primary font-semibold rounded hover:bg-textSecondary transition">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-primary transition">
            Learn More
          </button>
        </motion.div>
      </motion.main>
    </div>
  );
}