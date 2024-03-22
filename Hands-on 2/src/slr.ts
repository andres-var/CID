export class SLR {    
    private beta_0: number = 0;
    private beta_1: number = 0;
    private correlation: number = 0;
    private determination : number = 0;

    public getBeta_0() { return this.beta_0; }

    public getBeta_1() { return this.beta_1; }

    public getCorrelation() { return this.correlation; }

    public getDetermination() { return this.determination; }

    public toComputeBeta_0({ sumY, sumX, n }: { sumY: number, sumX: number, n: number }) {
        this.beta_0 = ((sumY - this.beta_1 * sumX) / n)
    }

    public toComputeBeta_1({n, sumXY, sumX, sumY, sumXQuad}: {n: number, sumXY: number, sumX: number, sumY: number, sumXQuad: number}) {
        this.beta_1 = 
            ((n*sumXY) - (sumX * sumY)) / 
            (n*sumXQuad - Math.pow(sumX, 2))
    }

    public toRegress(){
        console.log(`La ecuación de regresión es: Y = ${this.beta_0} + ${this.beta_1} * x`);
    }

    public toPredictY(x : number){
        let y = this.beta_0 + this.beta_1 * x;
        console.log(`Para X = ${x}, Y predecido = ${y}`);
        return y;
    }

    public computeCorrelationCoefficient({n, sumXY, sumX, sumY, sumXQuad, sumYQuad}: {n: number, sumXY: number, sumX: number, sumY: number, sumXQuad: number, sumYQuad: number}) {
        this.correlation = ((n * sumXY) - (sumX * sumY)) / Math.sqrt(((n * sumXQuad - Math.pow(sumX, 2)) * (n * sumYQuad - Math.pow(sumY, 2))));
        console.log(`El coeficiente de correlación es: ${this.correlation}`);
    }

    public computeDeterminationCoefficient() {
        this.determination = Math.pow(this.correlation, 2);
        console.log(`El coeficiente de determinación es: ${this.determination}`);
    }

    public makePredictions(xValues: number[]) {
        xValues.forEach(x => this.toPredictY(x));
    }
}