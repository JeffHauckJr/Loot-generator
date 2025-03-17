import React from "react";


const rarityColors = {
    common: "gray",
    uncommon: "green",
    rare: "blue",
    legendary: "gold",
  };

const LootDisplay = ({loot}) => {
    if(!loot) return null

    return (
    <div>
        <h3 style={{ color: rarityColors[loot.rarity] }}>{loot.name}</h3>
    </div>
    )
}


export default LootDisplay;