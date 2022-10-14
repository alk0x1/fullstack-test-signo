/*
  Warnings:

  - The primary key for the `Enquete` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `OpcoesDeResposta` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `OpcoesDeResposta` DROP FOREIGN KEY `OpcoesDeResposta_enquete_id_fkey`;

-- AlterTable
ALTER TABLE `Enquete` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `OpcoesDeResposta` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `enquete_id` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `OpcoesDeResposta` ADD CONSTRAINT `OpcoesDeResposta_enquete_id_fkey` FOREIGN KEY (`enquete_id`) REFERENCES `Enquete`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
