import { useState } from 'react'

function App(){
    const [calc, setcalc] = useState("");
    const [ result, setresult ] =useState("");

    const ops =[ '/', '+', '-', '*', '.'];

    const updatecals= value=>{
    
    if(
        ops.includes(value) && calc==='' || ops.includes(value) && ops.includes(calc.slice(-1))
    ){
        return;}
    
    setcalc(calc + value);

    if( !ops.includes(value)){
        setresult(eval(calc + value).toString());
    }
}

    const createdigits=()=>{

        const digits=[]

        for (let i=1; i<10; i++)
        {
        digits.push(
            <button onClick={() => updatecals(i.toString())} key={i}>{i}</button>
        )
    
        }
        return  digits;
    
            
        }
        const calculator =()=>{
            setcalc(eval(calc).toString());
        }

        const delate=()=>{
            if( calc==''){
                return;
            }
            const value=calc.slice(0,-1);
            setcalc(value)


        }
    

  return(
    <div className="App">
    <div className="Cals">
        <div className="display">
           {result ?  <span>{result}</span>: ''} {calc || '0'}
        </div>
        <div className="operator">
            <button onClick={()=>updatecals('/')}>/</button>
            <button onClick={()=>updatecals('+')}>+</button>
            <button onClick={()=>updatecals('-')}>-</button>
            <button onClick={()=>updatecals('*')}>*</button>
            <button onClick={delate}>DEL</button>

        </div>
        <div className="digits">
            {createdigits()}
            <button onClick={()=>updatecals('0')}>0</button>
            <button onClick={()=>updatecals('.')}>.</button>
            <button onClick={calculator}>=</button>
        </div>
        

    </div>
    </div>
  
  );

};
export default App;