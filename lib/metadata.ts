import { Metadata } from "next";

export const seo = (override: Metadata): Metadata => {
  return {
    title:
      override.title ??
      "Tooodos | Create, Plan, Manage and Analyze your dailt tasks.",
    description:
      override.description ??
      "Create, Plan, Manage and Analyze your dailt tasks.",
    ...override,
  };
};
