module.exports = function(content) {
  return `
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXX-Y', 'auto');
ga('require', 'linkid');
ga('require', 'ec');
setTimeout(function(){ 
    ga('send', 'pageview');
 }, 5000);
</script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="github-markdown.css">
<style>
.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }
@media (max-width: 767px) {
  .markdown-body {
      padding: 15px;
    }
  }
    </style>
  <article class="markdown-body">
    ${content}
  </article>`;
};
