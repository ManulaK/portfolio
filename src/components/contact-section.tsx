'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { LuGithub, LuLinkedin, LuInstagram } from 'react-icons/lu';
import { useState, useRef } from 'react';

export function ContactSection() {
	const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
	const formRef = useRef<HTMLFormElement>(null);

	return (
		<section id="contact" className="py-20 bg-white dark:bg-gray-950">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology and
						innovation.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="space-y-8"
					>
						<div>
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let&apos;s Connect</h3>
							<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
								Whether you have a project in mind, want to discuss potential opportunities, or just want to say hello,
								I&apos;d love to hear from you. Feel free to reach out through any of the channels below.
							</p>
						</div>

						<div className="space-y-6">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
									<Mail className="w-6 h-6 text-white" />
								</div>
								<div>
									<h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
									<p className="text-gray-600 dark:text-gray-300">manulakavinda.dev@gmail.com</p>
								</div>
							</div>

							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
									<Phone className="w-6 h-6 text-white" />
								</div>
								<div>
									<h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
									<p className="text-gray-600 dark:text-gray-300">+94-71-999-1761</p>
								</div>
							</div>

							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
									<MapPin className="w-6 h-6 text-white" />
								</div>
								<div>
									<h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
									<p className="text-gray-600 dark:text-gray-300">Minuwangoda, Western Province, Sri Lanka</p>
								</div>
							</div>
						</div>

						{/* Social Links */}
						<div>
							<h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
							<div className="flex gap-4">
								<a
									href="https://github.com/ManulaK"
									className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300"
									target="_blank"
									rel="noopener noreferrer"
								>
									<LuGithub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
								</a>
								<a
									href="https://www.linkedin.com/in/manulakavinda/"
									className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300"
									target="_blank"
									rel="noopener noreferrer"
								>
									<LuLinkedin className="w-6 h-6 text-blue-700 dark:text-blue-400" />
								</a>
								<a
									href="https://www.instagram.com/manuu.k_____\/"
									className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors duration-300"
									target="_blank"
									rel="noopener noreferrer"
								>
									<LuInstagram className="w-6 h-6 text-pink-600 dark:text-pink-400" />
								</a>
							</div>
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<Card className="p-8">
							<CardContent className="p-0">
								<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>

								<form
									action="https://formspree.io/f/xkgbvdap"
									method="POST"
									ref={formRef}
									onSubmit={(e) => {
										e.preventDefault();
										const form = e.currentTarget;
										const data = new FormData(form);
										fetch(form.action, {
											method: 'POST',
											body: data,
											headers: { Accept: 'application/json' },
										})
											.then((res) => {
												if (res.ok) {
													setStatus('success');
													formRef.current?.reset();
												} else {
													setStatus('error');
												}
											})
											.catch(() => setStatus('error'));
									}}
									className="space-y-6"
								>
									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<label
												htmlFor="firstName"
												className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
											>
												First Name
											</label>
											<input
												type="text"
												id="firstName"
												name="firstName"
												required
												className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
												placeholder="John"
											/>
										</div>
										<div>
											<label
												htmlFor="lastName"
												className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
											>
												Last Name
											</label>
											<input
												type="text"
												id="lastName"
												name="lastName"
												required
												className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
												placeholder="Doe"
											/>
										</div>
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											required
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
											placeholder="manulakavinda.dev@gmail.com"
										/>
									</div>
									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
										>
											Message
										</label>
										<textarea
											id="message"
											name="message"
											rows={4}
											required
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
											placeholder="Type your message..."
										/>
									</div>
									<Button type="submit" variant="gradient" size="lg" className="w-full">
										<Send className="w-5 h-5 mr-2" />
										Send Message
									</Button>
									{status === 'success' && (
										<p className="text-green-600 dark:text-green-400 mt-4 text-center">
											Thank you! Your message has been sent.
										</p>
									)}
									{status === 'error' && (
										<p className="text-red-600 dark:text-red-400 mt-4 text-center">
											Oops! Something went wrong. Please try again.
										</p>
									)}
								</form>
							</CardContent>
						</Card>
					</motion.div>
				</div>

				{/* Availability Status */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className="mt-16 text-center"
				>
					<Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-0">
						<CardContent className="p-8">
							<div className="flex items-center justify-center gap-3 mb-4">
								<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
								<span className="text-lg font-semibold text-gray-900 dark:text-white">Available for New Opportunities</span>
							</div>
							<p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
								I&apos;m currently accepting new projects and opportunities. Whether it&apos;s a full-time position, freelance
								work, or collaboration on an exciting project, I&apos;d love to hear from you.
							</p>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</section>
	);
}
