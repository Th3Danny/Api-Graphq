
import { login } from "./user/login"
import {getPhoneByModel} from './phone/getPhoneByModel'
import {getPhones} from './phone/getPhones'
import {getUserByEmail} from './user/getUserByEmail'
import {getUsers} from './user/getUsers'
export const allQuerys : string =`
type Query {
    ${getPhoneByModel}
    ${getPhones}
    ${login}
    ${getUsers}
    ${getUserByEmail}
}
`