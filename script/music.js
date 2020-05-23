const ap = new APlayer({
    container: document.getElementById('musicbar'),
    listFolded:false,
    listMaxHeight:90,
    fixed:true,
    audio: [{
    name: 'Snow, Snow, Snow',
    artist: 'Danny Fromajio',
    url: '../music/Danny Fromajio - Snow, Snow, Snow.mp3',
    cover: '../images/music/snow.png',
    theme: '#ebd0c2'
},{
    name:'Hotel California',
    artist:'Eagles',
    url:'../music/Eagles - Hotel California.mp3',
    cover:'../images/music/hotel california.png',
    theme:'#46718b'
}
]
});