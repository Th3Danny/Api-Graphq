import { typePhone, typeUser, typeWebhook, typeEvent, typeWebhookEvent } from "./entities";
import { allMutations } from "./mutations/typeMutation";
import { allQuerys } from "./queries/typeQuery";

export const typeDefs: string =
  typePhone + typeUser + typeWebhook + typeEvent + typeWebhookEvent + allQuerys + allMutations;
