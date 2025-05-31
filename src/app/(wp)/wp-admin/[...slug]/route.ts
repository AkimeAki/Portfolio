import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export const GET = async (): Promise<void> => {
	await new Promise((resolve) => setTimeout(resolve, 700));

	redirect("/wp-login.php?redirect_to=https://shikiiro.net/wp-admin&reauth=1");
};
