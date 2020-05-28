
function musiclist(){
    const ap = new APlayer({
        container: document.getElementById('musicbar'),
        listFolded:false,
        listMaxHeight:90,
        fixed:true,
        audio: [{
        name:'Fly Me To The Moon (In Other Words)',
        artist:'Frank Sinatra',
        url:'./src/music/Frank Sinatra - Fly Me To The Moon (In Other Words).mp3',
        cover:'./src/images/music/fly me to the moon.jpeg',
        theme:'#46718b'
        
},{
        name:'Hotel California',
        artist:'Eagles',
        url:'./src/music/Eagles - Hotel California.mp3',
        cover:'./src/images/music/hotel california.png',
        theme:'#46718b'
},{
        name: 'Snow, Snow, Snow',
        artist: 'Danny Fromajio',
        url: './src/music/Danny Fromajio - Snow, Snow, Snow.mp3',
        cover: './src/images/music/snow.png',
        theme: '#ebd0c2'
}
]
});
}