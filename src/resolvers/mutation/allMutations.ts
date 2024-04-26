
// import * as Phone from './phone'
import { createPhone } from "./phone/createPhoneMutation"
import { deletePhone } from "./phone/deletePhoneMutation"
import { updatePhone } from "./phone/updatePhoneMutation"
import { createUser } from "./user/createUserMutation"
import { deleteUser} from "./user/deleteUserMutation"

import { createWebhook } from './webhook/createWebhook';
import { createEvent } from './webhook/createEvent';
import { createWebhookEvent } from "./webhook/createWebhookEvent"


export const Mutation = {

    createPhone,
    deletePhone,
    updatePhone,
    createUser,
    deleteUser,
    createWebhook,
    createEvent,
    createWebhookEvent

}