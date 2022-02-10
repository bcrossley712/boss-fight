console.log('Fight!');

let character = {
  hero: {
    health: 100,
  },

  villian: {
    health: 100,
  }
}
let gold = 0
let defeated = 0

function attack() {
  if (character.villian.health >= 5) {
    character.villian.health -= 5
    let healthBar = document.getElementById('character-health')
    healthBar.style.width = character.villian.health + '%'
    if (character.villian.health == 0) {
      earnGold()
      defeated++
      document.getElementById('defeated').innerText = defeated
    }
  }
}

function counterAttack() {
  if (character.villian.health == 0) { nextOpponent() }
  if (character.hero.health >= 5) {
    character.hero.health -= 5
    let healthBar = document.getElementById('hero-health')
    healthBar.style.width = character.hero.health + '%'
    if (character.hero.health == 0) {
      alert("Oh you suck!")
    }
  }
}

function reset() {
  character.hero.health = 100
  let heroHealth = document.getElementById('hero-health')
  heroHealth.style.width = character.hero.health + '%'
  character.villian.health = 100
  let bossHealth = document.getElementById('character-health')
  bossHealth.style.width = character.villian.health + '%'
  gold = 0
  defeated = 0
  document.getElementById('gold').innerText = gold.toFixed(2)
  document.getElementById('defeated').innerText = defeated
}

function nextOpponent() {

  character.villian.health = 100
  let bossHealth = document.getElementById('character-health')
  bossHealth.style.width = character.villian.health + '%'
  let template = `
  <img onclick="attack()" src="https://thiscatdoesnotexist.com"
            alt="">
  `


  document.getElementById('bossImg').innerHTML = template
}

function earnGold() {
  gold += 15
  document.getElementById('gold').innerText = gold.toFixed(2)
}

function health() {
  if (gold >= 30) {
    character.hero.health += 30
    if (character.hero.health >= 100) {
      character.hero.health = 100
    }
    let healthBar = document.getElementById('hero-health')
    healthBar.style.width = character.hero.health + '%'
    gold -= 30
    document.getElementById('gold').innerText = gold.toFixed(2)
  }
}


let bossAttack = setInterval(counterAttack, 1500)