//Examine the document object
//console.dir(document) // show us all the properties and methods attached to the document object


//console.log(document.domain); // localhost 

//console.log(document.URL); // link to the page
//console.log(document.title);
//document.title = 123;

//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);  // grabs all the element

//console.log(document.forms[0]);

//console.log(document.links);



//GETELEMENTBYID

//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title')
//console.log(headerTitle);

//headerTitle.textContent = "Hello" // shows all content even if it is hidden 
//headerTitle.innerText = "Goodbye" //diff: 



//headerTitle.innerHTML = "<h3>Hello</h3>" 

// camel case
//headerTitle.style.borderBottom = 'solid 3px #000'


// selectors: GETELEMENTSBYCLASSNAME

//var items = document.getElementsByClassName('list-group-item')
//console.log(items);
//console.log(items[1]);
//items[1].textContent = "hello 2"
//items[1].style.fontWeight = 'bold'
//items[1].style.backgroundColor = 'grey'

////items.style.backgroundColor = '#f4f4f4'; // not gonna work you have to loop through it

//for (var i = 0; i < items.length; i++) {
//    items[i].style.backgroundColor = '#f4f4f4'
//}

//  GET ELEMENTS BY TAGNAME


//var li = document.getElementsByTagName('li')
//console.log(li);
//console.log(li[1]);
//li[1].textContent = "hello 2"
//li[1].style.fontWeight = 'bold'
//li[1].style.backgroundColor = 'grey'

////items.style.backgroundColor = '#f4f4f4'; // not gonna work you have to loop through it

//for (var i = 0; i < li.length; i++) {
//    li[i].style.backgroundColor = '#f4f4f4'
//}


// QUERYSELECTOR

// works like jquery we us eit for one item


//var header = document.querySelector('#main-header')
//header.style.borderBottom = 'solid 4px #ccc'

// only grabs the first one

//var input = document.querySelector('input')
//input.value = 'Hello World'

//var submit = document.querySelector('input[type="Submit"]');
//submit.value = 'SEND'
//var item = document.querySelector('.list-group-item')
//item.style.color = 'red'


//// psudeo selectors
//var lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.color = 'blue'


//var secondItem = document.querySelector('.list-group-item:nth-child(2)')
//secondItem.style.color = 'green'


// QUERY SELECTOR ALL

//var titles = document.querySelectorAll('.title')
//console.log(titles);



//titles[0].textContent = "Hello"


// alternate color

//var odd = document.querySelectorAll('li:nth-child(odd)')
//var even = document.querySelectorAll('li:nth-child(even)')



//for (var i = 0; i < odd.length; i++) {
//    odd[i].style.backgroundColor = "#f4f4f4"
//    even[i].style.backgroundColor = "#ccc"
//}

// TRANSVERSING THE DOM


//var itemList = document.querySelector('#items');
// parentNode property
//console.log(itemList.parentNode);

//itemList.parentNode.style.backgroundColor = "#f4f4f4"

//console.log(itemList.parentNode.parentNode.parentNode);


// parentELement
//console.log(itemList.parentElement);

//itemList.parentElement.style.backgroundColor = "#f4f4f4"

//console.log(itemList.parentElement.parentElement.parentElement);


//childNodes
//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[1]);
// style it 

// first child and last child

//console.log(itemList.firstChild);
//console.log(itemList.lastChild);
// similarly lastElementChild

// nextSibling // previous sibling 
// previousElementSibling 

//console.log(itemList.previousSibling);

// create new element
// create a div
//var newDiv = document.createElement('div')
//// create a class
//newDiv.className = 'hello'
//// add id
//newDiv.id = 'hello1'
//// add attr
//newDiv.setAttribute('title', 'Hello Div')

//// create a text node
//var newDivText = document.createTextNode('hello World')

////add text to div

//newDiv.appendChild(newDivText)


//var container = document.querySelector('header .container');
//var h1 = document.querySelector('header h1')

//console.log(newDiv);

//// did all this with javascript  but it is not in the dom 

//container.insertBefore(newDiv, h1)


// add item, delete item 

var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')

// Form submit event 

form.addEventListener('submit', addItem);
// delete event 
itemList.addEventListener('click', removeItem)
// filter event 
filter.addEventListener('keyup', filterItems)



// Add item

function addItem(e) {
    e.preventDefault()
    //console.log(1);
    // get the value of the input

    var newItem = document.getElementById('item').value;

    // create new li element 
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    console.log(li);
    // add text node with input value
    li.appendChild(document.createTextNode(newItem))

    // create del button 
    var deleteBtn = document.createElement('button')
    // add classes to btn

    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    // create text node

    deleteBtn.appendChild(document.createTextNode('X'))
    // append btn to li 

    li.appendChild(deleteBtn)
    // append li to list 
    itemList.appendChild(li)




}

// remove item 

function removeItem(e) {
    // only when we click the btn 
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure')) {
            var li = e.target.parentElement
            itemList.removeChild(li) // remove the child 
        }
    }


}

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
































