# Node MakeMKV: The Missing Web UI


 Node-MakeMKV is the successor to [Remote-MakeMKV](https://blog.dlasley.net/2013/01/remote-makemkv/). The intent of this project is to provide a web front end for MakeMKV to allow for a headless ripping server. This application is written in CoffeeScript and Node.js. The server has been successfully tested on Linux (Ubuntu and CentOS). The client has been successfully tested in all major desktop and mobile browsers.
 

## Installation [∞](#installation "Link to this section")

*   Clone the repo - `git clone https://github.com/lasley/node-makemkv.git`
*   Install apt dependencies (will need to adapt for RHEL/CentOS) - `sudo apt-get install nodejs-legacy npm libudev-dev`
*   Install coffeescript interpreter - `sudo npm install -g coffee-script`
*   Install dependencies with npm - `npm install ./node-makemkv`
*   Copy the example settings file to the correct location - `cp ./node-makemkv/settings.example.json ./node-makemkv/settings.json`
*   Copy the example profile to the correct location - `cp ./node-makemkv/conversion_profile_example.xml ./node-makemkv/conversion_profile.xml`
*   Update the `conversion_profile` and `output_dir` paths in `settings.json`.
*   Default MakeMKV selection profile as defined in ~/.MakeMKV/settings.conf will be used for track selections.

Configuration Reference:

Variable | Description
---------|-------------
`output_dir` | Root ripping directory. Folders for each rip will be created inside of this directory.
`listen_port` | Port to listen on, defaults to `1337`
`makemkvcon_path` | Full path to makemkvcon binary, most likely won’t need to be changed
`browse_jail` | Root browsing directory.. client hopefully shouldn’t be able to go above this
`outlier_modifier` | For auto track selection, higher is more restrictive (selected if trackSize &gt;= discSizeUpperQuartile*outlier_modifier)


## Usage [∞](#usage "Link to this section")


*   Run the server – `coffee ./node-makemkv/server.coffee` – _Note: you must run the server as a user that has permissions to read from optical media_
*   Navigate to `SERVER_HOSTNAME:LISTEN_PORT` to view the GUI
    ![node-makemkv-gui-1.png](https://blog.dlasley.net/user-files/uploads/2014/04/node-makemkv-gui-1.png "node-makemkv-gui-1.png")
*   Insert DVD or BluRay into server
*   Once the disc has been scanned, track information will be displayed in the disc panel. Use the checkboxes in the rip column to select which tracks you would like to rip, and the `Rip Tracks` button to initiate ripping. The `Disc Name` field can be used to define the folder that MakeMKV will rip into for this disc (relative to the `Output Directory` defined earlier)
    ![node-makemkv-discinfo-panel-1.png](https://blog.dlasley.net/user-files/uploads/2014/04/node-makemkv-discinfo-panel-1.png "node-makemkv-discinfo-panel-1.png")

## Repos [∞](#repos "Link to this section")

*   [GitHub](https://github.com/dlasley/node-makemkv)
*   [Private Mirror](https://repo.dlasley.net/projects/VID/repos/node-makemkv/browse)
