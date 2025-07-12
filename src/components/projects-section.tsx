'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/animated-section';
import { AnimatedBlobsBackground } from './ui/animated-blobs-background';
import React from 'react'; // Added missing import for React

const projects = [
	{
		title: "i'Orel Enterprise Application Software",
		organization: 'Orel Corporation Sri Lanka',
		url: 'https://i.orel.com',
		date: 'October 2023 - Present',
		description:
			'Enterprise-level employee empowerment app with web and mobile platforms. Features organizational charts, progress tracking, digital ID integration, meal modules, and meeting management. Contributed to full-stack development for 1.5+ years with ongoing active development.',
		technologies: [
			'ReactJS',
			'Node.js',
			'TypeScript',
			'Express.js',
			'Microservices',
			'PostgreSQL',
			'Radis',
			'RabbitMQ',
			'Redux',
			'Kubernetes',
			'Docker',
			'CI/CD',
			'Git',
			'Flutter',
			'Firebase',
			'Real-time APIs',
			'AWS',
		],
		images: null, // Coming soon
		links: [
			{ name: 'Web App', url: 'https://i.orel.com' },
			{ name: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.orelit.simpli5' },
			{ name: 'App Store', url: 'https://apps.apple.com/us/app/iorel/id6468539240' },
		],
	},
	{
		title: 'Global E-Shop Web Application',
		organization: 'Orel Corporation Sri Lanka',
		url: 'https://shop.orel.com',
		date: 'December 2024 - January 2025',
		description:
			'Multi-region e-commerce platform distributed across Sri Lanka, Pakistan, UAE, and Singapore with separate localized platforms for each market. Features microservice architecture with REST APIs, AWS infrastructure, and integrated mobile app for business partners.',
		technologies: [
			'Next.js',
			'Tailwind CSS',
			'Node.js',
			'TypeScript',
			'Express.js',
			'Microservices',
			'PostgreSQL',
			'Radis',
			'RabbitMQ',
			'Redux',
			'Kubernetes',
			'Docker',
			'CI/CD',
			'Git',
			'Flutter',
			'Firebase',
			'Real-time APIs',
			'AWS',
		],
		images: null, // Coming soon
		links: [
			{ name: 'Sri Lanka Shop', url: 'https://shop.orel.com' },
			{ name: 'Mobile App', url: 'https://play.google.com/store/apps/details?id=com.iorel.cashback&hl=en' },
		],
	},
	{
		title: '"SENZES" - AI-Powered Mobile Application for Hearing-Impaired Community',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'January 2024 - November 2024',
		description:
			'Final year academic research project developing an AI-powered mobile application for hearing-impaired individuals. Features STT, TTS, voice recognition, warning alert detection, and real-time environmental sound classification using CNN models. Includes multimodal feedback systems and user-centered design for accessibility.',
		technologies: [
			'Flutter',
			'Dart',
			'Python',
			'CNN',
			'Machine Learning',
			'Deep Learning',
			'STT',
			'TTS',
			'Real-time Processing',
			'Spectrograms',
			'Multimodal Feedback',
		],
		images: null, // Coming soon
		links: [
			{ name: 'Project Website', url: 'https://senzes-web.vercel.app/' },
			{ name: 'Mobile App GitHub', url: 'https://github.com/CodeBrigade404/SENZES_APP.git' },
		],
	},
	{
		title: 'Retrieval Augmented Generation (RAG) Based Communication Helper Assistant',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'January 2024 - November 2024',
		description:
			'AI-powered communication assistant using RAG technology for enhanced user interactions. Built with FastAPI backend and REST APIs, specifically designed for hearing-impaired individuals with personalized assistance features. Integrates OpenAI models with LangChain for intelligent conversation management and real-time communication support.',
		technologies: ['Python', 'LangChain', 'OpenAI API', 'Vector databases', 'FastAPI', 'REST APIs', 'MongoDB'],
		images: null, // Coming soon
		links: [{ name: 'GitHub', url: 'https://github.com/CodeBrigade404/openai_communication_helper_assistant.git' }],
	},
	{
		title: 'Enterprise E-Commerce Android Application',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'September 2024 - October 2024',
		description:
			'Modern Android e-commerce application built with Jetpack Compose featuring comprehensive user management, inventory management, shopping cart functionality, and secure checkout system. Demonstrates modern Android development practices with Material Design 3 components and MVVM architecture.',
		technologies: ['Android SDK', 'Kotlin', 'Jetpack Compose', 'MVVM', 'Material Design 3', 'REST APIs'],
		images: null, // Coming soon
		links: [{ name: 'GitHub', url: 'https://github.com/CodeBrigade404/EMA_for_EAD.git' }],
	},
	{
		title: '"DinoAR" - Mobile Application Enhanced by Augmented Reality',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'May 2024 - June 2024',
		description:
			'Educational mobile application with AR features for interactive dinosaur learning experiences. Built with Flutter framework and AR technology to provide immersive educational content. Features 3D dinosaur models, interactive AR overlays, and educational information about prehistoric creatures.',
		technologies: ['Flutter', 'Dart', 'AR Technology', 'ARKit', 'ARCore'],
		images: null, // Coming soon
		links: [{ name: 'GitHub', url: 'https://github.com/ManulaK/dino_ar.git' }],
	},
	{
		title: '"EventMania" - Event Booking & Organizing iOS Application',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'April 2024 - May 2024',
		description:
			'iOS application for event booking and management with calendar integration. Built with Swift and SwiftUI for modern iOS development. Features comprehensive event management, booking system, calendar synchronization, and user-friendly interface for organizing and attending events.',
		technologies: ['Swift', 'SwiftUI', 'Core Data', 'EventKit', 'Push notifications', 'iOS SDK'],
		images: null, // Coming soon
		links: [{ name: 'GitHub', url: 'https://github.com/ManulaK/EventMania.git' }],
	},
	{
		title: '"LittleDeveloper" - Learning Management iOS Application',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'May 2024 - June 2024',
		description:
			'Educational platform for teaching programming concepts to children. Built with Swift and UIKit for iOS development. Features interactive learning modules, gamified programming lessons, progress tracking, and child-friendly interface designed to make coding accessible and engaging for young learners.',
		technologies: ['Swift', 'UIKit', 'Core Data', 'GameKit', 'Educational APIs', 'iOS SDK'],
		images: null, // Coming soon
		links: [{ name: 'GitHub', url: 'https://github.com/ManulaK/LittleDeveloper.git' }],
	},
	{
		title: '"HealthCart" - Apple WatchOS Application',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'May 2024 - June 2024',
		description:
			'Health monitoring application for Apple Watch with fitness tracking features. Built with Swift and WatchKit for watchOS development. Features calorie tracking from Food City items, nutrition monitoring, health metrics visualization, and seamless integration with Apple Health ecosystem for comprehensive wellness management.',
		technologies: ['Swift', 'WatchKit', 'HealthKit', 'Core Motion', 'CloudKit', 'watchOS SDK'],
		images: null, // Coming soon
		links: [{ name: 'GitHub', url: 'https://github.com/ManulaK/HealthCart.git' }],
	},
	{
		title: '"QranLingo" - Quran Learning Management Mobile Application',
		organization: 'Axcer Innovations Sri Lanka',
		date: 'April 2023 - August 2023',
		description:
			'Mobile application for Quran learning with audio recitation and progress tracking. Built with Flutter and Dart for cross-platform development during internship. Features Arabic text display, audio recitation, progress tracking, interactive lessons, and child-friendly interface designed specifically for Arabic children learning Quran.',
		technologies: ['Flutter', 'Dart', 'Firebase', 'Audio processing', 'Arabic UI'],
		images: null, // Coming soon
	},
	{
		title: '"Gas Measuring App" - Car RPM & Fuel Monitoring Application',
		organization: 'Freelance Project',
		date: 'December 2024 - January 2025',
		description:
			'Flutter-based mobile application for measuring car RPM and displaying gas values in percentages. Built as a freelance project with real-time sensor data processing, RPM monitoring, fuel level tracking, and intuitive dashboard interface for automotive diagnostics and monitoring.',
		technologies: ['Flutter', 'Dart', 'Firebase', 'Real-time Data', 'Dashboard UI', 'Automotive APIs'],
		images: null, // Coming soon
		links: [{ name: 'GitHub', url: 'https://github.com/ManulaK/gas_measuring_app.git' }],
	},
	{
		title: '"Ceylon Explorer" - Tourism Booking Website',
		organization: 'Freelance Project',
		date: 'January 2025 - March 2025',
		description:
			'Web application for tourism booking platform featuring vehicle rentals and accommodation booking. Built with modern web technologies for seamless user experience. Features comprehensive booking system, payment integration, user authentication, and responsive design for tourism services in Sri Lanka. Currently in active development.',
		technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Booking System'],
		images: null, // Coming soon
		links: [
			{ name: 'GitHub', url: 'https://github.com/ManulaK/ceylon-explorer-v1.git' },
			{ name: 'Live Demo', url: 'https://ceylon-explorer-v1-j36k.vercel.app' },
		],
	},
];

// Coming Soon Component
const ComingSoonImage = () => (
	<motion.div
		initial={{ opacity: 0, scale: 0.9 }}
		animate={{ opacity: 1, scale: 1 }}
		transition={{ duration: 0.5 }}
		className="relative w-full h-48 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg overflow-hidden border-2 border-dashed border-blue-200"
	>
		<div className="absolute inset-0 flex flex-col items-center justify-center">
			<motion.div
				animate={{
					scale: [1, 1.1, 1],
					rotate: [0, 5, -5, 0],
				}}
				transition={{
					duration: 3,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mb-3"
			>
				<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
			</motion.div>
			<div className="text-center">
				<p className="text-blue-600 font-semibold text-sm mb-1">Coming Soon</p>
				<p className="text-blue-400 text-xs">Project images will be added soon</p>
			</div>
		</div>
		<motion.div
			animate={{
				opacity: [0.3, 0.6, 0.3],
				scale: [1, 1.05, 1],
			}}
			transition={{
				duration: 2,
				repeat: Infinity,
				ease: 'easeInOut',
			}}
			className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium"
		>
			NEW
		</motion.div>
	</motion.div>
);

// Platform Icon Component
const PlatformIcon = ({ platform }: { platform: string }) => {
	const getIcon = () => {
		switch (platform.toLowerCase()) {
			case 'web app':
				return (
					<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0-9c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"
						/>
					</svg>
				);
			case 'google play':
				return (
					<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
						<path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
					</svg>
				);
			case 'app store':
				return (
					<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
						<path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
					</svg>
				);
			default:
				return (
					<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
						/>
					</svg>
				);
		}
	};

	return getIcon();
};

// Project Image Gallery Component
const ProjectImageGallery = ({ images }: { images: string[] }) => {
	const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

	return (
		<div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 group">
			<Image
				src={images[currentImageIndex]}
				alt="Project screenshot"
				fill
				style={{ objectFit: 'cover' }}
				className="object-cover transition-transform duration-300 group-hover:scale-105"
			/>

			{/* Image Navigation Dots */}
			{images.length > 1 && (
				<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentImageIndex(index)}
							className={`w-2 h-2 rounded-full transition-all duration-200 ${
								index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
							}`}
						/>
					))}
				</div>
			)}

			{/* Image Counter */}
			{images.length > 1 && (
				<div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
					{currentImageIndex + 1} / {images.length}
				</div>
			)}

			{/* Navigation Arrows */}
			{images.length > 1 && (
				<>
					<button
						onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
						className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
					>
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<button
						onClick={() => setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
						className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
					>
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</>
			)}
		</div>
	);
};

