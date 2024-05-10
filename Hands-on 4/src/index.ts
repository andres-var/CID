import { Fruit } from "./fruit";
import { KNN } from "./knn";

const knn = new KNN(3); 

knn.addTrainingData(new Fruit(1, 5, 'Manzana'));
knn.addTrainingData(new Fruit(3, 6, 'Manzana')); 
knn.addTrainingData(new Fruit(2, 4, 'Plátano')); 
knn.addTrainingData(new Fruit(5, 3, 'Plátano'));

const newFruit = new Fruit(1, 5, '');

const classification = knn.classify(newFruit);

console.log('La fruta clasificada es:', classification);