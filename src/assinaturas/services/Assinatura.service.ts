import { HttpException, Injectable } from "@nestjs/common";
import { Assinatura, CompraAssinatura } from "@prisma/client";
import { UsersRepository } from "src/users/repositories/UsersRepository";
import { AssinarDTO } from "../dtos/assinar.dto";
import { CreateAssinaturaDTO } from "../dtos/create-assinatura-dto";
import { AssinaturaRepository } from "../repositories/AssinaturaRepository";

@Injectable()
export class AssinaturaService {

    constructor(
        private assinaturaRepository: AssinaturaRepository,
        private usersRepository: UsersRepository,
    ){}

    async create(data: CreateAssinaturaDTO, user_id: string): Promise<Assinatura>{
        const user = await this.usersRepository.findById(user_id);

        if(!user.is_admin){
            throw new HttpException({message: "Ação não autorizada!"}, 401)
        }

        return await this.assinaturaRepository.create(data);
    }

    async assinar(data: AssinarDTO): Promise<CompraAssinatura>{
        return await this.assinaturaRepository.assinar(data);
    }

    async showHistoric(user_id: string): Promise<CompraAssinatura[]>{
        const user = await this.usersRepository.findById(user_id);

        if(!user.is_admin){
            throw new HttpException({message: "Ação não autorizada!"}, 401)
        }
        
        return await this.assinaturaRepository.showHistoric();
    }
    
}