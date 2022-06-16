export interface ReducerAction<P = any, T = any> {
	type: T
	payload?: P
}
