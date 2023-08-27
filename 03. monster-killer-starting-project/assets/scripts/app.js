const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 13;
let chosenMaxLife = 100;
let currentPlayerHealth = chosenMaxLife;
let currentMonsterHealth = chosenMaxLife;

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= monsterDamage;

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('you won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('you lost...');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('you have a DRAW');
  }
}

attackBtn.addEventListener('click', attackHandler);
