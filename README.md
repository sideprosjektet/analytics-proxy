# AnalyticsProxy
Google Analytics Proxy that protects your users, increases data quality
and webmasters that care about privacy sleep well at night.

## Why this proxy
After working in digital marketing and with web analytics for nearly a 
decade we have been putting cookies and tracking points on everything 
that can move. For analytics purposes we can get the same data without
compromising user data directly to third party vendors.

### Hiding the users IP from Google
Another great feature of this proxy is that it hides the enduser proxy 
from the third party vendor, Google. It's not that we suggest that google 
is not to be trusted, it's just that from a juridical point of view it 
creates some pain. By not "sharing" those data organizations with high 
external pressure for privacy, for instance government, easily could 
continue using Google Analytics.

The trust issue arises further as European countries really start 
implementing and understanding GDPR. Since IP-address is a piece of 
public information which could be used to triangulate or fingerprint a 
user, it's by nature PII. This means that the practice which have been 
"ok" online will be challenged as lawsuits starts poping up. Eventhough 
Google "does no evil", you still have to document it as an organization
using the services towards end users.

Sending the identifier stored in the cookie is not that dramatic, as it 
alone cannot be use to determine anything else about that browser. You 
need more data to be able to pinpoint who that is. As long as the user 
of GA isn't sending an PII or tracking patterns that might lead to 
identification, that kind of usage is much easier to argument against.

### Cross Domain Tracking
The proxy is assumed ran on a subdomain of the main autority. This is to 
avoid trust-issues. A subdomain have the same trust as the main domain.
Since this is the issue, the proxy will be able to access any cookie set 
on the root domain. This means that we when user journies goes on 
subdomains which does not have the same authority the proxy could set 
thoose values without 

### Dodges adblockers
Yeah... I'm not really proud of this, but the proxy is harder to hit 
with adblockers. In some future release I will try to figure out how to 
respect those kind of setting. "Do not track" and other headers. At the 
current stage this is a feature of the proxy but will in future releases
be turned off by default.

## Installation
The proxy is meant to run as a standalone application on a subdomain at the 
organization. For instance `analytics.example.com`.

### Installing with docker
The app should be easily installable through docker and to your cluster 
or other infrastructure. Your server need to run `nodejs` and be able to 
communicate with `www.google-analytics.com` as it needs to proxy files 
on that server and forward data there. For users that want to run GA 
behind corporate walls and use this as a proxy to GA the file need to be 
downloaded in your pipeline and injected into the cache-folder due to 
licensing issues. The license for `analytics.js` is unknown, but as other
proprietary software it should not be redistributed. Hence you need to 
proxy it.

This can be done by simply passing the following command to your docker-image:
`RUN yarn pre-fetch` which will cache those files at the right spot when
you create your docker image. Be aware that the docker image cant be 
public, as that would put you in the position of redistribution without
an agreement with google.

If you are running kubernetes the docker image at 
`FROM mijohansen/analytics-proxy` should be sufficient to run the proxy 
at your clusters. You can configurate this with the environment variables 
in the next section.

### Running locally
You can start the proxy locally as a normal node server, simply running 
`yarn serve` in your favorite command line tool.

## Configuration
The proxy is configurable through environment variables. Not all of them
are implemented yet, but will come in future releases of the proxy:

|Name|Default value|comment|
|---|---|---|
|CROSSDOMAIN|true|Will inject CID and GID from cookies|
|CID_DIMENSION|null|Will inject Client ID(CID) into a custom dimension of your choice|
|RESPECT_DNT_HEADERS|true|Let you turn of this feature|
|IGNORE_BOTS|true|Just don't forward bot traffic|
|SEND_USER_AGENT|false|Forward User Agent to GA.|


## Features

### Excluding bots
Using the list provided by XXX you can ignore bot traffic directly
in the proxy. As Google Analytics will use the user-agent header
this feature let you strip this away before sending it to their
servers for a much higher quality on your data.

### Setting GEOID
Using the marvelous [geoip-lite] lib written by [bluesmoon] we are able
to look up the GEOID statically based on the users IP-adress. This means
that you should not be loosing the origin of your visitors.

### Anonymize User Agent
User agents 

### Normalizing View Ports
Such a small feature, but as these data is pretty useless ungrouped we
just smash them together. sticking to the nearest standardized width and
height.

## Endpoints
A list of endpoints.

## Todos and won't does
* Displayfeatures doesn't work... Dont know if it ever will work. Probably
good to just let that bypass the proxy.
* See your data. As long as the user is identified we can pipe data collected
to him from GA. This complicates a lot, since data cannot be deleted. 
* Anonymize viewport... not a big problem, but not very hard to fix.


[geoip-lite]:https://www.npmjs.com/package/geoip-lite
[bluesmoon]:https://github.com/bluesmoon
