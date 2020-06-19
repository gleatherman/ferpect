var listAudio = [{
        name: "Artist 1 - audio 1",
        file: "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_5MG.mp3",
        duration: "02:12"
    },
    {
        name: "Artist 2 - audio 2",
        file: "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_2MG.mp3",
        duration: "00:52"
    },
    {
        name: "Artist 3 - audio 3",
        file: "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_1MG.mp3",
        duration: "00:27"
    }
]

for (var i = 0; i < listAudio.length; i++) {
    createTrackItem(i, listAudio[i].name, listAudio[i].duration);
}
var indexAudio = 0;