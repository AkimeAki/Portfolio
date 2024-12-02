import { KumaRegistry } from "@kuma-ui/next-plugin/registry";
import "@akimeaki/reset-css";
import "@/styles/font.scss";
import CheckUserAgent from "@/components/CheckUserAgent";

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
					<>
						<script
							dangerouslySetInnerHTML={{
								__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
									new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
									j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
									'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
									})(window,document,'script','dataLayer','GTM-KGV4LZWH');`
							}}
						/>
						<script
							async
							src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6914867149724943"
							crossOrigin="anonymous"
						></script>
					</>
				)}
			</head>
			<body>
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-KGV4LZWH"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					></iframe>
				</noscript>
				<KumaRegistry>
					<>
						<CheckUserAgent />
						{children}
					</>
				</KumaRegistry>
			</body>
		</html>
	);
}
