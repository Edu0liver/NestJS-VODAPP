/*
  Warnings:

  - You are about to drop the column `user_id` on the `assinaturas` table. All the data in the column will be lost.
  - Added the required column `name` to the `assinaturas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `assinaturas` DROP FOREIGN KEY `assinaturas_user_id_fkey`;

-- AlterTable
ALTER TABLE `assinaturas` DROP COLUMN `user_id`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL DEFAULT 0.0;

-- CreateTable
CREATE TABLE `compras_assinaturas` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `assinatura_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `compras_assinaturas` ADD CONSTRAINT `compras_assinaturas_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compras_assinaturas` ADD CONSTRAINT `compras_assinaturas_assinatura_id_fkey` FOREIGN KEY (`assinatura_id`) REFERENCES `assinaturas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
