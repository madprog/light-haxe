# light-haxe
Plugin to add utility commands to [LightTable][1] for Haxe development

## Installation
To install the plugin, you can clone this repository to your plugin directory:

    cd ~/.config/LightTable/plugins
    git clone https://github.com/madprog/light-haxe.git

Then, in LightTable, you can bind the available commands to key strokes.
To do that, you can hit `ctrl+space` to open the command panel, and type `user
keymap` in order to open the `user.keymap` file which will contain your custom
bindings.

You can then add:

    [
     ;; Runs haxe with on first .hxml file found in the current workspace
     [:editor.haxe "ctrl+shift+enter" :haxe.compile]
     ]

[1]: http://lighttable.com/
