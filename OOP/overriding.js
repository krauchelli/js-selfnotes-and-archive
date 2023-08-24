//overriding ini konsepnya jika kita ingin menambahkan constructor dan method baru pada subclass, maka overriding ini akan berguna

class DungeonClasses {
    #level = null;
    constructor(difficulty) {
        this.#level = this.#generateRandomLevel();
        this.difficulty = difficulty;
    }

    battleHasExecuted() {
        console.log(` Random ${this.#level} levels of Dungeon has been executed at ${this.difficulty} grade`)
    }
    #generateRandomLevel() {
        return Math.floor(Math.random() * 1000);
    }
}

class playerInformation extends DungeonClasses {
    constructor(difficulty, player, role, status) {
        super(difficulty);
        this.player = player;
        this.role = role;
        this.status = status;
    }

    battleHasExecuted() {
        super.battleHasExecuted();
        setTimeout(() => {
            console.log(` username: ${this.player} \n role: ${this.role} \n status: ${this.status}`);
        }, 1000);
        console.log(`loading player data..`);
    }
}

const dungeonSampleSatu = new DungeonClasses('hard');
dungeonSampleSatu.battleHasExecuted();

const dungeonSampleDua = new playerInformation('Normal', 'Jack', 'Archer', 'Idle');
console.log(dungeonSampleDua);
dungeonSampleDua.battleHasExecuted();