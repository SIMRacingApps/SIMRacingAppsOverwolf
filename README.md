Overwolf is an application that lets you run SIMRacingApps(SRA), and other Apps you can get from their store, while in the SIM in fullscreen mode.
Overwolf is still in BETA, so your experience may vary. See below for some notes on testing with various systems.
It uses the SIMRacingAppsServer, so it must be running as well.

Looking for the newest version, click [here](https://github.com/SIMRacingApps/SIMRacingAppsOverwolf/releases/latest).

WARNING: THERE IS AN OVERWOLF BUG THAT CAUSES IT TO TAKE OVER YOUR USB INPUT DEVICES
         WHENEVER YOU CLICK ON AN APP. THIS CAN CAUSE IT TO SHIFT DOWN, LOOSE FORCE FEEDBACK,
         AND OTHER DISASTROUS THINGS. SO, DO NOT CLICK ON AN APP WHILE IN THE CAR.
         I have posted the issue to the forums. You can follow it [here](http://forums.overwolf.com/index.php?/topic/7106-clicking-on-app-overwolf-takes-over-usb-input-devices)

The main feature Overwolf has over [Electron-Apps](https://github.com/SIMRacingApps/SIMRacingAppsElectron), 
is the ability to run SIMRacingApps while the SIM in full screen mode.
It also supports transparent backgrounds, so round Apps look better.
It also has an entire store of Apps to choose from as well, including TeamSpeak and Facebook.

Overwolf will only run on the same screen(s) as the SIM when the SIM is running.
So, if you have other monitors that you want to place an App on, 
then you can either user a standard Browser, or use [Electron-Apps](https://github.com/SIMRacingApps/SIMRacingAppsElectron).
You can use both Overwolf and Electron clients at the same time.

For now, you have to install the SIMRacingAppsLauncher package manually.
Once it is stable, I will submit it to the Overwolf Store so you can download it from there.
But for now, download the package file from [SIMRacingAppsLauncher-x.x.x.opk](https://github.com/SIMRacingApps/SIMRacingAppsOverwolf/releases/latest).
The instructions that follow will tell you how to load the file into Overwolf.

# Installation

1. Overwolf must be downloaded and installed from http://www.overwolf.com.
2. Launch Overwolf to change some settings. Also Overwolf must be running before you run the SIM.
3. Right Click on the Overwolf system tray icon and select Settings.
  1. General (Recommended)
    1. Your Preference - Start Overwolf when Windows starts.
    2. Control Overwolf apps and window by:
       Selected - Hovering the game cursor over them
    3. Dock in-game behavior:
       Checked - Keep the doc visible after if folds away
    4. Browser Settings:
       Checked - Use Overwolf so links will open in game. 
       Needed to open SRA documentation links.
  2. Support (Required)
    1. Click on Development Options.
    2. Click on Install extension.
    3. Locate the package file (.opk) that was downloaded above or get it from [SIMRacingAppsLauncher-x.x.x.opk](https://github.com/SIMRacingApps/SIMRacingAppsOverwolf/releases/latest).
  3. Hotkeys (Recommended)
    1. Checked - Enable hotkeys
    2. Control/Dismiss Overwolf in-game - Checked(Ctrl-F3)
    3. Show/Hide Overwolf in-game - Checked(Ctrl-F2)
    4. Show/Hide doc in game - Checked(Ctrl-F1)
    5. You may want to uncheck all others or change them so they
       will not interfere with the SIM's keys.

Always have Overwolf running before you launch the SIM.
Now load up the SIM and open the Overwolf Dock 
(Might need to click they tray icon or press Ctrl-F1 if it's not visible).
Click the big icon in the middle and you should see the SIMRacingAppsLauncher icon.
You will need to leave SIMRacingAppsLauncher open, but you can minimize it.
To restore it, open the dock and relaunch it.    

=============================================================================================================

The source is available from https://github.com/SIMRacingApps/SIMRacingAppsOverwolf. 
So, if you feel like you can contribute and make this a better solution,
feel free to fork it and submit a pull request. I will take a look at it.

=============================================================================================================

## Some notes from testing on different setups.

Send me feedback and I'll document your experience here as well.
 
1. Successful Setups
  1. Windows 10 with 4 monitors using an ASUS NVIDIA GTX970.
  2. Windows 10 ASUS Laptop Internal screen with Intel HD 4400 Graphics.

2. Unsuccessful Setups
  1. On Windows 7, with an AMD R9 200 Series video card and 4 monitors.
     Using only 3 of the monitors for the SIM, it only worked on the left most monitor. 
     Moving the App to the other monitors, freezes them and they stop updating.
     It's not limited to SIMRacingApps, any Overwolf App does this.
     I tried the built in Browser and when to http:://time.gov and moved it from monitor to monitor.
     I also reported this on the Overwolf forums with an attached video. No response so far.
  2. If you alt-tab out of the game and come back in, sometimes Apps will move.
     If that happens, open the SRA launcher again and click the logo to refresh them.
     It should move them back to where they were.
  3. On one Windows 10, NVIDIA, single monitor system, Overwolf would crash when launching an App from the main menu. 
     Root cause has not been identified or fixed. 

