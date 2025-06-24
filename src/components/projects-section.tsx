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
	},
	{
		title: 'Global E-Shop Web Application',
		organization: 'Orel Corporation Sri Lanka',
		url: 'https://shop.orel.com',
		date: 'December 2024 - January 2025',
	},
	{
		title: '"SENSEZ" - Mobile Application for Hard of Hearing Community',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'January 2024 - November 2024',
	},
	{
		title: 'Retrieval Augmented Generation (RAG) Based Communication Helper Assistant',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'January 2024 - November 2024',
	},
	{
		title: 'Enterprise E-Commerce Android Application',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'September 2024 - October 2024',
	},
	{
		title: '"DinoAR" - Mobile Application Enhanced by Augmented Reality',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'May 2024 - June 2024',
	},
	{
		title: '"EventMania" - Event Booking & Organizing IOS Application',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'April 2024 - May 2024',
	},
	{
		title: '"LittleDeveloper" - Learning Management IOS Application',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'May 2024 - June 2024',
	},
	{
		title: '"HealthCart" - Apple WatchOS Application',
		organization: 'Sri Lanka Institute of Information Technology',
		date: 'May 2024 - June 2024',
	},
	{
		title: '"QranLingo" - Quran Learning Management Mobile Application',
		organization: 'Axcer Innovations Sri Lanka',
		date: 'April 2023 - August 2023',
	},
];

export function ProjectsSection() {
	return (
		<AnimatedSection id="projects" className="py-8 sm:py-12 md:py-20 bg-white scroll-mt-20 relative overflow-hidden">
			<AnimatedBlobsBackground
				blobs={[
					{ color: 'bg-green-400', className: '-top-24 right-1/4 w-64 h-64' },
					{
						color: 'bg-yellow-400',
						className: 'top-1/2 left-0 w-80 h-80 animation-delay-2000',
						style: { transform: 'translateY(-50%)' },
					},
					{ color: 'bg-blue-400', className: '-bottom-24 right-1/3 w-72 h-72 animation-delay-4000' },
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
									<h3 className="text-lg font-bold mb-1">
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
									<div className="text-sm font-medium mb-1">{project.organization}</div>
									<div className="text-xs text-gray-500">{project.date}</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</AnimatedSection>
	);
}
