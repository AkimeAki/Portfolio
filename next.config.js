import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import { withKumaUI } from "@kuma-ui/next-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: false,
	images: {
		formats: ["image/webp"]
	}
};

export default withKumaUI(nextConfig, {
	outputDir: "./.kuma",
	wasm: true
});

initOpenNextCloudflareForDev();
