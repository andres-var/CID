"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KNN = void 0;
class KNN {
    constructor(k) {
        this.k = k;
        this.trainingSet = [];
    }
    addTrainingData(fruit) {
        this.trainingSet.push(fruit);
    }
    classify(newFruit) {
        const distances = this.trainingSet.map(fruit => ({
            fruit,
            distance: newFruit.distanceTo(fruit)
        }));
        distances.sort((a, b) => a.distance - b.distance);
        const labelCounts = {};
        for (let i = 0; i < this.k; i++) {
            const label = distances[i].fruit.label;
            labelCounts[label] = (labelCounts[label] || 0) + 1;
        }
        let maxLabel = null;
        let maxCount = -1;
        for (const label in labelCounts) {
            if (labelCounts[label] > maxCount) {
                maxLabel = label;
                maxCount = labelCounts[label];
            }
        }
        return maxLabel;
    }
}
exports.KNN = KNN;
//# sourceMappingURL=knn.js.map