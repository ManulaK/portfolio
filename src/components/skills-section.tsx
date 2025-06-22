'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Cloud, Palette, Smartphone, Globe } from 'lucide-react';

const skillCategories = [
	{
		title: 'Frontend Development',
		icon: Code,
		skills: [
			{ name: 'React', level: 95 },
			{ name: 'Next.js', level: 90 },
			{ name: 'TypeScript', level: 88 },
			{ name: 'Tailwind CSS', level: 92 },
			{ name: 'Vue.js', level: 85 },
		],
	},
	{
		title: 'Backend Development',
		icon: Database,
		skills: [
			{ name: 'Node.js', level: 90 },
			{ name: 'Python', level: 85 },
			{ name: 'Express.js', level: 88 },
			{ name: 'FastAPI', level: 80 },
			{ name: 'GraphQL', level: 75 },
		],
	},
	{
		title: 'Cloud & DevOps',
		icon: Cloud,
		skills: [
			{ name: 'AWS', level: 85 },
			{ name: 'Docker', level: 80 },
			{ name: 'Kubernetes', level: 70 },
			{ name: 'CI/CD', level: 85 },
			{ name: 'Terraform', level: 75 },
		],
	},
	{
		title: 'UI/UX Design',
		icon: Palette,
		skills: [
			{ name: 'Figma', level: 85 },
			{ name: 'Adobe XD', level: 80 },
			{ name: 'Prototyping', level: 88 },
			{ name: 'Design Systems', level: 82 },
			{ name: 'User Research', level: 75 },
		],
	},
	{
		title: 'Mobile Development',
		icon: Smartphone,
		skills: [
			{ name: 'React Native', level: 80 },
			{ name: 'Flutter', level: 70 },
			{ name: 'iOS Development', level: 75 },
			{ name: 'Android Development', level: 70 },
			{ name: 'PWA', level: 85 },
		],
	},
	{
		title: 'Other Technologies',
		icon: Globe,
		skills: [
			{ name: 'MongoDB', level: 85 },
			{ name: 'PostgreSQL', level: 80 },
			{ name: 'Redis', level: 75 },
			{ name: 'WebRTC', level: 70 },
			{ name: 'Socket.io', level: 80 },
		],
	},
];

export function SkillsSection() {
	return (
		<section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Skills & Technologies</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						A comprehensive overview of my technical skills and expertise across various domains of software development.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
							viewport={{ once: true }}
						>
							<Card className="h-full hover:shadow-xl transition-all duration-300 group">
								<CardContent className="p-6">
									<div className="flex items-center gap-3 mb-6">
										<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
											<category.icon className="w-6 h-6 text-white" />
										</div>
										<h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
									</div>

									<div className="space-y-4">
										{category.skills.map((skill, skillIndex) => (
											<motion.div
												key={skill.name}
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
												viewport={{ once: true }}
											>
												<div className="flex justify-between items-center mb-2">
													<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
														{skill.name}
													</span>
													<span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
												</div>
												<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
													<motion.div
														initial={{ width: 0 }}
														whileInView={{ width: `${skill.level}%` }}
														transition={{ duration: 1, delay: skillIndex * 0.1 }}
														viewport={{ once: true }}
														className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
													/>
												</div>
											</motion.div>
										))}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				{/* Additional Skills */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className="mt-16"
				>
					<div className="text-center mb-8">
						<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Additional Skills & Tools</h3>
						<p className="text-gray-600 dark:text-gray-300">Other technologies and tools I work with</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
						{[
							'Git',
							'GitHub',
							'VS Code',
							'Postman',
							'Jest',
							'Cypress',
							'Webpack',
							'Vite',
							'NPM',
							'Yarn',
							'ESLint',
							'Prettier',
							'Storybook',
							'Swagger',
							'Jira',
							'Confluence',
							'Slack',
							'Discord',
							'Figma',
							'Adobe Creative Suite',
							'Sketch',
							'InVision',
							'Zeplin',
							'Abstract',
						].map((tool, index) => (
							<motion.div
								key={tool}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: index * 0.05 }}
								viewport={{ once: true }}
								className="px-4 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-md transition-all duration-300 hover:scale-105"
							>
								<span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tool}</span>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Learning Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					viewport={{ once: true }}
					className="mt-16 text-center"
				>
					<Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0">
						<CardContent className="p-8">
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Currently Learning</h3>
							<p className="text-gray-600 dark:text-gray-300 mb-6">
								I&apos;m always expanding my skill set to stay current with the latest technologies and best practices.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								{['Rust', 'WebAssembly', 'Machine Learning', 'Blockchain', 'Three.js', 'Svelte'].map((skill, index) => (
									<motion.div
										key={skill}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										viewport={{ once: true }}
										className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700"
									>
										<span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
									</motion.div>
								))}
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</section>
	);
}
