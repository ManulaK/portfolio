'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
	SiJavascript,
	SiTypescript,
	SiKotlin,
	SiPython,
	SiMysql,
	SiPostgresql,
	SiMongodb,
	SiFirebase,
	SiSwift,
	SiDotnet,
	SiDart,
	SiHtml5,
	SiCss3,
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiExpress,
	SiFlutter,
	SiAndroid,
	SiFlask,
	SiGraphql,
	SiSocketdotio,
	SiGit,
	SiGithub,
	SiRedux,
	SiTailwindcss,
} from 'react-icons/si';
import { FaDatabase, FaProjectDiagram, FaCogs, FaBrain, FaRobot } from 'react-icons/fa';
import { TbBrandVscode } from 'react-icons/tb';

const skillGroups = [
	{
		title: 'Programming Languages',
		icon: FaBrain,
		skills: [
			{ name: 'JavaScript', icon: SiJavascript },
			{ name: 'TypeScript', icon: SiTypescript },
			{ name: 'Python', icon: SiPython },
			{ name: 'SQL', icon: SiMysql },
			{ name: 'Swift', icon: SiSwift },
			{ name: '.NET', icon: SiDotnet },
			{ name: 'Dart', icon: SiDart },
		],
	},
	{
		title: 'Technologies',
		icon: FaCogs,
		skills: [
			{ name: 'HTML5', icon: SiHtml5 },
			{ name: 'CSS3', icon: SiCss3 },
			{ name: 'ReactJS', icon: SiReact },
			{ name: 'NextJS', icon: SiNextdotjs },
			{ name: 'NodeJS', icon: SiNodedotjs },
			{ name: 'Express', icon: SiExpress },
			{ name: 'Flutter', icon: SiFlutter },
			{ name: 'Android', icon: SiAndroid },
			{ name: 'Flask', icon: SiFlask },
			{ name: 'REST', icon: FaProjectDiagram },
			{ name: 'GraphQL', icon: SiGraphql },
			{ name: 'Web Sockets', icon: SiSocketdotio },
		],
	},
	{
		title: 'Databases',
		icon: FaDatabase,
		skills: [
			{ name: 'MongoDB', icon: SiMongodb },
			{ name: 'PostgreSQL', icon: SiPostgresql },
			{ name: 'MySQL', icon: SiMysql },
			{ name: 'Firebase', icon: SiFirebase },
		],
	},
	{
		title: 'Version Control',
		icon: SiGit,
		skills: [
			{ name: 'Git', icon: SiGit },
			{ name: 'GitHub', icon: SiGithub },
		],
	},
	{
		title: 'DevOps & Project Management',
		icon: FaProjectDiagram,
		skills: [
			{ name: 'DevOps Principles', icon: FaCogs },
			{ name: 'Project Management', icon: FaProjectDiagram },
			{ name: 'Agile Methodologies', icon: FaProjectDiagram },
		],
	},
	{
		title: 'CS Fundamentals',
		icon: FaBrain,
		skills: [
			{ name: 'Data Structures', icon: FaBrain },
			{ name: 'Algorithms', icon: FaBrain },
			{ name: 'Design Principles', icon: FaBrain },
		],
	},
	{
		title: 'AI & LLM Integration',
		icon: FaRobot,
		skills: [{ name: 'Integrating LLMs & RAG', icon: FaRobot }],
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
					{skillGroups.map((group, groupIdx) => (
						<motion.div
							key={group.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: groupIdx * 0.1 }}
							viewport={{ once: true }}
						>
							<Card className="h-full hover:shadow-xl transition-all duration-300 group">
								<CardContent className="p-6">
									<div className="flex items-center gap-3 mb-6">
										<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
											<group.icon className="w-6 h-6 text-white" />
										</div>
										<h3 className="text-xl font-bold text-gray-900 dark:text-white">{group.title}</h3>
									</div>
									<div className="flex flex-wrap gap-4">
										{group.skills.map((skill, skillIdx) => (
											<motion.div
												key={skill.name}
												initial={{ opacity: 0, scale: 0.8 }}
												whileInView={{ opacity: 1, scale: 1 }}
												transition={{ duration: 0.5, delay: skillIdx * 0.05 }}
												viewport={{ once: true }}
												className="flex flex-col items-center gap-1 hover:scale-110 transition-transform duration-300"
											>
												{skill.icon ? (
													<skill.icon className="w-8 h-8 mb-1" />
												) : (
													<span className="w-8 h-8 mb-1 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full text-gray-500">
														?
													</span>
												)}
												<span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
													{skill.name}
												</span>
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
