import { Injectable } from "@nestjs/common";
import { Assinatura, CompraAssinatura } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { AssinarDTO } from "../dtos/assinar.dto";
import { CreateAssinaturaDTO } from "../dtos/create-assinatura-dto";

@Injectable()
export class AssinaturaRepository {

    constructor(private prisma: PrismaService){}

    async create(data: CreateAssinaturaDTO): Promise<Assinatura>{
        return this.prisma.assinatura.create({ data })
    }

    async assinar(data: AssinarDTO): Promise<CompraAssinatura>{
        return await this.prisma.compraAssinatura.create({ data });
    }
}