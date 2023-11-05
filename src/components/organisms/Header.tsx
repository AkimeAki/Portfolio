/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export const Header = (): JSX.Element => {
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

					a {
						color: white;
						font-size: 22px;
						text-decoration: none;
					}
				`}
			>
				<Link to="/portfolio">ポートフォリオ</Link>
				<Link to="/works">お仕事</Link>
				<Link to="/contact">お問い合わせ</Link>
			</nav>
		</header>
	);
};
