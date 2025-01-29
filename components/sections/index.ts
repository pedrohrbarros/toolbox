import { FileSection } from "./file";
import SecretSection from "./secret";
import URLSection from "./url";

export const Section = {
  URL: URLSection,
  File: FileSection,
  Secret: SecretSection,
}