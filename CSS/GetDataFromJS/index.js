

const student = [
    {name : "Suraj", id: 27, class: "Btech CSE", place : "mohali", phone_no : 12738612897}
    ,
    {name : "rohan", id: 23, class: "Btech CSE", place : "dehli", phone_no : 2345334234}
    ,
    {name : "rahul", id: 25, class: "Btech CSE", place : "mumbai", phone_no : 27368272342}
]
console.log(student.length)

const tablebody = document.querySelector('.tableBody');

console.log(tablebody);
// console.log("i am ")



console.log(typeof(html))


let a  = 'akshjdakjdlkajda sda sdas d'+student[0].name+'dasdhjkaksdja'

const tableData  = document.querySelector('.tabelData');

const iamHeading = document.querySelector('.iamHeading');

for(let i =0; i<student.length; i++){

    let html  =   ` <tr class="tabelData">
    <td>${student[i].name} </td>
    <td>${student[i].id} </td>
    <td> ${student[i].class}</td>
    <td>${student[i].place} </td>
    <td> ${student[i].phone_no}</td>
    </tr> 
    `;
    iamHeading.insertAdjacentHTML( 'afterend' , html);
}



