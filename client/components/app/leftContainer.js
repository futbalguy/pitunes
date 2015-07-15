var PlaylistSavedBox = React.createClass({
  render: function() {
    return (
      <PlaylistSaved />
    );
  }
});

var MediaAddBox = React.createClass({
  render: function() {
    return (
      <MediaAdd />
    );
  }
});

var LeftContainer = React.createClass({
  render: function() {
    var style = {
      position: 'absolute',
      left: '0',
      minHeight: '90%',
      width: '25%',
      margin: '1px 0px 0px 0px',
      backgroundColor: '#222222',
      border: '2px solid #444444',
      borderRadius: '2px'
    };
    return (
      <div style={style}>
        <PlaylistSavedBox />
        <MediaAddBox />
      </div>
    );
  }
});