export default class Stone {
    amount: number;
  
    constructor(amount: number) {
      this.amount = amount;
    }

    add(amount: number) {
      this.amount += amount;
    }

    sub(amount: number) {
      if (this.canSubtract(amount)) {
        this.amount -= amount;
      }
    }

    // お金減らせる？
    canSubtract(amount: number): boolean {
      if (this.amount < amount ) {
        return false;
      }
      return true;
    }
  }