import classNames from "classnames";
const maxHP = 100;
const maxDamage = 15;  
const actionBot = ["Attack", "Defense", "Skip", "Spell"];
    
const actions = ({
    Attack:{
        Attack:{
            HP:[-10, -10],
            Score:30
        },
        Defense:{
            HP:[-5, 0],
            Score:-20 
        },
        Spell:{
            HP:[-10, -5],
            Score:30
        },
        Skip:{
            HP:[0, -10],
            Score:70
        }
    },
    Defense:{
        Attack:{
            HP:[0, -5],
            Score:100
        },
        Defense:{
            HP:[0, 0],
            Score:50
        },
        Spell:{
            HP:[-15, 0],
            Score:-50
        },
        Skip:{
            HP:[0, 10],
            Score:50
        } 
    },
    Spell:{
        Attack:{
            HP:[-5, -10],
            Score:30
        },
        Defense:{
            HP:[0, -15],
            Score:150
        },
        Spell:{
            HP:[-15,-15],
            Score:50
         },
        Skip:{
            HP:[0, -5],
            Score:70
        } 
    },
    Skip:{
        Attack:{
            HP:[-10, 0],
            Score:-20
        },
        Defense:{
            HP:[10, 0],
            Score:-25
        },
        Spell:{
            HP:[-5, 0],
            Score:-20
        },
        Skip:{
            HP:[10, 10],
            Score:30
        } 
    },
    none:{
        none:{
            HP:[0, 0],
            Score:0
         }
    }
})
         
    const summHP = (currentHP, editHP) => {
        if(editHP !== 0){
            currentHP = currentHP + editHP >=maxHP ? maxHP : currentHP + editHP;
        }
        return currentHP
    }
   
    const randomGenerateAction = (min = 0, max = actionBot.length - 1) => {
        const index = Math.floor((Math.random() - min) * (max + 1));
        return actionBot[index]
    }
 
    function StatusHeros(role, editHP, score){
        this.role = role
        this.HP = editHP
        this.score = score
        if(editHP > 0){
            this.status = "healing"   
        }
        if(editHP === 0){
            this.status = "Protected"
        }
        if(editHP < 0){
            this.status = "Damage"
        }
       }
      
    function formatTime(time){
        const hours = (time / 3600) > 9 ? parseInt(time / 3600) : "0" + parseInt(time / 3600)
        const minutes = (time % 3600 / 60) > 9 ? parseInt(time % 3600 / 60) : "0" + parseInt(time % 3600 / 60)
        const seconds = (time % 3600 % 60) > 9 ? time % 3600 % 60 : "0" + time % 3600 % 60  
        return String(seconds + ":" + minutes + ":" + hours)
    }

    function comboIf(countAttak, countDefense){
        const newCombo = {
            Attack:{
                value:maxDamage,
                count:countAttak
            },
            Defense:{
                value:0,
                count:countDefense
               }
            }
        return newCombo
    }


    function takeHistoryActions(history){  
        return(
            <div className="actionBar">
            {history.map((element, index) =>(    
                <div key={index}  className="iconsAction">
                <div>{index + 1}</div>
                 <div className={classNames('imgIcon', element)} ></div>
            </div>
                ))
                }    
                </div>
        )
        
    }
export {takeHistoryActions, actionBot, actions, maxHP, maxDamage, StatusHeros, summHP, randomGenerateAction, formatTime, comboIf}