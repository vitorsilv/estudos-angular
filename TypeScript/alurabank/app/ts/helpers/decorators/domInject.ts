export function domInject(seletor: string){

    return (target: any, key: string) => {

        let elemento: JQuery;

        const getter = () => {
            if(!elemento){
                console.log(`buscando ${seletor} para injetar em ${key}`)
                elemento = $(seletor);
            }
            return elemento;
        }

        Object.defineProperty(target, key, {
            get: getter
        });


    }
}