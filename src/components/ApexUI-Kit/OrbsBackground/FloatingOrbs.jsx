/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeProvider';

// --- FloatingOrbsBackground Component (Optimized for Mobile) ---
const FloatingOrbsBackground = ({
    children,
    className,
    containerClassName,
    desktopOrbs = 15, // Reduced slightly for cleaner look
    mobileOrbs = 8,
}) => {
    const [numberOfOrbs, setNumberOfOrbs] = useState(desktopOrbs);
    const [isMobile, setIsMobile] = useState(false);
    const { theme } = useTheme();

    // Screen size check
    useEffect(() => {
        const checkScreenSize = () => {
            const isMobileDevice = window.innerWidth < 768;
            setIsMobile(isMobileDevice);
            setNumberOfOrbs(isMobileDevice ? mobileOrbs : desktopOrbs);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [desktopOrbs, mobileOrbs]);

    // Theme-based colors
    const isDark = theme === 'dark';

    // Dark Mode: Accent (#eb5e28), Deep Blue (#14213d), Black (#0a0a0a) 
    // Light Mode: Accent (#eb5e28), Navy (#14213d), Pale Grey (#e5e5e5)
    // Using RGBA for better blending with the blur effect
    const orbColors = isDark
        ? ['rgba(235, 94, 40, 0.2)', 'rgba(20, 33, 61, 0.4)', 'rgba(255, 255, 255, 0.05)']
        : ['rgba(235, 94, 40, 0.15)', 'rgba(20, 33, 61, 0.15)', 'rgba(200, 200, 200, 0.4)'];


    return (
        <div
            className={`absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none ${containerClassName}`}
            style={{ zIndex: 0 }} // Ensure it stays behind
        >
            {/* Orbs Container */}
            <div className="absolute inset-0 w-full h-full">
                {Array.from({ length: numberOfOrbs }).map((_, index) => {
                    // Larger sizes for "Orbs" look
                    const size = Math.random() * 150 + 100;
                    const duration = Math.random() * 20 + 20; // Slower, more floating
                    const blur = isMobile ? '50px' : '80px';

                    return (
                        <motion.div
                            key={index}
                            className="absolute rounded-full"
                            style={{
                                width: size,
                                height: size,
                                backgroundColor: orbColors[index % orbColors.length],
                                filter: `blur(${blur})`,
                                opacity: 0.6,
                                willChange: 'transform, opacity',
                            }}
                            animate={{
                                x: [
                                    `${Math.random() * 100}%`,
                                    `${Math.random() * 100}%`,
                                    `${Math.random() * 100}%`,
                                ],
                                y: [
                                    `${Math.random() * 100}%`,
                                    `${Math.random() * 100}%`,
                                    `${Math.random() * 100}%`,
                                ],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: duration,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                repeatType: 'mirror',
                            }}
                        />
                    );
                })}
            </div>

            <div className={`relative z-10 ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default FloatingOrbsBackground;