import React from 'react'
import Table, { TableColumn } from 'react-data-table-component'

const ExpandedComponent = ({ data }) => (
	<div>
		Original JSON Data
		<pre>{JSON.stringify(JSON.parse(data['OriginalMessageJson']), null, 2)}</pre>
	</div>
)

const columns: TableColumn<any>[] = [
	{
		name: 'External REF ID',
		sortable: true,
		selector: (row) => row['EXTERNALREFID']
	},
	{
		name: 'Message Type',
		sortable: true,
		selector: (row) => row['MessageType']
	},
	{
		sortable: true,
		name: 'OutAckNack',
		selector: (row) => row['OutAckNack']
	},
	{
		name: 'Status',
		sortable: true,
		selector: (row) => row['Status']
	},
	{
		name: 'Timestamp',
		sortable: true,
		selector: (row) => row['TimeStamp'],
		format: (row) => new Date(row['TimeStamp']).toDateString()
	}
]

export const DataTable: React.FC<{ data: any[] }> = ({ data }) => {
	return <Table columns={columns} data={data} expandableRows expandableRowsComponent={ExpandedComponent} />
}
