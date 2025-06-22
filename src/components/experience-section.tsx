'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
	{
		company: 'TechCorp Solutions',
		position: 'Senior Software Engineer',
		duration: '2023 - Present',
		location: 'San Francisco, CA',
		description:
			'Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices for code quality and performance.',
		technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'Docker'],
		achievements: [
			'Reduced application load time by 40% through optimization',
			'Led a team of 5 developers on major product features',
			'Implemented CI/CD pipeline reducing deployment time by 60%',
		],
	},
	{
		company: 'InnovateTech',
		position: 'Full Stack Developer',
		duration: '2021 - 2023',
		location: 'New York, NY',
		description:
			'Developed and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver high-quality software solutions.',
		technologies: ['JavaScript', 'Python', 'PostgreSQL', 'Redis', 'Kubernetes'],
		achievements: [
			'Built 3 major features that increased user engagement by 25%',
			'Improved database query performance by 50%',
			'Received 2 performance awards for exceptional work',
		],
	},
	{
		company: 'StartupHub',
		position: 'Frontend Developer',
		duration: '2020 - 2021',
		location: 'Austin, TX',
		description:
			'Focused on creating responsive and accessible user interfaces. Worked closely with designers to implement pixel-perfect designs.',
		technologies: ['React', 'Vue.js', 'Sass', 'Webpack', 'Jest'],
		achievements: [
			'Developed 10+ reusable component libraries',
			'Achieved 95% accessibility score across all applications',
			'Reduced bundle size by 30% through code splitting',
		],
	},
];

export function ExperienceSection() {
	return (
		<section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						My professional journey in software engineering, working with amazing teams and building impactful solutions.
					</p>
				</motion.div>

				<div className="space-y-8">
					{experiences.map((experience, index) => (
						<motion.div
							key={experience.company}
							initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300">
								<div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
								<CardHeader className="pb-4">
									<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
										<div>
											<CardTitle className="text-2xl text-gray-900 dark:text-white">{experience.position}</CardTitle>
											<div className="flex items-center gap-4 mt-2 text-gray-600 dark:text-gray-400">
												<div className="flex items-center gap-1">
													<Building2 className="w-4 h-4" />
													<span className="font-medium">{experience.company}</span>
												</div>
												<div className="flex items-center gap-1">
													<Calendar className="w-4 h-4" />
													<span>{experience.duration}</span>
												</div>
												<div className="flex items-center gap-1">
													<MapPin className="w-4 h-4" />
													<span>{experience.location}</span>
												</div>
											</div>
										</div>
										<div className="flex flex-wrap gap-2">
											{experience.technologies.map((tech) => (
												<span
													key={tech}
													className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</CardHeader>
								<CardContent className="pt-0">
									<p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{experience.description}</p>
									<div className="space-y-2">
										<h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
										<ul className="space-y-2">
											{experience.achievements.map((achievement, achievementIndex) => (
												<li key={achievementIndex} className="flex items-start gap-2">
													<div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
													<span className="text-gray-600 dark:text-gray-300">{achievement}</span>
												</li>
											))}
										</ul>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				{/* Download Resume CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className="text-center mt-16"
				>
					<div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer">
						<span className="font-medium">Download Full Resume</span>
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							/>
						</svg>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
