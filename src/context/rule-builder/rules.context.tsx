import React from 'react'
import { initialState, ruleBuilderReducer } from './rules.reducer'

import { IRuleBuilderContext, Rule, RuleBuilderActions } from './types'

export const RuleBuilderContext = React.createContext({} as IRuleBuilderContext)

export const RuleBuilderProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [error] = React.useState<any | null>(null)
	const [state, dispatch] = React.useReducer(ruleBuilderReducer, initialState)

	const add = (rule: Rule) => {
		// TODO: Need to define validation rules
		return dispatch({ type: RuleBuilderActions.ADD, payload: [...state.rules, rule] })
	}

	const remove = (ruleId: string) => {
		const rules = [...state.rules]

		rules.splice(rules.findIndex((rule) => rule.id === ruleId))

		return dispatch({ type: RuleBuilderActions.REMOVE, payload: rules })
	}

	return <RuleBuilderContext.Provider value={{ state, add, remove, error }}>{children}</RuleBuilderContext.Provider>
}
