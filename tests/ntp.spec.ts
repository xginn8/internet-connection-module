import * as chai from 'chai';
import chaiAsPromised = require('chai-as-promised');
import 'mocha';

//import { testNtp } from '../lib/ntp';
//import { ntpServers, ntpPort, ntpPacket } from '../lib/constants';

chai.use(chaiAsPromised);

describe('NTP querying validation', () => {
	//it('should return void for known-good NTP server', async () => {
	//	chai.expect(await testNtp(ntpServers, ntpPort, ntpPacket)).to.be.undefined;
	//});
	//	it('should not fail for some servers not providing NTP', () => {
	//		chai.expect(() => testNtp(['laksjdalksjd.com'], ntpPort, ntpPacket)).to.throw();
	//	});
	//
	//	it('should fail for servers not providing NTP', () => {
	//		chai.expect(() => testNtp(['google.com'], ntpPort, ntpPacket)).to.throw();
	//	});
});
