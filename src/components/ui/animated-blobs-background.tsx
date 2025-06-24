import React from 'react';

interface BlobConfig {
	color: string; // Tailwind color class, e.g. 'bg-blue-400'
	style?: React.CSSProperties;
	className?: string;
}

interface AnimatedBlobsBackgroundProps {
	blobs?: BlobConfig[];
	className?: string;
}

/**
 * Renders animated, blurred blobs for a glassmorphism background effect.
 * Pass an array of blob configs to customize color, position, size, and animation delay.
 */
export const AnimatedBlobsBackground: React.FC<AnimatedBlobsBackgroundProps> = ({
	blobs = [
		{ color: 'bg-blue-400', className: '-top-40 -right-40 w-80 h-80', style: {} },
		{ color: 'bg-purple-400', className: '-bottom-40 -left-40 w-80 h-80 animation-delay-2000', style: {} },
		{ color: 'bg-pink-400', className: 'top-40 left-40 w-80 h-80 animation-delay-4000', style: {} },
	],
	className = '',
}) => (
	<div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
		{blobs.map((blob, i) => (
			<div
				key={i}
				className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob ${blob.color} ${
					blob.className || ''
				}`}
				style={blob.style}
			/>
		))}
	</div>
);
