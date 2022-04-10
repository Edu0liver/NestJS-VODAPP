import { Injectable } from "@nestjs/common";
import { Assinatura, CompraAssinatura } from "@prisma/client";
import { AssinarDTO } from "../dtos/assinar.dto";
import { CreateAssinaturaDTO } from "../dtos/create-assinatura-dto";
import { AssinaturaRepository } from "../repositories/AssinaturaRepository";

@Injectable()
export class AssinaturaService {

    constructor(private assinaturaRepository: AssinaturaRepository){}

    async create(data: CreateAssinaturaDTO): Promise<Assinatura>{
        return await this.assinaturaRepository.create(data);
    }

    async assinar(data: AssinarDTO): Promise<CompraAssinatura>{
        return await this.assinaturaRepository.assinar(data);
    }

    async showHistoric(): Promise<CompraAssinatura[]>{
        return await this.assinaturaRepository.showHistoric();
    }
    
}