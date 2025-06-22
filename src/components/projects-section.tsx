'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const projects = [
	{
		title: 'E-Commerce Platform',
		description:
			'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for scalability and performance.',
		image: '/api/placeholder/600/400',
		technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
		liveUrl: '#',
		githubUrl: '#',
		featured: true,
	},
	{
		title: 'AI-Powered Task Manager',
		description:
			'Intelligent task management application that uses AI to prioritize tasks, suggest optimal schedules, and provide productivity insights. Features natural language processing for task creation.',
		image: '/api/placeholder/600/400',
		technologies: ['React', 'Python', 'OpenAI API', 'FastAPI', 'Redis'],
		liveUrl: '#',
		githubUrl: '#',
		featured: true,
	},
	{
		title: 'Real-time Chat Application',
		description:
			'Modern chat application with real-time messaging, file sharing, and video calls. Includes features like message encryption, user presence, and message reactions.',
		image: '/api/placeholder/600/400',
		technologies: ['Socket.io', 'React', 'Node.js', 'WebRTC', 'MongoDB'],
		liveUrl: '#',
		githubUrl: '#',
		featured: false,
	},
	{
		title: 'Portfolio Website',
		description:
			'Personal portfolio website built with modern design principles, featuring smooth animations, responsive design, and optimal performance. Showcases projects and skills effectively.',
		image: '/api/placeholder/600/400',
		technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
		liveUrl: '#',
		githubUrl: '#',
		featured: false,
	},
	{
		title: 'Weather Dashboard',
		description:
			'Interactive weather dashboard with real-time data, 7-day forecasts, and location-based weather alerts. Features beautiful data visualizations and responsive design.',
		image: '/api/placeholder/600/400',
		technologies: ['Vue.js', 'Chart.js', 'Weather API', 'PWA', 'Service Workers'],
		liveUrl: '#',
		githubUrl: '#',
		featured: false,
	},
	{
		title: 'Fitness Tracking App',
		description:
			'Comprehensive fitness tracking application with workout planning, progress analytics, and social features. Includes barcode scanning for food tracking and integration with wearable devices.',
		image: '/api/placeholder/600/400',
		technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit', 'Chart.js'],
		liveUrl: '#',
		githubUrl: '#',
		featured: false,
	},
];

export function ProjectsSection() {
	const featuredProjects = projects.filter((project) => project.featured);
	const otherProjects = projects.filter((project) => !project.featured);

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
					<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						A showcase of my recent work, demonstrating my skills in full-stack development, UI/UX design, and problem-solving.
					</p>
				</motion.div>

				{/* Featured Projects */}
				<div className="space-y-12 mb-20">
					{featuredProjects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
							className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
						>
							<div className="flex-1">
								<div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
									<div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
										<div className="text-center">
											<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
												<Eye className="w-8 h-8 text-white" />
											</div>
											<p className="text-gray-600 dark:text-gray-400">Project Preview</p>
										</div>
									</div>
									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
										<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
											<Button variant="outline" size="sm" className="bg-white/90">
												<ExternalLink className="w-4 h-4 mr-2" />
												Live Demo
											</Button>
											<Button variant="outline" size="sm" className="bg-white/90">
												<Github className="w-4 h-4 mr-2" />
												Code
											</Button>
										</div>
									</div>
								</div>
							</div>

							<div className="flex-1 space-y-6">
								<div>
									<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>
									<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
								</div>

								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex gap-4">
									<Button variant="gradient">
										<ExternalLink className="w-4 h-4 mr-2" />
										View Live
									</Button>
									<Button variant="outline">
										<Github className="w-4 h-4 mr-2" />
										View Code
									</Button>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Other Projects Grid */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">More Projects</h3>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{otherProjects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
								<div className="relative overflow-hidden">
									<div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
										<div className="text-center">
											<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
												<Eye className="w-6 h-6 text-white" />
											</div>
											<p className="text-sm text-gray-600 dark:text-gray-400">Preview</p>
										</div>
									</div>
									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
										<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
											<Button variant="outline" size="sm" className="bg-white/90">
												<ExternalLink className="w-4 h-4" />
											</Button>
											<Button variant="outline" size="sm" className="bg-white/90">
												<Github className="w-4 h-4" />
											</Button>
										</div>
									</div>
								</div>

								<CardHeader className="pb-4">
									<CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
								</CardHeader>

								<CardContent className="pt-0">
									<p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

									<div className="flex flex-wrap gap-2 mb-4">
										{project.technologies.slice(0, 3).map((tech) => (
											<span
												key={tech}
												className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
											>
												{tech}
											</span>
										))}
										{project.technologies.length > 3 && (
											<span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
												+{project.technologies.length - 3} more
											</span>
										)}
									</div>

									<div className="flex gap-2">
										<Button variant="outline" size="sm" className="flex-1">
											<ExternalLink className="w-4 h-4 mr-1" />
											Demo
										</Button>
										<Button variant="outline" size="sm" className="flex-1">
											<Github className="w-4 h-4 mr-1" />
											Code
										</Button>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				{/* View All Projects CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className="text-center mt-16"
				>
					<Button variant="gradient" size="lg" className="text-lg px-8 py-3">
						View All Projects
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
