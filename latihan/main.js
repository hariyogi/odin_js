const personFactory = (name, age) => {
    const sayHello = () =>{
        return `Heloooo... nama saya ${name} dan umur saya ${age}`;
    };
    return {name, age, sayHello};
};

const privateFactory = () => {
    const _privToUppercase = string => {return string.toUpperCase()};
    const sayHelloAgain = name => {return _privToUppercase(name)};
    return {sayHelloAgain};
};

const playerFactory = (name, atk, def, health) => {
    const getName = () => name;
    const getHealth = () => health;
    const getDefend = () => def;
    const getAttack = () => atk;

    const _privCalcDamageTaken = enemyAtk => {
        return ((def - enemyAtk) >= 0) ? 1 : (def - enemyAtk) * -1;
    };

    const _privDie = () =>{
        console.log(`${name} MATI`);
    }

    const defendEnemy = enemy => {
        const damageTaken = _privCalcDamageTaken(enemy.getAttack());
        console.log(`${name} Menerima damge sebesar ${damageTaken} dari ${enemy.getName()}`);
        health -= damageTaken;
        if(health <= 0){
            _privDie();
        }
        console.log(`${name} sisah darah ${health}`);
    };

    return {getName, getHealth, getDefend, getAttack, defendEnemy};
};

let player = playerFactory("Bimbim", 3, 5, 5);
let enemy = playerFactory("Setan", 1, 1, 4);

const inheret = () => {
    const {getHealth, defendEnemy} = playerFactory("", 1, 1, 1);
    const check = () => "BABABA";
    return {getHealth, defendEnemy, check};
};

