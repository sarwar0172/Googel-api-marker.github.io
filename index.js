function initMap(){
    //this is normal way to add marker and add google map
  var options={
      zoom:7,
      center:{lat:23.6850,lng:90.3563}
  };
  var map=new google.maps.Map(document.getElementById("map"),options);


 google.maps.event.addListener(map, 'click',(e)=>{
     addMarker(
         {coords:e.latLng},
     )
 })

 //  //add marker
 //  var marker=new google.maps.Marker({
 //      position:{lat:24.8481,lng:89.3730},
 //      map:map,
 //      icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png"
 //  });

 //  var infroWindow=new google.maps.InfoWindow({
 //      content:'<h1>robin islam</h2>'
 //  });
 //  marker.addListener('click',()=>{
 //      infroWindow.open(map,marker)
 //  })


 //this is the efficient way to do.

var markers=[
    {
     coords:{lat:24.8481,lng:89.3730},
        iconImg:"https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png",
        content:"<h1>robin islam</h1>"
    },
    {
     coords:{lat:23.8103,lng:90.4125},
   content:"<h1>robin khan</h1>"
    },
    {
     coords:{lat:22.7010,lng:90.3535},
 content:"<h1>tamin iqbal</h1>"
    }
]

  
 function addMarker(props){
     var marker=new google.maps.Marker({
      position:props.coords,
      map:map,
      //icon:props.iconImg
  });
  if(props.iconImg){
      //set icon image
      marker.setIcon(props.iconImg)
  }

  //check content{
      if(props.content){
          var infroWindow=new google.maps.InfoWindow({
              content:props.content
          })
      }

      marker.addListener('click',()=>{
          infroWindow.open(map,marker)
      })
  }
 

for(var i=0;i<markers.length;i++){
   addMarker(markers[i])
}

//     addMarker({coords:{lat:24.8481,lng:89.3730},
//            iconImg:"https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png",
//            content:"<h1>robin islam</h1>"
// })
//     addMarker({coords:{lat:23.8103,lng:90.4125},
//       content:"<h1>robin khan</h1>"})
//     addMarker({coords:{lat:22.7010,lng:90.3535},
//     content:"<h1>tamin iqbal</h1>"
// })

}