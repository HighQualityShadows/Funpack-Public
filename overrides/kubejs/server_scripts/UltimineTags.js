// priority: 0

// Visit the wiki for more info - https://kubejs.com/


ServerEvents.tags('block', event => {
	event.add('ftbultimine:block_whitelist', '#forge:ores')
	event.add('ftbultimine:block_whitelist', '#minecraft:logs')
	
	console.log('Added ftbultimine block tags')
})

ServerEvents.tags('item', event => {
	event.add('ftbultimine:tools', '#forge:tools')
	event.add('ftbultimine:tools', '#minecraft:tools')
	
	console.log('Added ftbultimine tool tags')
})	


