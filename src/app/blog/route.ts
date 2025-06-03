import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export const GET = async (): Promise<void> => {
	redirect("https://blog.shikiiro.net/");
};
