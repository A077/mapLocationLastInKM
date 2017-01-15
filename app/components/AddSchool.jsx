const React = require('react');
const actions = require('../actions/SchoolActions');

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:'',
          tagline:''
      }
    },
    addSchool:function(e){
        e.preventDefault();
        actions.addSchool(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },

    render(){
        let frameSrc = "data:text/html,<html><head> <title>Geolocation</title>" +
            "<meta name='viewport' content='initial-scale=1.0, user-scalable=no'> <meta charset='utf-8'> " +
            "<style> #map {height: 100%; } html, body {height: 100%; width: 100%; margin: 0; padding: 0; } </style> " +
            "</head> <body> <div id='map'></div> " +
            "<script> var pos ={}; " +
            "function initMap() {var map = new google.maps.Map(document.getElementById('map'), " +
            "{center: {lat: 40.397, lng: 44.644}, zoom: 6 }); " +
            "if (navigator.geolocation) {navigator.geolocation.getCurrentPosition(function(position) " +
            "{pos = {lat: position.coords.latitude, lng: position.coords.longitude }; " +
            "var marker = new google.maps.Marker({map: map, position: pos, title: 'Hello World!'}); parent.pos = pos; " +
            "map.setCenter(pos); }, function() {handleLocationError(true, infoWindow, map.getCenter()); }); } " +
            "else {var infoWindow = new google.maps.InfoWindow({map: map}); " +
            "handleLocationError(false, infoWindow, map.getCenter()); } } " +
            "function handleLocationError(browserHasGeolocation, infoWindow, pos) {infoWindow.setPosition(pos); " +
            "infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : " +
            "'Error: Your browser does not support geolocation.'); } </script> " +
            "<script async defer src='https://maps.googleapis.com/maps/api/js?key=AIzaSyBOiioXT6ayXmET8jj-rul8X4U5rACRM5I&callback=initMap'> </script> " +
            "</body> </html>";
        return(
            <form className='form' onSubmit={this.addSchool}>
                <div className='form-group'>
                    <label className='control-label' htmlFor='name'>School Name:</label>
                    <input type='text' className='form-control' id='name' name='name' value={this.state.name} onChange={this.handleInputChange} placeholder='School Name' />
                </div>
                <div className='form-group'>
                    <label className='control-label' htmlFor='tagline'>Tagline:</label>
                    <input type='text' className='form-control' id='tagline' name='tagline' value={this.state.address} onChange={this.handleInputChange} placeholder='Tagline' />
                </div>
                <div className="form-group">
                    <iframe className="frameInDiv form-control" src="https://agile-retreat-16907.herokuapp.com/">Couldn't load frame</iframe>
                </div>
                <div className='form-group'>
                    <button className='btn' type='submit'>Add School</button>
                </div>
            </form>
        )
    }
})