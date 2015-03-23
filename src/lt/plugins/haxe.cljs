(ns lt.plugins.haxe
  (:require [lt.object :as object]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.proc :as proc]
            [lt.objs.command :as cmd]
            [lt.objs.notifos :as notifos]
            [lt.objs.workspace :as workspace]
            [lt.util.js :as util])
  (:require-macros [lt.macros :refer [behavior defui]]))

(def fpath (js/require "path"))

(defn find-file [suffix]
  "Returns the first file in the current workspace
  which has the given extension"
  (first (filter #(.endsWith % suffix)
                 (:files @workspace/current-ws)))
  )

;; Behaviors

(behavior ::compile-haxe
          :triggers #{:haxe-compile}
          :reaction (fn [this]
                      (let [build-file (find-file ".hxml")
                            project-root (.dirname fpath build-file)
                            build-file (.basename fpath build-file)]
                        (proc/exec {:command "haxe" :args [build-file] :cwd project-root :obj haxe}))
                      ))

(behavior ::on-out
          :triggers #{:proc.out :proc.error} ;; proc/exec has a copy of the gist object
          :reaction (fn [this data]
                      (let [out (.toString data)]
                        (.log js/console out)
                        (notifos/set-msg! (str "Finished")))))

;; Object

(def haxe (object/create (object/object* ::haxe
                                         :name "haxe data"
                                         :behaviors [::compile-haxe ::on-out ::on-error])))


;; Commands
(cmd/command {:command :haxe.compile
              :desc "Haxe: Compile the Haxe project"
              :exec (fn [] (object/raise haxe :haxe-compile))})
