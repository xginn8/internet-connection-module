import * as rp from 'request-promise';
import { APIFailureError } from './errors';

export const testApi = async (apiUrl: string): Promise<boolean | void> => {
	try {
		const resp = await rp.get(apiUrl);
		if (resp !== 'OK') {
			throw new APIFailureError();
		}
		return true;
	} catch (e) {
		throw e;
	}
};
