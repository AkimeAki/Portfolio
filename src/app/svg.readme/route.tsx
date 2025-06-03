import { InlineStyle } from "@/components/commons/InlineStyle";

export const dynamic = "force-dynamic";

interface Props {
	格言: string;
}

function SVG({ 格言 }: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" width="500" height="200">
			<title>格言</title>
			<InlineStyle
				css={`
					@font-face {
						font-family: "BestTenCRT";
						src: url("https://storage.shikiiro.net/fonts/BestTen-CRT.otf");
					}

					#顔 {
						font-size: 40px;
					}

					#格言 {
						font-size: 16px;
						font-family: "BestTenCRT";
						margin-top: 5px;
					}
				`}
			/>
			<g>
				<foreignObject x="0" y="0" width="100%" height="100%">
					{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
					{/* @ts-expect-error */}
					<div xmlns="http://www.w3.org/1999/xhtml">
						<div id="顔">( ㅎ ֊ㅎ )👋</div>
						<div id="格言">{格言}</div>
					</div>
				</foreignObject>
			</g>
		</svg>
	);
}

export async function GET() {
	const りあくと = (await import("react-dom/server")).default;
	const 格言s = [
		"キリンって冷静に見るとなんか変だよな",
		"味噌汁飲んだ後に味噌汁作ると、味噌汁がまた飲めるぞ！",
		'人に道聞かれすぎて "道" になっちまうよ…'
	];
	const 神様の言う通り = Math.floor(Math.random() * 格言s.length);

	const body = りあくと.renderToStaticMarkup(<SVG 格言={格言s[神様の言う通り]} />);

	return new Response(body, {
		status: 200,
		headers: {
			"Content-Type": "image/svg+xml",
			"Cache-Control": "no-cache,no-store,must-revalidate,max-age=0",
			Pragma: "no-cache"
		}
	});
}
