import React from 'react'

export const useFetch = <T>(request: RequestInfo) => {
	const [results, setResults] = React.useState<T | null>(null)
	const [error, setError] = React.useState<string | null>(null)

	React.useEffect(() => {
		fetch(request)
			.then(async (response) => {
				if (response.ok) {
					setResults(await response.json())
					setError(null)
				} else setError(await response.text())
			})
			.catch((err) => setError(err.message))
	}, [request])

	return { results, error }
}
