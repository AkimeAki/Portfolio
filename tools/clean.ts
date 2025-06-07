import fs from "node:fs";

try {
	fs.rmSync("./.next/", { recursive: true, force: true });
	fs.rmSync("./.kuma/", { recursive: true, force: true });
	fs.rmSync("./.open-next/", { recursive: true, force: true });
	console.log("🧹完了");
} catch (err) {
	console.error("🧹エラー:", err);
}
