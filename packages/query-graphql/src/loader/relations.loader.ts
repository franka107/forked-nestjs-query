import { QueryService } from "@franka107-nestjs-query/core";

export interface NestjsQueryDataloader<DTO, Args, Result> {
  createLoader(
    service: QueryService<DTO, unknown, unknown>
  ): (args: ReadonlyArray<Args>) => Promise<Result[]>;
}
