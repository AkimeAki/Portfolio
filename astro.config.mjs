import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	server: {
		port: 34661
	},
	experimental: {},
	site: "https://aki.wtf",
	trailingSlash: "never",
	integrations: [sitemap(), react()],
	build: {
		format: "file"
	}
});
