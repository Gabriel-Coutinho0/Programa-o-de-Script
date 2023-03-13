import { Request,Response } from "express";

class Math{

    public async somar(req:Request, res:Response):Promise<Response>{
        let {x,y} = req.body;
        const soma = parseFloat(x) + parseFloat(y);
        return res.json({soma})
    }
    public async sub(req:Request, res:Response):Promise<Response>{
        let {x,y} = req.body;
        const sub = parseFloat(x) - parseFloat(y);
        return res.json({sub})
    }


}

export default new Math();