const initMap = () => {
    let uluru = {lat: 36.168818, lng: -86.783166,};
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom:12, scrollwheel: false, draggable: false,
        center: uluru,
    });
    let marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

module.exports = initMap
