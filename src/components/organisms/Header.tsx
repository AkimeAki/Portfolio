/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export const Header = (): JSX.Element => {
	const [navOpen, setNavOpen] = useState<boolean>(false);
	const location = useLocation();

	useEffect(() => {
		setNavOpen(false);
	}, [location]);

	return (
		<header
			css={css`
				height: 80px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
			`}
		>
			<Link
				css={css`
					text-decoration: none;
				`}
				to="/"
			>
				<h1
					css={css`
						color: white;
						font-size: 30px;
					`}
				>
					彩季
				</h1>
			</Link>
			<nav
				css={css`
					display: flex;
					gap: 30px;

					@media screen and (max-width: 900px) {
						display: none;
					}

					a {
						color: white;
						font-size: 22px;
						text-decoration: none;
					}
				`}
			>
				<Link to="/about">あばうと</Link>
				<Link to="https://blog.aki.wtf/" target="_blank">
					ブログ
				</Link>
				<Link to="/portfolio">作ったもの</Link>
				<Link to="/works">お仕事</Link>
				<Link to="/links">各種リンク</Link>
			</nav>
			<div
				css={css`
					display: none;

					@media screen and (max-width: 900px) {
						display: block;
					}
				`}
			>
				<div
					onClick={() => {
						setNavOpen((status) => {
							return !status;
						});
					}}
					css={css`
						position: fixed;
						top: 60px;
						right: 60px;
						width: 30px;
						height: 15px;
						cursor: pointer;
						z-index: 9999;

						@media screen and (max-width: 550px) {
							top: 30px;
							right: 30px;
						}

						div {
							position: absolute;
							width: 100%;
							height: 2px;
							right: 0;
							background-color: ${navOpen ? "#fc9e81" : "white"};
							transition-duration: 200ms;
							transition-property: top, bottom, transform, width;

							@media (prefers-color-scheme: dark) {
								background-color: ${navOpen ? "#82fc81" : "white"};
							}

							&:first-of-type {
								top: ${navOpen ? "50%" : "0"};
								transform: rotate(${navOpen ? "45deg" : "0deg"}) translateY(${navOpen ? "-50%" : "0"});
							}

							&:last-of-type {
								bottom: ${navOpen ? "50%" : "0"};
								width: ${navOpen ? "100%" : "80%"};
								transform: rotate(${navOpen ? "-45deg" : "0deg"}) translateY(${navOpen ? "50%" : "0"});
							}
						}
					`}
				>
					<div />
					<div />
				</div>
				<nav
					css={css`
						position: fixed;
						flex-direction: column;
						align-items: flex-end;
						padding: 100px 60px;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						display: ${navOpen ? "flex" : "none"};
						gap: 20px;
						background-color: white;
						z-index: 999;

						@media (prefers-color-scheme: dark) {
							background-color: #444444;
						}

						@media screen and (max-width: 550px) {
							padding: 70px 30px;
						}

						a {
							color: #fc9e81;
							font-size: 22px;
							text-decoration: none;
							user-select: none;

							@media (prefers-color-scheme: dark) {
								color: #82fc81;
							}
						}
					`}
				>
					<Link to="/about">あばうと</Link>
					<Link to="https://blog.aki.wtf/" target="_blank">
						ブログ
					</Link>
					<Link to="/portfolio">作ったもの</Link>
					<Link to="/works">お仕事</Link>
					<Link to="/links">各種リンク</Link>
				</nav>
			</div>
		</header>
	);
};
