'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Globe, Zap, Users } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

const stats = [
	{ icon: Code, label: 'Projects Completed', value: '50+' },
	{ icon: Globe, label: 'Years Experience', value: '2+' },
	{ icon: Zap, label: 'Technologies', value: '20+' },
	{ icon: Users, label: 'Happy Clients', value: '30+' },
];

export function AboutSection() {
	return (
		<AnimatedSection id="about" className="py-20 bg-white dark:bg-gray-950">
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
						className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
					>
						About Me
					</motion.h2>
					<div className="flex justify-center mb-8">
						<motion.div whileHover={{ scale: 1.03, rotate: -1 }} transition={{ type: 'spring', stiffness: 300 }}>
							<Card className="max-w-4xl text-left">
								<CardContent>
									<h3 className="text-2xl font-bold mb-2 text-blue-900 dark:text-blue-200">Professional Summary</h3>
									<p className="text-lg text-gray-700 dark:text-gray-200 mb-2">
										Versatile Software Engineer with nearly 2 years of progressive experience as an intern, trainee, and
										associate. Proficiency in mobile and full-stack application development, producing reliable software
										solutions that prioritize user expectations. Demonstrates skills in JavaScript, Java, Python, and
										various technologies, including ReactJS, NodeJS, Flutter, and Android. Effectively applies agile
										methodologies and DevOps practices. Proven ability to troubleshoot and resolve software defects,
										ensuring smooth operations. Adept at continuous learning and staying updated on best practices in
										software development. Seeking to use technical experience and innovative problem-solving abilities
										to drive successful projects in a collaborative environment.
									</p>
									<div className="flex flex-wrap gap-2 mt-2">
										<span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
											2 Years Experience
										</span>
										<span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-xs font-medium">
											Full-Stack & Mobile
										</span>
										<span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium">
											Agile & DevOps
										</span>
										<span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-xs font-medium">
											Continuous Learner
										</span>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					</div>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						Passionate software engineer with expertise in modern web technologies and a drive for creating exceptional user
						experiences.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
					{/* Left Column - Image */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="relative"
						whileHover={{ scale: 1.02, rotate: 1 }}
					>
						<div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
							<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="text-white text-center">
									<div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
										<Code className="w-16 h-16" />
									</div>
									<h3 className="text-2xl font-bold">Manula Kavinda</h3>
									<p className="text-blue-100">Software Engineer</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Right Column - Content */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="space-y-6"
					>
						<h3 className="text-3xl font-bold text-gray-900 dark:text-white">Crafting Digital Excellence</h3>
						<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
							I&apos;m a dedicated software engineer with over 5 years of experience in building scalable web applications and
							digital solutions. My passion lies in creating intuitive, performant, and accessible software that makes a real
							impact.
						</p>
						<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
							Specializing in modern JavaScript frameworks, cloud architecture, and user experience design, I bring ideas to life
							through clean code and innovative solutions. When I&apos;m not coding, you&apos;ll find me exploring new
							technologies, contributing to open-source projects, or sharing knowledge with the developer community.
						</p>

						<div className="flex flex-wrap gap-4 pt-4">
							<div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
								Full-Stack Development
							</div>
							<div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
								Cloud Architecture
							</div>
							<div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
								UI/UX Design
							</div>
							<div className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
								DevOps
							</div>
						</div>
					</motion.div>
				</div>

				{/* Stats */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className="grid grid-cols-2 md:grid-cols-4 gap-8"
				>
					{stats.map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.07, rotate: -2 }}
						>
							<Card className="text-center p-6 hover:shadow-2xl transition-shadow duration-300">
								<CardContent className="p-0">
									<stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
									<div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
									<div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</AnimatedSection>
	);
}
