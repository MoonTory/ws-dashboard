import React from 'react'
import { Box, Button } from '@mui/material'

const RuleBuilderView: React.FC = () => {
	return (
		<React.Fragment>
			<Box display="flex" justifyContent="flex-end">
				<Button variant="contained">Add Rule</Button>
			</Box>
			<Box>Table should go here</Box>
		</React.Fragment>
	)
}

export default RuleBuilderView
