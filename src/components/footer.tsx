'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
	const [currentYear, setCurrentYear] = useState('2024');

	useEffect(() => {
		setCurrentYear(new Date().getFullYear().toString());
	}, []);

	return (
		<footer className="bg-gray-900 dark:bg-black text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid md:grid-cols-4 gap-8">
					{/* Brand */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="md:col-span-2"
					>
						<div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
							Manula Kavinda
						</div>
						<p className="text-gray-400 mb-6 max-w-md">
							Software engineer passionate about creating exceptional digital experiences and innovative solutions that make a
							real impact.
						</p>
						<div className="flex gap-4">
							<a
								href="https://github.com/ManulaK"
								className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github className="w-5 h-5" />
							</a>
							<a
								href="https://www.linkedin.com/in/manulakavinda/"
								className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin className="w-5 h-5" />
							</a>
							<a
								href="https://www.instagram.com/manuu.k_____/"
								className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Instagram className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
							>
								<Mail className="w-5 h-5" />
							</a>
						</div>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						viewport={{ once: true }}
					>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-3">
							<li>
								<a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
									About
								</a>
							</li>
							<li>
								<a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-300">
									Experience
								</a>
							</li>
							<li>
								<a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
									Projects
								</a>
							</li>
							<li>
								<a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
									Skills
								</a>
							</li>
							<li>
								<a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
									Contact
								</a>
							</li>
						</ul>
					</motion.div>

					{/* Services */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<h3 className="text-lg font-semibold mb-4">Services</h3>
						<ul className="space-y-3">
							<li>
								<span className="text-gray-400">Web Development</span>
							</li>
							<li>
								<span className="text-gray-400">Mobile Development</span>
							</li>
							<li>
								<span className="text-gray-400">UI/UX Design</span>
							</li>
							<li>
								<span className="text-gray-400">Cloud Architecture</span>
							</li>
							<li>
								<span className="text-gray-400">Consulting</span>
							</li>
						</ul>
					</motion.div>
				</div>

				{/* Bottom Bar */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					viewport={{ once: true }}
					className="border-t border-gray-800 mt-12 pt-8"
				>
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-gray-400 text-sm">© {currentYear} Manula Kavinda. All rights reserved.</p>
						<div className="flex items-center gap-2 text-gray-400 text-sm">
							<span>Made with</span>
							<Heart className="w-4 h-4 text-red-500" />
							<span>using Next.js & Tailwind CSS</span>
						</div>
					</div>
				</motion.div>
			</div>
		</footer>
	);
}
