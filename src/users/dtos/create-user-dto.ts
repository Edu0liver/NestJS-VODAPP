

export class CreateUserDTO {

    id?: string;

    name: string;

    email: string;

    password: string;

    is_admin?: boolean;

    created_at?: Date;
}