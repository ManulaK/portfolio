'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
	SiJavascript,
	SiTypescript,
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
} from 'react-icons/si';
import { FaDatabase, FaProjectDiagram, FaCogs, FaBrain, FaRobot, FaFigma, FaJira, FaRegKeyboard } from 'react-icons/fa';
import { AnimatedSection } from '@/components/ui/animated-section';

type Skill = {
	name: string;
	icon: React.ComponentType<{ className?: string }>;
};

type SkillGroup = {
	title: string;
	icon: React.ComponentType<{ className?: string }>;
	skills: Skill[];
};

const skillGroups: SkillGroup[] = [
	{
		title: 'Programming Languages',
		icon: FaBrain,
		skills: [
			{ name: 'JavaScript', icon: SiJavascript },
			{ name: 'TypeScript', icon: SiTypescript },
			{ name: 'Java', icon: FaBrain },
			{ name: 'Kotlin', icon: FaBrain },
			{ name: 'Python', icon: SiPython },
			{ name: 'Swift', icon: SiSwift },
			{ name: 'Dart', icon: SiDart },
			{ name: 'SQL', icon: SiMysql },
			{ name: 'C#', icon: SiDotnet },
		],
	},
	{
		title: 'Frameworks & Technologies',
		icon: FaCogs,
		skills: [
			{ name: 'ReactJS', icon: SiReact },
			{ name: 'Next.js', icon: SiNextdotjs },
			{ name: 'Node.js', icon: SiNodedotjs },
			{ name: 'Express.js', icon: SiExpress },
			{ name: '.NET', icon: SiDotnet },
			{ name: 'Flutter', icon: SiFlutter },
			{ name: 'Android SDK', icon: SiAndroid },
			{ name: 'SwiftUI', icon: SiSwift },
			{ name: 'Flask', icon: SiFlask },
			{ name: 'Strapi', icon: FaCogs },
			{ name: 'LangChain', icon: FaRobot },
			{ name: 'Prisma', icon: FaDatabase },
			{ name: 'HTML', icon: SiHtml5 },
			{ name: 'CSS', icon: SiCss3 },
			{ name: 'RESTful APIs', icon: FaProjectDiagram },
			{ name: 'GraphQL', icon: SiGraphql },
			{ name: 'WebSockets', icon: SiSocketdotio },
		],
	},
	{
		title: 'Frontend UI Libraries',
		icon: FaCogs,
		skills: [
			{ name: 'Ant Design', icon: FaCogs },
			{ name: 'shadcn/ui', icon: FaCogs },
			{ name: 'Charaka', icon: FaCogs },
			{ name: 'Material UI (MUI)', icon: FaCogs },
			{ name: 'Tailwind CSS', icon: FaCogs },
			{ name: 'Bootstrap', icon: FaCogs },
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
		title: 'Tools & Platforms',
		icon: FaProjectDiagram,
		skills: [
			{ name: 'Git', icon: SiGit },
			{ name: 'GitHub', icon: SiGithub },
			{ name: 'Azure DevOps', icon: FaCogs },
			{ name: 'Postman', icon: FaCogs },
			{ name: 'VS Code', icon: FaRegKeyboard },
			{ name: 'Android Studio', icon: SiAndroid },
			{ name: 'Xcode', icon: SiSwift },
			{ name: 'CI/CD Pipelines', icon: FaCogs },
			{ name: 'Figma', icon: FaFigma },
			{ name: 'Jira', icon: FaJira },
		],
	},
	{
		title: 'DevOps & Project Practices',
		icon: FaCogs,
		skills: [
			{ name: 'Agile (Scrum/Kanban)', icon: FaProjectDiagram },
			{ name: 'DevOps Principles', icon: FaCogs },
			{ name: 'SDLC', icon: FaProjectDiagram },
			{ name: 'Test-Driven Development (TDD)', icon: FaCogs },
			{ name: 'Code Reviews', icon: FaCogs },
			{ name: 'Project Management Tools (Jira, Trello)', icon: FaJira },
		],
	},
	{
		title: 'Core Computer Science',
		icon: FaBrain,
		skills: [
			{ name: 'Data Structures', icon: FaBrain },
			{ name: 'Algorithms', icon: FaBrain },
			{ name: 'Object-Oriented Design', icon: FaBrain },
			{ name: 'Software Design Patterns', icon: FaBrain },
			{ name: 'System Architecture', icon: FaBrain },
			{ name: 'Microservices', icon: FaBrain },
		],
	},
	{
		title: 'AI & Modern Tech',
		icon: FaRobot,
		skills: [
			{ name: 'Integration of LLMs & RAG', icon: FaRobot },
			{ name: 'AI-assisted development', icon: FaRobot },
			{ name: 'Prompt engineering', icon: FaRobot },
		],
	},
];

export function SkillsSection() {
	return (
		<AnimatedSection id="skills" className="py-6 sm:py-10 md:py-16 bg-white/70 backdrop-blur-md scroll-mt-20">
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
						Skills & Technologies
					</motion.h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						A comprehensive overview of my technical skills and expertise across various domains of software development.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skillGroups.map((group, groupIdx) => (
						<motion.div
							key={group.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: groupIdx * 0.1 }}
							viewport={{ once: true }}
						>
							<Card className="glass-effect h-full flex flex-col shadow-xl border border-white/30 rounded-2xl group">
								<CardContent className="p-7 flex flex-col flex-1">
									<div className="flex items-center gap-3 mb-6">
										<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
											<group.icon className="w-7 h-7 text-white" />
										</div>
										<h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
											{group.title}
										</h3>
									</div>
									<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
										{group.skills.map((skill, skillIdx) => (
											<motion.div
												key={skill.name}
												initial={{ opacity: 0, scale: 0.8 }}
												whileInView={{ opacity: 1, scale: 1 }}
												transition={{ duration: 0.5, delay: skillIdx * 0.05 }}
												viewport={{ once: true }}
												className="flex flex-col items-center gap-2 hover:scale-110 focus:scale-110 transition-transform duration-300 cursor-pointer group"
											>
												<div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shadow group-hover:shadow-lg transition-all duration-300">
													{skill.icon ? (
														<skill.icon
															className="w-7 h-7 text-blue-700 group-hover:text-purple-700 transition-colors duration-300"
															aria-label={skill.name}
														/>
													) : (
														<span className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full text-gray-500">
															?
														</span>
													)}
												</div>
												<span className="text-xs font-semibold text-gray-800 text-center group-hover:text-blue-700 transition-colors duration-300">
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
						<h3 className="text-2xl font-bold mb-4">Additional Skills & Tools</h3>
						<p className="text-gray-600">Other technologies and tools I work with</p>
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
						].map((tool, idx) => (
							<motion.div
								key={tool}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: idx * 0.05 }}
								viewport={{ once: true }}
								className="text-base font-medium text-gray-700 text-center cursor-pointer transition duration-200 hover:text-shadow"
							>
								{tool}
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</AnimatedSection>
	);
}
