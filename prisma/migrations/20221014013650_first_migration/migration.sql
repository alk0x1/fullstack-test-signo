-- CreateTable
CREATE TABLE `Enquete` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `data_inicio` VARCHAR(191) NOT NULL,
    `data_fim` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OpcoesDeResposta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `enquete_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OpcoesDeResposta` ADD CONSTRAINT `OpcoesDeResposta_enquete_id_fkey` FOREIGN KEY (`enquete_id`) REFERENCES `Enquete`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
