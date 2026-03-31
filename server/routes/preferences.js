const express = require("express");
const router = express.Router();
const Preference = require("../models/Preference");

// ✅ SAVE FULL QUESTIONNAIRE
router.post("/", async (req, res) => {
    try {
        const { tripType, people, budget, vibe } = req.body;

        // validation
        if (!tripType || !people || !budget || !vibe) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const newPreference = new Preference({
            tripType,
            people,
            budget,
            vibe
        });

        const saved = await newPreference.save();

        res.status(201).json({
            message: "Preferences saved successfully ✅",
            data: saved
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});


// ✅ GET ALL (for testing/admin)
router.get("/", async (req, res) => {
    try {
        const data = await Preference.find().sort({ createdAt: -1 });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// ✅ GET SINGLE (future use)
router.get("/:id", async (req, res) => {
    try {
        const data = await Preference.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;