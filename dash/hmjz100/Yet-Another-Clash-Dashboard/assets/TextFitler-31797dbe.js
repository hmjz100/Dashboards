import{r as f,R as y,aA as C,aB as m,c as S,b as R,x as V}from"./index-55fe7310.js";import{R as E}from"./rotate-cw-48d5ff0c.js";import{d as k}from"./debounce-c1ba2006.js";const D=f.createContext(void 0);function A(t){const e=f.useContext(D);return(t==null?void 0:t.store)||e||C()}const x=t=>typeof(t==null?void 0:t.then)=="function",w=t=>{t.status||(t.status="pending",t.then(e=>{t.status="fulfilled",t.value=e},e=>{t.status="rejected",t.reason=e}))},T=y.use||(t=>{if(t.status==="pending")throw t;if(t.status==="fulfilled")return t.value;throw t.status==="rejected"?t.reason:(w(t),t)}),h=new WeakMap,_=(t,e,o)=>{const n=m(t)[26];let r=h.get(e);return r||(r=new Promise((d,g)=>{let c=e;const l=s=>b=>{c===s&&d(b)},u=s=>b=>{c===s&&g(b)},a=()=>{try{const s=o();x(s)?(h.set(s,r),c=s,s.then(l(s),u(s)),n(t,s,a)):d(s)}catch(s){g(s)}};e.then(l(e),u(e)),n(t,e,a)}),h.set(e,r)),r};function G(t,e){const{delay:o,unstable_promiseStatus:i=!y.use}=e||{},n=A(e),[[r,d,g],c]=f.useReducer(u=>{const a=n.get(t);return Object.is(u[0],a)&&u[1]===n&&u[2]===t?u:[a,n,t]},void 0,()=>[n.get(t),n,t]);let l=r;if((d!==n||g!==t)&&(c(),l=n.get(t)),f.useEffect(()=>{const u=n.sub(t,()=>{if(i)try{const a=n.get(t);x(a)&&w(_(n,a,()=>n.get(t)))}catch{}if(typeof o=="number"){console.warn(`[DEPRECATED] delay option is deprecated and will be removed in v3.

Migration guide:

Create a custom hook like the following.

function useAtomValueWithDelay<Value>(
  atom: Atom<Value>,
  options: { delay: number },
): Value {
  const { delay } = options
  const store = useStore(options)
  const [value, setValue] = useState(() => store.get(atom))
  useEffect(() => {
    const unsub = store.sub(atom, () => {
      setTimeout(() => setValue(store.get(atom)), delay)
    })
    return unsub
  }, [store, atom, delay])
  return value
}
`),setTimeout(c,o);return}c()});return c(),u},[n,t,o,i]),f.useDebugValue(l),x(l)){const u=_(n,l,()=>n.get(t));return i&&w(u),T(u)}return l}function p(t,e){const o=A(e);return f.useCallback((...n)=>o.set(t,...n),[o,t])}const P="_rotate_1dspl_1",B="_isRotating_1dspl_5",F="_rotating_1dspl_1",v={rotate:P,isRotating:B,rotating:F};function H({isRotating:t}){const e=S(v.rotate,{[v.isRotating]:t});return R("span",{className:e,children:R(E,{width:16})})}const{useCallback:M,useState:j,useMemo:O}=V;function I(t){const e=p(t),[o,i]=j(""),n=O(()=>k(e,300),[e]);return[M(d=>{i(d.target.value),n(d.target.value)},[n]),o]}const L="_input_uqa0o_1",N={input:L};function U(t){const[e,o]=I(t.textAtom);return R("input",{className:N.input,type:"text",value:o,onChange:e,placeholder:t.placeholder})}export{H as R,U as T,G as u};
