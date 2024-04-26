import * as WebhookRepository from '../repositories/webhookRepository';

export const notifyEvent = async (id: number) => {
    try {
        const webhooks = await WebhookRepository.getByEvent(id);
        console.log(webhooks);
        webhooks.map( async (webhook : any) => {
            const body = {
                content: `Se ha realizado un ${webhook.name}`
            }
            const req = {
                method: "POST",
                headers : { "Content-Type":"application/json"},
                body: JSON.stringify(body)
            }
            
            const res = await fetch(webhook.webhook, req);
            
            if(!res.ok) throw new Error('Error al notificar al webhook');

            console.log(`Se ha enviado correctamente`);

        });
    } catch (error : any) {
        throw new Error(error);
    } 
}