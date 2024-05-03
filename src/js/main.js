//Veterinary Managing system

//Defining the function to add a new pet to the database
function addPet(petName, petSpecies, petBreed, petBirth, petWeight, petState, nameOwner, documentOwner, phoneOwner, emailOwner) {
    //Defining the new pet to be pushed into the database
    let newPet = {
        petName: petName,
        petSpecies: petSpecies,
        petBreed: petBreed,
        petBirth: petBirth,
        petWeight: petWeight,
        petState: petState,
        nameOwner: nameOwner,
        documentOwner: documentOwner,
        phoneOwner: phoneOwner,
        emailOwner: emailOwner
    }
    pets.push(newPet) //push the new pet
}

//Define the function to list all the pets
function petsInformation() {
    //Printing the information of all the pets using a forEach method to read all the array and jus get the information we need
    pets.forEach(pet => {
        console.log(`
        Pet: ${pet.petName}
        Species: ${pet.petSpecies}
        Breed: ${pet.petBreed}
        Owner: ${pet.nameOwner}
        `)
    })
}

//Define the function to list all the owners
function ownerInformation() {
    //Printing the information of all the owners using a forEach method to read all the array and jus get the information we need
    pets.forEach(pet => {
        console.log(`
        Name: ${pet.nameOwner}
        Id: ${pet.documentOwner}
        Phone number: ${pet.phoneOwner}
        Owner of: ${pet.petName}
        `)
    })
}

//Define the function to search a pet into the database
function searchPet(input) {

    //Using a for loop to read all the pets in the database and compare the input with the name of the pets on each object
    for (let i = 0; i < pets.length; i++) {

        //If the input is equal to the name of the pet from the actual iteration, we will print the information of the pet
        if (pets[i].petName === input) {
            console.log(`
            Pet: ${pets[i].petName}
            Specie: ${pets[i].petSpecies}
            Breed: ${pets[i].petBreed}
            Birth: ${pets[i].petBirth}
            Weight: ${pets[i].petWeight}
            Status: ${pets[i].petState}
            Owner: ${pets[i].nameOwner}
            Id: ${pets[i].documentOwner}
            Phone number: ${pets[i].phoneOwner}
            Email: ${pets[i].emailOwner}
            `)
            break;
        } else {
            console.log(`
                        Sorry, the pet's name isn't registered in our database.
                        `)
        }

    }


}

//Define the function to list all the pets from a single owner
function searchPetOwner(input) {

    //Using a for loop to read all the pets in the database and compare the input with the name of the owners on each object like we did in the previous function
    for (let i = 0; i < pets.length; i++) {

        if (pets[i].nameOwner === input) {
            //Using a filter method to exclude the pets that doesn't belong to the owner
            let filtered = pets.filter(pet => pet.nameOwner === input)
            console.log(filtered)
            break;
        } else {
            console.log(`
                        Sorry, this owner's name isn't registered in our database.
                        `)
        }

    }


}

//Define the function to delete a pet from the database
function deletePet(input) {

    //Same loop from the two previous functions
    for (let i = 0; i < pets.length; i++) {

        if (pets[i].petName === input) {
            pets.splice(i, 1) //Using slice to delete the pet
            break;
        } else {
            console.log(`
                        Sorry, the pet's name isn't registered in our database.
                        `)
        }

    }


}

//Define the function to update the information of a pet from the database
function updatePet(petName) {
    // Find the pet object
    let pet = pets.find(p => p.petName === petName);
    //.find is a method from JavaScript used to find specific things and returns either a true or false value, in this case, I'm trying to find if the value 'petName' given by the prompt defined below is inside the object of the counter 'p' (.find is useful to not have to use an if conditional)

    //Returning the user in case of the variable being false
    if (!pet) {
        console.log("Sorry, the pet's name isn't registered in our database.");
        return;
    }

    // Array of the options the user can choose to modify from the object
    let propertyNames = {
        1: 'petName',
        2: 'petSpecies',
        3: 'petBreed',
        4: 'petBirth',
        5: 'petWeight',
        6: 'petState',
        7: 'nameOwner',
        8: 'documentOwner',
        9: 'phoneOwner',
        10: 'emailOwner'
    };

    //Defining the variable 'modifier' that allow us to modify the specific property from the object
    let modifier = prompt(`
        Which characteristic do you want to update? (Please, enter the number of the characteristic you'd like to update)

        1. Pet Name
        2. Pet Specie
        3. Pet Breed
        4. Pet Birth date
        5. Pet Weight
        6. Status of the pet
        7. Name of the owner
        8. ID of the owner
        9. Phone number of the owner
        10. Email of the owner
    `);

    //Checking if the modifier that the user chose is valid
    let propertyName = propertyNames[modifier];
    if (!propertyName) {
        console.log("Invalid selection.");
        return;
    }

    // Get new data and validate or format it
    let newData = prompt("Please, enter the new information to be modified:");
    if (propertyName === 'petBirth') {
        newData = new Date(newData);
    } else if (propertyName === 'petWeight') {
        newData = parseFloat(newData);
    }

    // Update the property
    pet[propertyName] = newData;

    // Confirm update
    console.log(`Updated ${propertyName} to ${newData}`);
    console.log(pet);
}

//Define the trigger that will activate/deactivate the cicle while
/* let trigger = true

//Using a cicle while to run the program
while (trigger) {
    //Defining the variable'menuOption' that will be used to choose the option the user wants to do in the program
    let menuOption = prompt(`
    ----- Welcome to the Riwi Veterinary -----
    Please, choose the number of the option you want to do:
    1. Add a new pet
    2. List all the pets
    3. List all the owners
    4. Search for a pet
    5. Search for an owner pets
    6. Delete a pet
    7. Update the information of a pet
    8. Exit the program
    `)

    //Using a switch case to trigger the option the user wants to do in the program
    switch (menuOption) {
        case "1":
            addPet(
                prompt("Enter the new pet name"),
                prompt("Enter the new pet species"),
                prompt("Enter the new pet breed"),
                prompt("Enter the new pet birth"),
                prompt("Enter the new pet weight"),
                prompt("Enter the new pet state"),
                prompt("Enter the new pet owner name"),
                prompt("Enter the new pet owner document"),
                prompt("Enter the new pet owner phone"),
                prompt("Enter the new pet owner email")
            )
            break;
        case "2":
            petsInformation()
            break;
        case "3":
            ownerInformation()
            break;
        case "4":
            searchPet(prompt("Please enter the pet name you want to search in our database: "))
            break;
        case "5":
            searchPetOwner(prompt("Please enter the owner name you want to search in our database: "))
            break;
        case "6":
            deletePet(prompt("Please enter the pet name you want to delete from our database: "))
            break;
        case "7":
            let petName = prompt("Please enter the pet name you want to modify the information of:");
            updatePet(petName)
            break;
        case "8":
            //Defining trigger as false to exit the program
            trigger = false
            break;
        default:
            console.log("Invalid option")
            break;
    }

} */


