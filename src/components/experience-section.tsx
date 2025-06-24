'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { AnimatedBlobsBackground } from './ui/animated-blobs-background';

const experiences = [
	{
		title: 'Associate Software Engineer',
		company: 'Orel Corporation (Pvt) Ltd',
		location: 'Orel Park, Meegoda, Sri Lanka',
		duration: 'September 2023 - June 2025',
		achievements: [
			'Led and collaborated on over 5-6 internal and external projects, focusing on front-end and mobile development, contributing to the achievement of company goals, and enhancing employee satisfaction.',
			'Continuously learned and successfully adopted emerging technologies, improving software performance and stability.',
			'Planned, designed, implemented, and tested software modules in collaboration with senior engineers, ensuring seamless integration and functionality across the organization.',
			'Adhered to best practices in software development and project management, delivering high-quality enterprise modules.',
		],
	},
	{
		title: 'Intern Software Engineer',
		company: 'Axcer Innovations',
		location: 'Colombo, Sri Lanka',
		duration: 'March 2023 - September 2023',
		achievements: [
			'Focused on full-stack development, emphasizing API integration and collaborating on UI design.',
			'Adhered to software development best practices, including version control, automated testing, and code reviews, enhancing code quality and maintainability.',
			'Identified and resolved critical bugs, reducing system crashes, and enhanced problem-solving skills and adaptability in a dynamic environment.',
		],
	},
];

export function ExperienceSection() {
	return (
		<AnimatedSection id="experience" className="py-20 bg-gray-50 scroll-mt-20 relative overflow-hidden">
			<AnimatedBlobsBackground
				blobs={[
					{ color: 'bg-orange-300', className: '-top-28 left-1/4 w-72 h-72' },
					{
						color: 'bg-blue-300',
						className: 'top-1/2 right-0 w-80 h-80 animation-delay-2000',
						style: { transform: 'translateY(-50%)' },
					},
					{ color: 'bg-purple-300', className: '-bottom-28 left-1/2 w-64 h-64 animation-delay-4000' },
				]}
			/>
			<div className="max-w-6xl mx-auto px-2 sm:px-8 lg:px-12">
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
						className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
					>
						Work Experience
					</motion.h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						My professional journey as a software engineer, building impactful solutions and growing with every challenge.
					</p>
				</motion.div>
				<div className="relative border-l-2 border-blue-200 ml-8 sm:ml-16">
					{experiences.map((exp, idx) => (
						<motion.div
							key={exp.title}
							initial={{ opacity: 0, x: 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7, delay: idx * 0.2 }}
							viewport={{ once: true }}
							className="mb-16 sm:mb-20 ml-8 sm:ml-12 relative"
							whileHover={{ scale: 1.03, rotate: -1 }}
						>
							{/* Timeline Dot with animation */}
							<motion.span
								className="absolute -left-12 sm:-left-16 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg border-4 border-white z-10"
								initial={{ scale: 0.8, opacity: 0.7 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.5, delay: idx * 0.2 }}
							>
								<Briefcase className="w-5 h-5 text-white" />
							</motion.span>
							<Card className="bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300">
								<CardContent className="p-6">
									<div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-2">
										<div>
											<h3 className="text-2xl font-bold text-blue-900 leading-tight">{exp.title}</h3>
											<span className="block text-sm font-medium text-blue-700 opacity-80 mt-1 sm:mt-0">
												{exp.company}
											</span>
										</div>
										<div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm mt-2 sm:mt-0">
											<Calendar className="w-4 h-4" />
											<span>{exp.duration}</span>
											<span className="mx-2 hidden sm:inline">|</span>
											<MapPin className="w-4 h-4" />
											<span>{exp.location}</span>
										</div>
									</div>
									<ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
										{exp.achievements.map((ach, i) => (
											<li key={i}>{ach}</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</AnimatedSection>
	);
}
