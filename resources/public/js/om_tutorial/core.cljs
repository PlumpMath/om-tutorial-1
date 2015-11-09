(ns om-tutorial.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros  [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(def app-state (atom {:app/title "Cool animals"
                      :animals/list [[0 "Ant"]
                                     [1 "Koala"]
                                     [2 "Dog"]
                                     [3 "Bird"]
                                     [4 "Monkey"]]}))

(defui HelloWorld
  static om/IQuery
  (query 
    [this]
    [:count])
  Object
  (render 
    [this]
    (let [{:keys [count] :as props} (om/props this)]
      (dom/div 
        nil 
        (dom/span nil (str "Count: " count))
        (dom/span nil (pr-str props))
        (dom/button 
          #js {:onClick (fn [e]
                          (om/transact! this '[(increment)]))} 
          "Click me")))))

(defui AnimalsList
  static om/IQueryParams
  (params [this]
          {:start 0 :end 2})
  
  static om/IQuery
  (query [this]
         '[:app/title (:animals/list {:start ?start :end ?end})])
  
  Object
  (render [this]
          (let [{:keys [app/title animals/list]} (om/props this)]
            (dom/div nil
                     (dom/h2 nil title)
                     (apply dom/ul nil
                            (map (fn [[i name]]
                                   (dom/li nil (str i ". " name)))
                                 list))))))

;; READER
(defmulti read (fn [env key params] key))

;; Default
(defmethod read :default
  [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ v] (find st key)]
      {:value v}
      {:value :not-found})))

(defmethod read :animals/list
  [{:keys [state] :as env} key {:keys [start end]}]
  {:value (subvec (:animals/list @state) start end)})

(defn mutate
  [{:keys [state] :as env} key params]
  (if (= 'increment key)
    {:value  {:keys [:count]}
     :action #(swap! state update-in [:count] inc)}
    {:value :not-found}))

(def my-parser (om/parser {:read read :mutate mutate}))

#_(println (my-parser {:state app-state} [:count :title]))
#_(println (my-parser {:state app-state} '[(increment)]))

(def hello (om/factory HelloWorld))

(def reconciler
  (om/reconciler {:state app-state
                  :parser my-parser}))

(om/add-root! reconciler
              AnimalsList
              (gdom/getElement "app"))
