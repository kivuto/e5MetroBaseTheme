var loaded = false;

function windowOverlayOnLoading() {
    loaded = true;
    document.getElementById('overlay').style.visibility = 'hidden';
    document.getElementById('messageBox').style.visibility = 'hidden';
}

function showOverlay(contents, showIfLoaded) {
    
    // WJI: skipping the Loading... message as hiding needs to be moved to domLoaded
    if (!showIfLoaded) return;
    
    var x, y;
    if (self.innerHeight) // all except Explorer 
    { x = self.innerWidth; y = self.innerHeight; }
    else if (document.documentElement && document.documentElement.clientHeight) // Explorer 6 Strict Mode 
    { x = document.documentElement.clientWidth; y = document.documentElement.clientHeight; }
    else if (document.body) // other Explorers 
    { x = document.body.clientWidth; y = document.body.clientHeight; }

    document.getElementById('messageBox').style.left = (x - 300) / 2 + 'px'; // viewport minus width, divide by 2 
    document.getElementById('messageBox').style.top = (y - 100) / 2 + 'px'; // viewport minus height, divide by 2
    document.getElementById('overlay').style.visibility = 'visible';
    setTimeout('showMessageBox("' + contents + '", ' + showIfLoaded + ')', 1);
}

function showMessageBox(contents, showIfLoaded) {
    if (!loaded || showIfLoaded) {
        var msgDiv = document.getElementById('messageBox');
        if (msgDiv.childNodes[1].childNodes[0].childNodes.length == 0) { // if text node has been inserted, it will have a child node
            var msgP = document.createElement('p');
            msgP.className = 'MediumFont';
            var msgText = document.createTextNode(contents);
            msgP.appendChild(msgText);
            msgDiv.childNodes[1].insertBefore(msgP, msgDiv.childNodes[1].childNodes[0]);
        }
        else {
            msgDiv.childNodes[1].childNodes[0].childNodes[0].nodeValue = contents;
        }

        msgDiv.style.visibility = 'visible';
    }
}

// Note that the data associated with the showDialogAsync function is cached.
// If the data being displayed is susceptible to change and data currency is important,
// then the function will have to be modified such that the dataURL is always unique...
// One way of doing this would be to add a random parameter to the URL which will make it unique...

function showDialogAsync(title, dataUrl) {
    $.ajax({
        url: dataUrl,
        success: function(data) {
            showDialog({ 'title': title, 'htmlContent': data , 'width': 500, 'height': 300});
        }
    });
}

function showDialogAsync(title, dataUrl, width, height, dialogClass) {
	$.ajax({
	    url: dataUrl,
		success: function(data) {
			showDialog({ 'title': title, 'htmlContent': data, 'width': width, 'height': height, 'dialogClass': dialogClass });
		}
	});
}

function showDialogAsync(title, dataUrl, width, height, dialogClass, elementID) {
    $.ajax({
        url: dataUrl,
        success: function (data) {
            showDialog({ 'title': title, 'htmlContent': data, 'width': width, 'height': height, 'dialogClass': dialogClass, 'elementID': elementID });
        }
    });
}

function showDialog(options) {
    var default_args = {
        'content': '',
        'htmlContent': '',
        'showIfLoaded': true,
        'allowClosing': true,
        'modal': true,
        'autoOpen': false,
        'elementID': 'dialog',
        'dialogTextName': 'dialogText'
    };
    for (var index in default_args) {
        if (typeof options[index] == 'undefined') options[index] = default_args[index];
    };

    var elementSelector = '#' + options['elementID'];

    if (!loaded || options['showIfLoaded']) {
        $(elementSelector).dialog(options); // pass any input options to the init call
        $(elementSelector).css('visibility', 'visible');
        if (options['content']) {
            $(elementSelector + ' > #' + options['dialogTextName']).text(options['content']);
        }
        else {
            $(elementSelector).html(options['htmlContent']);
        }
        if (options['title']) {
            $(elementSelector).dialog('option', 'title', options['title']);
        }
        if (options['width']) {
            $(elementSelector).dialog('option', 'width', options['width']);
        }
        if (options['height']) {
            $(elementSelector).dialog('option', 'height', options['height']);
        }
        if (options['dialogClass']) {
            $(elementSelector).dialog('option', 'dialogClass', options['dialogClass']);
        }
        if (options['allowClosing']) {
            $(elementSelector).unbind('dialogbeforeclose');
        } else {
            // stop dialog from closing
            $(elementSelector).bind('dialogbeforeclose', function (event, ui) { return false; });
        }

        $(elementSelector).dialog('open');
    }
}

// http: //www.ryancoughlin.com/2009/01/22/quick-n-dirty-jquery-timeout-function/
/* create a timeOut function in jQuery */
//jQuery.fn.idle = function(time) {
//    return this.each(function() {
//        var i = $(this);
//        i.queue(function() {
//            setTimeout(function() {
//                i.dequeue();
//            }, time);
//        });
//    });
//};

function hideControl(ctrlName)
{
    var divToHide = document.getElementById(ctrlName);
    divToHide.style['display'] = 'none';
}

function showControl(ctrlName) {
    var divToHide = document.getElementById(ctrlName);
    divToHide.style['display'] = '';
}