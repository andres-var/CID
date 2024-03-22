export class DiscreteMaths {
    sumX(data : number[]){
        return data.reduce((a, b) => a + b, 0)
    }

    sumY(data : number[]){
        return data.reduce((a, b) => a + b, 0)
    }

    sumXQuad(data : number[]){
        return data.map(x => x * x).reduce((a, b) => a + b, 0)
    }

    sumXsumX(data : number[]){
        return Math.pow(data.reduce((a, b) => a + b, 0), 2)
    }

    sumXY(dataX : number[], dataY : number[]){
        return dataX.map((x, i) => x * dataY[i]).reduce((a, b) => a + b, 0)
    }

    sumYQuad(data : number[]){
        return data.map(y => y * y).reduce((a, b) => a + b, 0)
    }

    getN(data : number[]){
        return data.length
    }
    
}