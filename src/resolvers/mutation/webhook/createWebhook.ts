import { createWebhookService } from "../../../services/webhook/createWebhookService";
import { GraphQLError } from "graphql";

export const createWebhook = async (_: void, args: any) => {
    try {
        const { id_user, url } = args;
        const webhook = await createWebhookService(id_user, url);
        return webhook;
    } catch (error : any) {
        throw new GraphQLError(error);
    }
}