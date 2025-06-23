export interface NiltoMedia {
	url: string;
	alt: string;
}

export type NiltoDataSchema<T> = {
	_id: number;
	_model: string;
	_title: string;
	_created_at: string;
	_updated_at: string;
	_published_at: string;
	_status: string;
} & T;

export interface NiltoSchema<T> {
	total: number;
	offset: number;
	limit: number;
	data: T[];
}

export interface PortfolioAccountSchema {
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
	url_text: string;
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
	is_fanmade: boolean;
	credits: {
		credit_position: string;
		person: NiltoDataSchema<PortfolioAccountSchema>;
	}[];
}>;

interface GetPortfolioProps {
	type?: string;
	id?: string;
}

export async function getPortfolio({ type, id }: GetPortfolioProps) {
	let result: PortfolioSchema[] = [];

	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_ROOT_URL ?? ""}/api/portfolio`, {
			method: "GET",
			cache: "no-store"
		});
		if (!response.ok) {
			throw new Error(`データを取得できませんでした。ステータス：${response.status}`);
		}
		const niltData: PortfolioSchema[] = await response.json();

		result = niltData;

		if (type !== undefined) {
			result = result.filter((data) => {
				return data.data_type === type;
			});
		}

		if (id !== undefined) {
			result = result.filter((data) => {
				return String(data._id) === id;
			});
		}
	} catch (_e) {
		console.error("エラー");
	}

	return result;
}
