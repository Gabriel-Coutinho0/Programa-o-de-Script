import { Request, Response } from "express";
import { generteToken } from "../middlewares";

class Login {
    public async login(req: Request, res: Response): Promise<Response> {
        let { mail } = req.body;
        const r = await generteToken({ mail })
        return res.json({r})
    }

}
export default new Login();