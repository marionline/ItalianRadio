/*#########################################################################
#                                                                         #
#   Simple script shamelessly recopied from Cool Streams                  #
#                                                                         #
#   Copyright                                                             #
#   (C)       2009 Alessio Leonarduzzi <alessio.leonarduzzi@gmail.com>    #
#   (C) 2007, 2008 Nikolaj Hald Nielsen  <nhnFreespirit@gmail.com>        #
#   (C)       2008 Peter ZHOU <peterzhoulei@gmail.com>                    #
#   (C)       2008 Mark Kretschmann <kretschmann@kde.org>                 #
#   (C)       2008 Georges Dubus <georges.dubus@supelec.fr>               #
#                                                                         #
#   This program is free software; you can redistribute it and/or modify  #
#   it under the terms of the GNU General Public License as published by  #
#   the Free Software Foundation; either version 2 of the License, or     #
#   (at your option) any later version.                                   #
#                                                                         #
#   This program is distributed in the hope that it will be useful,       #
#   but WITHOUT ANY WARRANTY; without even the implied warranty of        #
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         #
#   GNU General Public License for more details.                          #
#                                                                         #
#   You should have received a copy of the GNU General Public License     #
#   along with this program; if not, write to the                         #
#   Free Software Foundation, Inc.,                                       #
#   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.         #
##########################################################################*/

function Station( name, url )
{
    this.name = name;
    this.url = url;
}

var stationArray = new Array (

  new Station( "Isoradio",                   "rtsp://live.media.rai.it/broadcast/isoradio.rm"),
  new Station( "Radio 101",                  "http://players.creacast.com/creacast/r101/playlist.asx"),
  new Station( "Radio 105",                  "mms://151.1.245.3/1"),
  new Station( "Radio 24",                   "mms://62.196.2.90/Radio24"),
  new Station( "Radio Capital",              "http://live.mediaserver.kataweb.it/capital"),
  new Station( "Radio Centro Suono",         "http://wms.mclink.it/rcs_64_live"),
  new Station( "Radio Centro Suono Sport",   "http://wms.mclink.it/rcs_65_live"),
  new Station( "Radio Citta' Aperta",        "http://stream.greynetweb.it/rca?MSWMExt=.asf"),
  new Station( "Radio DeeGay",               "http://deegay.it/deegay.asx"),
  new Station( "Radio DeeJay",               "http://live.mediaserver.kataweb.it/radiodeejay"),
  new Station( "Radio DiscoRadio",           "http://discoradio.fabbricadigitale.it/asx/discoradio.asx"),
  new Station( "Radio Gamma",                "http://live.wm.p1.str3.com/000999_bc_a365_radiogamma_mi"),
  new Station( "Radio Italia",               "http://radioitalialive.str.idc.extra.it/radioitalia"),
  new Station( "Radio Lattemiele",           "http://onair2.xdevel.com/LatteMiele"),
  new Station( "Radio Lifegate Radio",       "http://www.streamsolution.it/onair/lifegate.asx"),
  new Station( "Radio M2O",                  "http://mp3.m2o.it:80/"),
  new Station( "Radio Montecarlo",           "http://www.radiomontecarlo.net/Radio/asx/rmcfm.asx"),
  new Station( "Radio Montecarlo 2",         "http://www.radiomontecarlo.net/Radio/asx/rmc2fm.asx"),
  new Station( "Radio Montecarlo 80",        "http://www.radiomontecarlo.net/Radio/asx/rmc80.asx"),
  new Station( "Radio Montecarlo Italia",    "http://www.radiomontecarlo.net/Radio/asx/italia.asx"),
  new Station( "Radio Montecarlo Love Songs",    "http://www.radiomontecarlo.net/Radio/asx/Thematic_7.asx"),
  new Station( "Radio Montecarlo the Best",  "http://www.radiomontecarlo.net/Radio/asx/thebest.asx"),
  new Station( "Radio Norba",                "http://87.117.203.165/RadioNorba"),
  new Station( "Radio Nostalgia",            "mms://www.nostalgia.it/nostalgia"),
  new Station( "Radio Popolare",             "mms://192.106.107.143/mir"),
  new Station( "Radio Rai 1",                "rtsp://live.media.rai.it/broadcast/radiouno.rm"),
  new Station( "Radio Rai 2",                "rtsp://live.media.rai.it/broadcast/radiodue.rm"),
  new Station( "Radio Rai 3",                "rtsp://live.media.rai.it/broadcast/radiotre.rm"),
  new Station( "Radio Rock",                 "http://80.79.62.11:8000/radiorock.ogg"),
  new Station( "Radio Rock Italia",          "mms://66.186.34.172:8971/RockItalia_audio"),
  new Station( "Radio RTL 102.5 Classic",    "http://www.rtl.it/player/streaming/rtl1025classic.asx"),
  new Station( "Radio RTL 102.5 Groove",     "http://www.rtl.it/player/streaming/rtl1025groove.asx"),
  new Station( "Radio RTL 102.5 Guardia Costiera",  "mms://mediaplayer.rtl.it/rtl1025_gc"),
  new Station( "Radio RTL 102.5 Italian Style", "http://www.rtl.it/player/streaming/rtl1025it.asx"),
  new Station( "Radio Web Stereo",           "http://www.radiowebstereo.it/players/listen.asx"),
  new Station( "Radio Studio 54",            "mms://wma2.mediastreaming.it/studio54128"),
  new Station( "Radio Toscana",              "http://62.48.43.242/RTN"),
  new Station( "Radio Toscana Classica",     "mms://streaming.intoscana.it/wmtencoder/rtc.wma"),
  new Station( "Radio Virgin Alternative",   "mms://151.1.245.1/36"),
  new Station( "Radio Virgin Extreme",       "mms://151.1.245.1/25"),
  new Station( "Radio Virgin Italia",        "http://151.1.245.1/20"),
  new Station( "Radio Virgin Revolver",      "mms://151.1.245.1/34"),
  new Station( "Radio Virgin Rock Classico", "mms://151.1.245.1/24"),
  new Station( "Radio Virgin Rockabilly",    "mms://151.1.245.1/13"),
  new Station( "Radio Venezia",              "http://www.radiovenezia.it:8000/live"),
  new Station( "RDS Radio Dimensione Suono", "http://www.rds.it/streaming/rds.asx")

);

function RadioItaliane()
{
    ScriptableServiceScript.call( this, "Radio Italiane", 1, "Lista delle Radio Italiane in streaming online", "Scrivete ad alessio.leonarduzzi@gmail.com per aggiungere/modificare/togliere radio", false );
}

function onPopulating( level, callbackData, filter )
{
    Amarok.debug( " Populating station level..." );
    //add the station streams as leaf nodes
    for ( i = 0; i < stationArray.length; i++ )
    {
        item = Amarok.StreamItem;
        item.level = 0;
        item.callbackData = "";
        item.itemName = stationArray[i].name;
        item.playableUrl = stationArray[i].url;
        item.infoHtml = "A cool stream called " + item.itemName;
        script.insertItem( item );
    }
    script.donePopulating();
}

script = new RadioItaliane();
script.populate.connect( onPopulating );
