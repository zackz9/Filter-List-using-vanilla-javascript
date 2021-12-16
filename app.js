// Getting the input search 
let searchFilter = document.getElementById('searchFilter');
let collecHeader = document.querySelector('.collection-header');
let abc = document.querySelector('.abcd');

//Listening to the input
searchFilter.addEventListener('keyup', filteringNames);

function filteringNames() {

    

    //Getting input's value
    let searchInputValue = document.getElementById('searchFilter').value.toUpperCase() ;

    //Getting the list 
    let theList = document.getElementById('theList');

    //Get items from the list
    let theItem = theList.querySelectorAll('li.collection-item');

    //Looping through collection items
    for(let i = 0; i< theItem.length ; i++) {
        let a = theItem[i].getElementsByTagName('a')[0];

        //If that match
        if(a.innerHTML.toUpperCase().indexOf(searchInputValue) > -1) {
            theItem[i].style.display = '' ;
            
        } else {
            theItem[i].style.display = 'none' ;

            collecHeaderL = collecHeader.length ;

        }

    }
    abc.innerHTML = searchInputValue;
    console.log(searchInputValue)

}