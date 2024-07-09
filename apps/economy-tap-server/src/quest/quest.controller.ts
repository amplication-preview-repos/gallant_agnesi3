import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestService } from "./quest.service";
import { QuestControllerBase } from "./base/quest.controller.base";

@swagger.ApiTags("quests")
@common.Controller("quests")
export class QuestController extends QuestControllerBase {
  constructor(protected readonly service: QuestService) {
    super(service);
  }
}
