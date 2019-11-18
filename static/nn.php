<?php
$http_origin = $_SERVER['HTTP_ORIGIN'];
//
$allowed_domains = array(
    'https://kbiplumbing.net',
    'https://dev.kbiplumbing.net',
);

if (in_array($http_origin, $allowed_domains))
{
    header("Access-Control-Allow-Origin: $http_origin");
}

//Base endpoint for all API calls
$endpoint = "https://api.sidebox.com/plugin";
//The resouce is the API Endpoint you'll be making a web request to
//$resource = "/nearbyreviews";
//$resource = "/nearbyservicearea";
$resource = "/nearbyserviceareareviewcombo";
//$resource = "/nationwideserviceareareviewcombo";
//$resource = "/testimonials";
//$resource = "/photogallery";
//required API param
$token = "41400116-9afa-4772-a94a-5a736521f837";
//optional API params
$agent = urlencode($_SERVER['HTTP_USER_AGENT']);
$state = ""; // The abbreviated state. For example, Arizona should be "AZ"
$city = urlencode("");
if(strlen($_GET["state"]) > 1){
    $state = strval($_GET["state"]);
}
if(strlen($_GET["city"]) > 1){
    $city = strval(urlencode($_GET["city"]));
}

$showMap = "yes";
$showFavorites = "";
$start = "";
$count = "";
$zoom = "";
$reviewCityUrl = "";
$mapSize = "";
$mapScrollWheel = "";
$fbLike = "";
$fbComment = "";
//Optinal params for the Nearby Service Area Seview Combo resource
$techEmail = urlencode("");
$reviewStart = "";
$checkinStart = "";
$reviewCount = "5";
$checkinCount = "10";
//Optinal params for the Regional & Nation-wide Combination (beta)
$lat = "";
$long = "";
$reviewpinmax = "";
$cluster = "";
//Required params for the audio testimonials
$playlist = urlencode("");
//Optinal params for the Nearby Service Area Seview Combo resource
$showTranscription = "";
$referrer = $_SERVER['HTTP_REFERER'];
$hostUrl = "http" . (($_SERVER['SERVER_PORT'] == 443) ? "s://" : "://") . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
?>

<?php
// /nearbyreviews example params
//$query = "?storefronttoken=$token&state=$state&city=$city&zoomlevel=$zoom&start=$start&count=$count&showmap=$showMap&mapsize=$mapSize&mapscrollwheel=$mapScrollWheel&fblike=$fbLike&fbcomment=$fbComment&showfavorites=$showFavorites&agent=$agen&referrer=$referrer&hosturl=$hostUrl";
// /nearbyservicearea example params
//$query = "?storefronttoken=$token&state=$state&city=$city&zoomlevel=$zoom&start=$start&count=$count&showmap=$showMap&mapsize=$mapSize&mapscrollwheel=$mapScrollWheel&fblike=$fbLike&fbcomment=$fbComment&showfavorites=$showFavorites&agent=$agent";
// /nearbyserviceareareviewcombo example params
$query = "?storefronttoken=$token&state=$state&city=$city&zoomlevel=$zoom&reviewcityurl=$reviewCityUrl&reviewstart=$reviewStart&checkinstart=$checkinStart&reviewcount=$reviewCount&checkincount=$checkinCount&showmap=$showMap&mapsize=$mapSize&mapscrollwheel=$mapScrollWheel&fblike=$fbLike&fbcomment=$fbComment&showfavorites=$showFavorites&agent=$agent";
// /nationwideserviceareareviewcombo example params
//$query = "?storefronttoken=$token&state=$state&zoomlevel=$zoom&mapsize=$mapSize&lat=$lat&long=$long&reviewpinmax=$reviewpinmax&cluster=$cluster&agent=$agent";
// /photogallery example params
//$query = "?storefronttoken=$tokenstart=$start&count=$count&agent=$agent";
// /testimonials example params
//$query = "?storefronttoken=$tokenstart=$start&count=$count&playlist=$playlist&showTranscription=$showTranscription&agent=$agent";
$url = "$endpoint$resource$query";
$response = file_get_contents($url);
echo $response;
?>
