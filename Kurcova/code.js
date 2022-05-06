const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'gaming-news.p.rapidapi.com',
		'X-RapidAPI-Key': '1fedf22e7dmsh116cd715791b317p119aedjsn13bda7665d8e'
	}
};

fetch('https://gaming-news.p.rapidapi.com/news', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));