var data = $('article.post-summary')

data.each((index, element) => {
	const result = $(element)
	const title = result.find('.post-title').text()
	console.log(title)
})