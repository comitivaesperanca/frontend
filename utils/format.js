export const formatDate = (data) => {
    var date = new Date(data)
    date.toLocaleString()
    date = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(date)
    return date;
}

export const formatFinalSentiment = (sentiment) => {
    switch(sentiment){
        case 'positive':
            return 'Positivo'
        case 'negative':
            return 'Negativo'
        default:
            return 'Neutro'
    }
}

export const formatFinalSentimentClass = (sentiment) => {
    switch(sentiment){
        case 'positive':
            return 'bg-green-200'
        case 'negative':
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