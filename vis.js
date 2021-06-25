
looker.plugins.visualizations.add({
    create: function(element, config) {


	this._container = document.createElement('div')
	this._container.id='fb-container'
	element.append(this._container)

	

	

    },
    updateAsync: function(data, element, config, queryResponse, details, done) {

        window.finished = done
	var [id,fbid] = data[0][queryResponse.fields.dimensions[0].name].value.split("_")
	console.log("lets go")

	if (this._item && this._item == fbid) {
	    console.log('hehe')
	    return true
	}

	this._item=fbid
	
	this._container.innerHTML=`<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D${fbid}%26id%3D${id}&width=500&show_text=true&height=474&appId" data-width="fluid-width" height="650" style="border:none;overflow:hidden" scrolling="yexs" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" onload="finished();"></iframe>
`;

    }
})

