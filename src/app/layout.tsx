import { KumaRegistry } from "@kuma-ui/next-plugin/registry";
import "@/global.scss";
import CheckUserAgent from "@/components/CheckUserAgent";

export const runtime = "edge";

interface Props {
	children: React.ReactNode;
}

export default function ({ children }: Props) {
	return (
		<html lang="ja">
			<head>
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
					</>
				)}
			</head>
			<body data-script="invalid">
				<script
					dangerouslySetInnerHTML={{
						__html: 'document.body.dataset.script="valid";'
					}}
				/>
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
