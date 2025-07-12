'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { LuGithub, LuLinkedin, LuInstagram } from 'react-icons/lu';
import { useState, useRef } from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';

export function ContactSection() {
	const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
	const formRef = useRef<HTMLFormElement>(null);

	return (
		<AnimatedSection id="contact" className="py-20 bg-white scroll-mt-20">
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
						className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
					>
						Get In Touch
					</motion.h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology and
						innovation.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 items-start">
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="h-full"
					>
						<Card className="p-8 h-full">
							<CardContent className="p-0">
								<div>
									<h3 className="text-2xl font-bold text-gray-900 mb-6">Let&apos;s Connect</h3>
									<p className="text-lg text-gray-600 leading-relaxed mb-8">
										Whether you have a project in mind, want to discuss potential opportunities, or just want to say
										hello, I&apos;d love to hear from you. Feel free to reach out through any of the channels below.
									</p>
								</div>

								<div className="space-y-6">
									<div className="flex items-center gap-4">
										<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
											<Mail className="w-6 h-6 text-white" />
										</div>
										<div>
											<h4 className="font-semibold text-gray-900">Email</h4>
											<p className="text-gray-600">manulakavinda.dev@gmail.com</p>
										</div>
									</div>

									<div className="flex items-center gap-4">
										<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
											<Phone className="w-6 h-6 text-white" />
										</div>
										<div>
											<h4 className="font-semibold text-gray-900">Phone</h4>
											<p className="text-gray-600">+94-71-999-1761</p>
										</div>
									</div>

									<div className="flex items-center gap-4">
										<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
											<MapPin className="w-6 h-6 text-white" />
										</div>
										<div>
											<h4 className="font-semibold text-gray-900">Location</h4>
											<p className="text-gray-600">Minuwangoda, Western Province, Sri Lanka</p>
										</div>
									</div>
								</div>

								{/* Social Links */}
								<div>
									<h4 className="font-semibold text-gray-900 my-4">Follow Me</h4>
									<div className="flex gap-4">
										{[
											{
												href: 'https://github.com/ManulaK',
												icon: <LuGithub className="w-6 h-6 text-gray-700" />,
											},
											{
												href: 'https://www.linkedin.com/in/manulakavinda/',
												icon: <LuLinkedin className="w-6 h-6 text-blue-700" />,
											},
											{
												href: 'https://www.instagram.com/manuu.k_____/',
												icon: <LuInstagram className="w-6 h-6 text-pink-600" />,
											},
										].map((item, i) => (
											<motion.a
												key={item.href}
												href={item.href}
												target="_blank"
												rel="noopener noreferrer"
												initial={{ opacity: 0, scale: 0.7 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{ delay: 0.5 + i * 0.15, duration: 0.5, type: 'spring' }}
												whileHover={{ scale: 1.2, rotate: 6 }}
												className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white transition-all duration-300 hover:scale-110 shadow-md"
											>
												{item.icon}
											</motion.a>
										))}
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="h-full"
					>
						<Card className="p-8 h-full">
							<CardContent className="p-0">
								<h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
								<p className="text-gray-600 mb-6">
									I'm always interested in new opportunities and exciting projects. Feel free to reach out!
								</p>

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
											<label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
												First Name
											</label>
											<input
												type="text"
												id="firstName"
												name="firstName"
												required
												className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
												placeholder="John"
											/>
										</div>
										<div>
											<label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
												Last Name
											</label>
											<input
												type="text"
												id="lastName"
												name="lastName"
												required
												className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
												placeholder="Doe"
											/>
										</div>
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
											Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
											placeholder="manulakavinda.dev@gmail.com"
										/>
									</div>
									<div>
										<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
											Message
										</label>
										<textarea
											id="message"
											name="message"
											rows={4}
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
											placeholder="Type your message..."
										/>
									</div>
									<Button type="submit" variant="gradient" size="lg" className="w-full">
										<Send className="w-5 h-5 mr-2" />
										Send Message
									</Button>
									{status === 'success' && (
										<p className="text-green-600 mt-4 text-center font-medium">
											Thank you! Your message has been sent successfully. I'll get back to you soon.
										</p>
									)}
									{status === 'error' && (
										<p className="text-red-600 mt-4 text-center font-medium">
											Sorry! Something went wrong. Please try again or contact me directly via email.
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
					<Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0">
						<CardContent className="p-8">
							<div className="flex items-center justify-center gap-3 mb-4">
								<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
								<span className="text-lg font-semibold text-gray-900">Available for New Opportunities</span>
							</div>
							<p className="text-gray-600 max-w-2xl mx-auto">
								I&apos;m currently accepting new projects and opportunities. Whether it&apos;s a full-time position, freelance
								work, or collaboration on an exciting project, I&apos;d love to hear from you.
							</p>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</AnimatedSection>
	);
}
