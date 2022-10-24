console.log('***** Music Collection *****')

/*const B = {albumTitle:'',
           artist:'',
           yearPublished: '',
};
*/
const collection = [];

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

function showCollection(){   
    console.log('In showCollection');                    //Should loop through showCollection and console.log object values.
    console.log(collection.length);
    for (var i = 0; i < collection.length; i++) {
    console.log(collection[i]);
                                 
}
}
showCollection();

const musician = [];        
function findByArtist(artist){                             //Looking to loop through collection to return specific artists from array.
console.log('In findBy Artist');

    for (var i = 0; i < collection.length; i++) {
        console.log(collection[i]);
    
    if (artist === 'Led Zeppelin'){
     return musician.push({artist});

    } else if (artist === 'Smash Mouth'){
      return musician.push({artist});

    } else if (artist === 'The Bartles'){
      return musician.push({artist});
    
    } else if (artist === 'Parliament'){
        return musician.push({artist});

    } else

return artist = [];
}
}

findByArtist('Parliament');
findByArtist('Parliament');
