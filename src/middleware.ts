import { NextResponse } from "next/server";
import { emojiPathList } from "@/data/emoji-path";

export function middleware(request: Request) {
	const url = new URL(request.url);

	const emoji = url.pathname.replaceAll(/[/]{2,}/g, "/").replace(/^\//, "");

	for (const path in emojiPathList) {
		for (const emojiPath of emojiPathList[path].emoji) {
			if (emoji === emojiPath || emoji === encodeURIComponent(emojiPath)) {
				const redirectUrl = url.protocol + "//" + url.host + "/" + path + url.search + url.hash;

				return NextResponse.redirect(redirectUrl, {
					status: 301
				});
			}
		}
	}

	return NextResponse.next();
}
