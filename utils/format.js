export const formatDate = (data) => {
    var date = new Date(data)
    date.toLocaleString()
    date = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(date)
    return date;
}

export const getWeekDay = (data) => {
    var date = new Date(data)
    const weekday = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
    let day = weekday[date.getDay()];
    return day;
}

export const getMonthDate = (data) => {
    var date = new Date(data)
    var months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezenbro'];
    let month = months[date.getMonth()];
    return month;
}

export const formatFinalSentiment = (sentiment) => {
    switch(sentiment){
        case 'Positiva':
            return 'Positivo'
        case 'Negativa':
            return 'Negativo'
        default:
            return 'Neutro'
    }
}

export const formatFinalSentimentClass = (sentiment) => {
    switch(sentiment){
        case 'Positiva':
            return 'bg-green-200'
        case 'Negativa':
            return 'bg-red-200'
        default:
            return 'bg-gray-200'
    }
}

export const formatSearchSentiment = (sentiment) => {
    switch(sentiment){
        case 1:
            return 'positive'
        case 2:
            return 'negative'
        default:
            return 'neutral'
    }
}

export const formatFilters = (search = '', source = '', date = '', sentiment = '') => {
    var filter = '';

    if(search != ''){
        filter += `&search=${search}`
    }

    if(source != ''){
        filter += `&source=${source}`
    }

    if(date != ''){
        var dateFormat = new Date(date)
        dateFormat.toISOString()
        filter += `&date=${dateFormat}`
    }

    if(sentiment != ''){
        filter += `&sentiment=${formatSearchSentiment(sentiment)}`
    }

    return filter;
}