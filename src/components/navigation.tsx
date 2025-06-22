'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
	{ name: 'Home', href: '#home' },
	{ name: 'About', href: '#about' },
	{ name: 'Experience', href: '#experience' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Contact', href: '#contact' },
];

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Prevent hydration mismatch by not rendering until mounted
	if (!mounted) {
		return (
			<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MK</div>
						<div className="hidden md:flex items-center space-x-8">
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
								>
									{item.name}
								</a>
							))}
							<Button variant="gradient" size="sm">
								Get In Touch
							</Button>
						</div>
						<div className="md:hidden">
							<Button variant="ghost" size="sm" className="p-2">
								<Menu className="w-5 h-5" />
							</Button>
						</div>
					</div>
				</div>
			</nav>
		);
	}

	return (
		<>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					scrolled
						? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700'
						: 'bg-transparent border-b-0 border-transparent'
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						{/* Logo */}
						<motion.div
							whileHover={{ scale: 1.05 }}
							className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
						>
							MK
						</motion.div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-8">
							{navItems.map((item) => (
								<motion.a
									key={item.name}
									href={item.href}
									whileHover={{ scale: 1.05 }}
									className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
								>
									{item.name}
								</motion.a>
							))}
							<Button variant="gradient" size="sm">
								Get In Touch
							</Button>
						</div>

						{/* Mobile Menu Button */}
						<div className="md:hidden">
							<Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
								{isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
							</Button>
						</div>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, x: '100%' }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: '100%' }}
						transition={{ duration: 0.3 }}
						className="fixed top-16 right-0 w-64 h-screen bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 z-40 md:hidden"
					>
						<div className="flex flex-col p-6 space-y-4">
							{navItems.map((item) => (
								<motion.a
									key={item.name}
									href={item.href}
									whileHover={{ x: 10 }}
									className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium py-2"
									onClick={() => setIsOpen(false)}
								>
									{item.name}
								</motion.a>
							))}
							<div className="pt-4">
								<Button variant="gradient" className="w-full">
									Get In Touch
								</Button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
