function initMap() {
      var uluru = {lat: 36.168818, lng: -86.783166};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom:12, scrollwheel: false, draggable: false,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
