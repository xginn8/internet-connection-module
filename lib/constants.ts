import { NTPServers, NTPPacket } from './typings';

export const ntpServers: NTPServers = [
	'0.resinio.pool.ntp.org',
	'1.resinio.pool.ntp.org',
	'2.resinio.pool.ntp.org',
	'3.resinio.pool.ntp.org',
];

export const balenaApi: string = 'https://api.balena-cloud.com';

export const ntpPacket: NTPPacket = new Uint8Array([
	0x1b,
	//	0b11100011,
	//	0,
	//	6,
	//	0xec,
	//	49,
	//	0x4e,
	//	49,
	//	52,
]);

export const ntpPort: number = 123;

export const ntpPacketSize: number = 48;

export const ntpTimeout: number = 1000;
