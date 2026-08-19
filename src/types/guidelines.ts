import manifest from "../knowledge/component-manifest.json";
import { apiToArgTypes, type ComponentApi } from "./component-api";

export interface VariantItem {
  key: string;
  title: string;
  description: string;
  image: string;
}

export interface StoryItem {
  key: string;
  title: string;
  description: string;
  list?: string[];
  /** Canonical consumer JSX for stories whose custom render is unsuitable for generated docs source. */
  source?: string;
}

export interface CompositionItem {
  key: string;
  name: string;
  description: string;
  image: string;
}

export interface RelatedItem {
  name: string;
  link: string;
}

export interface RuleContent {
  description: string;
  image: string;
}

export interface RuleItem {
  heading: string;
  description: string;
  doContent: RuleContent[];
  dontContent: RuleContent[];
}

export interface ComponentDoc {
  title: string;
  description: string;
  hero: string[];
  figma: string[];
  storybook: string[];
  github: string[];
  website: string[];
  guides: string[];
  usage: {
    list: string[];
  };
  accessibility: {
    designerList: string[];
    engineerList: string[];
  };
  anatomy: {
    image: string;
    list: string[];
  };
  variants: {
    items: VariantItem[];
  };
  stories: {
    items: StoryItem[];
  };
  compositions: {
    description: string;
    items: CompositionItem[];
  };
  related: {
    items: RelatedItem[];
  };
  rules: RuleItem[];
  behaviour: {
    list: string[];
  };
  writing: {
    list: string[];
  };
}

export type MuiDocs = Record<string, ComponentDoc>;

function getManifestComponent(displayName: string) {
  const knowledge = manifest as unknown as {
    components: Array<{
      displayName: string;
      api?: ComponentApi;
      guidelines?: ComponentDoc;
    }>;
  };

  return knowledge.components.find((component) => component.displayName === displayName);
}

export function getManifestComponentDoc(displayName: string): ComponentDoc | undefined {
  return getManifestComponent(displayName)?.guidelines;
}

/** Builds the component description shown in Storybook, including usage and engineering guidance. */
export function getManifestComponentDescription(displayName: string): string {
  const doc = getManifestComponentDoc(displayName);
  if (!doc) return "";

  const engineerGuidance = doc.accessibility?.engineerList || [];
  const usage = doc.usage?.list || [];
  if (usage.length === 0 && engineerGuidance.length === 0) return doc.description;

  return [
    doc.description,
    usage.length > 0 && ["**Usage**", usage.map((item) => `- ${item}`).join("\n")].join("\n\n"),
    engineerGuidance.length > 0 && [
      "<p class=\"sbdocs-accessibility-heading\"><strong>Accessibility for engineers</strong></p>",
      engineerGuidance.map((item) => `- ${item}`).join("\n")
    ].join("\n\n")
  ].filter(Boolean).join("\n\n");
}

/** Builds Storybook controls from the generated component knowledge manifest. */
export function getManifestArgTypes(displayName: string): Record<string, Record<string, unknown>> {
  const api = getManifestComponent(displayName)?.api;

  if (!api) {
    throw new Error(`Missing API metadata for ${displayName} in the component manifest.`);
  }

  return apiToArgTypes(api);
}

export function getStoryMetaFromManifest(displayName: string, storyKey: string) {
  const doc = getManifestComponentDoc(displayName);
  const item = doc?.stories?.items?.find((s) => s.key === storyKey);
  if (!item) return {};

  let storyDescription = item.description;

  // Render Usage section only if there are multiple (> 1) technical/accessibility callout points
  if (item.list && item.list.length > 1) {
    storyDescription = `${item.description}\n\n**Usage:**\n${item.list.map((u) => `- ${u}`).join("\n")}`;
  } else if (item.list && item.list.length === 1 && (!item.description || item.description.toLowerCase().includes("demonstrates"))) {
    storyDescription = item.list[0];
  }

  return {
    name: item.title,
    parameters: {
      docs: {
        description: {
          story: storyDescription
        },
        ...(item.source ? { source: { code: item.source, language: "tsx" } } : {})
      }
    }
  };
}
