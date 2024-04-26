import * as WebhookRepository from '../../repositories/webhookRepository';
import { Event } from '../../entities/webhook/event';
import { notifyEvent } from '../../utils/notifyEvent';

export const createEventService = async (name: string): Promise<Event> => {
    try {
        const id = await WebhookRepository.createEvent(name);
        notifyEvent(1);
        return { id, name};
    } catch (error : any) {
        throw new Error(error);
    }
}