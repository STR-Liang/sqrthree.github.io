(function() {
  var $sideToc, html;

  $sideToc = $('<div>', {
    "class": 'col-md-3'
  });

  html = "<div class=\"toc-box affix\"> <div class=\"toc-heading\">文章目录</div> <div class=\"toc-body\"> <div class=\"toc-cont\"> <div class=\"highlight-title\"></div> </div> </div> </div>";

  $sideToc.html(html);

  $('#markdown-container').addClass('col-md-9').removeClass('col-md-10 col-md-offset-1').after($sideToc);

}).call(this);
