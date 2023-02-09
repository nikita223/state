export const actionBot = ["Attack", "Defense", "Skip", "Spell"];
export const actionRules = ({
    AttackDefense:[-5, 0],
    DefenseAttack:[0, -5],
    AttackSpell:[-10, -5],
    SpellAttack:[-5, -10],
    SpellDefense:[0, -15],
    DefenseSpell:[-15, 0],
    SkipAttack:[-10, 0],
    AttackSkip:[0, -10],
    SkipDefense:[10, 0],
    DefenseSkip:[0, 10],
    SkipSpell:[-5, 0],
    SpellSkip:[0, -5],
    AttackAttack:[-10, -10],
    SpellSpell:[-15, -15],
    SkipSkip:[10, 10],
    DefenseDefense:[0, 0],
    nonenone:[0, 0]
    })

export const summHP = (HP, rul) => {
    let newHP = HP + rul
    return newHP = HP + rul > 100 ? 100 : HP + rul
    }

export default gameRul; 