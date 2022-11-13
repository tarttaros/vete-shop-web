import { User } from './user';

export class TokenResponse {

    id!: string;
    expirationDate!: number;
    userName!: User["name"];

}
