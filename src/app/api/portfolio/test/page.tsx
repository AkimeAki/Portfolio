export const dynamic = "error";

export default async function () {
	let currentTime = "test";
	try {
		const res = await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC");

		console.log(res.status);
		if (!res.ok) {
			console.error("Failed to fetch current time:", res.statusText);
			throw new Error("Failed to fetch current time");
		}

		currentTime = await res.json();
		currentTime = String(currentTime);
	} catch (e) {
		console.error("Error fetching current time:", e);
		return <div>Error fetching current time</div>;
	}

	return <div>SSG TEST: {currentTime}</div>;
}
