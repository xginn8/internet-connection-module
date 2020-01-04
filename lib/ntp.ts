// From https://www.balena.io/docs/reference/OS/network/2.x/#network-requirements:
//
// NTP / UDP packets (port 123) are exchanged with:
//
//    0.resinio.pool.ntp.org
//    1.resinio.pool.ntp.org
//    2.resinio.pool.ntp.org
//    3.resinio.pool.ntp.org

import * as dgram from 'dgram';
import { NTPServers, NTPPacket } from './typings';
//import { ntpTimeout, ntpPacketSize } from './constants';
import { ntpPacketSize } from './constants';

const sendNTPPacketToServer = async (
	server: string,
	port: number,
	packet: NTPPacket,
): Promise<boolean | void> => {
	const udpClient = dgram.createSocket('udp4');

	//await new Promise(() => {

	//udpClient.on('error', err => {
	//	console.debug(`Error emitted: ${err}`);
	//	udpClient.close();
	//});

	udpClient.on('message', (msg, remote) => {
		console.debug(`Received response from ${remote.address}:${remote.port}`);
		// TODO: should really confirm that this is a properly formed NTP packet
		if (msg.length == ntpPacketSize) {
			console.log(`msg.length: ${msg.length}`);
		} else {
			throw `NTP server failure (bad response): ${server}`;
		}
		//	udpClient.close();
	});

	//});

	udpClient.send(packet, 0, ntpPacketSize, port, server, (err, _) => {
		console.log(`sent NTP packet to ${server}:${port}`);
		if (err) {
			console.log(`NTP server failure (send error): ${server}`);
		}
		//	udpClient.close();
	});
};
const sendNTPPackets = async (
	servers: NTPServers,
	port: number,
	packet: NTPPacket,
): Promise<boolean | void> => {
	let success = 0;

	try {
		await servers.forEach(async server => {
			try {
				await sendNTPPacketToServer(server, port, packet);
				success += 1;
			} catch (err) {
				console.log(err);
			}
		});
	} catch (err) {
		console.log(err);
	}

	console.log(`successes: ${success} servers.length: ${servers.length}`);
	if (success != 1) {
		throw 'No NTP servers returned a valid response';
	} else {
		console.log('At least one NTP server returned a valid response');
		//return;
	}
};

export const testNtp = async (
	servers: NTPServers,
	port: number,
	packet: NTPPacket,
): Promise<void> => {
	sendNTPPackets(servers, port, packet);
};
