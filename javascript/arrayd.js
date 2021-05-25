let act=[['work',9],['eat',7],['lunch',10],['study',11],['sleep',8]];
//console.log(act);
/*console.log(act[2][1]);
//----- adding 



act.push(["programming",2]);
//console.log(act);




act.splice(1,0,['coding',18]);
console.log(act);
*/
// percentage of hours 
act.forEach(act=>
    {
        let percentage=((act[1]/24)*100).toFixed(2)
        act[2]=percentage +" %";
    })
    console.log(act);

for(let i=0;i<act.length;i++)
{
    var innerArraylength=act[i].length;
    for(let j=0;j<innerArraylength;j++)
    {
        console.log('['+i+","+j+"] ="+act[i][j]);
    }
}
act.forEach((act)=>{
    act.forEach((data)=>{
        console.log(data);
    })
})
    