"use client";

import React from 'react';
interface MarqueeProps { items: string[]; }
export const MarqueeBanner: React.FC<MarqueeProps> = ({ items }) => {
	if (items.length === 0) return null;
	const doubledItems = [...items, ...items];
	return (
	<div className="w-full overflow-hidden bg-primary/90 py-2">
	<div className="inline-block whitespace-nowrap animate-marquee">
	{doubledItems.map((text, index) => (
	<span key={index} className="px-8 text-sm font-semibold text-primary-foreground tracking-wide">
	{text} 
	</span> ))}
	</div>
	</div>
	);
	};