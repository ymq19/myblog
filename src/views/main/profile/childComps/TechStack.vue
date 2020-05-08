<template>
  <div class="tech-stack">
    <h2>技术栈</h2>
    <span class="node" title="node.js">node.js</span> <br />
    <span class="html" title="HTML">HTML</span>
    <span class="css" title="CSS">CSS</span> <br />
    <span class="html5" title="HTML5">HTML5</span>
    <span class="css3" title="CSS3">CSS3</span> <br />
    <span class="javascript" title="JavaScript">JavaScript</span>
    <span class="vuejs" title="Vue.js">Vue.js</span>
    <span class="mysql" title="MySQL">MySQL</span>
    <span class="axios" title="axios">axios</span>
  </div>
</template>

<script>
export default {
  name: 'TechStack'
}
</script>

<style scoped>
  .tech-stack h2 {
    padding-bottom: 10px;
    border-bottom: 1px #ddd solid;
  }
  .tech-stack, .team, .other {
    margin-top: 1em;
  } 
  .node, .html, .css, .html5, .css3, .javascript, .vuejs, .axios, .mysql {
    cursor: pointer;
    display: inline-block;
    width: 64px;
    height: 64px;
    background: url("~assets/img/main/html.svg");
    text-indent: -9999px;
    transition: .4s;
    -moz-transition: .4s; /* Firefox 4 */
    -webkit-transition: .4s; /* Safari 和 Chrome */
    -o-transition: .4s; /* Opera */
  }
  .node:hover, .html5:hover, .css3:hover {
    transform: rotate(30deg);
    -moz-transform: rotate(30deg); /* Firefox 4 */
    -webkit-transform: rotate(30deg); /* Safari 和 Chrome */
    -o-transform: rotate(30deg); /* Opera */
  }
  .html:hover, .css:hover, .javascript:hover, .vuejs:hover, .mysql:hover, .axios:hover {
    transform: rotate(-30deg);
    -moz-transform: rotate(-30deg); /* Firefox 4 */
    -webkit-transform: rotate(-30deg); /* Safari 和 Chrome */
    -o-transform: rotate(-30deg); /* Opera */
  }
  .node {
    background: url("~assets/img/main/node.svg");
  }
  .css {
    background: url("~assets/img/main/CSS.svg");
    margin: 1em 0 1em 1.5em;
  }
  .html5 {
    background: url("~assets/img/main/HTML5.svg");
  }
  .css3 {
    background: url("~assets/img/main/css3.svg");
    margin-left: 5em;
    margin-bottom: 1em;
  }
  .javascript {
    background: url("~assets/img/main/javascript.svg");
  }
  .vuejs {
    background: url("~assets/img/main/vuejs.svg");
    margin-left: 2em;
    margin-bottom: 1em;
  }
  .mysql {
    background: url("~assets/img/main/MYSQL.svg");
    margin-left: 2em;
  }
  .axios {
    background: url("~assets/img/main/axios.png");
    margin-left: 2em;
  }
</style>