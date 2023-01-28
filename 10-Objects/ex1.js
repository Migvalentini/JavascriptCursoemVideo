/*
Objects: 

Objects allows create a different index in the 'array'

Like dictionary in python
*/ 


let friend = {name:'José',
sex:'M',
weight:84.5,
fat(p=0){
    console.log('José got fat!')
    this.weight += p
}}

friend.fat(10)
console.log(`${friend.name} weights ${friend.weight}kg`)