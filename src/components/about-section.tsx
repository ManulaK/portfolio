'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/animated-section';
import { AnimatedBlobsBackground } from './ui/animated-blobs-background';

export function AboutSection() {
	return (
		<AnimatedSection id="about" className="py-6 sm:py-10 md:py-16 bg-white scroll-mt-20 relative overflow-hidden">
			<AnimatedBlobsBackground
				blobs={[
					{ color: 'bg-cyan-200', className: 'left-8 top-1/3 w-96 h-96', style: { transform: 'translateY(-50%)' } },
					{ color: 'bg-violet-200', className: '-top-24 right-1/4 w-60 h-60 animation-delay-1000' },
					{ color: 'bg-rose-200', className: '-bottom-20 left-1/3 w-40 h-40 animation-delay-2000' },
				]}
			/>
			<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
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
						About Me
					</motion.h2>
					<div className="flex justify-center">
						<Card className="max-w-4xl text-left">
							<CardContent>
								<h3 className="text-2xl font-bold text-blue-900 leading-tight pb-2">Professional Summary</h3>
								<p className="text-lg mb-2">
									Versatile Software Engineer with nearly 2 years of progressive experience as an intern, trainee, and
									associate. Specialized in mobile and full-stack application development, delivering reliable software
									solutions that exceed user expectations. Proficient in JavaScript, TypeScript, Java, Python, and various
									technologies including ReactJS & NextJS, NodeJS & ExpressJS, Flutter, and Android development.
									Experienced in applying agile methodologies and DevOps practices. Proven ability to troubleshoot and
									resolve software defects, ensuring smooth operations. Committed to continuous learning and staying
									updated on best practices in software development. Seeking opportunities to leverage technical expertise
									and innovative problem-solving abilities in collaborative environments.
								</p>
								<div className="flex flex-wrap gap-2 mt-2">
									<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
										2+ Years Experience
									</span>
									<span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
										Full-Stack & Mobile
									</span>
									<span className="px-3 py-1 bg-purple-100 rounded-full text-xs font-medium">Agile & DevOps</span>
									<span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
										Continuous Learner
									</span>
								</div>
							</CardContent>
						</Card>
					</div>
				</motion.div>
			</div>
		</AnimatedSection>
	);
}
