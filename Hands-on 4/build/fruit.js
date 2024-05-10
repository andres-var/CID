"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fruit = void 0;
class Fruit {
    constructor(color, size, label) {
        this.color = color;
        this.size = size;
        this.label = label;
    }
    distanceTo(otherFruit) {
        const diffColor = Math.pow(this.color - otherFruit.color, 2);
        const diffSize = Math.pow(this.size - otherFruit.size, 2);
        return Math.sqrt(diffColor + diffSize);
    }
}
exports.Fruit = Fruit;
//# sourceMappingURL=fruit.js.map