Overwolf is an application that lets you run SIMRacingApps and other Apps while in the SIM.
It uses the SIMRacingAppsServer, so it must be running as well.

The main feature it has over Electron-Apps, 
is the ability to run SIMRacingApps while the SIM in full screen mode.
It also supports transparent backgrounds, so round Widgets look better.
It has an entire store of free Apps to download and use as well.

Overwolf will only run on the same screen(s) as the SIM when the SIM is running.
So, if you have other monitors that you want to place an App on, 
then you can either user a standard Browser, or use Electron-Apps.
You can use both at the same time.

Overwolf must be downloaded and installed from http://www.overwolf.com.

For now, you have to install the SIMRacingAppsLauncher package manually.
Once it is stable, I will submit it to the Overwolf Store so you can download it from there.
But for now, download the package file, SIMRacingAppsLauncher-x.x.x.opk, from the downloads link.

Launch Overwolf to change some settings. Also Overwolf must be running before you run the SIM.

    1. Right Click on the Overwolf system tray icon and select Settings.
        a. General (Recommended)
            1. Your Preference - Start Overwolf when Windows starts.
            2. Control Overwolf apps and window by:
               Selected - Hovering the game cursor over them
            3. Dock in-game behavior:
               Checked - Keep the doc visible after if folds away
            4. Browser Settings:
               Checked - Use Overwolf so links will open in game. 
                         Needed to open SRA documentation links.
        b. Support
            1. Click on Development Options.
            2. Click on Install extension.
            3. Locate the package file (.opk) that was downloaded above.
            4. You will not need the .opk file anymore.
        c. Hotkeys (Recommended)
            1. Checked - Enable hotkeys
            2. Control/Dismiss Overwolf in-game - Checked(Ctrl-F3)
            3. Show/Hide Overwolf in-game - Checked(Ctrl-F2)
            4. Show/Hide doc in game - Checked(Ctrl-F1)
            5. You may want to uncheck all others or change them so they
               will not interfere with the SIMs keys.
 
Now load up the SIM and open the Overwolf Dock 
(Might need to click they tray icon or press Ctrl-F1 if it's not visible).
Click the big icon in the middle and you should see the SIMRacingAppsLauncher icon.
You will need to leave SIMRacingAppsLauncher open, but you can minimize it and restore it from the dock.    

=============================================================================================================
Some notes from testing on different setups.
Send me feedback and I'll document your experience here as well.
 
    1. On Windows 7, with an AMD R9 200 Series video card and 3 monitors.
       It only worked on the left most monitor. 
       Moving the App to the other monitors, freezes them and they stop updating.
       It's not limited to SIMRacingApps, any Overwolf App does this.
       I tried the built in Browser and when to http:://time.gov and moved it from monitor to monitor.
       I also reported this on the Overwolf forums with an attached video. No response so far.
       
       If you alt-tab out of the game and come back in, sometimes Apps will move.
       If that happens, open the SRA launcher again and click the logo to refresh them.
       It should move them back to where they were.
       
    3. Successful Setups
       a. Windows 10 with 4 monitors using an ASUS NVIDIA GTX970.
       b. Windows 10 ASUS Laptop Internal screen with Intel HD 4400 Graphics.

