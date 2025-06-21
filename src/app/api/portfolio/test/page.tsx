export const dynamic = "error";

async function getCurrentTime() {
	const res = await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC");

	if (!res.ok) {
		throw new Error("error");
	}

	const data = await res.json();
	return data.datetime;
}

export default async function () {
	const currentTime = await getCurrentTime();

	return <div>SSG TEST: {currentTime}</div>;
}
