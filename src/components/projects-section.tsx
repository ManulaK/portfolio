'use client';

import { motion } from 'framer-motion';

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
		<section id="projects" className="py-20 bg-white dark:bg-gray-950">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Projects</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						A selection of my real-world software projects, spanning web, mobile, AI, and enterprise solutions.
					</p>
				</motion.div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, idx) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: idx * 0.1 }}
							viewport={{ once: true }}
						>
							<div className="h-full flex flex-col rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
								<div className="mb-3">
									<h3 className="text-lg font-bold text-blue-900 dark:text-blue-200 mb-1">
										{project.url ? (
											<a
												href={project.url}
												target="_blank"
												rel="noopener noreferrer"
												className="hover:underline hover:text-blue-600 dark:hover:text-blue-400"
											>
												{project.title}
											</a>
										) : (
											project.title
										)}
									</h3>
									<div className="text-sm text-blue-700 dark:text-blue-300 font-medium mb-1">{project.organization}</div>
									<div className="text-xs text-gray-500 dark:text-gray-400">{project.date}</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
