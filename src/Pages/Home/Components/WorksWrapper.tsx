import * as React from 'react';

import { worksList } from '../worksList';
import { WorkBlock } from './WorkBlock';

export const WorksWrapper: React.FC = () => {
	return <div className="flex flex-wrap justify-center flex-row">
		{worksList.map(w => <WorkBlock key={w.id} work={w}/>)}
	</div>
}