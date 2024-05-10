export class Fruit {
   
    constructor(public color: number, public size: number, public label: string) {}
  
    distanceTo(otherFruit: Fruit) {
      const diffColor = Math.pow(this.color - otherFruit.color, 2);
      const diffSize = Math.pow(this.size - otherFruit.size, 2);
      return Math.sqrt(diffColor + diffSize);
    }
}