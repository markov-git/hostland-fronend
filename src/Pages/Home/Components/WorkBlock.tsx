import * as React from 'react';
import { getRealUrl } from '../utils';

export type WorkType = {
	id: number;
	url: string;
	caption: string;
	description: string;
	imgSrc: string;
	link: {
		caption: string;
		url: string;
	};
};

type WorkBlockProps = {
	work: WorkType;
}

export const WorkBlock: React.FC<WorkBlockProps> = ({work}) => {
	return (
		<a
			className="
			relative w-[265px] h-[265px] m-3 bg-amber-500 bg-contain cursor-pointer block
			before:absolute before:bg-[#00bcd4] before:content-[''] before:top-[-3px] before:right-[-12px] before:w-1/2 before:h-[3px]
			after:absolute after:bg-[#00bcd4] after:content-[''] after:top-[-12px] after:right-[-3px] after:w-[3px] after:h-1/2
			"
			style={{
				backgroundImage: `url(${getRealUrl(work.imgSrc)})`,
			}}
			target="_blank"
			href={getRealUrl(work.url)}
		>
			<div className="w-full h-full bg-black opacity-0 hover:opacity-100 transition-opacity text-[#fff] text-center tracking-[1px]
			justify-between flex flex-col pt-7">
				<h3 className="font-bold text-xl">{work.caption}</h3>
				<div className="px-3">
					<Description text={work.description}/>
				</div>
				<a
					href={work.link.url}
					className="bg-orange-400 flex h-1/6 text-xl justify-center items-center font-bold"
				>
					{work.link.caption}
				</a>
			</div>
		</a>
	);
}

const Description: React.FC<{text: string}> = ({text}) => {
	return <>
		{text.split('\n').map(lexeme => (
			<p>{lexeme}</p>
		))}
	</>
}