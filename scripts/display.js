// function displayCards(){
//     let card="";
//     for(let i=0;i<pets.length;i++){
//         let pet = pets[i]; //getting the current  
//         card+=`
//         <div class="pet ${pet.service}">
//             <p>Name: ${pet.name}</p>
//             <p>Age: ${pet.age}</p>
//             <p>Gender: ${pet.gender}</p>
//             <p>Breed: ${pet.breed}</p>
//             <p>Service: ${pet.service}</p>
//             <p>Type: ${pet.type}</p>
//         </div>
//         `;
//     }
//     document.getElementById("pets").innerHTML=card;
// }


    function displayTotals(){
        document.getElementById("total").innerHTML=pets.length;
    }

    function displayTable(){
        let table="";
        for(let i=0;i<pets.length;i++){
            let pet=pets[i];
            table+=`
                <tr>
                    <td>${pet.name}</td>
                    <td>${pet.age}</td>
                    <td>${pet.gender}</td>
                    <td>${pet.breed}</td>
                    <td>${pet.service}</td>
                    <td>${pet.time}</td>
                    <td><buttton onClick="deletePet(${i})" class="btn btn-danger">Delete</buttton></td>
                </tr>

            `;
        }
        document.getElementById("petTable").innerHTML=table
    }
