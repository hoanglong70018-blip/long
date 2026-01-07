import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);
    const location = useLocation();

    const isHome = location.pathname === '/';

    const navItems = [
        { name: 'Trang chủ', href: '/' },
        { name: 'Sản phẩm', href: isHome ? '#features' : '/#features' },
        { name: 'Kiến thức', href: isHome ? '#kien-thuc' : '/#kien-thuc' },
        { name: 'Calendar', href: '/calendar' },
        { name: 'Tin tức', href: '#' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 right-0 z-50 py-6 bg-transparent"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="relative z-50 group">
                    <div className="font-heading font-bold text-xl tracking-tight text-light-primary">
                        LONG<span className="text-orange-accent">BEST</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-full border border-white/5 backdrop-blur-sm relative" onMouseLeave={() => setHoveredPath(null)}>
                        {navItems.map((item) => {
                            const isInternal = item.href.startsWith('/');
                            return (
                                isInternal ? (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        onMouseEnter={() => setHoveredPath(item.href)}
                                        className={`relative px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 z-10 ${hoveredPath === item.href ? 'text-light-primary' : 'text-mid-gray hover:text-light-primary'}`}
                                    >
                                        {item.name}
                                        {hoveredPath === item.href && (
                                            <motion.div
                                                layoutId="navbar-pill"
                                                className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                ) : (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onMouseEnter={() => setHoveredPath(item.href)}
                                        className={`relative px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 z-10 ${hoveredPath === item.href ? 'text-light-primary' : 'text-mid-gray hover:text-light-primary'}`}
                                    >
                                        {item.name}
                                        {hoveredPath === item.href && (
                                            <motion.div
                                                layoutId="navbar-pill"
                                                className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </a>
                                )
                            );
                        })}
                    </div>

                    <a
                        href="#pricing"
                        className="group flex items-center gap-2 px-5 py-2.5 bg-light-primary text-dark-primary text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-orange-accent hover:text-light-primary hover:shadow-[0_0_15px_rgba(217,119,87,0.4)] transition-all duration-300"
                    >
                        <span>Start Building</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Mobile Trigger */}
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="md:hidden relative z-50 p-2 text-light-primary hover:text-orange-accent transition-colors"
                >
                    {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 bg-dark-primary pt-24 px-6 md:hidden"
                        >
                            <div className="flex flex-col gap-6">
                                {navItems.map((item) => (
                                    item.href.startsWith('/') ? (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            onClick={() => setIsMobileOpen(false)}
                                            className="text-2xl font-heading font-medium text-light-primary hover:text-orange-accent transition-colors border-b border-white/5 pb-4"
                                        >
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsMobileOpen(false)}
                                            className="text-2xl font-heading font-medium text-light-primary hover:text-orange-accent transition-colors border-b border-white/5 pb-4"
                                        >
                                            {item.name}
                                        </a>
                                    )
                                ))}
                                <a
                                    href="#pricing"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-orange-accent text-light-primary font-bold uppercase tracking-widest rounded-lg"
                                >
                                    Start Building
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
