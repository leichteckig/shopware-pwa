import { ClientSettings, setupConfig } from "./settings";
import { reloadConfiguration } from "./apiService";

export { config } from "./settings";
export { Category, CategoryService } from "./categoryService";
export { ProductService } from "./services/productService";

export function setup(config: ClientSettings = {}): void {
  setupConfig(config);
  reloadConfiguration();
}
setup();