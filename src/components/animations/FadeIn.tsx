import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    fullWidth?: boolean;
    className?: string;
}

export function FadeIn({
    children,
    delay = 0,
    direction = 'up',
    fullWidth = false,
    className = ''
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const getHiddenState = () => {
        switch (direction) {
            case 'up': return { opacity: 0, y: 30 };
            case 'down': return { opacity: 0, y: -30 };
            case 'left': return { opacity: 0, x: 30 };
            case 'right': return { opacity: 0, x: -30 };
            case 'none': return { opacity: 0 };
            default: return { opacity: 0, y: 30 };
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={getHiddenState()}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : getHiddenState()}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.22, 1, 0.36, 1] // Custom refined bezier for "calm" feel
            }}
            className={className}
            style={{ width: fullWidth ? '100%' : 'auto' }}
        >
            {children}
        </motion.div>
    );
}
