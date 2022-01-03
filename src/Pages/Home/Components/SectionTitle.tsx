import * as React from 'react';

export const SectionTitle: React.FC<{ caption: string; }> = ({ caption }) => {
	return (
		<div className="
				text-center mb-10 text-4xl text-[#00bcd4] font-bold relative
				before:absolute before:content-[''] before:left-1/2 before:bottom-[-10px]
				before:w-[150px] before:h-[4px] before:bg-black before:translate-x-[-50%]
			"
		>
			<h2>{ caption }</h2>
		</div>
	);
}