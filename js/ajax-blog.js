$(function() {
    $.ajax("data/blog.json").done(function(data){
        console.log(data);
        data.forEach(function(item) {
            $("#posts").append(`
            <div id="blog-body" class="shadow-lg p-3 mb-5 rounded-4">
                <h1>${item.title}</h1>
                <p>${item.content}</p>
                <p>${item.categories.join(', ')}</p>
                <p>${item.date}</p>    
            </div>                           
            `);
        });
    });
});