"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Súper velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Súper velocidad"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + "" + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: "Fernando",
        age: 25,
        address: {
            id: 125,
            zip: "KYR33 SJJ",
            city: "Ottawa",
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: "Melissa",
        age: 30,
        address: {
            city: "Toronto",
            id: 120,
            zip: "K2S U2A",
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
})();
(() => {
    let addNumbersFuntion;
    addNumbersFuntion = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map