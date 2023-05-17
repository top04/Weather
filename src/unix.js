function unix(dt,type) {
    const seconds = dt * 1000
    const data = new Date(seconds)
    let result = 
    type == 'day' ? data.toLocaleString('ru-Ru', { day: 'numeric' }) : 
    type == 'month' ? data.toLocaleString('ru-RU', { month: 'long'}) :
    type == 'weekday' ? data.toLocaleString('ru-RU', { weekday: 'long'}) : ''
    
    return result
    
}

export default unix