import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Tag } from '../components/ui/Tag';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Home } from 'lucide-react';

export function NotFoundPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
            <SEO
                title="404 - Page Not Found | Sandeep S Kumbar"
                description="The page you are looking for doesn't exist or has been moved."
            />
            <Navigation />

            <main id="main-content" className="flex-1 flex items-center justify-center relative overflow-hidden py-24">
                {/* Decorative background blur */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-50/50 rounded-full blur-[120px] pointer-events-none -z-10" />

                <div className="max-w-[1180px] mx-auto w-full px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mb-8 flex justify-center"
                    >
                        <Tag variant="code">404 Error</Tag>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-6"
                    >
                        Page not found
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="text-xl text-gray-500 mb-12 max-w-lg mx-auto leading-relaxed"
                    >
                        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        className="flex items-center justify-center gap-6"
                    >
                        <Button asChild variant="secondary" className="gap-2">
                            <Link to="/">
                                <ArrowLeft className="w-4 h-4" />
                                Go back
                            </Link>
                        </Button>
                        <Button asChild variant="default" className="gap-2">
                            <Link to="/">
                                <Home className="w-4 h-4 text-white" />
                                Home page
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </main>

            <div className="max-w-[1180px] w-full mx-auto px-8 mb-12">
                <Footer />
            </div>
        </div>
    );
}
