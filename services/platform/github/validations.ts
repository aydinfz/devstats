import { string, number, object } from "yup";

export const getLanguageUsageSummary = object({
  field: string()
    .required()
    .oneOf(["PUSHED_AT", "CREATED_AT", "UPDATED_AT", "STARGAZERS"]),
  direction: string().required().oneOf(["ASC", "DESC"]),
})
  .required()
  .noUnknown(true);

export const getRepositoryMilestone = object({
  repository_name: string().required(),
  milestone_id: number().required(),
})
  .required()
  .noUnknown(true);
