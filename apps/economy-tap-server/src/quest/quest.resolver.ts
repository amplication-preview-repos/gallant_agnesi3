import * as graphql from "@nestjs/graphql";
import { QuestResolverBase } from "./base/quest.resolver.base";
import { Quest } from "./base/Quest";
import { QuestService } from "./quest.service";

@graphql.Resolver(() => Quest)
export class QuestResolver extends QuestResolverBase {
  constructor(protected readonly service: QuestService) {
    super(service);
  }
}
