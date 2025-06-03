import { KumaRegistry } from "@kuma-ui/next-plugin/registry";
import "@akimeaki/reset-css";
import CheckUserAgent from "@/components/CheckUserAgent";
import "@/styles/font.scss";
import "@/styles/global.scss";
import ChangeGenerator from "@/components/ChangeGenerator";
import Touch from "@/components/Touch";
interface Props {
	children: React.ReactNode;
}

export default function ({ children }: Props) {
	return (
		<html lang="ja">
			<head>
				<meta name="theme-color" content="#060303" />
				<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0" />
				<link rel="sitemap" href="/sitemap.xml" />
				{process.env.NODE_ENV === "production" && (
					<script
						dangerouslySetInnerHTML={{
							__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
									new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
									j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
									'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
									})(window,document,'script','dataLayer','GTM-KGV4LZWH');`
						}}
					/>
				)}
				{process.env.SCAN === "true" && <script src="https://unpkg.com/react-scan/dist/auto.global.js" async />}
			</head>
			<body>
				<noscript>
					{/* biome-ignore lint/a11y/useIframeTitle: <explanation> */}
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-KGV4LZWH"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					/>
				</noscript>
				<KumaRegistry>
					<Touch />
					<CheckUserAgent />
					<ChangeGenerator />
					{children}
				</KumaRegistry>
			</body>
		</html>
	);
}
