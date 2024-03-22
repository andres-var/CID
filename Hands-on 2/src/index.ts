import { DataSet } from "./data-set";
import { DiscreteMaths } from "./discrete-maths";
import { SLR } from "./slr";

const dataSet = new DataSet();
dataSet.load("data.json");

const discreteMaths = new DiscreteMaths();

const x = dataSet.getX()
const y = dataSet.getY()

const n = discreteMaths.getN(x)
const sumX = discreteMaths.sumX(x)
const sumY = discreteMaths.sumY(y)
const sumXQuad = discreteMaths.sumXQuad(x)
const sumXY = discreteMaths.sumXY(x, y)
const sumYQuad = discreteMaths.sumYQuad(y)


const slr = new SLR()

slr.toComputeBeta_1({n, sumXY, sumX, sumY, sumXQuad})
slr.toComputeBeta_0({sumY, sumX, n})

slr.toRegress()
slr.computeCorrelationCoefficient({n, sumXY, sumX, sumY, sumXQuad, sumYQuad})
slr.computeDeterminationCoefficient()


slr.makePredictions([23, 26, 15, 10, 60])