jQuery(document).ready(function() {  
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&jsoncallback=?";
    var etiqueta = {tags: "fuenlabrada"}  
    $("#fotos").click(function(){
        var tag = $("#formulario").val();
        if (tag != ""){
            etiqueta.tags = tag;
        }
        $.getJSON(flickerAPI, etiqueta)
        .done(function( data ) {
            $.each( data.items, function( i, item ) {
                $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
            });
        });
    });
});
