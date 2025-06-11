import type { NiltoSchema, PortfolioSchema } from "@/libs/nilto";
import nullToUndefined from "@akimeaki/null-to-undefined";
import { NextResponse } from "next/server";

export const dynamic = "error";
export const dynamicParams = false;

export async function GET() {
	try {
		const response = await fetch("https://cms-api.nilto.com/v1/contents/?model=portfolio&lang=ja", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"X-NILTO-API-KEY": process.env.NILTO_API_KEY ?? ""
			},
			cache: "force-cache"
		});
		if (!response.ok) {
			throw new Error(`データを取得できませんでした。ステータス：${response.status}`);
		}
		const niltData: NiltoSchema<PortfolioSchema> = nullToUndefined(await response.json());
		await new Promise((resolve) => setTimeout(resolve, 5000));

		return new NextResponse(JSON.stringify(niltData.data), {
			status: 200
		});
	} catch (e) {
		console.error("API Error:", e);
		return new NextResponse("API Error", { status: 500 });
	}
}
