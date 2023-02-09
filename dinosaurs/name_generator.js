var word_parts = [
    [{meaning: "agile" ,word: "agili"}],
    [{meaning: "air" ,word: "aero"}],
    [{meaning: "almond-shaped" ,word: "amygdalo"}],
    [{meaning: "solitary" ,word: "alectro"}],
    [{meaning: "armored" ,word: "plo"}],
    [{meaning: "arrow of" ,pre: "belo"}],
    [{meaning: "backwards" ,word: "au"}],
    [{meaning: "beam" ,word: "doco"}],
    [{meaning: "beautiful" ,word: "bellu"}],
    [{meaning: "begetter" ,post: "sphitys"}],
    [{meaning: "bent" ,word: "angulo"}],
    [{meaning: "bone" ,word: "osteo" ,post: "osteon"}],
    [{meaning: "branch" ,post: "ramus"}],
    [{meaning: "chewer" ,post: "mastacator"},
     {meaning: "eater" ,word: "pappo"}],
    [{meaning: "clubbed" ,word: "bactro"}],
    [{meaning: "coastal" ,word: "actio"}],
    [{meaning: "covered" ,word: "stego"}],
    [{meaning: "crested" ,word: "lopho"}],
    [{meaning: "dawn" ,word: "aurora"}],
    [{meaning: "deceptive" ,word: "apato"}],
    [{meaning: "delicate" ,word: "abro"}],
    [{meaning: "different" ,word: "allo"}],
    [{meaning: "earth" ,word: "aardo"}],
    [{meaning: "elegant" ,word: "compso"}],
    [{meaning: "excavated" ,word: "bothrio"}],
    [{meaning: "false" ,word: "psuedo"}],
    [{meaning: "field" ,word: "agro"}],
    [{meaning: "first" ,pre: "archaeo"},
     {meaning: "before" ,pre: "ante"},
     {meaning: "before" ,pre: "pro"}],
    [{meaning: "flexible" ,word: "campto"}],
    [{meaning: "flower" ,word: "antho"},
     {meaning: "flowing" ,word: "blyso"}],
    [{meaning: "form" ,post: "oides"},
     {meaning: "form" ,word: "physo" ,post: "physis"}],
    [{meaning: "fortress" ,post: "arx"}],
    [{meaning: "frozen" ,word: "cryo"}],
    [{meaning: "furrowed" ,word: "aloco"}],
    [{meaning: "fused" ,word: "ankylo"}],
    [{meaning: "god" ,word: "thescelo"},
     {meaning: "king" ,post: "rex"},
     {meaning: "hunter" ,post: "venator"},
     {meaning: "hunter" ,post: "raatan"},
     {meaning: "mother" ,word: "geo"},
     {meaning: "grandmother" ,word: "avia" ,post: "avia"},
     {meaning: "destroyer" ,post: "versor"}],
    [{meaning: "goose" ,word: "anseri" ,post: "anserus"},
     {meaning: "giraffe" ,word: "giraffa"},
     {meaning: "eagle" ,word: "aquilo" ,post: "aquilus"},
     {meaning: "dragon" ,post: "balaur"},
     {meaning: "dragon" ,word: "draco" ,post: "dracus"},
     {meaning: "crocodile" ,word: "suchio" ,post: "suchius"},
     {meaning: "bull" ,word: "tauro" ,post: "taurus"},
     {meaning: "bird" ,word: "avi"},
     {meaning: "bird" ,word: "ornitho" ,post: "ornis"},
     {meaning: "vulture" ,word: "buitre"},
     {meaning: "lizard" ,word: "sauro" ,post: "saurus"}],
    [{meaning: "great" ,pre: "aga"}],
    [{meaning: "gypsy" ,word: "atsingano"}],
    [{meaning: "heavy" ,word: "baro"}],
    [{meaning: "hero" ,post: "bator"}],
    [{meaning: "horned" ,word: "cerato"}],
    [{meaning: "hollow" ,word: "coelo"},
     {meaning: "open" ,word: "chasmo"}],
    [{meaning: "knobbed" ,word: "nodo"}],
    [{meaning: "living" ,word: "animanto"}],
    [{meaning: "lofty" ,word: "aepi"}],
    [{meaning: "margin" ,word: "margino"}],
    [{meaning: "measured" ,word: "metro"}],
    [{meaning: "carnivorous" ,word: "carno"}],
    [{meaning: "mimicking" ,word: "mimo"},
     {meaning: "mimic" ,post: "mimus"}],
    [{meaning: "mountainous" ,word: "baino"}],
    [{meaning: "near" ,word: "anchi"},
     {meaning: "near" ,word: "para"},
     {meaning: "far" ,word: "adeo"}],
    [{meaning: "noble" ,word: "aristo"}],
    [{meaning: "not" ,pre: "ano"}],
    [{meaning: "both" ,pre: "amphi"}],
    [{meaning: "running" ,word: "dromaeo"}],
    [{meaning: "sanctuary" ,word: "asylo"}],
    [{meaning: "savage" ,word: "atroci"},
     {meaning: "savage" ,word: "torvo"}],
    [{meaning: "scaled" ,word: "pholo"}],
    [{meaning: "scythed" ,word: "therizino"}],
    [{meaning: "shielded" ,word: "pelta"}],
    [{meaning: "small" ,word: "baga"},
     {meaning: "small" ,word: "micro"},
     {meaning: "massive" ,word: "ingeni"},
     {meaning: "short" ,word: "brachy"},
     {meaning: "short" ,word: "brevi"},
     {meaning: "longer" ,word: "masso"},
     {meaning: "big" ,word: "bara"},
     {meaning: "high" ,word: "acro"},
     {meaning: "high" ,word: "alti"}],
    [{meaning: "snout" ,word: "rhino" ,post: "rhinus"},
     {meaning: "snout" ,word: "rostro" ,post: "rostrus"},
     {meaning: "jaw" ,word: "gnatho" ,post: "gnathus"},
     {meaning: "finger" ,word: "dactylo" ,post: "dactyl"},
     {meaning: "thigh" ,word: "mero" ,post: "merus"},
     {meaning: "face" ,post: "ops"},
     {meaning: "claw" ,post: "onyx"},
     {meaning: "claw" ,word: "nycho" ,post: "nychus"},
     {meaning: "leg" ,word: "cneme" ,post: "cneme"},
     {meaning: "leg" ,word: "pa" ,post: "pas"},
     {meaning: "tooth" ,word: "donto" ,post: "don"},
     {meaning: "vertebra" ,word: "splondylo" ,post: "splondylus"},
     {meaning: "arm" ,word: "brachio" ,post: "brachion"},
     {meaning: "foot" ,post: "pes"},
     {meaning: "foot" ,word: "podo" ,post: "podus"},
     {meaning: "hipped" ,word: "ischia"},
     {meaning: "hand" ,word: "cheiro" ,post: "cheirus"},
     {meaning: "head" ,word: "cephalo" ,post: "cephalus"}],
    [{meaning: "northern" ,word: "borealo"},
     {meaning: "southern" ,word: "aoni"}],
    [{meaning: "ponderous" ,word: "brady"},
     {meaning: "speedy" ,word: "veloci"}],
    [{meaning: "spined" ,word: "cantho"},
     {meaning: "spined" ,word: "spino"},
     {meaning: "spiny" ,word: "acantho"}],
    [{meaning: "spring" ,word: "anikso"}],
    [{meaning: "star-shaped" ,word: "astro"}],
    [{meaning: "terrible" ,word: "deino"}],
    [{meaning: "thick" ,word: "pachy"}],
    [{meaning: "one" ,pre: "mono"},
     {meaning: "two" ,pre: "di"},
     {meaning: "three" ,pre: "tri"}],
    [{meaning: "thunderous" ,word: "bronto"},
     {meaning: "thunderous" ,word: "tonitro"}],
    [{meaning: "titanic" ,word: "titano"},
     {meaning: "titan" ,post: "titan"}],
    [{meaning: "thief" ,post: "raptor"},
     {meaning: "robber" ,post: "lestes"}],
    [{meaning: "tyrannous" ,word: "tyranno"},
     {meaning: "tyrant" ,post: "tyrannis"}],
    [{meaning: "from the underworld" ,word: "achero"}],
    [{meaning: "unknown" ,word: "adelo"},
     {meaning: "unknown" ,word: "agno"}],
    [{meaning: "vine" ,word: "ampelo"}],
    [{meaning: "awake" ,word: "abricto"}],
    [{meaning: "wandering" ,word: "aleto"},
     {meaning: "wanderer" ,post: "aletes"}],
    [{meaning: "white" ,pre: "alba"},
     {meaning: "rainbow-colored" ,pre: "arcu"},
     {meaning: "silver" ,pre: "argyro"}],
    [{meaning: "winged" ,word: "ptero"},
     {meaning: "wing" ,word: "pterus"}],
    [{meaning: "wonderous" ,word: "thauma"}]
].flatMap((group, index) => {
    group.forEach(part => part.group_id = index);
    return group;
});

