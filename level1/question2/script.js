//Console.log out elements in JSON file
var author = {
    "video": [
        {
            "id": 12312412312,
            "name": "Ecuaciones Diferenciales",
            "url": "/video/math/edo/12312412312",
            "author": {
                "data": [
                    {
                        "name_author": "Alejandro Morales",
                        "url": "/author/alejandro-morales",
                        "type": "master"
                    }
                ]
            }
        }
    ]
};

var video = author.video[0];
var authorData = video.author.data[0];

console.log(video.id);
console.log(video.name);
console.log(video.url);
console.log(video.author);

for (var data in authorData) {
    if (authorData.hasOwnProperty(data)) {
        var value = authorData[data];
        console.log(value);
    }
}