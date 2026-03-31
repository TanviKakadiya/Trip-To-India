const mongoose = require("mongoose");

const preferenceSchema = new mongoose.Schema({
    tripType: {
        type: String,
        required: true,
        enum: ["Solo", "Couple", "Family", "Friends"]
    },
    people: {
        type: Number,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    vibe: [
        {
            type: String,
            enum: [
                "Heritage & Culture",
                "Mountains & Nature",
                "Beaches & Relax",
                "Spiritual / Pilgrim",
                "Adventure"
            ]
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Preference", preferenceSchema);