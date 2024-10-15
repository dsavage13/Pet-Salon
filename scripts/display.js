function displayCards(){
    let card="";
    for(let i=0;i<pets.length;i++){
        let pet = pets[i]; //getting the current  
        card+=`
        <div class="pet ${pet.service}">
            <p>Name: ${pet.name}</p>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
            <p>Type: ${pet.type}</p>
        </div>
        `;
        console.log(card);
    }
    document.getElementById("pets").innerHTML=card;
}


function displayTotals(){


    document.getElementById("total").innerHTML=pets.length;
}

    // function displayTable(){
    //     let table="";
    //     for(let i=0;i<pets.length;i++){
    //         let pet=pets[i];
    //         table+=`
    //             <tr>
    //                 <th>${pet.name}</th>
    //             </tr>
    //             <tr>
    //                 <td>Age: ${pet.age}</td>
    //             </tr>
    //             <tr>
    //             <td>Gender: ${pet.gender}</td>  
    //             </tr>
    //             <tr>
    //             <td>Breed: ${pet.breed}</td>
    //             </tr>

    //         `;
    //         console.log(table);
    //     }
    //     document.getElementById("total").innerHTML=pets.length
    //     //Instead of card use row
    //     //row += `<tr></tr>`
    //     //read about html tables    
    // }