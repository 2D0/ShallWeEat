<template>
  <div id="container">
    <div class="cont_in">
      <h1 class="main_tit">Shall We Eat<br>Together?</h1>
      <div class="bottom_cont">
        <div class="name_input bottom_btn">
          <input id="name" type="text" placeholder="Your Name" v-model="username">
          <label for="name"></label>
        </div>
        <div class="bottom_btn dark_blue">
          <router-link to="weight">Start</router-link>
          <router-view></router-view>	
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: function(){
    return {
      username: '',
    }
  },
}


</script>

<style>
  @font-face{
    font-family:'NotoSansKR';
    font-weight:100;
    src:url('../static/fonts/NotoSansKR-Light.otf'),
        url('../static/fonts/NotoSansKR-Light.woff'),
        url('../static/fonts/NotoSansKR-Light.woff2');
  }
  @font-face{
    font-family:'NotoSansKR';
    font-weight:500;
    src:url('../static/fonts/NotoSansKR-Regular.otf'),
        url('../static/fonts/NotoSansKR-Regular.woff'),
        url('../static/fonts/NotoSansKR-Regular.woff2');
  }
  @font-face{
    font-family:'NotoSansKR';
    font-weight:bold;
    src:url('../static/fonts/NotoSansKR-Medium.otf'),
        url('../static/fonts/NotoSansKR-Medium.woff'),
        url('../static/fonts/NotoSansKR-Medium.woff2');
  }
  @font-face{
    font-family:'NotoSansKR';
    font-weight:600;
    src:url('../static/fonts/NotoSansKR-Bold.otf'),
        url('../static/fonts/NotoSansKR-Bold.woff'),
        url('../static/fonts/NotoSansKR-Bold.woff2');
  }

  * {
    box-sizing:  border-box;
    margin: 0;
  }

  body {
    font-family: 'NotoSansKR', sans-serif !important;
    /* background: #FCFCFC; */
    background: #fff;
  }

  input {
    display:block;
    padding: 0 10px;
  }

  input:focus, select:focus, textarea:focus {
    outline: none;
  }
  label{
    display:block;
  }
  textarea{
    resize:none
  }

  /* Reset CSS */
  button {
    border: none;
    background: none;
    padding: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
    display: block;
  }
  a:hover {
    cursor: pointer;
  }
  ul,
  ol,
  li {
    /* list-style: none; */
    padding-left: 0;
    margin-left: 0;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    color: #2B292D;
    letter-spacing: -0.01em;
  }

    /* http://meyerweb.com/eric/tools/css/reset/
      v2.0 | 20110126
      License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    /* padding: 0; */
    border: 0;
    font-size: 100%;
    /* font: inherit; */
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }


  button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  /* css style ================== */
  #container{
    width:100vw;
    height:100vh;
    background:url('assets/night_sky.jpg') left center no-repeat;
    object-fit:cover;
  }
  .cont_in{
    width:70%;
    height:100%;
    margin:0 auto;
    position:relative;
  }
  .main_tit{
    color:#fff;
    position:absolute;
    top:17vh;
    left:50%;
    transform:translate(-50%);
    text-align:center;
    font-size:10vw;
    white-space:nowrap;
  }
  .bottom_cont{
    width:100%;
    position:absolute;
    bottom:20vh;
    left:50%;
    transform:translate(-50%);
  }
  .name_input{
    margin-bottom:16%;
  }
  .name_input input{
    width:100%;
    border:none;
    height:100%;
    padding:0 7%;
    box-sizing:border-box;
  }

  .bottom_btn{
    display: block;
    width:100%;
    height:45px;
    text-align:center;
    line-height:45px;
    font-weight:500;
  }
  .dark_blue{
    background:#161e3f;
    color:#fff;
  }
</style>