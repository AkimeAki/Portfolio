import { NextResponse } from "next/server";
import { emojiPathList } from "@/data/emoji-path";

export function middleware(request: Request) {
	const url = new URL(request.url);

	for (const path in emojiPathList) {
		for (const emojiPath of emojiPathList[path].emoji) {
			const pathList = url.pathname.split("/");
			for (let i = 0; i < pathList.length; i++) {
				if (pathList[i] === encodeURIComponent(emojiPath) || pathList[i] === emojiPath) {
					pathList[i] = path;
					const pathname = pathList.join("/");
					const redirectUrl = `${url.protocol}//${url.host}${pathname}${url.search}${url.hash}`;

					return NextResponse.redirect(redirectUrl, {
						status: 301
					});
				}
			}
		}
	}

	return NextResponse.next();
}
