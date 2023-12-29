export function initGooglePlacesAutocomplete(elementId, callback) {
    const addressInput = document.getElementById(elementId);

    const autoCompleteOptions = {
        // componentRestrictions: { country: "IN" },
        fields: [
            "address_components",
            "name",
            "formatted_address",
            "geometry",
            "place_id",
            "plus_code",
        ],
    };
    const placesConfig = new window.google.maps.places.Autocomplete(
        addressInput,
        autoCompleteOptions
    );

    window.google.maps.event.addListener(
        placesConfig,
        "place_changed",
        callback.bind(null, placesConfig)
    );
}