// Project Card Component with Height Management and Hover Animations
const ProjectCard = ({ project, idx }: { project: any; idx: number }) => {
	const [isExpanded, setIsExpanded] = React.useState(false);
	const [showExpandButton, setShowExpandButton] = React.useState(false);
	const [isDescriptionExpanded, setIsDescriptionExpanded] = React.useState(false);
	const [isTechStackExpanded, setIsTechStackExpanded] = React.useState(false);
	const [isHovered, setIsHovered] = React.useState(false);
	const cardRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (cardRef.current) {
			const cardHeight = cardRef.current.scrollHeight;
			const maxHeight = 800; // Increased maximum height before showing expand button
			setShowExpandButton(cardHeight > maxHeight);
		}
	}, []);

	// Auto-expand on hover
	React.useEffect(() => {
		if (isHovered) {
			setIsDescriptionExpanded(true);
			setIsTechStackExpanded(true);
		} else {
			setIsDescriptionExpanded(false);
			setIsTechStackExpanded(false);
		}
	}, [isHovered]);

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, delay: idx * 0.1 }}
			viewport={{ once: true }}
			whileHover={{ scale: 1.02 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
		>
			<Card className="project-card flex flex-col p-6 hover:shadow-2xl transition-all duration-500 ease-out">
				<CardContent ref={cardRef} className="flex-1 flex flex-col">
					{/* Project Image */}
					<div className="mb-4">{project.images ? <ProjectImageGallery images={project.images} /> : <ComingSoonImage />}</div>

					{/* Project Header - Always Visible */}
					<div className="mb-4 flex-1">
						<h3 className="text-md font-bold mb-1">
							{project.url ? (
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline hover:text-blue-600"
								>
									{project.title}
								</a>
							) : (
								project.title
							)}
						</h3>
						<div className="text-sm font-medium text-gray-700 mb-2">{project.organization}</div>

						{/* Short Description - Always Visible with Read More */}
						<motion.div
							className="mb-3"
							animate={{
								height: 'auto',
								opacity: 1,
							}}
							transition={{ duration: 0.4, ease: 'easeOut' }}
						>
							<motion.p
								className="text-sm text-gray-600 leading-relaxed"
								animate={{
									opacity: 1,
									y: 0,
								}}
								transition={{ duration: 0.3, ease: 'easeOut' }}
							>
								{isDescriptionExpanded ? project.description : project.description.split('.')[0] + '.'}
							</motion.p>
							{project.description.split('.').length > 1 && (
								<motion.button
									onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
									className="text-xs text-blue-600 hover:text-blue-700 font-medium mt-1 transition-colors duration-200"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									animate={{ opacity: isHovered ? 0 : 1 }}
									transition={{ duration: 0.2 }}
								>
									{isDescriptionExpanded ? 'Read Less' : 'Read More'}
								</motion.button>
							)}
						</motion.div>

						{/* Technologies - Always Visible with Expand */}
						{project.technologies && (
							<motion.div
								className="mb-3"
								animate={{
									height: 'auto',
									opacity: 1,
								}}
								transition={{ duration: 0.4, ease: 'easeOut' }}
							>
								<motion.div
									className="flex flex-wrap gap-1"
									animate={{
										opacity: 1,
										y: 0,
									}}
									transition={{ duration: 0.3, ease: 'easeOut' }}
								>
									{project.technologies.slice(0, 3).map((tech: string, techIdx: number) => (
										<motion.span
											key={techIdx}
											className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
											whileHover={{ scale: 1.05, y: -1 }}
											transition={{ duration: 0.2 }}
										>
											{tech}
										</motion.span>
									))}
									{!isTechStackExpanded && project.technologies.length > 3 && (
										<motion.button
											onClick={() => setIsTechStackExpanded(true)}
											className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium hover:bg-gray-200 transition-colors duration-200"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											animate={{ opacity: isHovered ? 0 : 1 }}
											transition={{ duration: 0.2 }}
										>
											+{project.technologies.length - 3} more
										</motion.button>
									)}
									{isTechStackExpanded &&
										project.technologies.slice(3).map((tech: string, techIdx: number) => (
											<motion.span
												key={techIdx + 3}
												className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
												initial={{ opacity: 0, scale: 0.8 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{ duration: 0.3, delay: techIdx * 0.05 }}
												whileHover={{ scale: 1.05, y: -1 }}
											>
												{tech}
											</motion.span>
										))}
									{isTechStackExpanded && project.technologies.length > 3 && (
										<motion.button
											onClick={() => setIsTechStackExpanded(false)}
											className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium hover:bg-gray-200 transition-colors duration-200"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											animate={{ opacity: isHovered ? 0 : 1 }}
											transition={{ duration: 0.2 }}
										>
											Show Less
										</motion.button>
									)}
								</motion.div>
							</motion.div>
						)}

						{/* Platform Links - Always Visible */}
						{project.links && (
							<motion.div
								className="flex flex-wrap gap-2"
								animate={{
									opacity: 1,
									y: 0,
								}}
								transition={{ duration: 0.3, ease: 'easeOut' }}
							>
								{project.links.map((link: any, idx: number) => (
									<motion.a
										key={idx}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1.5 text-xs bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-gray-700 px-3 py-1.5 rounded-full transition-all duration-200 border border-blue-200 hover:border-blue-300 hover:shadow-sm"
										whileHover={{ scale: 1.05, y: -2 }}
										whileTap={{ scale: 0.95 }}
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.3, delay: idx * 0.1 }}
									>
										<PlatformIcon platform={link.name} />
										{link.name}
									</motion.a>
								))}
							</motion.div>
						)}
					</div>

					{/* Detailed Content - Smooth Expand/Collapse */}
					<motion.div
						initial={false}
						animate={{
							height: isExpanded ? 'auto' : 0,
							opacity: isExpanded ? 1 : 0,
							overflow: isExpanded ? 'visible' : 'hidden',
							scale: isExpanded ? 1 : 0.95,
						}}
						transition={{
							height: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
							opacity: { duration: 0.4, ease: 'easeInOut' },
							scale: { duration: 0.3, ease: 'easeInOut' },
						}}
						className="overflow-hidden"
					>
						{/* Full Description */}
						<div className="mb-4">
							<div className="text-xs font-semibold text-gray-700 mb-2">Full Description:</div>
							<p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
						</div>

						{/* Project Highlights */}
						{project.highlights && (
							<div className="mb-4">
								<div className="text-xs font-semibold text-gray-700 mb-2">Key Contributions:</div>
								<ul className="text-xs text-gray-600 space-y-1">
									{project.highlights.map((highlight: string, idx: number) => (
										<li key={idx} className="flex items-start">
											<span className="text-green-500 mr-2">•</span>
											{highlight}
										</li>
									))}
								</ul>
							</div>
						)}

						{/* All Technologies */}
						{project.technologies && project.technologies.length > 6 && (
							<div className="mb-4">
								<div className="text-xs font-semibold text-gray-700 mb-2">Full Tech Stack:</div>
								<div className="flex flex-wrap gap-1">
									{project.technologies.map((tech: string, techIdx: number) => (
										<span
											key={techIdx}
											className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						)}

						<div className="text-xs text-gray-500">{project.date}</div>
					</motion.div>
				</CardContent>

				{/* Expand/Collapse Button */}
				{showExpandButton && (
					<div className="flex justify-center pt-2 border-t border-gray-100 mt-auto">
						<button
							onClick={() => setIsExpanded(!isExpanded)}
							className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
						>
							{isExpanded ? (
								<>
									<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
									</svg>
									Show Less
								</>
							) : (
								<>
									<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
									</svg>
									Show More
								</>
							)}
						</button>
					</div>
				)}
			</Card>
		</motion.div>
	);
};

export function ProjectsSection() {
	return (
		<AnimatedSection id="projects" className="py-8 sm:py-12 md:py-20 bg-white scroll-mt-20 relative overflow-hidden">
			<AnimatedBlobsBackground
				blobs={[
					{ color: 'bg-green-200', className: '-top-24 right-1/4 w-64 h-64' },
					{
						color: 'bg-yellow-200',
						className: 'top-1/2 left-0 w-80 h-80 animation-delay-2000',
						style: { transform: 'translateY(-50%)' },
					},
					{ color: 'bg-blue-200', className: '-bottom-24 right-1/3 w-72 h-72 animation-delay-4000' },
				]}
			/>
			<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<motion.h2
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.7 }}
						className="text-4xl sm:text-5xl font-bold mb-6"
					>
						Projects
					</motion.h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						A selection of my real-world software projects, spanning web, mobile, AI, and enterprise solutions.
					</p>
				</motion.div>

				{/* Masonry-style layout with smooth transitions */}
				<div className="masonry-container columns-1 md:columns-2 xl:columns-3 gap-6 sm:gap-8 md:gap-10 space-y-6 sm:space-y-8 md:space-y-10">
					{projects.map((project, idx) => (
						<div key={project.title} className="masonry-item mb-6 sm:mb-8 md:mb-10">
							<ProjectCard project={project} idx={idx} />
						</div>
					))}
				</div>
			</div>
		</AnimatedSection>
	);
}
