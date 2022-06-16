import React from 'react'
import { RuleBuilderActions, RuleBuilderReducerAction, RuleBuilderState } from './types'

export const initialState: RuleBuilderState = {
	rules: []
}

export const ruleBuilderReducer: React.Reducer<RuleBuilderState, RuleBuilderReducerAction> = (state, action) => {
	switch (action.type) {
		case RuleBuilderActions.ADD:
			return {
				...state,
				rules: action.payload
			}

		default:
			return state
	}
}
