# Internet connection test module

 From https://www.balena.io/docs/reference/OS/network/2.x/#network-requirements:

> Balena makes use of the following ports:
>
>    443 TCP - This is the most fundamental requirement - it is used to connect to the VPN and the web terminal, and many web endpoints using TLS (https://.)
>    123 UDP - For NTP time synchronisation.
>    53 UDP - For DNS name resolution.
>
>Each of these should work with outward only (and inward once outward connection established) firewall settings.
>
>Additionally, you should whitelist the following domains for the relevant ports above:
>
>    *.balena-cloud.com
>    *.docker.com
>    *.docker.io
>
>NTP / UDP packets (port 123) are exchanged with:
>
>    0.resinio.pool.ntp.org
>    1.resinio.pool.ntp.org
>    2.resinio.pool.ntp.org
>    3.resinio.pool.ntp.org
