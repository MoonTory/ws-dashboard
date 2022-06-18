import React from 'react'
import { Paper, Box, Button } from '@mui/material'

import { RulesTable } from './Table'

const RuleBuilderView: React.FC = () => {
	return (
		<React.Fragment>
			<Paper>
				<Box px={2} py={2}>
					<Box display="flex" justifyContent="flex-end" mb={2}>
						<Button variant="contained">Add Rule</Button>
					</Box>
					<Box>
						<RulesTable data={[]} />
					</Box>
				</Box>
			</Paper>
		</React.Fragment>
	)
}

export default RuleBuilderView
