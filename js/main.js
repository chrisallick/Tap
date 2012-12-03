var myCodeMirror;
$(document).ready(function() {
    myCodeMirror = CodeMirror($("#editor")[0], {
        value: "void setup() {\n\tsize(640,480);\n}\n\nvoid draw() {\n\tbackground(255,0,0);\n}",
        mode:  "javascript",
        lineNumbers: true,
        gutter: true,
        autofocus: true,
        indentUnit: 4
    });

    myCodeMirror.setCursor({line:1,ch:1});

    $("#run").submit(function(event){
        event.preventDefault();

        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("name", "iFrame1");
        ifrm.setAttribute("id","output");
        $("#output").html(ifrm);
        ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument; 
        ifrm.document.open(); 
        ifrm.document.write("<!DOCTYPE html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'><link href='./css/reset.css' media='all' rel='stylesheet' type='text/css' /><script src='./js/p.js'></script><style>body { overflow: hidden; }</style></head><body><script id='extra'>var x = 20; var y = 20;</script><script type='application/processing'>"+myCodeMirror.getValue()+"</script><canvas></canvas></body></html>");
        ifrm.document.close(); 
    });
});