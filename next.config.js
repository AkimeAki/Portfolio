import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import { withKumaUI } from "@kuma-ui/next-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true
};

if (process.env.NODE_ENV === "development") {
	await setupDevPlatform();
}

export default withKumaUI(nextConfig, {
	outputDir: "./.kuma",
	wasm: true
});
