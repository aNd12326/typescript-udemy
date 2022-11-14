(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {}
    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
    }

    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    getFullNameDesdeXmen() {
      console.log(super.getFullName());
    }

    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error("El nombre debe ser mayor de 3 letras");
      }

      this.name = name;
    }
  }

  const wolverine = new Xmen("Wolverine", "logan", true);

  //   wolverine.fullName = "Fernando";

  //   console.log(wolverine.fullName);
  //   wolverine.getFullNameDesdeXmen();
})();
