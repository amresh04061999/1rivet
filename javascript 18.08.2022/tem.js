var array = {
"contact":{
    "fr":"value",
    "en":"value2",
    "es":"value3"
    },
"presentation":{
    "fr":"value",
    "en":"value2"
    },

}

for(first in array) {
    if (first == "contact") {
        // array.contact exists
        for(k in array.presentation) {
             // k being key
             var thisValue = array.presentation[k];
             console.log(thisValue);
        }
    }
}