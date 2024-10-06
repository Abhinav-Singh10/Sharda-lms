//Inventory Management System Assignment

// Initial Inventory:
// [ { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
//   { id: 2, name: 'Banana', quantity: 20, price: 0.2 } ]

// Adding item:
// [ { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
//   { id: 2, name: 'Banana', quantity: 20, price: 0.2 },
//   { id: 3, name: 'Orange', quantity: 15, price: 0.7 } ]

// Updating item:
// [ { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
//   { id: 2, name: 'Banana', quantity: 30, price: 0.2 },
//   { id: 3, name: 'Orange', quantity: 15, price: 0.7 } ]

// Deleting item:
// [ { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
//   { id: 3, name: 'Orange', quantity: 15, price: 0.7 } ]

const inventory= [];
const printInventory=()=>{
    console.log(inventory);
}
const addItem=(inventory,item)=>{
    inventory.push(item);
}
const updateItem=(inventory,id,newDetails)=>{
    const index = inventory.findIndex(obj => obj.id === id);
    inventory[index]=newDetails;
}
const deleteItem = (inventory, id) => {
    const index = inventory.findIndex(obj => obj.id === id);
    if (index !== -1) {
        inventory.splice(index, 1); 
    }
}

const getItem=(inventory,id)=>{
    console.log(inventory.filter((obj)=> obj.id==id));  
}

function createItem(id, name, quantity, price) {
    return {
        id,
        name,
        quantity,
        price
    };
}
const item1=createItem(1,'Apple',2,10)
const item2=createItem(2,'Orange',5,13)
const item3=createItem(4,'Grape',1,31)
printInventory()
addItem(inventory,item1)
printInventory()
addItem(inventory,item2)
addItem(inventory,item3)
printInventory()
deleteItem(inventory,2)
printInventory()
const item4=createItem(6,'Grape',2,17)
updateItem(inventory,4,item4)
printInventory()
getItem(inventory,6);