import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

import { testApi } from '../lib/api';
import { balenaApi } from '../lib/constants';

chai.use(chaiAsPromised);

describe('API connectivity validation', () => {
	it('should return void for known-good balenaCloud API server', async () => {
		chai.expect(await testApi(`${balenaApi}/ping`)).to.be.true;
	});

	it('should throw for known-bad balenaCloud API server', async () => {
		chai.expect(async () => await testApi(`https://google.com`)).to.throw();
	});
});
