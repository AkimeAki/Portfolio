/** @jsxImportSource @emotion/react */
import { SnsIcon } from "@/components/atoms/SnsIcon";
import { css } from "@emotion/react";

export const Links = (): JSX.Element => {
	return (
		<div
			css={css`
				display: grid;
				grid-template-columns: 1fr 1fr 1fr 1fr;
				justify-items: center;
				row-gap: 50px;
				column-gap: 10px;
				padding: 30px 0;
				width: 100%;

				@media screen and (max-width: 860px) {
					grid-template-columns: 1fr 1fr 1fr;
				}

				@media screen and (max-width: 680px) {
					grid-template-columns: 1fr 1fr;

					img {
						width: 50px;
					}
				}
			`}
		>
			<SnsIcon icon="youtube" name="YouTube" url="https://www.youtube.com/channel/UCHV3Taosn76pn9_ip1u7Zkg">
				ゆっくり実況投稿
				<wbr />
				してます
			</SnsIcon>
			<SnsIcon icon="twitter" name="Twitter" url="https://twitter.com/Akime_Aki">
				変なこと
				<wbr />
				つぶやいています
			</SnsIcon>
			<SnsIcon icon="x" name="X" url="https://x.com/Akime_Aki">
				Twitter
			</SnsIcon>
			<SnsIcon icon="threads" name="Threads" url="https://www.threads.net/@akime.aki">
				雑多垢です
			</SnsIcon>
			<SnsIcon icon="twitch" name="Twitch" url="https://www.twitch.tv/akime_aki">
				たまに生配信してます
			</SnsIcon>
			<SnsIcon icon="booth" name="Booth" url="https://a-k-i.booth.pm/">
				ダウンロードできるもの
				<wbr />
				置いてたりします
			</SnsIcon>
			<SnsIcon icon="marshmallow" name="マシュマロ" url="https://marshmallow-qa.com/aki_">
				匿名でのメッセージは
				<wbr />
				こちらから
			</SnsIcon>
			<SnsIcon icon="github" name="GitHub" url="https://github.com/AkimeAki">
				コードとか
				<wbr />
				置いてます
			</SnsIcon>
			<SnsIcon icon="niconico" name="ニコニコ動画" url="https://www.nicovideo.jp/user/98282698">
				YouTubeと同じものを
				<wbr />
				投稿してます
			</SnsIcon>
			<SnsIcon icon="misskeyio" name="Misskey.io" url="https://misskey.io/@_aki">
				たまに
				<wbr />
				覗いてます
			</SnsIcon>
			<SnsIcon icon="instagram" name="Instagram" url="https://www.instagram.com/akime.aki/">
				たまに
				<wbr />
				投稿します
			</SnsIcon>
			<SnsIcon icon="bluesky" name="Bluesky" url="https://bsky.app/profile/aki.wtf">
				人が増えたら
				<wbr />
				覗きます
			</SnsIcon>
			<SnsIcon icon="taitsu" name="タイッツー" url="https://taittsuu.com/users/_aki">
				未稼働
			</SnsIcon>
			<SnsIcon icon="tiktok" name="TikTok" url="https://www.tiktok.com/@akime.aki">
				YouTube Shortsと同じものを
				<wbr />
				投稿してます
			</SnsIcon>
		</div>
	);
};
