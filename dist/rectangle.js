$(function(){var c=$("#width"),i=$("#height"),a=$("#calculate"),t=$("#perimeter"),v=$("#area");a.click(function(){var a=Number(c.val()),e=Number(i.val()),l=2*(a+e),r=a*e;t.val(l),v.val(r)})});