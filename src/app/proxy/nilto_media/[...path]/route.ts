import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
	const path = (await params).path.join("/");

	const targetUrl = `https://cms-assets.nilto.com/spaces/464620327/media/${path}`;
	try {
		const response = await fetch(targetUrl, {
			cache: "no-store"
		});

		if (!response.ok) {
			return new NextResponse(response.statusText, { status: response.status });
		}

		const data = await response.arrayBuffer();

		const headers = new Headers();
		headers.set("Content-Type", response.headers.get("Content-Type") || "application/octet-stream");
		headers.set("Content-Length", response.headers.get("Content-Length") || "0");

		return new NextResponse(data, {
			status: 200,
			headers: headers
		});
	} catch (error) {
		console.error("Proxy Error:", error);
		return new NextResponse("Proxy Error", { status: 500 });
	}
}