function rand(x) {
    return Math.floor(Math.random() * x);
}

function get_first_part() {
    var filtered = word_parts.filter(part => part.pre || part.word);
    return filtered[rand(filtered.length)];
}

function get_second_part(first_part) {
    if (rand(2) === 1) {
        return {meaning: '', word: ''};
    }
    var filtered = word_parts.filter(part => part.word && part.group_id != first_part.group_id);
    return filtered[rand(filtered.length)];
}

function get_last_part(first_part, second_part) {
    var filtered = word_parts.filter(part => part.post
        && part.group_id != first_part.group_id
        && part.group_id != second_part.group_id);
    return filtered[rand(filtered.length)];
}

function build_name() {
    var first_part = get_first_part();
    var second_part = get_second_part(first_part);
    var last_part = get_last_part(first_part, second_part);

    document.getElementById("meaning").textContent = `${first_part.meaning} ${second_part.meaning} ${last_part.meaning}`;
    document.getElementById("name").textContent = `${first_part.pre || first_part.word}${second_part.word}${last_part.post}`
}

// (defn distinct-group [coll]
//     (let [step (fn step [xs seen]
//                  (lazy-seq
//                   ((fn [[x :as xs] seen]
//                      (when-let [s (seq xs)]
//                        (let [fx (:group x)]
//                          (if (contains? seen fx)
//                            (recur (rest s) seen)
//                            (cons x (step (rest s) (conj seen fx)))))))
//                    xs seen)))]
//       (step coll #{})))

//   (defn make-name-list []
//     (let [length (+ 1 (rand-int 2))
//           ;; TODO: make use of :pre words
//           words (->> word_parts
//                      (filter :word)
//                      shuffle
//                      distinct-group
//                      (take length))
//           post (->> word_parts
//                       (filter (every-pred (let [groups (set (map :group words))]
//                                             (fn [x] (not (groups (:group x)))))
//                                           (complement (set words))
//                                           :post))
//                       rand-nth)]
//       (conj (mapv (fn [word] (dissoc word :post))
//                   words)
//             (dissoc post :word))))

//   (defn print-name []
//     (let [name-list (make-name-list)]
//       (println (str/capitalize (str/join (map (some-fn :word :post) name-list)))
//                " - " (str/join " " (map :meaning name-list)))))
