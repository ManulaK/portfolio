'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

const education = [
	{
		degree: 'BSc (Hons) in Information Technology Specializing in Software Engineering',
		institution: 'Sri Lanka Institute of Information Technology',
		location: 'Malabe, Sri Lanka',
		year: '2025',
		extra: 'Classification: Second Division Class',
		description:
			'Comprehensive four-year program focused on advanced software engineering principles, project-based learning, and real-world application development. Developed strong skills in full-stack development, agile methodologies, and team collaboration.',
		research: [
			{
				title: 'Enhancing Environmental Awareness for Hard of Hearing Individuals: A Mobile Application Approach',
				institution: 'Sri Lanka Institute of Information Technology',
				year: '2024',
				description:
					'Developed a mobile application to improve environmental awareness for hard of hearing individuals, leveraging real-time data and accessibility-focused design.',
				publication:
					'Accepted for publication in Springer Nature as part of the proceedings of the 10th International Congress on Information and Communication Technology (ICICT 2025), London, UK.',
			},
			{
				title: 'Management Optimization Solution for Fashion Retails System',
				institution: 'Sri Lanka Institute of Information Technology',
				year: '2023',
				description:
					'Focused on optimizing inventory and order management for fashion retail businesses using data-driven decision-making approaches.',
				publication: 'Published in: Tuijin Jishu / Journal of Propulsion Technology (ISSN: 1001-4055, Vol. 44, No. 6, 2023)',
			},
		],
	},
	{
		degree: 'Diploma in Information Technology with E-Commerce',
		institution: 'ESOFT Metro Campus',
		location: 'Colombo, Sri Lanka',
		year: '2020',
		description:
			'Intensive diploma covering IT fundamentals, web development, and e-commerce solutions. Gained practical experience in building and managing online business platforms.',
	},
	{
		degree: 'Diploma in English',
		institution: 'ESOFT Metro Campus',
		location: 'Colombo, Sri Lanka',
		year: '2020',
		description:
			'Focused on enhancing English language proficiency for academic and professional communication, including writing, speaking, and comprehension skills.',
	},
	{
		degree: 'GCE Advanced Level',
		institution: 'President College',
		location: 'Minuwangoda, Sri Lanka',
		year: '2019',
		extra: 'Stream: Engineering Technology; Medium: Sinhala',
		description:
			'Specialized in Engineering Technology, developing a strong foundation in mathematics, physics, and applied sciences. Completed studies in Sinhala medium.',
	},
	{
		degree: 'GCE Ordinary Level',
		institution: "St. Peter's College",
		location: 'Negombo, Sri Lanka',
		year: '2016',
		extra: 'Medium: English',
		description:
			'Completed secondary education with a focus on core subjects, laying the groundwork for further studies in technology and engineering.',
	},
];

// Modern accent color for research cards
const researchAccent = 'bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500';

export function EducationSection() {
	return (
		<AnimatedSection id="education" className="py-20 bg-white scroll-mt-20">
			<div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-12">
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
						Education
					</motion.h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">My academic background and qualifications.</p>
				</motion.div>
				<div className="relative border-l-2 border-blue-200 ml-8 sm:ml-16">
					{education.map((edu, idx) => (
						<motion.div
							key={edu.degree + edu.institution}
							initial={{ opacity: 0, x: 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7, delay: idx * 0.2 }}
							viewport={{ once: true }}
							className="mb-4 sm:mb-6 ml-8 sm:ml-12 relative"
							whileHover={{ scale: 1.03, rotate: -1 }}
						>
							{/* Timeline Dot with animation */}
							<motion.span
								className="absolute -left-12 sm:-left-16 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg border-4 border-white z-10"
								initial={{ scale: 0.8, opacity: 0.7 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.5, delay: idx * 0.2 }}
							>
								<GraduationCap className="w-5 h-5 text-white" />
							</motion.span>
							<Card className="bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300">
								<CardContent className="p-6">
									<div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-2">
										<div>
											<h3 className="text-xl font-bold leading-tight">{edu.degree}</h3>
											<span className="block text-sm font-medium text-blue-700 opacity-80 mt-1 sm:mt-0">
												{edu.institution}
											</span>
										</div>
										<div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm mt-2 sm:mt-0">
											<Calendar className="w-4 h-4" />
											<span>{edu.year}</span>
											<span className="mx-2 hidden sm:inline">|</span>
											<MapPin className="w-4 h-4" />
											<span>{edu.location}</span>
										</div>
									</div>
									{edu.description && <div className="mt-2 text-gray-700 text-sm">{edu.description}</div>}
									{edu.extra && <div className="mt-2 text-gray-600 text-xs sm:text-sm italic">{edu.extra}</div>}
									{/* Nested Research Projects for BSc (Hons) */}
									{edu.research && edu.research.length > 0 && (
										<div className="mt-6">
											<div className="font-semibold text-blue-800 mb-4 text-base flex items-center gap-2">
												<svg
													className="w-5 h-5 text-blue-500"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													viewBox="0 0 24 24"
												>
													<path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"
													/>
												</svg>
												Research Projects
											</div>
											<div className="grid md:grid-cols-2 gap-6">
												{edu.research.map((item, idx) => (
													<motion.div
														key={item.title}
														initial={{ opacity: 0, y: 40 }}
														whileInView={{ opacity: 1, y: 0 }}
														transition={{ duration: 0.7, delay: idx * 0.2 }}
														viewport={{ once: true }}
														whileHover={{ scale: 1.05, rotate: -2 }}
													>
														<div
															className={
																`relative flex h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ` +
																`bg-white/70 backdrop-blur-md border border-gray-100`
															}
														>
															{/* Accent border */}
															<div className={`w-2 sm:w-3 ${researchAccent} rounded-l-2xl`} />
															<div className="flex-1 p-5 flex flex-col justify-between">
																<div>
																	<div className="flex items-center gap-2 mb-2">
																		<GraduationCap className="w-5 h-5 text-blue-500" />
																		<span className="text-xs font-semibold uppercase tracking-wide">
																			{item.institution}
																		</span>
																		<span className="mx-2 text-gray-400">|</span>
																		<Calendar className="w-4 h-4 text-gray-400" />
																		<span className="text-xs text-gray-500">{item.year}</span>
																	</div>
																	<h4 className="text-base sm:text-lg font-bold mb-2 leading-snug">
																		{item.title}
																	</h4>
																	<div className="text-gray-700 text-sm mb-3">
																		{item.description}
																	</div>
																</div>
																{item.publication && (
																	<div className="block w-full mt-2 px-3 py-1 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-xs font-semibold text-blue-700 rounded-full shadow-sm break-words max-w-full text-sm">
																		{item.publication}
																	</div>
																)}
															</div>
														</div>
													</motion.div>
												))}
											</div>
										</div>
									)}
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</AnimatedSection>
	);
}
