import { useEffect, useRef } from "react";

const areEqual = (prevDeps, newDeps) => {
    if(prevDeps === null) return false;
    if(prevDeps.length != newDeps.length) return false;

    for(let i = 0; i<prevDeps.length; i++)
    {
        if(prevDeps[i]!=newDeps[i])
            return false;
    }

    return true;
}

const useCustomMemo = (callback, deps) => {
    const cachedMemoRef = useRef(null);

    if(!cachedMemoRef.current || !areEqual(cachedMemoRef.current.deps, deps))
    {
        cachedMemoRef.current = {
            value: callback(),
            deps
        }
    }

    //cleanup logic

    useEffect(() => {
        return () => {
            cachedMemoRef.current = null;
        }
    }, []); 

    //return 
    return cachedMemoRef.current.value;
}

export default useCustomMemo;