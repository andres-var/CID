import * as fs from "fs";
import * as path from "path";
import { IDataSet } from "./interfaces/data-set";

export class DataSet {
    private x : number[] = [];
    private y: number[] = [];
    
    
    public getX(){ 
        return this.x;
    }

    public getY(){
        return this.y;
    }

    load(source: string) {
        const fullPath = path.join(__dirname, source)
        const data: IDataSet[]  = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));

        this.x = data.map(d => d.x);
        this.y = data.map(d => d.y);
    }

}