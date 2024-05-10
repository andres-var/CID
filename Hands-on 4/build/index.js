"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fruit_1 = require("./fruit");
const knn_1 = require("./knn");
const knn = new knn_1.KNN(3);
knn.addTrainingData(new fruit_1.Fruit(1, 5, 'Manzana'));
knn.addTrainingData(new fruit_1.Fruit(3, 6, 'Manzana'));
knn.addTrainingData(new fruit_1.Fruit(2, 4, 'Plátano'));
knn.addTrainingData(new fruit_1.Fruit(5, 3, 'Plátano'));
const newFruit = new fruit_1.Fruit(1, 5, '');
const classification = knn.classify(newFruit);
console.log('La fruta clasificada es:', classification);
//# sourceMappingURL=index.js.map