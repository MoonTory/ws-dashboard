import { ReducerAction } from '~/typings'

export interface Rule {
	id: string
	name: string
	desc: string
	when: string
	then: string[]
	salience?: number
}

export enum RuleBuilderActions {
	ADD = 'ADD',
	REMOVE = 'REMOVE'
}

export type RuleBuilderState = {
	rules: Rule[]
}

export type RuleBuilderReducerAction = ReducerAction<any, RuleBuilderActions>

export interface IRuleBuilderContext {
	error: any
	state: RuleBuilderState
	add: (rule: Rule) => void
	remove: (ruleId: string) => void
}
