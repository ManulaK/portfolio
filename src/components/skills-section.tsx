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
			{ name: 'Python', icon: SiPython },
			{ name: 'Java', icon: FaBrain },
			{ name: 'Kotlin', icon: FaBrain },
			{ name: 'Dart', icon: SiDart },
			{ name: 'Swift', icon: SiSwift },
			{ name: 'C#', icon: SiDotnet },
			{ name: 'SQL', icon: SiMysql },
		],
	},
	{
		title: 'Web Frameworks & Libraries',
		icon: FaCogs,
		skills: [
			{ name: 'HTML', icon: SiHtml5 },
			{ name: 'CSS', icon: SiCss3 },
			{ name: 'ReactJS', icon: SiReact },
			{ name: 'Next.js', icon: SiNextdotjs },
			{ name: 'Node.js', icon: SiNodedotjs },
			{ name: 'Express.js', icon: SiExpress },
			{ name: '.NET', icon: SiDotnet },
			{ name: 'Flask', icon: SiFlask },
			{ name: 'Strapi', icon: FaCogs },
			{ name: 'GraphQL', icon: SiGraphql },
			{ name: 'RESTful APIs', icon: FaProjectDiagram },
			{ name: 'WebSockets', icon: SiSocketdotio },
			{ name: 'LangChain', icon: FaRobot },
			{ name: 'Prisma', icon: FaDatabase },
		],
	},
	{
		title: 'Mobile Development',
		icon: SiAndroid,
		skills: [
			{ name: 'Flutter', icon: SiFlutter },
			{ name: 'Android SDK', icon: SiAndroid },
			{ name: 'SwiftUI', icon: SiSwift },
			{ name: 'Xcode', icon: SiSwift },
			{ name: 'Android Studio', icon: SiAndroid },
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
		title: 'DevOps & Cloud',
		icon: FaCogs,
		skills: [
			{ name: 'Git', icon: SiGit },
			{ name: 'GitHub', icon: SiGithub },
			{ name: 'CI/CD Pipelines', icon: FaCogs },
			// Add Docker, AWS, GCP, Azure if you want
		],
	},
	{
		title: 'Testing & Quality',
		icon: FaCogs,
		skills: [
			{ name: 'Jest', icon: FaCogs },
			{ name: 'Cypress', icon: FaCogs },
			{ name: 'ESLint', icon: FaCogs },
			{ name: 'Prettier', icon: FaCogs },
			{ name: 'Code Reviews', icon: FaCogs },
			{ name: 'Test-Driven Development (TDD)', icon: FaCogs },
		],
	},
	{
		title: 'Tools & Platforms',
		icon: FaProjectDiagram,
		skills: [
			{ name: 'VS Code', icon: FaRegKeyboard },
			{ name: 'Postman', icon: FaCogs },
			{ name: 'Yarn', icon: FaCogs },
			{ name: 'NPM', icon: FaCogs },
			{ name: 'Cursor', icon: FaCogs },
			{ name: 'Bitbucket', icon: FaCogs },
		],
	},
	{
		title: 'UI/UX & Design',
		icon: FaFigma,
		skills: [
			{ name: 'Ant Design', icon: FaCogs },
			{ name: 'Material UI (MUI)', icon: FaCogs },
			{ name: 'Tailwind CSS', icon: FaCogs },
			{ name: 'Figma', icon: FaFigma },
			{ name: 'shadcn/ui', icon: FaCogs },
			{ name: 'Charaka', icon: FaCogs },
		],
	},
	{
		title: 'AI & Machine Learning',
		icon: FaRobot,
		skills: [
			{ name: 'Integration of LLMs & RAG', icon: FaRobot },
			{ name: 'AI-assisted development', icon: FaRobot },
			{ name: 'Prompt engineering', icon: FaRobot },
		],
	},
	{
		title: 'Project Management & Practices',
		icon: FaJira,
		skills: [
			{ name: 'Jira', icon: FaJira },
			{ name: 'Agile (Scrum/Kanban)', icon: FaProjectDiagram },
			{ name: 'SDLC', icon: FaProjectDiagram },
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

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{skillGroups.map((group, groupIdx) => (
						<motion.div
							key={group.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: groupIdx * 0.1 }}
							viewport={{ once: true }}
						>
							<Card className="glass-effect h-full flex flex-col shadow-xl border border-white/30 rounded-2xl group">
								<CardContent className="p-5 flex flex-col flex-1">
									<div className="flex items-center gap-2 mb-4">
										<div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-md">
											<group.icon className="w-5 h-5 text-white" />
										</div>
										<h3 className="text-lg font-semibold tracking-tight text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
											{group.title}
										</h3>
									</div>
									<div className="grid grid-cols-3 sm:grid-cols-3 gap-2 mt-1">
										{group.skills.map((skill, skillIdx) => (
											<motion.div
												key={skill.name}
												initial={{ opacity: 0, scale: 0.8 }}
												whileInView={{ opacity: 1, scale: 1 }}
												transition={{ duration: 0.5, delay: skillIdx * 0.05 }}
												viewport={{ once: true }}
												className="flex flex-col items-center gap-0.5 hover:scale-105 focus:scale-105 transition-transform duration-200 cursor-pointer group"
											>
												<div className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow group-hover:shadow-md transition-all duration-200">
													{skill.icon ? (
														<skill.icon
															className="w-4 h-4 text-black group-hover:text-gray-700 transition-colors duration-200"
															aria-label={skill.name}
														/>
													) : (
														<span className="w-4 h-4 flex items-center justify-center bg-gray-200 rounded-full text-gray-500">
															?
														</span>
													)}
												</div>
												<span className="text-[10px] font-medium text-black text-center group-hover:text-gray-700 transition-colors duration-200">
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
							'Docker',
							'AWS',
							'GCP',
							'Azure',
							'Redux',
							'SASS',
							'Less',
							'Webpack',
							'Babel',
							'Linux',
							'Powershell',
							'Bash',
							'Firebase Tools',
							'Notion',
							'Slack',
							'Microsoft Teams',
							'Figma Jam',
							'Miro',
							'Trello',
							'Bitbucket',
							'Heroku',
							'Netlify',
							'Vercel',
							'DigitalOcean',
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
