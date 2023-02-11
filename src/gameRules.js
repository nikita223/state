 
    const actionBot = ["Attack", "Defense", "Skip", "Spell"];
    const actionRules = ({
       AttackDefense:[[-5, -20], 0],
       DefenseAttack:[[0, 100], -5],
       AttackSpell:[[-10, 30], -5],
       SpellAttack:[[-5, 30], -10],
       SpellDefense:[[0, 150], -15],
       DefenseSpell:[[-15, -50], 0],
       SkipAttack:[[-10, -20], 0],
       AttackSkip:[[0, 70], -10],
       SkipDefense:[[10, -25], 0],
       DefenseSkip:[[0, 50], 10],
       SkipSpell:[[-5, -20], 0],
       SpellSkip:[[0, 70], -5],
       AttackAttack:[[-10, 30], -10],
       SpellSpell:[[-15, 50], -15],
       SkipSkip:[[10, 30], 10],
       DefenseDefense:[[0, 50], 0],
       nonenone:[[0, 0], 0]
   })
   
       const maxHP = 100;
       
       const summHP = (HP, rul) => {
           return HP + rul >= maxHP ? maxHP : HP + rul 
       }
   
       function randomGenerateAction(min = 0, max = actionBot.length - 1){
           const index = Math.floor((Math.random() - min) * (max + 1));
           return actionBot[index]
       }
 
 

export {actionBot, actionRules, maxHP, summHP, randomGenerateAction}