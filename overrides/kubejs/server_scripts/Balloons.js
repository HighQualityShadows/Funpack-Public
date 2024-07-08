// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
event.remove({ output: 'vs_eureka:balloon' })

event.shaped(
Item.of('vs_eureka:balloon', 4),
[
    ' A ',
    'A A', 
    ' A '
  ],
  {
    A: 'aether:golden_aercloud',
  }
)

console.log('Balloon recipes modified')
})





