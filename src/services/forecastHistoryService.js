const getHistory = () => {
    let history = localStorage.getItem('history')
    if (!history) {
        history = "[]";
    }

    history = JSON.parse(history);

    return history;
}

const addForecastToHistory = (forecast) => {
    const history = getHistory();

    history.unshift(forecast)
    localStorage.setItem('history', JSON.stringify(history))
}

export default {
    getHistory,
    addForecastToHistory
}
