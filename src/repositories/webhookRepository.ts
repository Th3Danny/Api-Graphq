import { db } from "../config/db";

export const createWebhook = async (id_user: number, url: string) : Promise<number> => {
    try {
        const query = 'INSERT INTO webhook (id_user, webhook) VALUES (?,?)';
        const result : any = await db.execute(query,[id_user, url]);
        return result[0].insertId;
    } catch (error: any) {
        throw new Error(error);
    }
};

export const createEvent = async (name: string) : Promise<number> => {
    try {
        const query = 'INSERT INTO event (name) VALUES (?)';
        const result : any= await db.execute(query,[ name ]);
        return result[0].insertId;
    } catch (error: any) {
        throw new Error(error);
    }
}

export const createWebhookEvent = async (id_webhook: number, id_event: number) : Promise<number> => {
    try {
        const query = 'INSERT INTO webhook_event (id_webhook, id_event) VALUES (?,?)';
        const result : any = await db.execute(query, [id_webhook, id_event]);
        return result[0].insertId;
    } catch (error : any) {
        throw new Error(error);
    }
}

export const getByEvent = async (id: number) : Promise<any> => {
    try {
        const query = `SELECT wh.webhook, e.name FROM webhook_event AS we
        INNER JOIN webhook AS wh
        ON we.id_webhook = wh.id
        INNER JOIN event AS e
        ON we.id_event = e.id
        WHERE we.id_event = ?;`; 
        const [webhooks] = await db.execute(query, [id]);
        return webhooks;
    } catch (error : any) {
        throw new Error(error);
    }
}