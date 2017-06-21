'use strict';

//var crossrequest = new XMLHttpRequest();
//crossrequest.open('GET', 'http://localhost:3000/search', true)
//crossrequest.send();


var container = document.querySelector('div.list');

function createItem(id, name, description, url) {
    //MAIN DIV  
    var co = document.createElement('div');
    co.setAttribute('class', 'media testblock');
    //DIV-IMG  
    var mleft = document.createElement('div');
    mleft.setAttribute('class', 'media-left')
    //IMG
    var img = document.createElement('img')
    img.setAttribute('class', 'media-object');
    img.setAttribute('src', url);
    img.setAttribute('alt', '#');
    mleft.appendChild(img);
    // DIV-TEXT
    var mbody = document.createElement('div');
    mbody.setAttribute('class', 'media-body');
    //H4
    var h4 = document.createElement('h4');
    h4.setAttribute('class', 'media-heading');
    h4.innerHTML = name;
    mbody.appendChild(h4);
    mbody.appendChild(document.createTextNode(description));

    //HIDDEN DIV
    var hidDiv = document.createElement('div');
    hidDiv.setAttribute('class', 'hidden-div image-block active');

    //BUTTON
    var button = document.createElement('button');
    button.setAttribute('class', 'main-button');
    button.dataset.id = id;
    button.onclick = function (e) {
        hidDiv.classList.toggle('active');
        if (hidDiv.children.length === 0 || !hidDiv.children) {
            var x = store.filter(e => this.dataset.id == e.id)[0].screenList;
            var requestListArr = [];
            for (var i = 0; i < 5; i++) {
                requestListArr.push(new XMLHttpRequest());
                requestListArr[i].open('GET', x[i], true);
                requestListArr[i].responseType = 'blob';
                requestListArr[i].send();
                requestListArr[i].onload = function () {
                    if (this.status == 200) {
                        var screen = document.createElement('img');
                        screen.setAttribute('class', 'screen')
                        screen.src = URL.createObjectURL(this.response);
                        screen.onclick = function (e) {
                            modal.style.display = "block";
                            var mimage = document.getElementById('modal-image');
                            mimage.src = screen.src
                        }
                        hidDiv.appendChild(screen);
                    }
                }
            }
        }
    }

    co.appendChild(mleft);
    co.appendChild(mbody);
    co.appendChild(button);
    co.appendChild(hidDiv);

    return co;
}


// RENDER
function render(list) {
    var df = document.createElement('div');
    df.classList.add('list');
    list.forEach(function (e) {
        df.appendChild(createItem(e.id, e.name, e.description, e.url));
    });
    return df;
}

var oldlist = render(store);
container.appendChild(oldlist);

/////////////////////////////// SEARCH ///////////////////////////////////////////////

var input = document.querySelector('input');
input.onkeydown = function () {
    var searchString = this.value.toLowerCase();
    var searchQuery = store.filter(function (e) {
        return e.name.toLowerCase().includes(searchString);
    });
    var a = document.querySelector('.list');
    a.parentElement.replaceChild(render(searchQuery), a);
};



///////////////////////////////////modal//////////////////////////////////////////////////
// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*window.onscroll = function (e) {
    if (window.pageYOffset + window.innerHeight >= (document.body.clientHeight - 10)) {
        var list = document.querySelector('.list');
        var lastElement = list.lastElementChild;
        var a = parseInt(lastElement.dataset.id);
        list.parentElement.replaceChild(render(store.slice(a, a + 2)), list);
    }
}*/