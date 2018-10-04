
//Get Visible Expenses 
const getVisibleExpenses = (expenses, filters) => {
    //returns only true values
    return expenses.filter((expense) => {
            // if noy a number will just return the first truth
            const startDateMatch = typeof filters.startDate !=='number' || filters.startDate <= expense.createdAt;
            const endDateMatch = typeof filters.endDate !=='number' || filters.endDate >= expense.createdAt;
            const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch
        }
    ).sort((a,b)=>{
        if(filters.sortBy === 'date'){
           return a.createdAt < b.createdAt ? 1 : -1
        } else if (filters.sortBy === 'amount'){
            return a.amount > b.amount ? -1 : 1
        }
    })
}

export default getVisibleExpenses;