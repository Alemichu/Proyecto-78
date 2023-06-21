var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Abuelo Alvaro", "Papá Carlos Mario", "Yo Alejo", "Mamá Natalia", "Tia Sandra"];

var i = 0

function update()
{
    i++;
    var NOFMIA = 5
    if(i > NOFMIA)
    {
        i = 0
    }

    var updateImages = images[i];
    var updateNames = names[i];

    document.getElementById("family_member_image").src = updateImages;
    document.getElementById("family_member_name").innerHTML = updateNames;
}