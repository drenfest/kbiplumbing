const fs = require('fs');
const path = require('path');

let fileDirPath = path.join(__dirname,"public");
let dirs = [];
let fileList = [];
let url = "https://kbiplumbing.net";
let dt = new Date();
let lastmod = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();;
fs.readdir(fileDirPath, {encoding:"utf8",withFileTypes:true},(err, files)=>{
    if (err){
        return console.log('Error: ' + err);
    }
    files.forEach(function(file) {
        if(file.isDirectory()){
            // console.log("Dir: "+file.name);
                // console.log(containsIndex(path.join(fileDirPath,file.name)));
                if(containsIndex(path.join(fileDirPath,file.name))){
                    let str = `<url>
<loc>${url}/${file.name}/</loc>
<lastmod>${lastmod}</lastmod>
<changefreq>daily</changefreq>
<priority>0.5</priority>
  </url>`;



                    dirs.push({url:url+"/"+file.name, data:str});
                }
        }
        if(file.isFile()){
            let fExt = file.name.substring(file.name.indexOf("."),file.name.length);
            let fname= file.name.substring(0,file.name.indexOf("."));
            fileList.push({name:fname,ext:fExt});
        }

    });
    // console.log(dirs);
    let dirData = `
    <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
    `.trim();
    let beforeDirData = "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\" xmlns:image=\"http://www.google.com/schemas/sitemap-image/1.1\" xmlns:xhtml=\"http://www.w3.org/1999/xhtml\">";
    let afterDirData = "</urlset>";
    for(let i=0; i < dirs.length;i++){
        dirData = dirData + dirs[i].data;
        console.log(`Preparing ${dirs[i].url} for sitemap`);
    }
    dirData = beforeDirData + dirData + afterDirData;
    fs.writeFileSync("./public/sitemap.xml",dirData.trim());
});
function containsIndex(fpath){
    if(fs.existsSync(path.join(fpath,"index.php"))){
        return true;
    }
    return false;
}
