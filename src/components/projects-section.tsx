'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/animated-section';
import { AnimatedBlobsBackground } from './ui/animated-blobs-background';

const projects = [
	{
		title: "i'Orel Enterprise Application Software",
		organization: 'Orel Corporation Sri Lanka',
		url: 'https://i.orel.com',
		date: 'October 2023 - January 2025',
		description: 'Enterprise-level application software for business management and operations.',
		technologies: ['ReactJS', 'Node.js', 'TypeScript', 'Express.js', 'MongoDB'],
	},
	{
		title: 'Global E-Shop Web Application',
		organization: 'Orel Corporation Sri Lanka',
		url: 'https://shop.orel.com',
		date: 'December 2024 - January 2025',
		description: 'E-commerce platform for global retail operations with payment integration.',
		technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
	},
	{
		title: '"SENSEZ" - Mobile Application for Hard of Hearing Community',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'January 2024 - November 2024',
		description: 'Mobile app to improve environmental awareness for hard of hearing individuals using real-time data.',
		technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Real-time sensors'],
	},
	{
		title: 'Retrieval Augmented Generation (RAG) Based Communication Helper Assistant',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'January 2024 - November 2024',
		description: 'AI-powered communication assistant using RAG technology for enhanced user interactions.',
		technologies: ['Python', 'LangChain', 'OpenAI API', 'Vector databases', 'React'],
	},
	{
		title: 'Enterprise E-Commerce Android Application',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'September 2024 - October 2024',
		description: 'Android-based e-commerce application with payment processing and inventory management.',
		technologies: ['Android SDK', 'Kotlin', 'Java', 'SQLite', 'REST APIs'],
	},
	{
		title: '"DinoAR" - Mobile Application Enhanced by Augmented Reality',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'May 2024 - June 2024',
		description: 'Educational mobile app with AR features for interactive dinosaur learning experiences.',
		technologies: ['Unity', 'C#', 'ARKit', 'ARCore', '3D modeling'],
	},
	{
		title: '"EventMania" - Event Booking & Organizing iOS Application',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'April 2024 - May 2024',
		description: 'iOS application for event booking and management with calendar integration.',
		technologies: ['Swift', 'SwiftUI', 'Core Data', 'EventKit', 'Push notifications'],
	},
	{
		title: '"LittleDeveloper" - Learning Management iOS Application',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'May 2024 - June 2024',
		description: 'Educational platform for teaching programming concepts to children.',
		technologies: ['Swift', 'UIKit', 'Core Data', 'GameKit', 'Educational APIs'],
	},
	{
		title: '"HealthCart" - Apple WatchOS Application',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'May 2024 - June 2024',
		description: 'Health monitoring application for Apple Watch with fitness tracking features.',
		technologies: ['Swift', 'WatchKit', 'HealthKit', 'Core Motion', 'CloudKit'],
	},
	{
		title: '"QranLingo" - Quran Learning Management Mobile Application',
		organization: 'Axcer Innovations Sri Lanka',
		date: 'April 2023 - August 2023',
		description: 'Mobile application for Quran learning with audio recitation and progress tracking.',
		technologies: ['Flutter', 'Dart', 'Firebase', 'Audio processing', 'SQLite'],
	},
];

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
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
					{projects.map((project, idx) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: idx * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.05, rotate: -2 }}
						>
							<Card className="h-full flex flex-col p-6 hover:shadow-2xl transition-shadow duration-300">
								<CardContent className="mb-3">
									<h3 className="text-lg font-bold mb-2">
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
									<div className="text-sm font-medium mb-2">{project.organization}</div>
									{project.description && (
										<p className="text-sm text-gray-600 mb-3 leading-relaxed">{project.description}</p>
									)}
									{project.technologies && (
										<div className="flex flex-wrap gap-1 mb-2">
											{project.technologies.map((tech, techIdx) => (
												<span
													key={techIdx}
													className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
												>
													{tech}
												</span>
											))}
										</div>
									)}
									<div className="text-xs text-gray-500 mt-auto">{project.date}</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</AnimatedSection>
	);
}
