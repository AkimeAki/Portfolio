import { createClient } from "microcms-js-sdk";

import type {
	MicroCMSContentId,
	MicroCMSListContent,
	MicroCMSDate,
	MicroCMSListResponse,
	MicroCMSQueries
} from "microcms-js-sdk";

// nullを全てundefinedに変換
const nullToUndefined = <T>(object: T): T => {
	for (const value in object) {
		// nullの場合はundefinedにする
		if (object[value] === null) {
			object[value] = undefined as Extract<keyof T, undefined>;

			continue;
		}

		// 配列の場合はfor文で再起的に回す
		if (Array.isArray(object[value])) {
			const array = object[value] as Extract<keyof T, unknown[]>;
			for (let i = 0; i < array.length; i++) {
				array[i] = nullToUndefined(array[i]);
			}

			continue;
		}

		// オブジェクトの場合も再起的に実行
		if (typeof object[value] === "object") {
			object[value] = nullToUndefined(object[value]);

			continue;
		}
	}

	return object;
};

const client = createClient({
	serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN,
	apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY
});

export interface MicroCMSCategory {
	name: string;
}

export interface MicroCMSPortfolio {
	title: string;
	description: string;
	category: MicroCMSCategory & MicroCMSListContent;
	content:
		| Array<{
				fieldId: "card";
				editor: string;
		  }>
		| Array<{
				fieldId: "image";
				image: {
					url: string;
					height: number;
					width: number;
				};
		  }>
		| Array<{
				fieldId: "iframe";
				url: string;
		  }>
		| Array<{
				fieldId: "youtube";
				ytid: string;
				ms?: number;
		  }>;
}

export const getListContents = async <T>(
	apiName: string,
	queries: MicroCMSQueries = {}
): Promise<MicroCMSListResponse<T>> => {
	const response: MicroCMSListResponse<T> = { contents: [], totalCount: 0, limit: 0, offset: 0 };
	const limit = queries.limit;

	const get = async (offset: number): Promise<void> => {
		queries.offset = offset;
		if (limit !== undefined) {
			queries.limit = 10;
		}

		const result = await client.get<MicroCMSListResponse<T>>({ endpoint: apiName, queries });
		result.contents.forEach((content) => {
			response.contents.push(nullToUndefined<T & MicroCMSContentId & MicroCMSDate>(content));
		});

		response.totalCount = result.totalCount;
		response.limit = result.totalCount;

		if (result.totalCount > result.limit + result.offset && limit === undefined) {
			await get(result.limit + result.offset);
		}
	};

	await get(0);

	return response;
};

export const getContentsDetail = async <T>(
	apiName: string,
	contentId: string,
	queries: MicroCMSQueries = {}
): Promise<T & MicroCMSContentId & MicroCMSDate> => {
	const content = await client.getListDetail<T>({
		endpoint: apiName,
		contentId,
		queries
	});

	return nullToUndefined<T & MicroCMSContentId & MicroCMSDate>(content);
};
