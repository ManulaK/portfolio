import { motion, type MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

type AnimatedSectionProps = React.HTMLAttributes<HTMLDivElement> &
	MotionProps & {
		children: React.ReactNode;
		className?: string;
	};

export function AnimatedSection({ children, className, ...motionProps }: AnimatedSectionProps) {
	return (
		<motion.section
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true, amount: 0 }}
			className={cn('w-full', className)}
			{...motionProps}
		>
			{children}
		</motion.section>
	);
}
