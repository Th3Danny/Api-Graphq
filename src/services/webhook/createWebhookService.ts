import * as WebhookRepository from '../../repositories/webhookRepository';
import { Webhook } from '../../entities/webhook/webhook';

export const createWebhookService = async (id_user: number, url: string) : Promise<Webhook> => {
    try {
        const id = await WebhookRepository.createWebhook(id_user, url);
        return { id, id_user, url};
    } catch (error : any) {
        throw new Error(error);
    }
}