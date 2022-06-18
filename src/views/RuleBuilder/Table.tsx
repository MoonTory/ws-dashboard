import React from 'react'
import Table, { TableColumn } from 'react-data-table-component'

import { Rule } from '~/context'

const columns: TableColumn<Rule>[] = [
	{
		name: 'Name',
		sortable: true,
		selector: (row) => row.name
	},
	{
		name: 'Description',
		sortable: true,
		selector: (row) => row.desc
	},
	{
		sortable: true,
		name: 'Salience',
		selector: (row) => row.salience || 0
	}
]

export const RulesTable: React.FC<{ data: Rule[] }> = ({ data }) => <Table columns={columns} data={data} />
