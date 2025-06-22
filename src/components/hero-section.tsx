'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';

export function HeroSection() {
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
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
						suppressHydrationWarning
					>
						<span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
						<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for opportunities</span>
					</motion.div>

					{/* Main Title */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
					>
						<span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
							Manula Kavinda
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
						<Button size="lg" variant="gradient" className="text-lg px-8 py-3">
							View My Work
						</Button>
						<Button size="lg" variant="outline" className="text-lg px-8 py-3">
							Download Resume
						</Button>
					</motion.div>

					{/* Social Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1, duration: 0.8 }}
						className="flex justify-center space-x-6 pt-8"
					>
						<a
							href="https://github.com/ManulaK"
							className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
						</a>
						<a
							href="https://www.linkedin.com/in/manulakavinda/"
							className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Linkedin className="w-5 h-5 text-blue-700 dark:text-blue-400" />
						</a>
						<a
							href="https://www.instagram.com/manuu.k_____/"
							className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-all duration-300 hover:scale-110"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Instagram className="w-5 h-5 text-pink-600 dark:text-pink-400" />
						</a>
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
				<motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
					<ArrowDown className="w-6 h-6 text-gray-400" />
				</motion.div>
			</motion.div>
		</section>
	);
}
