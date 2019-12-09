const fs = require('fs');
const path = require('path');

let fileDirPath = path.join(__dirname,"public");
let dirs = [];
let fileList = [];
let url = "https://kbiplumbing.net";
let dt = new Date();
let lastmod = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + ("0" + dt.getDate()).slice(-2);
// GET ALL DIRECTORIES TO FIND THE ONES THAT HAVE AN INDEX FILE
// THE DIRECTORIES WITH AN INDEX FILE ARE VALID ROUTES THAT NEED TO
// BE ADDED TO THE SITEMAP
fs.readdir(fileDirPath, {encoding:"utf8",withFileTypes:true},(err, files)=>{
    if (err){
        return console.log('Error: ' + err);
    }
    files.forEach(function(file) {
        if(file.isDirectory()){
            // console.log("Dir: "+file.name);
                // console.log(containsIndex(path.join(fileDirPath,file.name)));
            // IF DIRECTORY CONTAINS AN INDEX FILE THEN THE DIRECTORY IS A URL ADD IT TO THE ARRAY
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
        // DO SEARCH TO FIND OUT IF FILE TYPE IS IMAGE
        // IF IT IS AN IMAGE ADD IT TO SITEMAP
        // if(file.isFile()){
        //     let fExt = file.name.substring(file.name.indexOf("."),file.name.length);
        //     let fname= file.name.substring(0,file.name.indexOf("."));
        //     fileList.push({name:fname,ext:fExt});
        // }

    });
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
    //WRAP XML
    dirData = beforeDirData + dirData + afterDirData;
    //WRITE XML TO SITEMAP
    fs.writeFileSync("./public/sitemap.xml",dirData.trim());
});

//DOES DIRECTORY CONTAIN A FILE NAMED "index.php"?
function containsIndex(fpath){
    if(fs.existsSync(path.join(fpath,"index.php"))){
        return true;
    }
    return false;
}
