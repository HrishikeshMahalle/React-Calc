import React,{useReducer, useEffect} from 'react'

const ACTIONS = {
    MAKE_REQUEST:'make-request',
    GET_DATA: 'get-data',
    ERROR : 'error'
}

function reducer(state, {type, payload}){
    switch(type){
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, jobs:[]}
        case ACTIONS.GET_DATA:
            return {...state, loading: false, jobs: payload.jobs }
        case ACTIONS.ERROR:
            return {...state, loading: false, error: payload.error, jobs:{}}
    }
}

export default function useFetchJobs(params,page) {
    const [state, dispatch] = useReducer(reducer, { jobs:[],
    loading: true,
    })

    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])

    return {
       
    }
}
