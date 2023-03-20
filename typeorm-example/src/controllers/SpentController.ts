import AppDataSource from "../data-source";
import { Spents } from "../entities/Spent";
import { Request, Response } from 'express';
import { User } from "../entities/User";

class SpentController{

    public async create(req: Request, res: Response): Promise<Response> {
        const { description, value } = req.body;
        const {id} = res.locals;

        const user:any = await AppDataSource.manager.findBy(User,{id})

        const spent = new Spents();
        spent.description = description;
        spent.value = value;
        spent.user = user;

        await AppDataSource.manager.save(Spents,spent);
        return res.json(spent)

    }

}

export default new SpentController();