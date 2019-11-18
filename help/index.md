# Analytics Proxy

This proxy is designed to protect users. It let you proxy your traffic to google
analytics before it hits their servers. It also adds some nice features that 
actually will help you get more precise data. Se more about the usecase at
the [repo on github].

## Add analytics.js to Your Site
follow the guide here:

https://developers.google.com/analytics/devguides/collection/analyticsjs

```html
<!--Google Analytics -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXX-Y', 'auto');
setTimeout(function(){ 
    ga('send', 'pageview');
 }, 5000);
</script>
<!-- End Google Analytics -->
```


[repo on github]: https://github.com/sideprosjektet/analytics-proxy
