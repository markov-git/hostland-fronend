import * as React from 'react';
import { WorksWrapper } from './Components/WorksWrapper';
import { SectionTitle } from './Components/SectionTitle';

export function Home(): JSX.Element {
	return (
		<section
			className="p-8 min-h-screen "
		>
			<SectionTitle caption="Recent Works"/>
			<WorksWrapper/>
		</section>
	);
}