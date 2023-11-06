/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/routes/pages/Home";
import { Portfolio } from "@/routes/pages/Portfolio";
import { Contact } from "@/routes/pages/Contact";
import { Works } from "@/routes/pages/Works";
import { Links } from "@/routes/pages/Links";
import { NotFound } from "@/routes/pages/NotFound";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

import { Router } from "@/routes/Router";

export const Main = (): JSX.Element => {
	return (
		<BrowserRouter>
			<div
				css={css`
					width: 100%;
					max-width: 1000px;
					height: 100%;
					margin: 0 auto;
					padding: 30px 60px;

					@media screen and (max-width: 550px) {
						padding: 0 30px;
					}
				`}
			>
				<div
					css={css`
						height: 100%;
					`}
				>
					<Header />
					<main
						css={css`
							position: relative;
							min-height: calc(100% - (80px + 100px));
						`}
					>
						<Routes>
							<Route path="/" element={<Router element={<Home />} />} />
							<Route path="/portfolio" element={<Router element={<Portfolio />} />} />
							<Route path="/contact" element={<Router element={<Contact />} />} />
							<Route path="/works" element={<Router element={<Works />} />} />
							<Route path="/links" element={<Router element={<Links />} />} />
							<Route path="*" element={<Router element={<NotFound />} />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
};
