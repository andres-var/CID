import { Fruit } from "./fruit";

export class KNN {
    private trainingSet: Fruit[] = [];

    constructor(private k: number) {}
  
    addTrainingData(fruit: Fruit) {
        this.trainingSet.push(fruit);
    }
  
    classify(newFruit: Fruit) {
        const distances = this.trainingSet.map(fruit => ({
            fruit,
            distance: newFruit.distanceTo(fruit)
        }));
    
        distances.sort((a, b) => a.distance - b.distance);
    
        const labelCounts : Record<string, number> = {};

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