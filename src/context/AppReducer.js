export default (state, action) => {
	switch (action.type) {
		case "ADD_TRANSACTION":
			return {
				...state,
				transactions: [...state.transactions, action.transaction],
			}
		case "REMOVE_TRANSACTION":
			return {
				...state,
				transactions: state.transactions.filter(
					(transaction) => transaction.id !== action.id
				),
			}
		default:
			return state
	}
}
