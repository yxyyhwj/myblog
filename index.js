console.log('hi,node')

const fs = require('fs')

var prdArt = fs.readdir('./md',(err,files) => {
    var template = fs.readFileSync('template.html').toString()
    var curIndex = fs.readFileSync('indexTemp.html').toString()
    var liDom = ''
    files.forEach((value,index)=>{
        var title = value.split('.')[0]
        var markdown = fs.readFileSync('./md/'+value).toString()
        var result = template.replace('{{content}}',markdown).replace('{{title}}',title)
        var resName = './dist/'+title+'.html'
        fs.writeFileSync(resName,result)
        liDom +='\t\t<li>'+
                    '<a href="'+ resName +'">'+title+'</a>'+
                '</li>\n'
    })
    var finnalRes = curIndex.replace('{{article-list}}',liDom)
    fs.writeFileSync('index.html',finnalRes)
})
//prdArt
