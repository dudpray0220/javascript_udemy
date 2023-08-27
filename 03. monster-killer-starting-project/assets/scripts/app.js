const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 13;
const STRONG_ATTACK_VALUE = 17;
let chosenMaxLife = 100;
let currentPlayerHealth = chosenMaxLife;
let currentMonsterHealth = chosenMaxLife;

function attackMonster(mode) {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const damage = dealMonsterDamage(maxDamage);
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

function attackHandler() {
  attackMonster('ATTACK');
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK');
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
