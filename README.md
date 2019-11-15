# analytics-proxy
Google Analytics Proxy that protects your users and increases data quality.

## Why this proxy
After working in digital marketing and with web analytics for nearly a 
decade we have been putting cookies and tracking points on everything 
that can move. For analytics purposes we can get the same data without
compromising user data directly.

### Hiding the users IP from Google
Another great feature of this proxy is that it hides the enduser proxy from the
third party vendor, Google. It's not that we suggest that google is not to be 
trusted, it's just that from a juridical point of view it creates some pain.
By not "sharing" those data organizations with high external pressure for 
privacy, for instance government. Easily could continue using Google Analytics.

The trust issue arises further as European countries really start implementing
and understanding GDPR. Since IP-address is a piece of public information which
could be used to triangulate or at least fingerprint a user, it's by nature PII.
This means that the practice which have been "ok" online will be challenged. 
Eventhough Google "does no evil", you still have to document it as a user.

Sending the identifier stored in the cookie is not that dramatic, as it alone
cannot be use to determine anything else about that browser. You need more data
to be able to pinpoint who that is. As long as the user of GA isn't sending an
PII or tracking patterns that might lead to identification, that kind of usage
is much easier to argument against.

### Cross Domain Tracking
The proxy is assumed ran on a subdomain of the main autority of the domain. This
is to avoid trust-issues. A subdomain have the same trust as the main domain.
Since this is the issue, the proxy will be able to access any cookie set on the 
root domain. This means that we when user journies goes on subdomains which does
not have the same authority the proxy could set thoose values without 

### Dodges adblockers
Yeah... I'm not really proud of this, but the proxy is harder to hit with adblockers.
In some future release I will try to figure out how to respect those kind of 
setting. "Do not track" and other headers. At the current stage this is a feature
of the proxy.

## Installation
The proxy is meant to run as a standalone application on a subdomain at the 
organization. For instance `analytics.example.com`.

The app should be easily installable through docker and to your cluster or other
infrastructure. Your server need to run `nodejs` and be able to communicate with
`www.google-analytics.com` as it needs to proxy files on that server. For users
that want to run GA behind corporate walls and use this as a proxy to GA the 
file need to be downloaded in your pipeline and injected into the cache-folder
due to licensing issues. The license for `analytics.js` is unknown, but as other
proprietary software it should not be redistributed. Hence you need to proxy it.

This can be done by simply passing the following command to your docker-image:
`RUN yarn pre-fetch` which will cache those files at the right spot.

If you are running kubernetes the docker image at 
`FROM mijohansen/analytics-proxy` should be sufficient to run the proxy at your clusters.
You can configurate this with the environment variables in the next section.

## Configuration
The proxy is configurable through environment variables.

|Name|Default value|comment|
|---|---|---|
|CROSSDOMAIN|true|Will inject CID and GID from cookies|
|CID_CD|null|Will inject Client ID(CID) into a custom dimension of your choice|
|RESPECT_DNT_HEADERS|true|Let you turn of this feature|


## Endpoints

## Todos and won't does
* Displayfeatures doesn't work... Dont know if it ever will work. Probably
good to just let that bypass the proxy.
* Proxy doesn't actually forward any traffic to Google Analytics servers
