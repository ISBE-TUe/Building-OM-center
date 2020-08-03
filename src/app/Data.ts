export interface Data {
    head: {vars: Array<string>},
    results:{bindings: Array<
        {p:{
        type: string,
        value:string,
        },
        o:{
        type: string,
        value:string,
        }}>
    }
}
       