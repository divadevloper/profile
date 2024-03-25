let image = document.getElementById('image')
let text = document.getElementById('text')
index = 0



let arrobj = [
    {
        Name: "Full Name: Ariyo Esther Olamide",
        age: "Age: 25",
        Nationality: "Nationality: Nigeria",
        Email: "Email:ariyoesther2009@gmail.com",
        Skincolor: " SkinColor:Brown",
        img: "female.jpg"
    },

    {
        Name: "Full Name: Adeyemi Babatunde",
        age: "Age: 21",
        Nationality: "Nationality:Nigeria",
        Email: "Email:babatunde333@gmail.com",
        Skincolor: " SkinColor:Brown",
        img: "OIP2.jpeg"
    },

    {
        Name: "Full Name: Fatokun  Emmanuel",
        age: "Age: 28",
        Nationality: "Nationality:Nigeria",
        Email: "Email:fakos345@gmail.com",
        Skincolor: " SkinColor:Brown",
        img: "OIP3.jpeg"
    },

    {
        Name: "Full Name: Lawal Salam",
        age: "Age: 25",
        Nationality: "Nationality:Nigeria",
        Email: "Email: lawalsala7654@gmail.com",
        Skincolor: " SkinColor:Brown",
        img: "secondimg.png"
    },

    {
        Name: "Full Name: Adeniyi Nifesimi",
        age: "Age: 29",
        Nationality: "Nationality:Nigeria",
        Email: "Email: neyo454@gmail.com",
        Skincolor: " SkinColor:Brown",
        img: "first.jpeg"
    }


]

display()


function display() {
    image.src = arrobj[index].img
    text.innerHTML = `<h3 id="myh3"> 
        ${arrobj[index].Name}<br>
        ${arrobj[index].age} <br> 
        ${arrobj[index].Nationality} <br>
        ${arrobj[index].Email} <br>
        ${arrobj[index].Skincolor} 
         </h3> `
}
function next() {
    if (index == arrobj.length - 1) {
        index = 0
    } else {
        index++
    }

    display()

}

function prev() {
    if (index == 0) {
        index = arrobj.length - 1
    } else {
        index--
    }
    display()
}