import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import { withKumaUI } from "@kuma-ui/next-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true
};

export default withKumaUI(nextConfig, {
	outputDir: "./.kuma",
	wasm: true
});

initOpenNextCloudflareForDev();
