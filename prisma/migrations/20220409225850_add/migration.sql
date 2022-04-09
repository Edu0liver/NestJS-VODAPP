/*
  Warnings:

  - A unique constraint covering the columns `[video_code]` on the table `videos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `videos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `videos` ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `videos_video_code_key` ON `videos`(`video_code`);
