import nullToUndefined from "@akimeaki/null-to-undefined";

interface NiltoMedia {
	url: string;
	alt: string;
}

type NiltoDataSchema<T> = {
	_id: number;
	_model: string;
	_title: string;
	_created_at: string;
	_updated_at: string;
	_published_at: string;
	_status: string;
} & T;

interface NiltoSchema<T> {
	total: number;
	offset: number;
	limit: number;
	data: T[];
}

interface PortfolioAccountSchema {
	name: string;
	url: string;
}

export type PortfolioSchema = NiltoDataSchema<{
	title: string;
	data_type: string;
	detail: string;
	eyecatch?: NiltoMedia;
	hover_eyecatch?: NiltoMedia;
	url: string;
	"3dmodel"?: NiltoMedia;
	type: string;
	created_at: string;
	tools: {
		tool: NiltoDataSchema<{
			name: string;
			bg_color: string;
			text_color: string;
		}>;
	}[];
	client: NiltoDataSchema<PortfolioAccountSchema>;
	credits: {
		credit_position: string;
		person: NiltoDataSchema<PortfolioAccountSchema>;
	}[];
}>;

const portfolioData: PortfolioSchema[] | null = null;

interface GetPortfolioProps {
	type: string;
	id?: string;
}

export async function getPortfolio({ type, id }: GetPortfolioProps) {
	let result: PortfolioSchema[] = [];

	try {
		if (portfolioData === null) {
			const response = await fetch("https://cms-api.nilto.com/v1/contents/?model=portfolio&lang=ja", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"X-NILTO-API-KEY": process.env.NILTO_API_KEY ?? ""
				}
			});
			if (!response.ok) {
				throw new Error(`データを取得できませんでした。ステータス：${response.status}`);
			}
			const niltData: NiltoSchema<PortfolioSchema> = nullToUndefined(await response.json());

			result = niltData.data;
		} else {
			result = portfolioData;
		}

		result = result.filter((data) => {
			return data.data_type === type;
		});

		if (id !== undefined) {
			result.filter((data) => {
				return String(data._id) === id;
			});
		}
	} catch (e) {
		console.log(e);
	}

	return result;
}
