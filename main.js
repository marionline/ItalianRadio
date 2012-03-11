/*############################################################################
#                                                                            #
#   Simple script shamelessly recopied from Cool Streams                     #
#                                                                            #
#   Copyright                                                                #
#   (C)       2012 Mario Santagiulaina <mario@marionline.it>                 #
#   (C) 2011  Nuno Sucena Almeida                                            #
#   (C)       2009 Alessio Leonarduzzi <alessio.leonarduzzi@gmail.com>       #
#   (C) 2007, 2008 Nikolaj Hald Nielsen  <nhnFreespirit@gmail.com>           #
#   (C)       2008 Peter ZHOU <peterzhoulei@gmail.com>                       #
#   (C)       2008 Mark Kretschmann <kretschmann@kde.org>                    #
#   (C)       2008 Georges Dubus <georges.dubus@supelec.fr>                  #
#                                                                            #
#     This program is free software: you can redistribute it and/or modify   #
#     it under the terms of the GNU General Public License as published by   #
#     the Free Software Foundation, either version 3 of the License, or      #
#     (at your option) any later version.                                    #
#                                                                            #
#     This program is distributed in the hope that it will be useful,        #
#     but WITHOUT ANY WARRANTY; without even the implied warranty of         #
#     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the          #
#     GNU General Public License for more details.                           #
#                                                                            #
#     You should have received a copy of the GNU General Public License      #
#     along with this program.  If not, see <http://www.gnu.org/licenses/>.  #
##############################################################################*/

Importer.loadQtBinding( "qt.core" );
Importer.loadQtBinding( "qt.xml" );
Importer.loadQtBinding( "qt.network" );

var xmlUrl = "file:///" + Amarok.Info.scriptPath() + "/italianradio.xml";
var radios = null;

function Stream( name, url, description ) {
	this.name = name;
	this.url = url;
	this.description = description;
}

/* Get info for radiostations */
function parseXML( reply ) {
	Amarok.debug( "Start ItalianRadio xml parsing..." );
	try {
		var doc = new QDomDocument("radiostations");
		doc.setContent( reply );

		var radiostations = doc.elementsByTagName( "radiostation" );
		Amarok.debug ("got " + radiostations.length() + " radiostations");
		Amarok.Window.Statusbar.longMessage("got "+radiostations.length()+" radiostations");
		radios = new Object;
		for ( r = 0; r < radiostations.length(); r++ ) {

			var station = radiostations.at( r );

			var id = station.toElement().attribute("id");
			Amarok.debug ("parse station: " + id);

			var streams = station.toElement().elementsByTagName( "stream" );
			Amarok.debug ("station " + id + " got " + streams.length() + " streams");

			var streamsArray = new Array(streams.length());
			for ( s = 0; s < streams.length(); s++ ) {
				var stream = streams.at( s );
				var name = stream.firstChildElement( "name" ).text();
				var description = stream.firstChildElement( "description" ).text();
				var url = stream.firstChildElement( "playlist" ).text();
				streamsArray[s] = new Stream(name,url,description);
			}
			radios[id]=streamsArray;
		}
	}
	catch( err ) {
		Amarok.debug( err );
	}

	populateStations();
}

// Populate stations (level 1)
function populateStations() {
	Amarok.debug( " Populating station level..." );

	/*var cover = Amarok.Info.scriptPath() + "/" + "skyfm-icon.svg";*/

	for (radio in radios) {
		var item = Amarok.StreamItem;
		item.level = 1;
		item.callbackData = radio;
		item.itemName = radio;
		item.playableUrl = "";
		item.infoHtml = "A cool stream called " + item.itemName;
		/*item.coverUrl = cover;*/
		script.insertItem( item );
	}
	script.donePopulating();
}

function populateStreams( callbackData ) {
	Amarok.debug( " Populating Stream..." );

	Amarok.debug ("callbackData:" + callbackData );
	var streamsArray = radios[callbackData];

	Amarok.debug ("station " + callbackData + " got " + streamsArray.length + " streams");

	for ( s = 0; s < streamsArray.length; s++ ) {
		var item = Amarok.StreamItem;
		item.level = 0;
		item.callbackData = "";
		item.itemName = streamsArray[s].name;
		item.playableUrl = streamsArray[s].url;
		item.album = callbackData; // streamArray[s].name;
		item.infoHtml = streamsArray[s].description;
		// item.artist = "Online Radio";
		// item.coverUrl = cover;
		script.insertItem( item );

		Amarok.debug ("stream: " + item.itemName);
		Amarok.debug ("stream play: " + item.playableUrl);
	}
  script.donePopulating();
}

function onPopulating( level, callbackData, filter ) {
	Amarok.debug("populating ItalianRadio level: " + level + ",callback:" + callbackData);
	Amarok.debug("radios == null: " + (radios == null));

	if (radios == null) {
		Amarok.debug( "fetching " + xmlUrl );
		Amarok.Window.Statusbar.shortMessage( "Fetching&Parsing " + xmlUrl);
		var a = new StringDownloader(new QUrl( xmlUrl ), parseXML );
		return;
	}

	if ( level == 1 ) { // the top level radio stations (italiaradio or other)
		populateStations();
		Amarok.debug( "Done populating radio station level " + level);
	} else if ( level == 0 ) { // the streams for each radio station
		populateStreams(callbackData);
		Amarok.debug( "Done populating stream level " + level);
	}
}

function ItalianRadio() {
	Amarok.debug( "creating ItalianRadio service..." );
	ScriptableServiceScript.call( this, "ItalianRadio", 2, 
		"Lista delle Radio Italiane in streaming online", 
		"Scrivere a mario@marionline.it per commenti", false );
	Amarok.debug( "done creating ItalianRadio service!" );
}

function onConfigure() {
	Amarok.alert( "No configuration necessary" );
}
Amarok.configured.connect( onConfigure );

script = new ItalianRadio();
script.populate.connect( onPopulating );
/*script.customize.connect( onCustomize );*/
