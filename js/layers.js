addLayer("p", {
    name: "Black Cats", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "BC", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#716e6d",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Black Cats", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "B: Reset for Black Cats", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {  11: {  title: "Duble Cats!",
    description: "Double your point gain.",
    cost: new Decimal(1),

    },  
    12: {    title: "Fat black cats",
    description: "Get more points by your black cats!",
    cost: new Decimal(3),
    effect() {
        return player[this.layer].points.add(1).pow(0.5)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect

    },
    13: {title: "Black cat in the Air!",
    description: "Cats boost black cat gain.",
    cost: new Decimal(5),
    effect() {
        return player.points.add(1).pow(0.15)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
    },
    },
    
    
})
