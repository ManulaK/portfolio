'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HeroSection() {
	const [shimmer, setShimmer] = useState(false);
	useEffect(() => {
		const timeout = setTimeout(() => setShimmer(true), 500);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-slate-900 dark:to-gray-900"
		>
			{/* Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
				<div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
			</div>

			<div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.15 } },
					}}
					className="space-y-8"
				>
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 relative"
						suppressHydrationWarning
					>
						<span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
						<span className="text-sm font-medium text-gray-700 dark:text-gray-300 animate-pulse-slow">
							Available for opportunities
						</span>
						<span className="absolute inset-0 rounded-full pointer-events-none animate-glow-badge" />
					</motion.div>

					{/* Main Title */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
					>
						<span
							className={`bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent relative inline-block ${
								shimmer ? 'animate-shimmer' : ''
							}`}
						>
							Manula Kavinda
							<span className="absolute inset-0 pointer-events-none" />
						</span>
					</motion.h1>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
					>
						Software Engineer crafting exceptional digital experiences with modern technologies and innovative solutions.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.8 }}
						className="flex flex-col sm:flex-row gap-4 justify-center items-center"
					>
						<a
							href="#projects"
							className="text-lg px-8 py-3 animate-bounce-once inline-block rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-0.5 hover:scale-[1.03] text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
							style={{ textDecoration: 'none' }}
						>
							View My Work
						</a>
						<a
							href="/Manula Kavinda Resume 2025.pdf"
							download
							className="text-lg px-8 py-3 animate-bounce-once delay-150 inline-block rounded-md border border-gray-200 dark:border-gray-800 bg-background hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-0.5 hover:scale-[1.03] text-center font-bold text-gray-700 dark:text-gray-200"
							style={{ textDecoration: 'none' }}
						>
							Download Resume
						</a>
					</motion.div>

					{/* Social Links */}
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{
							hidden: {},
							visible: { transition: { staggerChildren: 0.1 } },
						}}
						className="flex justify-center space-x-6 pt-8"
					>
						{[
							{
								href: 'https://github.com/ManulaK',
								icon: <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />,
							},
							{
								href: 'https://www.linkedin.com/in/manulakavinda/',
								icon: <Linkedin className="w-5 h-5 text-blue-700 dark:text-blue-400" />,
							},
							{
								href: 'https://www.instagram.com/manuu.k_____/',
								icon: <Instagram className="w-5 h-5 text-pink-600 dark:text-pink-400" />,
							},
						].map((item, i) => (
							<motion.a
								key={item.href}
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
								initial={{ opacity: 0, scale: 0.7 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 1 + i * 0.15, duration: 0.5, type: 'spring' }}
								whileHover={{ scale: 1.2, rotate: 6 }}
								className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-md"
							>
								{item.icon}
							</motion.a>
						))}
					</motion.div>
				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2, duration: 0.8 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
			>
				<motion.div
					animate={{
						y: [0, 10, 0],
					}}
					transition={{ duration: 2, repeat: Infinity }}
				>
					<ArrowDown className="w-6 h-6 text-gray-400" />
				</motion.div>
			</motion.div>
		</section>
	);
}
