//usado no componente de productCard e mais alguns.

export function truncateString(str: string, max: number) { 
    return str.length > max ? str.slice(0, max) + "..." : str;
}

//exercicios 10 e 12 usaram essa função.

export function formatarTelefone(telefone: string) {
    if (telefone.length !== 11) {
        return telefone;
    }

    const formatado =
        "(" +
        telefone.slice(0, 2) +
        ") " +
        telefone.slice(2, 7) +
        "-" +
        telefone.slice(7);
            
    return formatado
}