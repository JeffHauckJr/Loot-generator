import React, { useState } from "react";
import lootTable from '../data/LootTable'
import LootDisplay from "./LootDisplay";

const LootGenerator = () => {
  // TODO: Create a state variable to store generated loot
  const [loot, setLoot] = useState();

  // TODO: Implement a function to randomly select an item from the loot table
  const getLoot = () => {
    const rarity = Object.keys(lootTable);
    const randomRarity = rarity[Math.floor(Math.random() * rarity.length)]
    const items = lootTable[randomRarity];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    return setLoot({ name: randomItem, rarity: randomRarity});
  }
  return (
    <div>
      <button onClick={getLoot}>Generate Loot</button>
      <LootDisplay loot={loot} />
    </div>
  );
};

export default LootGenerator;