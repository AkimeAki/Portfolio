import fs from "node:fs";

try {
	fs.rmSync("./.next/", { recursive: true, force: true });
	fs.rmSync("./.kuma/", { recursive: true, force: true });
	fs.rmSync("./.open-next/", { recursive: true, force: true });
	console.log("キャッシュを削除しました。");
} catch (err) {
	console.error("キャッシュ削除エラー:", err);
}
