export const dynamic = "force-static";
// export const dynamic = "force-dynamic";

export default async function () {
	const date = new Date();

	return <div>SSG TEST: {date.getTime()}</div>;
}
