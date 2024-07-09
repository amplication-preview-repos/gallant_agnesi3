import { Module } from "@nestjs/common";
import { QuestModuleBase } from "./base/quest.module.base";
import { QuestService } from "./quest.service";
import { QuestController } from "./quest.controller";
import { QuestResolver } from "./quest.resolver";

@Module({
  imports: [QuestModuleBase],
  controllers: [QuestController],
  providers: [QuestService, QuestResolver],
  exports: [QuestService],
})
export class QuestModule {}
