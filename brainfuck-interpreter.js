/**
  * # an brainfuck interpreter by liaisonme@hotmail.com
 *
 * @author      zhangxx<20437023@qq.com>
 * @version     1.0
 * @since       1.0
 * Date         19-08-15
 * Time         01:34
 */
let ops=`++++++++++[>+>+++>+++++++>++++++++++<<<<-]>>>++.>+.+++++++..+++.<<++.>+++++++++++++++.>.+++.------.--------.<<+.<.`.split("");
let mem=[0,0,0,0,0,0,0,0,0,0,0,0],ptr=0,pc=0,op=function(){return ops[pc].charCodeAt();},nop=function(){};
let _=[];while(_.length<94){_.push(nop);}
_[43]=function(){mem[ptr]++;};
_[44]=function(){mem[ptr]=prompt().charCodeAt();};
_[45]=function(){mem[ptr]--;};
_[46]=function(){console.log(String.fromCharCode(mem[ptr]));};
_[60]=function(){ptr--;};
_[62]=function(){ptr++;};
_[91]=function(){if(0==mem[ptr])while(93!=op()){pc++;}};
_[93]=function(){if(0!=mem[ptr])while(91!=op()){pc--;}};
while(pc<ops.length){
    _[op()]();
    pc++;
}
