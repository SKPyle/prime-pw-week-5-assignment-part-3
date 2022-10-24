console.log('***** Music Collection *****')

/*const B = {albumTitle:'',
           artist:'',
           yearPublished: '',
};
*/
const collection = [];


/*function addToCollection(albumTitle, artist, yearPublished){ // Should add title, artist and year published to collection array
    console.log('in addToCollection', albumTitle, artist, yearPublished);
    
    collection.push(albumTitle, artist, yearPublished);
    return true;



}       //end addToCollection
*/

function addToCollection(albumTitle, artist, yearPublished){         //should add new objects to our collection array
    console.log('in addToCollection', albumTitle, artist, yearPublished);
    collection.push({albumTitle, artist, yearPublished});
    return collection;
    

  }

addToCollection('Astro Lounge', 'Smash Mouth', '1999');
addToCollection('Led Zeppelin III', 'Led Zeppelin', '1970');
addToCollection('Led Zeppelin','IV','1971');
addToCollection('The Grey Album', 'The Bartles', '1967');
addToCollection('Ayudame', 'The Bartles', '1975');
addToCollection('Parliament','Mothership Connection','1979');
console.log(collection);

function showCollection(){       //Should loop through showCollection and console.log object values.
  console.log(collection.length);
    for (var i = 0; i < collection.length; i++) {
    console.log(collection[i]);
    //Do something
}
}
showCollection();

const artist = [];
function findByArtist(artist){
    console.log('In findByArtist');

}

/* 
- Add a function named `findByArtist`. This function should:
  - Take in `artist` (a string) parameter
  - Create an array to hold any results, empty to start
  - Loop through the `collection` and add any objects with a matching artist to the array.
  - Return the array with the matching results. If no results are found, return an empty array.

- Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

> When testing your functions, write all tests in the JavaScript file!


### Stretch goals

- Create a function called `search`. This function should:
  - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
  ```
  { artist: 'Ray Charles', year: 1957 }
  ```
  - The returned output from `search` should meet these requirements:
    - Return a new array of all items in the `collection` matching *all* of the search criteria.
    - If no results are found, return an empty array.
    - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

- Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
  - Update the `addToCollection` function to also take an input parameter for the array of tracks.
  - Update `search` to allow a `trackName` search criteria.
  - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
```
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
    3. NAME: DURATION
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
```

> Make sure to test all your code!*/
