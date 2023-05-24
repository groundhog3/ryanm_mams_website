
//this script will take a pdf and render just the first page into an image format

//this skeleton code for OOP js was provided by Naeem Sarfraz 
//https://stackoverflow.com/a/2190927


var MYLIBRARY = MYLIBRARY || (function(){
    var _args = {}; // private
    

    return {
        init : function(Args) {
            _args = Args;
        },

        renderPDF : function() {            
            console.log('renderPDF.js loaded -' + _args[0]);
            
            url = _args[0]
            
            //this code below is taken directly from PDF.js documentation
            //https://mozilla.github.io/pdf.js/examples/

            // Loaded via <script> tag, create shortcut to access PDF.js exports.
            var pdfjsLib = window['pdfjs-dist/build/pdf'];

            // The workerSrc property shall be specified.
            pdfjsLib.GlobalWorkerOptions.workerSrc = './pdfjs-2.12.313-dist/build/pdf.worker.js';

            // Asynchronous download of PDF
            var loadingTask = pdfjsLib.getDocument(url);
            loadingTask.promise.then(function(pdf) {
            console.log('PDF loaded');
            
            // Fetch the first page
            var pageNumber = 1;
            pdf.getPage(pageNumber).then(function(page) {
                console.log('Page loaded');
                var container = document.getElementById('pdfRenderDiv');
                var canvas = document.getElementById('pdfRender');
                var context = canvas.getContext('2d');

                var viewport = page.getViewport(1);
                var scale = container.clientWidth / viewport.width;
                console.log(scale)
                viewport = page.getViewport(scale);

                canvas.height = viewport.height;
                canvas.width = viewport.width;


                var renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };

                var renderTask = page.render(renderContext);
                renderTask.promise.then(function () {
                console.log('Page rendered');
                });
            });
            }, function (reason) {
            // PDF loading error
            console.error(reason);
            });

        }
    };
}());


