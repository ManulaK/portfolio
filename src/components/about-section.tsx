'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Globe, Zap, Users } from 'lucide-react';

const stats = [
	{ icon: Code, label: 'Projects Completed', value: '50+' },
	{ icon: Globe, label: 'Years Experience', value: '5+' },
	{ icon: Zap, label: 'Technologies', value: '20+' },
	{ icon: Users, label: 'Happy Clients', value: '30+' },
];

export function AboutSection() {
	return (
		<section id="about" className="py-20 bg-white dark:bg-gray-950">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
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
							I'm a dedicated software engineer with over 5 years of experience in building scalable web applications and digital
							solutions. My passion lies in creating intuitive, performant, and accessible software that makes a real impact.
						</p>
						<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
							Specializing in modern JavaScript frameworks, cloud architecture, and user experience design, I bring ideas to life
							through clean code and innovative solutions. When I'm not coding, you'll find me exploring new technologies,
							contributing to open-source projects, or sharing knowledge with the developer community.
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
						>
							<Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
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
		</section>
	);
}
